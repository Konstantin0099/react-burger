export const AUTH_LOGIN: "AUTH_LOGIN" = "AUTH_LOGIN";
export const AUTH_REGISTER: "AUTH_REGISTER" = "AUTH_REGISTER";
export const AUTH_LOGOUT: "AUTH_LOGOUT" = "AUTH_LOGOUT";
export const AUTH_TOKEN: "AUTH_TOKEN" = "AUTH_TOKEN";
export const AUTH_FAILED: "AUTH_FAILED" = "AUTH_FAILED";
export const AUTH_SUCCESS: "AUTH_SUCCESS" = "AUTH_SUCCESS";
export const GET_USER: "GET_USER" = "GET_USER";

export interface IAuthLoginAction {
  readonly type: typeof AUTH_LOGIN;
}
export interface IAuthTokenAction extends Omit<IAuthLoginAction, "type"> {
  readonly type: typeof AUTH_TOKEN;
}
export interface IAuthSuccessAction extends Omit<IAuthLoginAction, "type"> {
  readonly type: typeof AUTH_SUCCESS;
  readonly name: string;
  readonly email: string;
}
export interface IAuthRegisterAction extends Omit<IAuthSuccessAction, "type"> {
  readonly type: typeof AUTH_REGISTER;
}
export interface IAuthLogoutAction extends Omit<IAuthRegisterAction, "type"> {
  readonly type: typeof AUTH_LOGOUT;
}
export interface IAuthUserAction extends Omit<IAuthLogoutAction, "type"> {
  readonly type: typeof GET_USER;
}
export interface IAuthFailedAction extends Omit<IAuthLoginAction, "type"> {
  readonly type: typeof AUTH_FAILED;
}

export const getAuthLoginAction = (): IAuthLoginAction => ({
  type: AUTH_LOGIN,
});
export const getAuthTokenAction = (): IAuthTokenAction => ({
    type: AUTH_TOKEN,
});
export const getAuthSuccessAction = (name: string, email: string): IAuthSuccessAction => ({
    type: AUTH_SUCCESS,
    name,
    email,
});
export const getAuthRegisterAction = (name: string, email: string): IAuthRegisterAction => ({
    type: AUTH_REGISTER,
    name,
    email,
});
export const getAuthLogoutAction = (name: string, email: string): IAuthLogoutAction => ({
    type: AUTH_LOGOUT,
    name,
    email,
});
export const getAuthUserAction = (name: string, email: string): IAuthUserAction => ({
    type: GET_USER,
    name,
    email,
});
export const getAuthFailedAction = (): IAuthFailedAction => ({
  type: AUTH_FAILED,
});

export type IAuthLoginActions =
  | IAuthLoginAction
  | IAuthTokenAction
  | IAuthSuccessAction
  | IAuthRegisterAction
  | IAuthLogoutAction
  | IAuthUserAction
  | IAuthFailedAction;
