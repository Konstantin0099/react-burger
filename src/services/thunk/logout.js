import { AUTH_TOKEN, AUTH_FAILED, AUTH_LOGOUT } from "../actions/user-auth";
import { DATA_FETCH, URL_USER_AUTH, bodyToken } from "../../utils/data";
import { checkResponse } from "./checkResponse";

//   const baseUrl = 'https://norma.nomoreparties.space/api';  JSON.stringify
// POST https://norma.nomoreparties.space/api/auth/logout - эндпоинт для выхода из системы.

export function logout(history, direction) {
  return function (dispatch) {
    fetch(`${URL_USER_AUTH}/logout`, {
      ...DATA_FETCH,
      body: JSON.stringify({
        token: localStorage.getItem("refreshToken"),
      }),
    })
      .then(checkResponse)
      .then((user) => {
        dispatch({ type: AUTH_LOGOUT, token: user });
        history.replace(direction);
      })
      .catch((e) => {
        console.log("упс... ошибка function logout :(", e);
        dispatch({ type: AUTH_FAILED });
      });
  };
}
