import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { GlobalStyle } from "./styled";
import App from "./App";
import store from "./store";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
