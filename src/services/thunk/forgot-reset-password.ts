import {
  getPassForgotAction,
  getPassResetAction,
  getPassSuccessAction,
  getPassFailedAction,
} from "../actions/password-reset-forgot";
import { DATA_FETCH, URL_USER_PASS } from "../../utils/data";
import { checkResponse } from "./checkResponse";
import { History } from "history";
import { AppDispatch, TNewData, AppThunk } from "../types/types";

type TResetPassword = {
  success: boolean;
  message: "Password successfully reset";
};
type TForgotPassword = {
  success: boolean;
  message: "Reset email sent";
};

export const forgotPassword: AppThunk = (history: History<unknown>, email: string) => (dispatch: AppDispatch) => {
  dispatch(getPassForgotAction());
  fetch(`${URL_USER_PASS}`, {
    ...DATA_FETCH,
    body: JSON.stringify({ email: email }),
  })
    .then((res) => checkResponse<TForgotPassword>(res))
    .then(() => {
      dispatch(getPassSuccessAction());
      history.replace({
        pathname: "/reset-password",
        state: { getPass: true },
      });
    })
    .catch((e) => {
      dispatch(getPassFailedAction());
    });
};

export const resetPassword: AppThunk =
  (history: History<unknown>, newData: Omit<TNewData, "email" | "name">) => (dispatch: AppDispatch) => {
    dispatch(getPassForgotAction());
    fetch(`${URL_USER_PASS}/reset`, {
      ...DATA_FETCH,
      body: JSON.stringify(newData),
    })
      .then((res) => checkResponse<TResetPassword>(res))
      .then(() => {
        dispatch(getPassResetAction(newData.password));
        history.replace({ pathname: "/" });
      })
      .catch((e) => {
        console.log("упс...checkResponse ошибка :(", e);
        dispatch(getPassFailedAction());
      });
  };
