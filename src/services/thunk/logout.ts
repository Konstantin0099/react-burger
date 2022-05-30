import { AUTH_FAILED, AUTH_LOGOUT } from "../actions/user-auth";
import { DATA_FETCH, URL_USER_AUTH } from "../../utils/data";
import { checkResponse } from "./checkResponse";
import { History } from "history";
import { AppDispatch } from "../types/types";
import {TLogout } from "../types/data";


export function logout(history: History<unknown>, direction: {pathname: string}) {
  return function (dispatch: AppDispatch) {
    fetch(`${URL_USER_AUTH}/logout`, {
      ...DATA_FETCH,
      body: JSON.stringify({
        token: localStorage.getItem("refreshToken"),
      }),
    })
      .then((res) => checkResponse<TLogout>(res))
      .then((user) => {
        localStorage.setItem("accessToken", "");
        localStorage.setItem("refreshToken", "");
        dispatch({ type: AUTH_LOGOUT });
        history.replace(direction);
      })
      .catch((e) => {
        console.log("упс... ошибка function logout :(", e);
        dispatch({ type: AUTH_FAILED });
      });
  };
}
