import {
    WS_CONNECTION_SUCCESS,
    WS_CONNECTION_ERROR,
    WS_CONNECTION_CLOSED,
    WS_GET_FEED,
    WS_SEND_ORDER
  } from '../action-types';
  console.log("wsAction");
  export const wsConnectionSuccess = () => {
    return {
      type: WS_CONNECTION_SUCCESS
    };
  };
  
  export const wsConnectionError = () => {
    return {
      type: WS_CONNECTION_ERROR
    };
  };
  
  export const wsConnectionClosed = () => {
    return {
      type: WS_CONNECTION_CLOSED
    };
  };
  
  export const wsGetFeed = data => {
    return {
      type: WS_GET_FEED,
      payload: data
    };
  };
  
  export const wsSendOrder = data => {
    return {
      type: WS_SEND_ORDER,
      payload: order
    };
  };
  