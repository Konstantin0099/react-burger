import {
  AUTH_TOKEN,
  AUTH_FAILED,
  GET_USER
} from "../actions/user-auth";
import { SET_DATA, GET_DATA, URL_USER_AUTH, bodyToken } from "../../utils/data";
import { checkResponse } from "./checkResponse";

export function getDataUser() {
  let timeToken = ((new Date().getTime()- localStorage.getItem("timeAccessToken"))>1140000);
  // console.log("timeToken", timeToken);
  return function (dispatch) {
    fetch(`${URL_USER_AUTH}/user`, {
      ...GET_DATA,
      headers: {
        ...GET_DATA.headers,
        Authorization: localStorage.getItem("accessToken"),
      },
    })
      .then(checkResponse)
      .then((user) => {
        dispatch({ type: GET_USER, user: user });
        // console.log("getDataUser user.name=", user.user.name);
      })
      .catch((e) => {
        console.log("упс... ошибка в function getDataUser:(", e);
        dispatch({ type: AUTH_FAILED });
      });
  };
}
export function setDataUser(history) {
  return function (dispatch) {
    fetch(`${URL_USER_AUTH}/user`, {
      method: 'PATCH',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        "authorization": localStorage.getItem("accessToken"),
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: "Вова",
        password: "mas12345678",
      }),
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
  })
      .then(checkResponse)
      .then((user) => {
        dispatch({ type: GET_USER, user: user });
        history.replace({ pathname: '/'});
      })
      .catch((e) => {
        console.log("упс... ошибка в function setDataUser :(", e);
      });
  };
}