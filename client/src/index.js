import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
// import redux store
import store from "./store.js";
ReactDOM.render(
  //wrapping our app with provider component
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
