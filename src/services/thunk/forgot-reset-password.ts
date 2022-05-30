import { PASS_FORGOT, PASS_RESET, PASS_SUCCESS, PASS_FAILED } from "../actions/password-reset-forgot";
import { DATA_FETCH, URL_USER_PASS } from "../../utils/data";
import { checkResponse } from "./checkResponse";
import { History } from "history";
import { AppDispatch, TNewData } from "../types/types";

type TResetPassword = {
  success: boolean;
  message: "Password successfully reset";
};
type TForgotPassword = {
  success: boolean;
  message: "Reset email sent";
};

export function forgotPassword(history: History<unknown>, email: string) {
  return function (dispatch: AppDispatch) {
    dispatch({ type: PASS_FORGOT });
    fetch(`${URL_USER_PASS}`, {
      ...DATA_FETCH,
      body: JSON.stringify({ email: email }),
    })
      .then((res) => checkResponse<TForgotPassword>(res))
      .then((user) => {
        dispatch({ type: PASS_SUCCESS, user: user });
        history.replace({
          pathname: "/reset-password",
          state: { getPass: true },
        });
      })
      .catch((e) => {
        dispatch({ type: PASS_FAILED });
      });
  };
}

export function resetPassword(history: History<unknown>, newData: Omit<TNewData, "email" | "name">) {
  return function (dispatch: AppDispatch) {
    dispatch({ type: PASS_FORGOT });
    fetch(`${URL_USER_PASS}/reset`, {
      ...DATA_FETCH,
      body: JSON.stringify(newData),
    })
      .then((res) => checkResponse<TResetPassword>(res))
      .then((user) => {
        dispatch({ type: PASS_RESET, password: newData.password });
        history.replace({ pathname: "/" });
      })
      .catch((e) => {
        console.log("упс...checkResponse ошибка :(", e);
        dispatch({ type: PASS_FAILED });
      });
  };
}
