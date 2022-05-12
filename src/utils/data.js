export const baseUrl = "https://norma.nomoreparties.space/api";
export const URL_USER_AUTH = `${baseUrl}/auth`;
export const URL_USER_PASS = `${baseUrl}/password-reset`;

export const DATA_FETCH = {
  method: "POST",
  mode: "cors",
  cache: "no-cache",
  credentials: "same-origin",
  headers: {
    "Content-Type": "application/json",
  },
  redirect: "follow",
  referrerPolicy: "no-referrer",
  body: "",
};
export const GET_DATA = {
  method: "GET",
  mode: "cors",
  cache: "no-cache",
  credentials: "same-origin",
  headers: {
    "Content-Type": "application/json",
  },
  redirect: "follow",
  referrerPolicy: "no-referrer",
};
