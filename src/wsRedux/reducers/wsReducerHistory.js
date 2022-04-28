

import {
    WS_CONNECTION_SUCCESS_HISTORY,
    WS_CONNECTION_ERROR_HISTORY,
    WS_CONNECTION_CLOSED_HISTORY,
    WS_GET_HISTORY
  } from '../action-types';
  
  const initialState = {
    wsConnected: false,
    // feed: []
    historyOrders: [],
    total: 0,
    totalToday: 0,
  };
  
  export const wsReducerOrdersHistory = (state = initialState, action) => {
      // console.log("wsReducerOrdersHistory", action);
    switch (action.type) {
      case WS_CONNECTION_SUCCESS_HISTORY:
        return {
          ...state,
          wsConnected: true
        };
  
      case WS_CONNECTION_ERROR_HISTORY:
        return {
          ...state,
          wsConnected: false
        };
  
      case WS_CONNECTION_CLOSED_HISTORY:
        return {
          ...state,
          wsConnected: false
        };
  
      case WS_GET_HISTORY:
// console.log("case>>WS_GET_FEED:");
let  { orders, total, totalToday } = action.payload;
console.log("wsReducerOrdersHistory",{ orders, total, totalToday } );
        return {
          ...state,
          historyOrders: orders,
          total: total,
          totalToday: totalToday
        };
      default:
        return state;
    }
  };