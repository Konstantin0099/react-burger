import {
    PASS_FORGOT,
    PASS_RESET,
    PASS_SUCCESS,
    PASS_FAILED,
  } from "../actions/password-reset-forgot";


  const initPass = {
    passRequest: true,
    passFailed: false,
      password: "",
};

export const userPassReducer = (state = initPass, action) => {
  // console.log("R userPassReducer", state);
switch (action.type) {
  case PASS_FORGOT: {
    return {
      ...state,
      passRequest: true,
      passFailed: false,
    };
  }
  case PASS_SUCCESS: {
      // console.log("PASS_SUCCESS:", action);
    return {
        ...state,
        password: "",
        passRequest: false,
        passFailed: false,
    };
  }
  case PASS_RESET: {
    // console.log("PASS_RESET:", action);
    return {
        ...state,
        password: action.user.password,
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