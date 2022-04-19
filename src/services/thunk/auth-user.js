import {
  AUTH_LOGIN,
  AUTH_REGISTER,
  AUTH_FAILED,
  AUTH_SUCCESS,
} from "../actions/user-auth";
import { DATA_FETCH, URL_USER_AUTH, bodyLogin } from "../../utils/data";
import { checkResponse } from "./checkResponse";

//   const baseUrl = 'https://norma.nomoreparties.space/api';  JSON.stringify
// POST https://norma.nomoreparties.space/api/auth/logout - эндпоинт для выхода из системы.
// POST https://norma.nomoreparties.space/api/auth/token - эндпоинт обновления токена.

export function userAuthLogin(history, newData) {
  // console.log("newData", newData);
  return function (dispatch) {
    dispatch({ type: AUTH_LOGIN });

    fetch(`${URL_USER_AUTH}/login`, {
      ...DATA_FETCH,
      body: JSON.stringify(bodyLogin),
    })
      .then(checkResponse)
      .then((user) => {
        // console.log("изменение токена");
        dispatch({ type: AUTH_SUCCESS, user: user });
        history.replace({ pathname: '/'});
      })
      .catch((e) => {
        console.log("упс... ошибка function userAuthLogin :(", e);
        dispatch({ type: AUTH_FAILED });
      });
  };
}

export function userAuthRegister(history) {
    // console.log("body",{ ...bodyLogin, name: "Павка" });
  return function (dispatch) {
    dispatch({ type: AUTH_LOGIN });
    fetch(`${URL_USER_AUTH}/register`, {
      ...DATA_FETCH,
      body: JSON.stringify({ ...bodyLogin, name: "Павка" }),
    })
      .then(checkResponse)
      .then((user) => {
        console.log("изменение токена");
        dispatch({ type: AUTH_REGISTER, user: user });
        history.replace({ pathname: '/'});
      })
      .catch((e) => {
        console.log("упс... ошибка function userAuthRegister :(", e);
        dispatch({ type: AUTH_FAILED });
      });
  };
}

