import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./store";
import Screens from "./navigation";
import * as serviceWorker from "./serviceWorker";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Screens />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
serviceWorker.unregister();
