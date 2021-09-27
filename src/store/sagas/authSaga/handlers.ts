import { call, put } from "@redux-saga/core/effects";
import { loginAPI } from "apis/authAPI";
import { AnyAction } from "redux";
import {
  LOG_IN_FAILURE,
  LOG_IN_REQUEST,
  LOG_IN_SUCCESS,
} from "store/reducers/authReducer/actions";

export function* handleLogin(action: AnyAction): any {
  try {
    const response = yield call(loginAPI, action.payload);
    console.log(response);
    yield put({
      type: LOG_IN_SUCCESS,
    });
  } catch (error) {
    yield put({
      type: LOG_IN_FAILURE,
    });
  }
}
