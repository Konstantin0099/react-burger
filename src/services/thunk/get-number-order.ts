import { getNumberFailedAction, getNumberAction, getNumberSuccessAction } from "../actions/burger-constructor";
import { baseUrl } from "../../utils/data";
import { checkResponse } from "./checkResponse";
import { IItem } from "../actions";
import { getToken } from "../thunk/get-token";
import { timeToken } from "../../utils/functions";
import { AppDispatch, AppThunk } from "../types/types";
import { TGetNumber } from "../types/data";

const URL_ORDER = `${baseUrl}/orders`;

export const getNumber: AppThunk = (dataOrder: Array<IItem>) => (dispatch: AppDispatch) => {
    const arrDataID = dataOrder.map((el) => {
    return el._id;
  });
    dispatch(getNumberAction());
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
        dispatch(getNumberSuccessAction(order.order.number));
      })
      .catch((e) => {
        console.log("getNumber ошибка ", e);
        dispatch(getNumberFailedAction());
      })
  };

