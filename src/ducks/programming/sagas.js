/* eslint-disable import/prefer-default-export */
import { call, put, takeEvery } from "redux-saga/effects";
import { submit, remove } from "./actions";

const timeout = async () => {
  await new Promise((resolve) => setTimeout(() => resolve(), 1500));
};

function* submitProgramming(action) {
  const { values } = action.payload;
  yield put(submit.request());
  try {
    yield call(timeout);
    yield put(submit.success(values));
    yield put(submit.fulfill(values));
  } catch (e) {
    yield put(submit.failure());
  }
}
function* removeProgramming(action) {
  const { payload } = action;
  yield put(remove.request());
  try {
    yield call(timeout);
    yield put(remove.success(payload));
    yield put(remove.fulfill(payload));
  } catch (e) {
    yield put(remove.failure());
  }
}
export function* programmingWatcherSaga() {
  yield takeEvery(submit.TRIGGER, submitProgramming);
  yield takeEvery(remove.TRIGGER, removeProgramming);
}
