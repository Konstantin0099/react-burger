import {
  OPEN_POPUP_ORDER_INGREDIENTS,
  TOGGLE_VISIBLE,
  OPEN_POPUP_INGREDIENTS,
  OPEN_POPUP_ORDER,
  CLOSE_POPUP_ORDER,
} from "../actions/modal";
import IngredientDetails from "../../components/ingredient-details/ingredient-details";
import OrderDetails from "../../components/order-details/order-details";
import {OrderId} from "../../pages/order-id";

const initalState = false;
export const toggleVisibleReducer = (state = initalState, action) => {
  switch (action.type) {
    case TOGGLE_VISIBLE: {
      return !state;
    }
    default: {
      return state;
    }
  }
};

const initalStateOpenPopup = {
  popup: {},
  item: {},
};
export const openPopupReducer = (state = initalStateOpenPopup, action) => {
  switch (action.type) {
    // OrderId
    case OPEN_POPUP_ORDER_INGREDIENTS: {
      console.log("OPEN_POPUP_ORDER_INGREDIENTS:");
      return {
        ...state,
        popup: <OrderId />,
        item: action.item,
      };
    }
    case OPEN_POPUP_INGREDIENTS: {
      // console.log("OPEN_POPUP_INGREDIENTS:", action.item);
      return {
        ...state,
        popup: <IngredientDetails item={action.item} />,
        item: action.item,
      };
    }
    case OPEN_POPUP_ORDER: {
      return {
        ...state,
        popup: <OrderDetails />,
      };
    }
    case CLOSE_POPUP_ORDER: {
      return {
        ...state,
        popup: {},
        item: {},
      };
    }
    default: {
      return state;
    }
  }
};
