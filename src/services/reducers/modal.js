import {
  OPEN_POPUP_ORDER_INGREDIENTS,
  TOGGLE_VISIBLE,
  OPEN_POPUP_INGREDIENTS,
  OPEN_POPUP_ORDER,
  CLOSE_POPUP_ORDER,
  TOGGLE_VISIBLE_LIST,
} from "../actions/modal";
import IngredientDetails from "../../components/ingredient-details/ingredient-details";
import OrderDetails from "../../components/order-details/order-details";
import { OrderId } from "../../pages/order-id";

const initalState = {
  modal: false,
  list: false,
};
export const toggleVisibleReducer = (state = initalState, action) => {
  switch (action.type) {
    case TOGGLE_VISIBLE: {
      return {
        ...state,
        modal: !state.modal,
      };
    }
    case TOGGLE_VISIBLE_LIST: {
      return {
        ...state,
        list: !state.list,
      };
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
    case OPEN_POPUP_ORDER_INGREDIENTS: {
      return {
        ...state,
        popup: <OrderId id={action.item} />,
        item: action.item,
      };
    }
    case OPEN_POPUP_INGREDIENTS: {
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
