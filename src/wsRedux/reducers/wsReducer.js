

import {
    WS_FEED,
    WS_CONNECTION_SUCCESS,
    WS_CONNECTION_ERROR,
    WS_CONNECTION_CLOSED,
    WS_GET_FEED
  } from '../action-types';
  
  const initialState = {
    socket: null,
    wsConnected: false,
    orders: [],
    total: 0,
    totalToday: 0,
  };
  
  export const wsReducerAllOrders = (state = initialState, action) => {
    switch (action.type) {
      case "CLOSE_WS_FEED":
        console.log("CLOSE_WS_FEED", state.socket)
        return {
          ...state,
          socket: action.payload
        };
      case WS_FEED:
        return {
          ...state,
          socket: action.payload
        };
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
let  { orders, total, totalToday } = action.payload;
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