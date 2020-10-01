/* eslint-disable import/prefer-default-export */
import { call, put, takeEvery } from "redux-saga/effects";
import { submit, remove, filter } from "./actions";

const timeout = async (time = 1000) => {
  await new Promise((resolve) => setTimeout(() => resolve(), time));
};

function* submitUser(action) {
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
function* removeUser(action) {
  const { payload } = action;
  yield put(remove.request());
  try {
    yield call(timeout, 700);
    yield put(remove.success(payload));
    yield put(remove.fulfill(payload));
  } catch (e) {
    yield put(remove.failure());
  }
}

function* filterUser(action) {
  const { values } = action.payload;
  yield put(filter.request());
  try {
    yield call(timeout, 700);
    yield put(filter.success(values));
    yield put(filter.fulfill(values));
  } catch (e) {
    yield put(filter.failure());
  }
}
export function* userWatcherSaga() {
  yield takeEvery(submit.TRIGGER, submitUser);
  yield takeEvery(remove.TRIGGER, removeUser);
  yield takeEvery(filter.TRIGGER, filterUser);
}
