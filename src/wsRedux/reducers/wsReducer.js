

import {
    WS_CONNECTION_SUCCESS,
    WS_CONNECTION_ERROR,
    WS_CONNECTION_CLOSED,
    WS_GET_FEED
  } from '../action-types';
  
  const initialState = {
    wsConnected: false,
    // feed: []
    orders: [],
    total: 0,
    totalToday: 0,
  };
  
  export const wsReducerAllOrders = (state = initialState, action) => {
      // console.log("wsReducer");
    switch (action.type) {
      case WS_CONNECTION_SUCCESS:
        return {
          ...state,
          wsConnected: true
        };
  
      case WS_CONNECTION_ERROR:
        return {
          ...state,
          wsConnected: false
        };
  
      case WS_CONNECTION_CLOSED:
        return {
          ...state,
          wsConnected: false
        };
  
      case WS_GET_FEED:
// console.log("case>>WS_GET_FEED:");
let  { orders, total, totalToday } = action.payload;
// console.log({ orders, total, totalToday } );
        return {
          ...state,
          orders: orders,
          total: total,
          totalToday: totalToday
        };
      default:
        return state;
    }
  };