export const baseUrl = "https://norma.nomoreparties.space/api";
export const URL_USER_AUTH = `${baseUrl}/auth`;
export const URL_USER_PASS = `${baseUrl}/password-reset`;
export const wsUrl = "wss://norma.nomoreparties.space/orders";

type TDataFetch = {
  readonly method: "POST";
  readonly mode: "cors";
  readonly cache: "no-cache";
  readonly credentials: "same-origin";
  readonly headers: {
    "Content-Type": "application/json";
  };
  readonly redirect: "follow";
  readonly referrerPolicy: "no-referrer";
  body: string;
};
export const DATA_FETCH: TDataFetch = {
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

export type TGetData = {
  method: "GET";
  mode: "cors";
  cache: "no-cache";
  credentials: "same-origin";
  headers?: {
    "Content-Type": "application/json";
    Authorization: string | null;
  };
  redirect: "follow";
  referrerPolicy: "no-referrer";
};

export const GET_DATA: TGetData = {
  method: "GET",
  mode: "cors",
  cache: "no-cache",
  credentials: "same-origin",
  headers: {
    "Content-Type": "application/json",
    Authorization: "",
  },
  redirect: "follow",
  referrerPolicy: "no-referrer",
};
