import { AUTH_LOGIN, AUTH_REGISTER, AUTH_FAILED, AUTH_SUCCESS } from "../actions/user-auth";
import { DATA_FETCH, URL_USER_AUTH } from "../../utils/data";
import { timeToken, setAccessToken } from "../../utils/functions";
import { checkResponse } from "./checkResponse";
import { History } from "history";
import { TNewData, TDispatch, AppDispatch } from "../types/types";

type TRes = {
  accessToken: string;
  refreshToken: string;
  success: boolean;
  user: { email: string; name: string };
};
type TReplace = (pathname: { pathname: string }, state?: { revert: string }) => void;

export function userAuthLogin(replace: TReplace, newData: { name?: string }, revert: string) {
  return function (dispatch: AppDispatch) {
    dispatch({ type: AUTH_LOGIN });
    fetch(`${URL_USER_AUTH}/login`, {
      ...DATA_FETCH,
      body: JSON.stringify(newData),
    })
      .then((res) => checkResponse<TRes>(res))
      .then((res) => {
        setAccessToken(res.accessToken);
        localStorage.setItem("refreshToken", res.refreshToken);
        dispatch({ type: AUTH_SUCCESS, name: res.user.name, email: res.user.email });
        replace({ pathname: revert });
      })
      .catch((e) => {
        console.log("упс... ошибка function userAuthLogin :(", e);
        dispatch({ type: AUTH_FAILED });
      })
      .finally(() => {
      });
  };
}

export function userAuthRegister(history: History<unknown>, newData: Omit<TNewData, "token">) {
  return function (dispatch: AppDispatch) {
    dispatch({ type: AUTH_LOGIN });
    fetch(`${URL_USER_AUTH}/register`, {
      ...DATA_FETCH,
      body: JSON.stringify(newData),
    })
      .then((res) => checkResponse<TRes>(res))
      .then((user) => {
        setAccessToken(user.accessToken);
        localStorage.setItem("refreshToken", user.refreshToken);
        dispatch({ type: AUTH_REGISTER, name: user.user.name, email: user.user.email });
        history.replace({ pathname: "/" });
      })
      .catch((e) => {
        console.log("упс... ошибка function userAuthRegister :(", e);
        dispatch({ type: AUTH_FAILED });
      });
  };
}
