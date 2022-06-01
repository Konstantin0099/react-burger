import React from "react";
import { compose, createStore, applyMiddleware } from "redux";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import App from "./components/app/app";
import rootReducer from "./services/reducers";
import { socketMiddleware } from "./services/wsRedux/middleware";
import "./index.css";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}
export const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(applyMiddleware(thunk, socketMiddleware()));

export const store = createStore(rootReducer, enhancer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
reportWebVitals();
