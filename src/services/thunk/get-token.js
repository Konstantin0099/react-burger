import { AUTH_TOKEN, AUTH_FAILED, AUTH_LOGIN } from "../actions/user-auth";
import { DATA_FETCH, URL_USER_AUTH } from "../../utils/data";
import { checkResponse } from "./checkResponse";

export function getToken() {
  console.log("getToken")
  return function (dispatch) {
    // dispatch({ type: AUTH_LOGIN });
    fetch(`${URL_USER_AUTH}/token`, {
      ...DATA_FETCH,
      body: JSON.stringify({
        token: localStorage.getItem("refreshToken"),
      }),
    })
      .then(checkResponse)
      .then((res) => {
        dispatch({ type: AUTH_TOKEN, token: res });
      })
      .catch((e) => {
        console.log("упс... ошибка в function getToken():(", e);
        dispatch({ type: AUTH_FAILED });
      });
  };
}
