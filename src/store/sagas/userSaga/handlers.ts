import { call, put } from "@redux-saga/core/effects";
import { followersAPI, followingsAPI, userInfoAPI } from "apis/userAPI";
import { AnyAction } from "redux";
import {
  GET_USER_FOLLOWERS_FAILURE,
  GET_USER_FOLLOWERS_REQUEST,
  GET_USER_FOLLOWERS_SUCCESS,
  GET_USER_FOLLOWINGS_FAILURE,
  GET_USER_FOLLOWINGS_SUCCESS,
  GET_USER_INFO_FAILURE,
  GET_USER_INFO_SUCCESS,
} from "store/reducers/userReducer/actions";

export function* handleGetUserInfoAll(action: AnyAction): any {
  try {
    const userInfoResponse = yield call(userInfoAPI, action.payload);
    const followersResposne = yield call(followersAPI, action.payload);
    const followingsResponse = yield call(followingsAPI, action.payload);

    yield put({
      type: GET_USER_INFO_SUCCESS,
      payload: userInfoResponse.data.data,
    });
    yield put({
      type: GET_USER_FOLLOWERS_SUCCESS,
      payload: followersResposne.data.data,
    });
    yield put({
      type: GET_USER_FOLLOWINGS_SUCCESS,
      payload: followingsResponse.data.data,
    });
  } catch (error: any) {
    yield put({
      type: GET_USER_INFO_FAILURE,
      payload: error.response.data,
    });
    yield put({
      type: GET_USER_FOLLOWINGS_FAILURE,
      payload: error.response.data,
    });
    yield put({
      type: GET_USER_FOLLOWERS_FAILURE,
      payload: error.response.data,
    });
  }
}
