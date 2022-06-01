import { getAuthFailedAction, getAuthUserAction } from "../actions/user-auth";
import { GET_DATA, URL_USER_AUTH } from "../../utils/data";
import { timeToken } from "../../utils/functions";
import { getToken } from "../../services/thunk/get-token";
import { checkResponse } from "./checkResponse";
import { TNewData, AppDispatch, AppThunk } from "../types/types";

type TGetDataUser = {
  success: boolean;
  user: { email: string; name: string };
};

const fetchAsync = async () => {
  timeToken() && getToken();
  const res = await fetch(`${URL_USER_AUTH}/user`, {
    ...GET_DATA,
    headers: {
      ...GET_DATA.headers,
      Authorization: localStorage.getItem("accessToken") + "",
    },
  });
  return res;
};
export const getDataUser: AppThunk = () => (dispatch: AppDispatch) => {
  fetchAsync()
    .then((res) => {
      return checkResponse<TGetDataUser>(res);
    })
    .then(({ user }) => {
      dispatch(getAuthUserAction(user.name, user.email));
    })
    .catch((e) => {
      console.log("упс... ошибка в function getDataUser:(", e);
      dispatch(getAuthFailedAction());
    });
};

export const setDataUser: AppThunk = (set: () => void, newData: Omit<TNewData, "token">) => (dispatch: AppDispatch) => {
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
    .then(({ user }) => {
      set();
      dispatch(getAuthUserAction(user.name, user.email));
    })
    .catch((e) => {
      console.log("упс... ошибка в function setDataUser :(", e);
    });
};
