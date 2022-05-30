import { AUTH_FAILED, GET_USER } from "../actions/user-auth";
import { GET_DATA, URL_USER_AUTH } from "../../utils/data";
import { timeToken } from "../../utils/functions";
import { getToken } from "../../services/thunk/get-token";
import { checkResponse } from "./checkResponse";
import { TNewData, AppDispatch } from "../types/types";

type TGetDataUser = {
  success: boolean;
  user: { email: string; name: string };
};

const fetchAsync = async () => {
  timeToken() && (await getToken());
  const res = await fetch(`${URL_USER_AUTH}/user`, {
    ...GET_DATA,
    headers: {
      ...GET_DATA.headers,
      Authorization: localStorage.getItem("accessToken") + "",
    },
  });
  return res;
};
export function getDataUser() {
  return function (dispatch: AppDispatch): Promise<void> {
    return fetchAsync()
      .then((res) => {
        return checkResponse<TGetDataUser>(res);
      })
      .then((res) => {
        dispatch({ type: GET_USER, name: res.user.name, email: res.user.email });
      })
      .catch((e) => {
        console.log("упс... ошибка в function getDataUser:(", e);
        dispatch({ type: AUTH_FAILED });
      });
  };
}

export function setDataUser(set: () => void, newData: Omit<TNewData, "token">) {
  return function (dispatch: AppDispatch) {
    fetch(`${URL_USER_AUTH}/user`, {
      method: "PATCH",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        authorization: localStorage.getItem("accessToken") + "",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newData),
      redirect: "follow",
      referrerPolicy: "no-referrer",
    })
      .then((res) => checkResponse(res))
      .then((res) => {
        set();
        dispatch({ type: GET_USER, name: res.user.name, email: res.user.email });
      })
      .catch((e) => {
        console.log("упс... ошибка в function setDataUser :(", e);
      });
  };
}
