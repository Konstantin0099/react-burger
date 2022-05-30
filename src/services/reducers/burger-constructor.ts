import {
  IItem,
  TOrderActions,
  TDataOrderActions,
  ORDER_SUM,
  GET_NUMBER,
  GET_NUMBER_SUCCESS,
  GET_NUMBER_FAILED,
  NUMBER_REMOVE,
  TOGGLE_ITEM_CONSTRUCTOR,
  ADD_ITEM_CONSTRUCTOR,
  ADD_BUN_CONSTRUCTOR,
  DELETE_ITEM_CONSTRUCTOR,
} from "../actions";

const dataOrder: Array<IItem> = [];

const dataOrderConstructor = [...dataOrder, dataOrder[0]];
const initalDataOrder = dataOrderConstructor.map((el) => {
  
  return { ...el, idInOrder: Math.ceil(Math.random() * 1000000) };
});
type TInitialOrderState = {
  numberRequest: boolean,
  numberFailed: boolean,
  sum: number,
  number: number,
}
const initialOrderState: TInitialOrderState = {
  numberRequest: false,
  numberFailed: false,
  sum: 0,
  number: 0,
};
export const orderReducer = (state = initialOrderState, action: TOrderActions): TInitialOrderState => {
  switch (action.type) {
    case ORDER_SUM: {
      return {
        ...state,
        sum: action.sum,
      };
    }
    case GET_NUMBER: {
      return {
        ...state,
        numberRequest: true,
        numberFailed: false,
      };
    }
    case GET_NUMBER_SUCCESS: {
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
        number: 0,
      };
    }
    default: {
      return state;
    }
  }
};
export const dataOrderReducer = (state = initalDataOrder, action: TDataOrderActions) => {
  switch (action.type) {
    case DELETE_ITEM_CONSTRUCTOR: {
      const next = state.slice();
      next.splice(action.index, 1);
      return [...next];
    }
    case ADD_BUN_CONSTRUCTOR: {
      const next = state.slice();
      if (state.length < 2) {
        next.splice(0, 1, action.dragItem, action.dragItem);
        next[0].idInOrder = Math.ceil(Math.random() * 1000000);
        next[next.length - 1] = {
          ...next[next.length - 1],
          idInOrder: Math.ceil(Math.random() * 1000000),
        };
      } else {
        next.splice(0, 1, action.dragItem);
        next.splice(next.length - 1, 1, action.dragItem);
        next[0].idInOrder = Math.ceil(Math.random() * 1000000);
        next[next.length - 1] = {
          ...next[next.length - 1],
          idInOrder: Math.ceil(Math.random() * 1000000),
        };
      }
      return [...next];
    }
    case ADD_ITEM_CONSTRUCTOR: {
      const next = state.slice();
      if (state.length <= 2) {
        next.splice(1, 0, action.dragItem);
        next[1] = {
          ...next[1],
          idInOrder: Math.ceil(Math.random() * 1000000),
        };
      } else {
        action.dragIndex === 0 && (action.dragIndex = 1);
        next.splice(action.dragIndex, 0, action.dragItem);
        next[action.dragIndex] = {
          ...next[action.dragIndex],
          idInOrder: Math.ceil(Math.random() * 1000000),
        };
      }
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
  }
};
