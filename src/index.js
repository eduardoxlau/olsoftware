import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./store";
import Screens from "./navigation";
import * as serviceWorker from "./serviceWorker";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

render(
  <Provider store={store}>
    <Screens />
  </Provider>,
  document.getElementById("root")
);
serviceWorker.unregister();
