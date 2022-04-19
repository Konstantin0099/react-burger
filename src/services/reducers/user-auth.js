import {
    AUTH_LOGIN,
    AUTH_REGISTER,
    AUTH_LOGOUT,
    AUTH_TOKEN,
    AUTH_FAILED,
    AUTH_SUCCESS,
    GET_USER
  } from "../actions/user-auth";

// POST https://norma.nomoreparties.space/api/auth/login - эндпоинт для авторизации.
// POST https://norma.nomoreparties.space/api/auth/register - эндпоинт для регистрации пользователя.
// POST https://norma.nomoreparties.space/api/auth/logout - эндпоинт для выхода из системы.
// POST https://norma.nomoreparties.space/api/auth/token - эндпоинт обновления токена. 

const initaUser = {
        authRequest: false,
        authFailed: false,
        authSuccess: false,
        email: "",
        name: "",
  };
  export const userAuthReducer = (state = initaUser, action) => {
    console.log("action.type:",action.type);
    // console.log("Reducer:", "name", state.name, "email", state.email, "localStorage=", localStorage.getItem("accessToken"));
    switch (action.type) {
      case AUTH_LOGIN: {
        // console.log("AUTH_LOGIN:", action);
        return {
          ...state,
          authRequest: true, 
          authFailed: false,
        };
      }
      case AUTH_SUCCESS: {
        localStorage.setItem("accessToken", action.user.accessToken);
        localStorage.setItem("refreshToken", action.user.refreshToken);
        // localStorage.getItem("accessToken") && console.log("AUTH_SUCCESS localStorage.getItem(accessToken):", localStorage.getItem("accessToken"));
        return {
            ...state,
            name: action.user.user.name,
            email: action.user.user.email,
            authRequest: false,
            authFailed: false,
            authSuccess: action.user.success,
        };
      }
      case AUTH_REGISTER: {
        // console.log("AUTH_REGISTER:", action);
        localStorage.setItem("accessToken", action.user.accessToken);
        localStorage.setItem("refreshToken", action.user.refreshToken);
        // localStorage.getItem("accessToken") && console.log("AUTH_REGISTER localStorage.getItem(accessToken):", localStorage.getItem("accessToken"));
        return {
            ...state,
            name: action.user.user.name,
            email: action.user.user.email,
            authRequest: false,
            authFailed: false,
            authSuccess: action.user.success,
        };
      }
      case AUTH_LOGOUT: {
        localStorage.setItem("accessToken", "");
        localStorage.setItem("refreshToken", "");
        return {
            ...state,
            name: "",
            email: "",
            authRequest: false,
            authFailed: false,
            authSuccess: false,
        };
      }
      case AUTH_TOKEN: {
        // console.log("AUTH_TOKEN action=",  action);
        localStorage.setItem("accessToken", action.token.accessToken);
        // localStorage.getItem("accessToken") && console.log("AUTH_TOKEN localStorage.getItem(accessToken):", localStorage.getItem("accessToken"));
        // console.log("AUTH_TOKEN  action:", action);
        return {
            ...state,
            authRequest: false,
            authFailed: false,
        };
      }
      case GET_USER: {
        return {
            ...state,
            name: action.user.user.name,
            email: action.user.user.email,
            authRequest: false,
            authFailed: false,
            authSuccess: action.user.success,
        };
      }

      case AUTH_FAILED: {
        return {
            ...state,
            authRequest: false,
            authFailed: true,
        };
      }
      default: {
        return state;
      }
    };
  };