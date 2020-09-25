/* eslint-disable import/prefer-default-export */
import { call, put, takeEvery } from "redux-saga/effects";
import { login } from "./actions";

const timeout = async () => {
  await new Promise((resolve) => setTimeout(() => resolve(), 1500));
};

function* auth(action) {
  const { values } = action.payload;
  console.log(values);
  yield put(login.request());
  try {
    yield call(timeout);
    yield put(login.failure());
    yield put(login.success(values));
    yield put(login.fulfill(values));
  } catch (e) {
    yield put(login.failure());
  }
}

export function* authWatcherSaga() {
  yield takeEvery(login.TRIGGER, auth);
}
