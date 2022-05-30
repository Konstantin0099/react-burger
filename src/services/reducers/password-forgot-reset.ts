import { PASS_FORGOT, PASS_RESET, PASS_SUCCESS, PASS_FAILED, TPassAction } from "../actions";

type TInitPass = {
  passRequest: boolean,
  passFailed: boolean,
  password: string | undefined,
};

const initPass: TInitPass = {
  passRequest: true,
  passFailed: false,
  password: "",
};

export const userPassReducer = (state = initPass, action: TPassAction): TInitPass => {
  switch (action.type) {
    case PASS_FORGOT: {
      return {
        ...state,
        passRequest: true,
        passFailed: false,
      };
    }
    case PASS_SUCCESS: {
      return {
        ...state,
        password: "",
        passRequest: false,
        passFailed: false,
      };
    }
    case PASS_RESET: {
      return {
        ...state,
        password: action.password,
        passRequest: false,
        passFailed: false,
      };
    }
    case PASS_FAILED: {
      return {
        ...state,
        passRequest: false,
        passFailed: true,
      };
    }
    default: {
      return state;
    }
  }
};
