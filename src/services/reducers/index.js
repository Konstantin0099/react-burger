import { combineReducers } from "redux";
import { tabReducer } from "./tabs";
import { orderReducer, dataOrderReducer } from "./burger-constructor";
import { dataReducer } from "./burger-ingredients";
import { userAuthReducer } from "./user-auth";
import { userPassReducer } from "./password-forgot-reset";
import { toggleVisibleReducer, openPopupReducer } from "./modal";

const rootReducer = combineReducers({
  currentTab: tabReducer,
  orderState: orderReducer,
  dataOrder: dataOrderReducer,
  data: dataReducer,
  visible: toggleVisibleReducer,
  openPopup: openPopupReducer,
  user: userAuthReducer,
  pass: userPassReducer,
});
export default rootReducer;
