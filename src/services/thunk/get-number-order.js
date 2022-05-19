import { GET_NUMBER, GET_NUMBER_SUCCESS, GET_NUMBER_FAILED } from "../actions/burger-constructor";
import { baseUrl } from "../../utils/data";
import { checkResponse } from "./checkResponse";

const URL_ORDER = `${baseUrl}/orders`;

export function getNumber(dataOrder) {
  const arrDataID = dataOrder.map((el) => {
    return el._id;
  });
  return function (dispatch) {
    dispatch({ type: GET_NUMBER });
    fetch(`${URL_ORDER}`, {
      method: "POST",
      body: JSON.stringify({
        ingredients: arrDataID,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        authorization: localStorage.getItem("accessToken"),
      },
    })
      .then(checkResponse)
      .then((order) => {
        dispatch({ type: GET_NUMBER_SUCCESS, number: order.order.number });
      })
      .catch((e) => {
        console.log("catch ошибка ", e);
        dispatch({ type: GET_NUMBER_FAILED });
      });
  };
}
