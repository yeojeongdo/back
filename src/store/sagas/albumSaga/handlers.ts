import { call, put } from "redux-saga/effects";
import { albumsAPI } from "apis/albumAPI";
import {
  GET_ALBUMS_FAILURE,
  GET_ALBUMS_SUCCESS,
} from "store/reducers/albumReducer/actions";

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
