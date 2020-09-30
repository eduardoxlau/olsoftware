import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { createWhitelistFilter } from "redux-persist-transform-filter";
import reducers from "./reducers";
import sagas from "./sagas";

const persistConfig = {
  key: "olsoftwarePersist",
  storage,
  transforms: [
    createWhitelistFilter("auth", ["user", "isAuth"]),
    createWhitelistFilter("programming", ["data"]),
  ],
};

const persistReducers = persistReducer(persistConfig, reducers);

const sagaMiddleware = createSagaMiddleware();

const store = createStore(persistReducers, applyMiddleware(sagaMiddleware));

const persistor = persistStore(store);

sagaMiddleware.run(sagas);

export { persistor, store };
