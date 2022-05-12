import {
    AUTH_LOGIN,
    AUTH_REGISTER,
    AUTH_LOGOUT,
    AUTH_TOKEN,
    AUTH_FAILED,
    AUTH_SUCCESS,
    GET_USER
  } from "../actions/user-auth";

const initaUser = {
        authRequest: false,
        authFailed: false,
        authSuccess: false,
        email: "",
        name: "",
  };
  export const userAuthReducer = (state = initaUser, action) => {
    switch (action.type) {
      case AUTH_LOGIN: {
        return {
          ...state,
          authRequest: true, 
          authFailed: false,
        };
      }
      /**сохраняет полученные токены в localStorage , записывает в стейт name, email*/
      case AUTH_SUCCESS: {
        localStorage.setItem("accessToken", action.user.accessToken);
        localStorage.setItem("refreshToken", action.user.refreshToken);
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
        localStorage.setItem("accessToken", action.user.accessToken);
        localStorage.setItem("refreshToken", action.user.refreshToken);
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
        localStorage.setItem("accessToken", action.token.accessToken);
        localStorage.setItem("refreshToken", action.token.refreshToken);
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