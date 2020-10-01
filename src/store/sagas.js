import { routinePromiseWatcherSaga } from "redux-saga-routines";
import { all } from "redux-saga/effects";
import { authWatcherSaga } from "../ducks/auth";
import { programmingWatcherSaga } from "../ducks/programming";
import { gestionWatcherSaga } from "../ducks/gestion";
import { profileWatcherSaga } from "../ducks/profile";
import { roleWatcherSaga } from "../ducks/role";
import { userWatcherSaga } from "../ducks/user";

export default function* rootSaga() {
  yield all([
    // external
    routinePromiseWatcherSaga(),

    // app
    authWatcherSaga(),
    programmingWatcherSaga(),
    gestionWatcherSaga(),
    profileWatcherSaga(),
    roleWatcherSaga(),
    userWatcherSaga(),
  ]);
}
