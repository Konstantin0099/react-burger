import { AUTH_TOKEN, AUTH_FAILED } from "../actions/user-auth";
import { DATA_FETCH, URL_USER_AUTH } from "../../utils/data";
import { AppDispatch } from "../types/types";
import { checkResponse } from "./checkResponse";
import { setAccessToken } from "../../utils/functions";

export type TGetToken = {
  "success": boolean;
  "accessToken": string;
  "refreshToken": "";
} 
export function getToken() {
  return function (dispatch: AppDispatch) {
    fetch(`${URL_USER_AUTH}/token`, {
      ...DATA_FETCH,
      body: JSON.stringify({
        token: localStorage.getItem("refreshToken"),
      }),
    })
      .then((res) => checkResponse<TGetToken>(res))
      .then((res) => {
        setAccessToken(res.accessToken);
        localStorage.setItem("refreshToken", res.refreshToken);
        dispatch({ type: AUTH_TOKEN });
        return true;
      })
      .catch((e) => {
        console.log("упс... ошибка в function getToken():(", e);
        dispatch({ type: AUTH_FAILED });
        return false;
      });
  };
}
