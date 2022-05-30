import { GET_NUMBER, GET_NUMBER_SUCCESS, GET_NUMBER_FAILED } from "../actions/burger-constructor";
import { baseUrl } from "../../utils/data";
import { checkResponse } from "./checkResponse";
import { IItem } from "../actions";
import { getToken } from "../thunk/get-token";
import { timeToken } from "../../utils/functions";
import { AppDispatch } from "../types/types";
import { TGetNumber } from "../types/data";

const URL_ORDER = `${baseUrl}/orders`;

export function getNumber(dataOrder: Array<IItem>) {
  const arrDataID = dataOrder.map((el) => {
    return el._id;
  });

  return function (dispatch: AppDispatch) {
    dispatch({ type: GET_NUMBER });
    timeToken() && getToken();
    fetch(`${URL_ORDER}`, {
      method: "POST",
      body: JSON.stringify({
        ingredients: arrDataID,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        authorization: localStorage.getItem("accessToken") + "",
      },
    })
      .then((res) => checkResponse<TGetNumber>(res))
      .then((order) => {
        dispatch({ type: GET_NUMBER_SUCCESS, number: order.order.number });
      })
      .catch((e) => {
        console.log("getNumber ошибка ", e);
        dispatch({ type: GET_NUMBER_FAILED });
      })
  };
}
