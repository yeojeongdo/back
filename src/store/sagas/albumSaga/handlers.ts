import { call, put } from "redux-saga/effects";
import {
  albumDetailAPI,
  albumsAPI,
  commentsAPI,
  createCommentAPI,
} from "apis/albumAPI";
import {
  CREATE_COMMENT_FAILURE,
  CREATE_COMMENT_SUCCESS,
  GET_ALBUMS_FAILURE,
  GET_ALBUMS_SUCCESS,
  GET_ALBUM_FAILURE,
  GET_ALBUM_SUCCESS,
  GET_COMMENTS_FAILURE,
  GET_COMMENTS_SUCCESS,
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

export function* handleGetComments(action: AnyAction): any {
  try {
    const response = yield call(commentsAPI, action.payload);
    yield put({
      type: GET_COMMENTS_SUCCESS,
      payload: response,
    });
  } catch (error: any) {
    yield put({
      type: GET_COMMENTS_FAILURE,
      payload: error.response.data,
    });
  }
}

export function* handleCreateComment(action: AnyAction): any {
  try {
    const response = yield call(createCommentAPI, action.payload);
    yield put({
      type: CREATE_COMMENT_SUCCESS,
      payload: response,
    });
  } catch (error: any) {
    yield put({
      type: CREATE_COMMENT_FAILURE,
      payload: error.response.data,
    });
  }
}
