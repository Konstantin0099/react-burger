import {
  AUTH_FAILED,
  GET_USER,
} from "../actions/user-auth";
import {GET_DATA, URL_USER_AUTH} from "../../utils/data";
import { checkResponse } from "./checkResponse";

export function getDataUser() {
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
      })
      .catch((e) => {
        console.log("упс... ошибка в function getDataUser:(", e);
        dispatch({ type: AUTH_FAILED });
      });
  };
}
export function setDataUser(history, newData) {
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
      body: JSON.stringify(newData),
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
    })
    .then(checkResponse)
    .then((user) => {
      history.replace({ pathname: '/'});
      dispatch({ type: GET_USER, user: user });
      })
      .catch((e) => {
        console.log("упс... ошибка в function setDataUser :(", e);
      });
  };
}