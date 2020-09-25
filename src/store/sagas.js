import { routinePromiseWatcherSaga } from "redux-saga-routines";
import { all } from "redux-saga/effects";
import { authWatcherSaga } from "../ducks/auth";

export default function* rootSaga() {
  yield all([
    // external
    routinePromiseWatcherSaga(),

    // app
    authWatcherSaga(),
  ]);
}
