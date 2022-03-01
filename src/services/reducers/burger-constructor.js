
import { dataOrder } from "../../utils/data";
import {
  ORDER_SUM,
  GET_NUMBER,
  GET_NUMBER_SUCCES,
  GET_NUMBER_FAILED,
  NUMBER_REMOVE,
  TOGGLE_ITEM_CONSTRUCTOR,
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
const dataOrderConstructor = [...dataOrder, dataOrder[0]];
// console.log(initalDataOrder);
const initalDataOrder = dataOrderConstructor.map((el) =>  { return {...el, idInOrder: (Math.ceil(Math.random() * 1000000))}} );
// console.log(initalDataOrder);
export const dataOrderReducer = (state = initalDataOrder, action) => {
   switch (action.type) {
    case TOGGLE_ITEM_CONSTRUCTOR: {
      const next = state.slice();
      next.splice(action.dragIndex, 1);
      next.splice(action.hoverIndex, 0, state[action.dragIndex]);
      console.log("TOGGLE_ITEM_CONSTRUCTOR", action);
      return [...next];
    }
   default: {
      return state;
    }
};
}
// action.dragIndex
