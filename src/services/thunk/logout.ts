import { getAuthLogoutAction, getAuthFailedAction } from "../actions/user-auth";
import { DATA_FETCH, URL_USER_AUTH } from "../../utils/data";
import { checkResponse } from "./checkResponse";
import { History } from "history";
import { AppDispatch, AppThunk } from "../types/types";
import { TLogout } from "../types/data";

export const logout: AppThunk =
  (history: History<unknown>, direction: { pathname: string }) => (dispatch: AppDispatch) => {
    fetch(`${URL_USER_AUTH}/logout`, {
      ...DATA_FETCH,
      body: JSON.stringify({
        token: localStorage.getItem("refreshToken"),
      }),
    })
      .then((res) => checkResponse<TLogout>(res))
      .then(() => {
        localStorage.setItem("accessToken", "");
        localStorage.setItem("refreshToken", "");
        dispatch(getAuthLogoutAction());
        history.replace(direction);
      })
      .catch((e) => {
        console.log("упс... ошибка function logout :(", e);
        dispatch(getAuthFailedAction());
      });
  };
