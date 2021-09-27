import { takeLatest } from "@redux-saga/core/effects";
import { LOG_IN_REQUEST } from "store/reducers/authReducer/actions";
import { handleLogin } from "./handlers";

export function* watchLogin() {
  yield takeLatest(LOG_IN_REQUEST, handleLogin);
}
