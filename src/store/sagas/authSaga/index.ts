import { all, fork } from "redux-saga/effects";
import { watchLogin } from "./watchers";

export default function* authSaga() {
  yield all([fork(watchLogin)]);
}
