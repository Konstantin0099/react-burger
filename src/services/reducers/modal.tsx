import IngredientDetails from "../../components/ingredient-details/ingredient-details";
import OrderDetails from "../../components/order-details/order-details";
import { OrderId } from "../../pages/order-id";
import {
  IItem,
  TOpenPopup,
  TVisible,
  OPEN_POPUP_ORDER_INGREDIENTS,
  VISIBLE_LIST,
  DISABLED_LIST,
  TOGGLE_VISIBLE,
  DISABLED_MODAL,
  VISIBLE_MODAL,
  OPEN_POPUP_INGREDIENTS,
  OPEN_POPUP_ORDER,
  CLOSE_POPUP_ORDER,
} from "../actions";
type TInitalState = {
  pathname: string,
  modal: boolean,
  list: boolean,
};
const initalState: TInitalState = {
  pathname: "",
  modal: false,
  list: false,
};
export const toggleVisibleReducer = (state = initalState, action: TVisible): TInitalState => {
  switch (action.type) {
    case TOGGLE_VISIBLE: {
      return {
        ...state,
        modal: !state.modal,
      };
    }
    case VISIBLE_MODAL: {
      return {
        ...state,
        pathname: action.pathname,
        modal: true,
      };
    }
    case DISABLED_MODAL: {
      return {
        ...state,
        modal: false,
      };
    }
    case VISIBLE_LIST: {
      return {
        ...state,
        list: true,
      };
    }
    case DISABLED_LIST: {
      return {
        ...state,
        list: false,
      };
    }
    default: {
      return state;
    }
  }
};
type TInitalStateOpenPopup = {
  popup: | JSX.Element | null;
  item: | IItem | string | null
};

const initalStateOpenPopup: TInitalStateOpenPopup = {
  popup: null,
  item: null,
};
export const openPopupReducer = (state = initalStateOpenPopup, action: TOpenPopup): TInitalStateOpenPopup => {
  switch (action.type) {
    case OPEN_POPUP_ORDER_INGREDIENTS: {
      return {
        popup: <OrderId id={action.item}/>,
        item: action.item,
      }
    }
    case OPEN_POPUP_INGREDIENTS: {
      return {
        ...state,
        popup: <IngredientDetails item={action.item} modal={true}/>,
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
        popup: null,
        item: null,
      };
    }
    default: {
      return state;
    }
  }
};
