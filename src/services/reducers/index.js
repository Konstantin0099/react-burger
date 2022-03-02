import { combineReducers } from "redux";
import { tabReducer } from "./tabs";
import { orderReducer, dataOrderReducer } from "./burger-constructor";
import { dataReducer } from "./burger-ingredients";
import { toggleVisibleReducer, openPopupReducer } from "./modal";

const rootReducer = combineReducers({
  currentTab: tabReducer,
  orderState: orderReducer,
  dataOrder: dataOrderReducer,
  data: dataReducer,
  visible: toggleVisibleReducer,
  openPopup: openPopupReducer,
});

export default rootReducer;
