
import { combineReducers } from 'redux';
import { tabReducer } from './tabs';
import { orderSumReducer, dataOrderReducer } from './burger-constructor';


export const rootReducer = combineReducers({
    currentTab: tabReducer,
    orderSumState: orderSumReducer,
    dataOrder: dataOrderReducer,
  });
console.log("rootReducer",);