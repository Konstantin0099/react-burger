import {
  AUTH_LOGIN,
  AUTH_REGISTER,
  AUTH_FAILED,
  AUTH_SUCCESS,
} from "../actions/user-auth";
import { DATA_FETCH, URL_USER_AUTH} from "../../utils/data";
import { checkResponse } from "./checkResponse";
// type TUserAuthLogin = (history: History<unknown>, newData: {string: string}, revert: string)
export function userAuthLogin(history, newData, revert) {
  return function (dispatch) {
    dispatch({ type: AUTH_LOGIN });
    fetch(`${URL_USER_AUTH}/login`, {
      ...DATA_FETCH,
      body: JSON.stringify(newData),
    })
      .then(checkResponse)
      .then((user) => {
        localStorage.setItem("accessToken", user.accessToken);
        localStorage.setItem("refreshToken", user.refreshToken);
        // console.log("user=", user);
        dispatch({ type: AUTH_SUCCESS, name: user.user.name, email: user.user.email });
        history.replace({ pathname: revert});
      })
      .catch((e) => {
        console.log("упс... ошибка function userAuthLogin :(", e);
        dispatch({ type: AUTH_FAILED });
      });
  };
}

export function userAuthRegister(history, newData) {
  return function (dispatch) {
    dispatch({ type: AUTH_LOGIN });
    fetch(`${URL_USER_AUTH}/register`, {
      ...DATA_FETCH,
      body: JSON.stringify(newData),
    })
      .then(checkResponse)
      .then((user) => {
        localStorage.setItem("accessToken", user.accessToken);
        localStorage.setItem("refreshToken", user.refreshToken);
        dispatch({ type: AUTH_REGISTER, user: user.user.name, user: user.user.email});
        history.replace({ pathname: '/'});
      })
      .catch((e) => {
        console.log("упс... ошибка function userAuthRegister :(", e);
        dispatch({ type: AUTH_FAILED });
      });
  };
}

