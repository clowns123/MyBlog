import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import theme from "./assets/css/theme";
import store from "./store";

ReactDOM.render(
  <Provider store={store} theme={theme}>
    <App />
  </Provider>,
  document.getElementById("root")
);
