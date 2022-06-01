import {
  AUTH_LOGIN,
  AUTH_REGISTER,
  AUTH_LOGOUT,
  AUTH_TOKEN,
  AUTH_FAILED,
  AUTH_SUCCESS,
  GET_USER,
  TAuthActions,
} from "../actions";

export type TInitaUser = {
  authRequest: boolean;
  authFailed: boolean;
  authSuccess: boolean;
  email: string;
  name:  string;
};


const initaUser: TInitaUser = {
  authRequest: false,
  authFailed: false,
  authSuccess: false,
  email: "",
  name: "",
};
export const userAuthReducer = (state = initaUser, action: TAuthActions): TInitaUser => {
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
      return {
        ...state,
        name: action.name,
        email: action.email,
        authRequest: false,
        authFailed: false,
        authSuccess: true,
      };
    }
    case AUTH_REGISTER: {
      return {
        ...state,
        name: action.name,
        email: action.email,
        authRequest: false,
        authFailed: false,
        authSuccess: true,
      };
    }
    case AUTH_LOGOUT: {
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
      return {
        ...state,
        authRequest: false,
        authFailed: false,
      };
    }
    case GET_USER: {
      return {
        ...state,
        name: action.name,
        email: action.email,
        authRequest: false,
        authFailed: false,
        authSuccess: true,
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
  }
};
