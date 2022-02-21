import { ORDER_SUM_STATE, DATA_ORDER_PLUS, DATA_ORDER_MINUS } from '../actions/burger-constructor';
import { dataOrder } from "../../utils/data";


const initialOrderSumState = null;
export const orderSumReducer = (state = initialOrderSumState, action) => {
  console.log("orderSumReducer", action.type, state );
  switch (action.type) {
    case ORDER_SUM_STATE: {
        let sum = action.dataOrder.reduce(
            (sum, ingredients) =>
              sum +
              (ingredients.type === "bun"
                ? ingredients.price * 2
                : ingredients.price),
            0
          );
      return sum
    }
    default: {
      return state;
    }
  }
}

const initalDataOrder = dataOrder;
export const dataOrderReducer = (state = initalDataOrder, action) => {
  console.log("initalDataOrder");
  switch (action.type) {
    case DATA_ORDER_PLUS: {
      return state;
    }
    case DATA_ORDER_MINUS: {
        return state;
      }
    default: {
      return state;
    }
  }
}
