import React from "react";
import { compose, createStore, applyMiddleware } from "redux";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import App from "./components/app/app";
import rootReducer from "./services/reducers";
import { socketMiddleware } from "./wsRedux/middleware";
import { wsUrl } from "./utils/data";
import "./index.css";
import {
  WS_FEED,
  WS_CONNECTION_CLOSED,
  WS_CONNECTION_ERROR,
  WS_CONNECTION_START,
  WS_CONNECTION_SUCCESS,
  WS_GET_FEED,
  WS_HISTORY,
  WS_CONNECTION_START_HISTORY,
  WS_CONNECTION_SUCCESS_HISTORY,
  WS_CONNECTION_CLOSED_HISTORY,
  WS_CONNECTION_ERROR_HISTORY,
  WS_GET_HISTORY,
} from "./wsRedux/action-types";

export const wsActionsFeed = {
  webSocket: WS_FEED,
  wsInit: WS_CONNECTION_START,
  onOpen: WS_CONNECTION_SUCCESS,
  onClose: WS_CONNECTION_CLOSED,
  onError: WS_CONNECTION_ERROR,
  onMessage: WS_GET_FEED,
};

export const wsActionsHistory = {
  webSocket: WS_HISTORY,
  wsInit: WS_CONNECTION_START_HISTORY,
  onOpen: WS_CONNECTION_SUCCESS_HISTORY,
  onClose: WS_CONNECTION_CLOSED_HISTORY,
  onError: WS_CONNECTION_ERROR_HISTORY,
  onMessage: WS_GET_HISTORY,
};
const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers(applyMiddleware(thunk, socketMiddleware(wsUrl, wsActionsFeed, wsActionsHistory)));

const initStore = (initialState = {}) => createStore(rootReducer, initialState, enhancer);
const store = initStore();
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
reportWebVitals();
