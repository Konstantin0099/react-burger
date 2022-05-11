import { wsUrl } from "../../utils/data";
export const WS_FEED = "WS_FEED";
export const CLOSE_WS_FEED = "CLOSE_WS_FEED";
export const WS_CONNECTION = "WS_CONNECTION";
export const WS_CONNECTION_START = "WS_CONNECTION_START ";
export const WS_CONNECTION_SUCCESS = "WS_CONNECTION_SUCCESS";
export const WS_CONNECTION_ERROR = "WS_CONNECTION_ERROR";
export const WS_CONNECTION_CLOSED = "WS_CONNECTION_CLOSED";
export const WS_GET_FEED = "WS_GET_FEED";

export const WS_HISTORY = "WS_HISTORY";
export const WS_CONNECTION_START_HISTORY = "WS_CONNECTION_START_HISTORY";
export const WS_CONNECTION_SUCCESS_HISTORY = "WS_CONNECTION_SUCCESS_HISTORY";
export const WS_CONNECTION_CLOSED_HISTORY = "WS_CONNECTION_CLOSED_HISTORY";
export const WS_CONNECTION_ERROR_HISTORY = "WS_CONNECTION_ERROR_HISTORY";
export const WS_GET_HISTORY = "WS_GET_HISTORY";

export const wsConnectionSuccess = () => {
  return {
    type: WS_CONNECTION_SUCCESS,
  };
};
export const wsConnectionSuccessHistory = () => {
  return {
    type: WS_CONNECTION_SUCCESS_HISTORY,
  };
};

export const wsConnectionError = () => {
  return {
    type: WS_CONNECTION_ERROR,
  };
};

export const wsConnectionClosed = () => {
  return {
    type: WS_CONNECTION_CLOSED,
  };
};

export const wsGetFeed = (data) => {
  return {
    type: WS_GET_FEED,
    payload: data,
  };
};
export const wsGetHistory = (data) => {
  return {
    type: WS_GET_HISTORY,
    payload: data,
  };
};

export const wsActionsFeed = {
  webSocket: WS_FEED,
  wsInit: WS_CONNECTION_START,
  onOpen: wsConnectionSuccess,
  onClose: WS_CONNECTION_CLOSED,
  onError: WS_CONNECTION_ERROR,
  onMessage: wsGetFeed,
};
export const wsActionsHistory = {
  webSocket: WS_HISTORY,
  wsInit: WS_CONNECTION_START_HISTORY,
  onOpen: wsConnectionSuccessHistory,
  onClose: WS_CONNECTION_CLOSED_HISTORY,
  onError: WS_CONNECTION_ERROR_HISTORY,
  onMessage: wsGetHistory,
};

export const wsConnectionStartFeed = () => {
  return {
    type: WS_CONNECTION,
    wsActions: wsActionsFeed,
    urlWs: `${wsUrl}/all`
  };
};
export const wsConnectionStartHistory = () => {
  return {
    type: WS_CONNECTION,
    wsActions: wsActionsHistory,
    urlWs: `${wsUrl}`

  };
};
