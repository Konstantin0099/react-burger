import {
  GET_NUMBER,
  GET_NUMBER_SUCCES,
  GET_NUMBER_FAILED,
} from "../actions/burger-constructor";

const URL_ORDER = "https://norma.nomoreparties.space/api/orders";

export function getNumber(dataOrder) {
  const arrDataID = dataOrder.map((el) => {
    return el._id;
  });
  // console.log("getNumber  arrDataID",  arrDataID);
  
  return function (dispatch) {
    dispatch({ type: GET_NUMBER });
    fetch(`${URL_ORDER}`, {
      method: "POST",
      body: JSON.stringify({
        ingredients: arrDataID,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      })
      .then((order) => {
        // console.log("ответ с сервера", order.order.number);
        dispatch({ type: GET_NUMBER_SUCCES, number: order.order.number });
        // dispatch({ type: OPEN_POPUP_ORDER });
      })
      .catch((e) => {
        console.log("catch ошибка ", e);
        dispatch({ type: GET_NUMBER_FAILED });
      });
  };
}
