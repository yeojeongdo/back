import { call, put } from "redux-saga/effects";
import { albumDetailAPI, albumsAPI } from "apis/albumAPI";
import {
  GET_ALBUMS_FAILURE,
  GET_ALBUMS_SUCCESS,
  GET_ALBUM_FAILURE,
  GET_ALBUM_SUCCESS,
} from "store/reducers/albumReducer/actions";
import { AnyAction } from "redux";

export function* handleGetAlbums(): any {
  try {
    const response = yield call(albumsAPI);
    yield put({
      type: GET_ALBUMS_SUCCESS,
      payload: response,
    });
  } catch (error: any) {
    yield put({
      type: GET_ALBUMS_FAILURE,
      payload: error.response.data,
    });
  }
}

export function* handleGetAlbum(action: AnyAction): any {
  try {
    const response = yield call(albumDetailAPI, action.payload);
    yield put({
      type: GET_ALBUM_SUCCESS,
      payload: response,
    });
  } catch (error: any) {
    yield put({
      type: GET_ALBUM_FAILURE,
      payload: error.response.data,
    });
  }
}
