import { all, fork } from "redux-saga/effects";
import albumSaga from "./albumSaga";
import authSaga from "./authSaga";

export default function* rootSaga() {
  yield all([fork(authSaga), fork(albumSaga)]);
}
