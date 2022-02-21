import React from "react";
import { compose, createStore, applyMiddleware } from 'redux';
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import App from "./components/app/app";
import { rootReducer } from './services/reducers';
import "./index.css";

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));

const store = createStore(rootReducer, enhancer);


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
       <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
reportWebVitals();
