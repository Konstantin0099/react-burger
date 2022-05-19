import { AUTH_LOGIN,  AUTH_FAILED, GET_USER } from "../actions/user-auth";
import { GET_DATA, URL_USER_AUTH } from "../../utils/data";
import { checkResponse } from "./checkResponse";

// export type TDataUser = {
//   readonly success: boolean;
//   readonly user: {
//     readonly email: string;
//     readonly name: string;
// };}
// const dd = async (): Promise<TDataUser> => {
const dd = async () => {

    const pr = await fetch(`${URL_USER_AUTH}/user`, {
      ...GET_DATA,
      headers: {
        ...GET_DATA.headers,
        Authorization: localStorage.getItem("accessToken"),
      }});
      // console.log("pr=", pr);
      return pr;
    }
    
    
    export function getDataUser() {
      // console.log("getDataUser1");
      return function (dispatch) {
    // console.log("getDataUser2");
    return  dd().then((res) => {
        return checkResponse(res)
      })
      .then((user) => {
        dispatch({type: GET_USER, user: user});
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
      method: "PATCH",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        authorization: localStorage.getItem("accessToken"),
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newData),
      redirect: "follow",
      referrerPolicy: "no-referrer",
    })
      .then(checkResponse)
      .then((user) => {
        history.replace({ pathname: "/" });
        dispatch({ type: GET_USER, user: user });
      })
      .catch((e) => {
        console.log("упс... ошибка в function setDataUser :(", e);
      });
  };
}
