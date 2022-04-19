// import {
//     AUTH_FAILED,
//   } from "../actions/user-auth";
//   import { DATA_SET, URL_USER_AUTH, bodyToken } from "../../utils/data";
//   import { checkResponse } from "./checkResponse";
  
//   export function setDataUser(history, ) {
//     console.log("setData start", DATA_SET, );
//     return function (dispatch) {
//       fetch(`${URL_USER_AUTH}/user`, DATA_SET)
//         .then(checkResponse)
//         .then((user) => {
//             console.log("setData user=", user);
//         //   dispatch({ type: AUTH_TOKEN, user: user });
//         })
//         .catch((e) => {
//           console.log("упс... ошибка в function setDataUser :(", e);
//         //   dispatch({ type: AUTH_FAILED });
//         });
//     };
//   }