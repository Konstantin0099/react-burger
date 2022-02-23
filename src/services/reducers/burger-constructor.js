import { dataOrder } from "../../utils/data";
import {
  ORDER_SUM,
  GET_NUMBER,
  GET_NUMBER_SUCCES,
  GET_NUMBER_FAILED,
  NUMBER_REMOVE,
} from "../actions/burger-constructor";

const initialOrderState = {
  numberRequest: false,
  numberFailed: false,
  sum: null,
  number: null,
};

export const orderReducer = (state = initialOrderState, action) => {
  switch (action.type) {
    case ORDER_SUM: {
      let sum = action.dataOrder.reduce(
        (sum, ingredients) =>
          sum +
          (ingredients.type === "bun"
            ? ingredients.price * 2
            : ingredients.price),
        0
      );
      return {
        ...state,
        sum: sum,
      };
    }
    case GET_NUMBER: {
      return {
        ...state,
        numberRequest: true,
        numberFailed: false,
      };
    }
    case GET_NUMBER_SUCCES: {
      return {
        ...state,
        numberRequest: false,
        number: action.number,
      };
    }
    case GET_NUMBER_FAILED: {
      return {
        ...state,
        numberRequest: false,
        numberFailed: true,
      };
    }
    case NUMBER_REMOVE: {
      return {
        ...state,
        number: null,
      };
    }
    default: {
      return state;
    }
  }
};

const initalDataOrder = dataOrder;
export const dataOrderReducer = (state = initalDataOrder, action) => {
  return state;
};
