import {
  GET_DATA,
  GET_DATA_SUCCES,
  GET_DATA_FAILED,
} from "../actions/burger-ingredients";
import { baseUrl } from "../../utils/data"
import {checkResponse} from "./checkResponse"




const URL_INGREDIENTS = `${baseUrl}/ingredients`;

export function getData() {
  return function (dispatch) {
    dispatch({ type: GET_DATA });
    fetch(`${URL_INGREDIENTS}`)
      .then(checkResponse)
      .then((productData) => {
        dispatch({ type: GET_DATA_SUCCES, data: productData.data });
      })
      .catch((e) => {
        console.log("упс... ошибка :(", e);
        dispatch({ type: GET_DATA_FAILED });
      });
  };
}

