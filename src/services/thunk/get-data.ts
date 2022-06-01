import { getGetDataAction, getGetDataSuccessAction, getGetDataFailedAction } from "../actions/burger-ingredients";
import { baseUrl } from "../../utils/data";
import { checkResponse } from "./checkResponse";
import { AppDispatch, AppThunk } from "../types/types";
import { TGetData } from "../types/data";
const URL_INGREDIENTS = `${baseUrl}/ingredients`;


export const getData: AppThunk = () => (dispatch: AppDispatch) => {
  dispatch(getGetDataAction());
  fetch(`${URL_INGREDIENTS}`)
    .then((res) => checkResponse<TGetData>(res))
    .then((productData) => {
      dispatch(getGetDataSuccessAction(productData.data));
    })
    .catch((e) => {
      console.log("упс... ошибка function getData:(  >>>", e, "<<<end");
      dispatch(getGetDataFailedAction());
    });
};
