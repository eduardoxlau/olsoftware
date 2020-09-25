import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./store";
import App from "./screens/login";
import * as serviceWorker from "./serviceWorker";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
serviceWorker.unregister();
