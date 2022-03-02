
import { dataOrder } from "../../utils/data";
import {
  ORDER_SUM,
  GET_NUMBER,
  GET_NUMBER_SUCCES,
  GET_NUMBER_FAILED,
  NUMBER_REMOVE,
  TOGGLE_ITEM_CONSTRUCTOR,
  ADD_ITEM_CONSTRUCTOR,
  ADD_BUN_CONSTRUCTOR,
  DELETE_ITEM_CONSTRUCTOR,
} from "../actions/burger-constructor";

const dataOrderConstructor = [...dataOrder, dataOrder[0]];
const initalDataOrder = dataOrderConstructor.map((el) =>  { return {...el, idInOrder: (Math.ceil(Math.random() * 1000000))}} );

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
          sum += ingredients.price, 0 );
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
export const dataOrderReducer = (state = initalDataOrder, action) => {
   switch (action.type) {
        case DELETE_ITEM_CONSTRUCTOR: {
      const next = state.slice();
      next.splice(action.index, 1);
      return [...next];
    }
        case ADD_BUN_CONSTRUCTOR: {
      const next = state.slice();
      next.splice(0, 1, action.dragItem );
      next.splice(next.length - 1, 1, action.dragItem);
      next[0].idInOrder = (Math.ceil(Math.random() * 1000000));
      next[next.length - 1] = {...next[next.length - 1], idInOrder: (Math.ceil(Math.random() * 1000000)) };
      // console.log("next", next);
      return [...next];
    }
        case ADD_ITEM_CONSTRUCTOR: {
      const next = state.slice();
      next.splice(action.dragIndex, 0, action.dragItem );
      next[action.dragIndex] = {...next[action.dragIndex], idInOrder: (Math.ceil(Math.random() * 1000000)) };
      // action.dragItem.idInOrder = (Math.ceil(Math.random() * 1000000));
      return [...next];
    }
    case TOGGLE_ITEM_CONSTRUCTOR: {
      const next = state.slice();
      next.splice(action.dragIndex, 1);
      next.splice(action.hoverIndex, 0, state[action.dragIndex]);
      return [...next];
    }
   default: {
      return state;
    }
};
}

