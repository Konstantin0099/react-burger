import { AUTH_FAILED, AUTH_LOGOUT } from "../actions/user-auth";
import { DATA_FETCH, URL_USER_AUTH } from "../../utils/data";
import { checkResponse } from "./checkResponse";


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
