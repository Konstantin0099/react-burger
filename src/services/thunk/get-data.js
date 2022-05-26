import { GET_DATA, GET_DATA_SUCCESS, GET_DATA_FAILED } from "../actions/burger-ingredients";
import { baseUrl } from "../../utils/data";
import { checkResponse } from "./checkResponse";

const URL_INGREDIENTS = `${baseUrl}/ingredients`;

export function getData() {
  return function (dispatch) {
    // console.log("getData", dispatch)
    dispatch({ type: GET_DATA });
    fetch(`${URL_INGREDIENTS}`)
      .then(checkResponse)
      .then((productData) => {
        // console.log("productData.data=", productData.data);
        dispatch({ type: GET_DATA_SUCCESS, data: productData.data });
      })
      .catch((e) => {
        console.log("упс... ошибка function getData:(  >>>", e, "<<<end");
        dispatch({ type: GET_DATA_FAILED });
      });
  };
}
