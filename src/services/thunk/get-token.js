import { AUTH_TOKEN, AUTH_FAILED } from "../actions/user-auth";
import { DATA_FETCH, URL_USER_AUTH } from "../../utils/data";
import { checkResponse } from "./checkResponse";

export function getToken() {
  // console.log("getToken refreshToken>>", localStorage.getItem("refreshToken"));
  return function (dispatch) {
    // console.log("getToken start refreshToken=", bodyToken);
    fetch(`${URL_USER_AUTH}/token`, {
      ...DATA_FETCH,
      body: JSON.stringify({
        token: localStorage.getItem("refreshToken"),
      }),
    })
      .then(checkResponse)
      .then((res) => {
        // console.log("getToken изменение токена", res);
        dispatch({ type: AUTH_TOKEN, token: res });
        //   history.replace({ pathname: '/'});
      })
      .catch((e) => {
        console.log("упс... ошибка в function getToken():(", e);
        dispatch({ type: AUTH_FAILED });
      });
  };
}
