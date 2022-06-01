import {
  getAuthLoginAction,
  getAuthRegisterAction,
  getAuthFailedAction,
  getAuthSuccessAction,
} from "../actions/user-auth";
import { DATA_FETCH, URL_USER_AUTH } from "../../utils/data";
import { setAccessToken } from "../../utils/functions";
import { checkResponse } from "./checkResponse";
import { History } from "history";
import { TNewData, AppDispatch, AppThunk } from "../types/types";

type TRes = {
  accessToken: string;
  refreshToken: string;
  success: boolean;
  user: { email: string; name: string };
};
type TReplace = (pathname: { pathname: string }, state?: { revert: string }) => void;

export const userAuthLogin: AppThunk =
  (replace: TReplace, newData: { name?: string }, revert: string) => (dispatch: AppDispatch) => {
    dispatch(getAuthLoginAction());
    fetch(`${URL_USER_AUTH}/login`, {
      ...DATA_FETCH,
      body: JSON.stringify(newData),
    })
      .then((res) => checkResponse<TRes>(res))
      .then((res) => {
        setAccessToken(res.accessToken);
        localStorage.setItem("refreshToken", res.refreshToken);
        dispatch(getAuthSuccessAction(res.user.name, res.user.email));
        replace({ pathname: revert });
      })
      .catch((e) => {
        console.log("упс... ошибка function userAuthLogin :(", e);
        dispatch(getAuthFailedAction());
      })
      .finally(() => {});
  };

export const userAuthRegister: AppThunk =
  (history: History<unknown>, newData: Omit<TNewData, "token">) => (dispatch: AppDispatch) => {
    dispatch(getAuthLoginAction());
    fetch(`${URL_USER_AUTH}/register`, {
      ...DATA_FETCH,
      body: JSON.stringify(newData),
    })
      .then((res) => checkResponse<TRes>(res))
      .then((user) => {
        setAccessToken(user.accessToken);
        localStorage.setItem("refreshToken", user.refreshToken);
        dispatch(getAuthRegisterAction(user.user.name, user.user.email));
        history.replace({ pathname: "/" });
      })
      .catch((e) => {
        console.log("упс... ошибка function userAuthRegister :(", e);
        dispatch(getAuthFailedAction());
      });
  };
