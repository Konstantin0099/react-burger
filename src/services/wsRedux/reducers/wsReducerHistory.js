import {
  WS_HISTORY,
  WS_CONNECTION_SUCCESS_HISTORY,
  WS_CONNECTION_ERROR_HISTORY,
  WS_CONNECTION_CLOSED_HISTORY,
  WS_GET_HISTORY,
} from "../action-types";

const initialState = {
  socket: null,
  wsConnected: false,
  orders: [],
  total: 0,
  totalToday: 0,
};

export const wsReducerOrdersHistory = (state = initialState, action) => {
  switch (action.type) {
    case WS_HISTORY:
      return {
        ...state,
        socket: action.payload
      };
    case WS_CONNECTION_SUCCESS_HISTORY:
      return {
        ...state,
        wsConnected: true,
      };

    case WS_CONNECTION_ERROR_HISTORY:
      return {
        ...state,
        wsConnected: false,
        socket: null
      };

    case WS_CONNECTION_CLOSED_HISTORY:
      return {
        ...state,
        wsConnected: false,
        socket: null
      };

    case WS_GET_HISTORY:
      let { orders, total, totalToday } = action.payload;
      return {
        ...state,
        orders: orders,
        total: total,
        totalToday: totalToday,
      };
    default:
      return state;
  }
};
