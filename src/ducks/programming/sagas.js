/* eslint-disable import/prefer-default-export */
import { call, put, takeEvery } from "redux-saga/effects";
import { submit } from "./actions";

const timeout = async () => {
  await new Promise((resolve) => setTimeout(() => resolve(), 1500));
};

function* auth(action) {
  const { values } = action.payload;
  console.log(values);
  yield put(submit.request());
  try {
    yield call(timeout);
    yield put(submit.success(values));
    yield put(submit.fulfill(values));
  } catch (e) {
    yield put(submit.failure());
  }
}

export function* programmingWatcherSaga() {
  yield takeEvery(submit.TRIGGER, auth);
}
