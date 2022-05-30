import { wsUrl } from "../../../utils/data";
import { TPayloadGetHistory } from "../../types/data";
export const WS_FEED: "WS_FEED" = "WS_FEED";
export const CLOSE_WS_FEED: "CLOSE_WS_FEED" = "CLOSE_WS_FEED";
export const WS_CONNECTION: "WS_CONNECTION" = "WS_CONNECTION";
export const WS_CONNECTION_START: "WS_CONNECTION_START" = "WS_CONNECTION_START";
export const WS_CONNECTION_SUCCESS: "WS_CONNECTION_SUCCESS" = "WS_CONNECTION_SUCCESS";
export const WS_CONNECTION_ERROR: "WS_CONNECTION_ERROR" = "WS_CONNECTION_ERROR";
export const WS_CONNECTION_CLOSED: "WS_CONNECTION_CLOSED" = "WS_CONNECTION_CLOSED";
export const WS_GET_FEED: "WS_GET_FEED" = "WS_GET_FEED";

export const WS_HISTORY: "WS_HISTORY" = "WS_HISTORY";
export const WS_CONNECTION_START_HISTORY: "WS_CONNECTION_START_HISTORY" = "WS_CONNECTION_START_HISTORY";
export const WS_CONNECTION_SUCCESS_HISTORY: "WS_CONNECTION_SUCCESS_HISTORY" = "WS_CONNECTION_SUCCESS_HISTORY";
export const WS_CONNECTION_CLOSED_HISTORY: "WS_CONNECTION_CLOSED_HISTORY" = "WS_CONNECTION_CLOSED_HISTORY";
export const WS_CONNECTION_ERROR_HISTORY: "WS_CONNECTION_ERROR_HISTORY" = "WS_CONNECTION_ERROR_HISTORY";
export const WS_GET_HISTORY: "WS_GET_HISTORY" = "WS_GET_HISTORY";

export interface IWsFeedAction {
  type: typeof WS_FEED;
  payload: WebSocket;
}
export interface IWsConnectionSuccessAction {
  type: typeof WS_CONNECTION_SUCCESS;
}
export interface IWsConnectionErrorAction {
  type: typeof WS_CONNECTION_ERROR;
}
export interface IWsConnectionClosedAction {
  type: typeof WS_CONNECTION_CLOSED;
}
export interface IWsGetFeedAction {
  type: typeof WS_GET_FEED;
  payload: any;
}
export type TWsFeedActions =
  | IWsFeedAction
  | IWsConnectionSuccessAction
  | IWsConnectionErrorAction
  | IWsConnectionClosedAction
  | IWsGetFeedAction;

export interface IWsHistoryAction {
  type: typeof WS_HISTORY;
  payload: WebSocket;
}

export interface IWsGetHistoryAction {
  type: typeof WS_GET_HISTORY;
  payload: TPayloadGetHistory;
}
export interface IWsConnectionErrorHistoryAction {
  type: typeof WS_CONNECTION_ERROR_HISTORY;
}
export interface IWsConnectionSuccessHistoryAction {
  type: typeof WS_CONNECTION_SUCCESS_HISTORY;
}
export interface IWsConnectionClosedHistoryAction {
  type: typeof WS_CONNECTION_CLOSED_HISTORY;
}
export type TWsHistoryActions =
  | IWsHistoryAction
  | IWsGetHistoryAction
  | IWsConnectionErrorHistoryAction
  | IWsConnectionSuccessHistoryAction
  | IWsConnectionClosedHistoryAction;

export const wsFeed = (payload: WebSocket): IWsFeedAction => {
  return {
    type: WS_FEED,
    payload,
  };
};
export const wsConnectionSuccess = (): IWsConnectionSuccessAction => {
  return {
    type: WS_CONNECTION_SUCCESS,
  };
};
export const wsConnectionError = (): IWsConnectionErrorAction => {
  return {
    type: WS_CONNECTION_ERROR,
  };
};
export const wsConnectionClosed = (): IWsConnectionClosedAction => {
  return {
    type: WS_CONNECTION_CLOSED,
  };
};
export const wsGetFeed = (data: any): IWsGetFeedAction => {
  return {
    type: WS_GET_FEED,
    payload: data,
  };
};

export const wsHistory = (payload: WebSocket): IWsHistoryAction => {
  return {
    type: WS_HISTORY,
    payload,
  };
};
export const wsConnectionErrorHistory = (): IWsConnectionErrorHistoryAction => {
  return {
    type: WS_CONNECTION_ERROR_HISTORY,
  };
};
export const wsConnectionSuccessHistory = (): IWsConnectionSuccessHistoryAction => {
  return {
    type: WS_CONNECTION_SUCCESS_HISTORY,
  };
};
export const wsGetHistory = (data: TPayloadGetHistory): IWsGetHistoryAction => {
  return {
    type: WS_GET_HISTORY,
    payload: data,
  };
};
export const wsConnectionClosedHistory = (): IWsConnectionClosedHistoryAction => {
  return {
    type: WS_CONNECTION_CLOSED_HISTORY,
  };
};
export interface IWsActionsFeed {
  webSocket: typeof wsFeed;
  onOpen: typeof wsConnectionSuccess;
  onClose: typeof wsConnectionClosed;
  onError: typeof wsConnectionError;
  onMessage: typeof wsGetFeed;
}

export const wsActionsFeed: IWsActionsFeed = {
  webSocket: wsFeed,
  onOpen: wsConnectionSuccess,
  onClose: wsConnectionClosed,
  onError: wsConnectionError,
  onMessage: wsGetFeed,
};

export interface IWsActionsHistory {
  webSocket: typeof wsHistory;
  onOpen: typeof wsConnectionSuccessHistory;
  onClose: typeof wsConnectionClosedHistory;
  onError: typeof wsConnectionErrorHistory;
  onMessage: typeof wsGetHistory;
}
export const wsActionsHistory: IWsActionsHistory = {
  webSocket: wsHistory,
  onOpen: wsConnectionSuccessHistory,
  onClose: wsConnectionClosedHistory,
  onError: wsConnectionErrorHistory,
  onMessage: wsGetHistory,
};

export type TWsAction = IWsActionsFeed | IWsActionsHistory;

export type TWsConnectionStart = {
  type: typeof WS_CONNECTION;
  wsActions: TWsAction;
  urlWs: string;
};

export const wsConnectionStartFeed = (): TWsConnectionStart => {
  return {
    type: WS_CONNECTION,
    wsActions: wsActionsFeed,
    urlWs: `${wsUrl}/all`,
  };
};
export const wsConnectionStartHistory = (): TWsConnectionStart => {
  return {
    type: WS_CONNECTION,
    wsActions: wsActionsHistory,
    urlWs: `${wsUrl}`,
  };
};
