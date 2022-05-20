import { PASS_FORGOT, PASS_RESET, PASS_SUCCESS, PASS_FAILED } from "../actions/password-reset-forgot";
import { DATA_FETCH, URL_USER_PASS } from "../../utils/data";
import { checkResponse } from "./checkResponse";
import { useDispatch } from "react-redux";
import { useHistory, Redirect} from "react-router-dom";

export function forgotPassword (history, email) {
  // export function forgotPassword(email) {
  // const history = useHistory();
  
  // const dispatch = useDispatch();
  return function (dispatch) {
    dispatch({ type: PASS_FORGOT });
    fetch(`${URL_USER_PASS}`, {
      ...DATA_FETCH,
      body: JSON.stringify({ email: email }),
    })
      .then(checkResponse)
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

export function resetPassword(history, newData) {
  return function (dispatch) {
    dispatch({ type: PASS_FORGOT });
    fetch(`${URL_USER_PASS}/reset`, {
      ...DATA_FETCH,
      body: JSON.stringify(newData),
    })
      .then(checkResponse)
      .then((user) => {
        dispatch({ type: PASS_RESET, password: user.password });
        history.replace({ pathname: "/" });
      })
      .catch((e) => {
        console.log("упс... ошибка :(", e);
        dispatch({ type: PASS_FAILED });
      });
  };
}
