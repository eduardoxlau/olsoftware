/* eslint-disable import/prefer-default-export */
import { call, put, takeEvery } from "redux-saga/effects";
import { validateAdmin } from "../../api";
import { login, logout } from "./actions";

const timeout = async () => {
  await new Promise((resolve) => setTimeout(() => resolve(), 1500));
};

function* auth(action) {
  const { values } = action.payload;
  yield put(login.request());
  try {
    yield call(timeout);
    let user = validateAdmin(values);
    if (!user) throw "credentiales Wrong";
    yield put(login.success(user));
    yield put(login.fulfill(user));
  } catch (e) {
    yield put(login.failure());
  }
}

function* signOut() {
  yield put(logout.request());
  try {
    yield put(logout.success());
    yield put(logout.fulfill());
  } catch (e) {
    yield put(logout.failure());
  }
}
export function* authWatcherSaga() {
  yield takeEvery(login.TRIGGER, auth);
  yield takeEvery(logout.TRIGGER, signOut);
}
