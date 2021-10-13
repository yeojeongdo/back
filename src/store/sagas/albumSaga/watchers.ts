import { takeLatest } from "redux-saga/effects";
import {
  GET_ALBUMS_REQUEST,
  GET_ALBUM_REQUEST,
} from "store/reducers/albumReducer/actions";
import { handleGetAlbum, handleGetAlbums } from "./handlers";

export function* watchGetAlbums() {
  yield takeLatest(GET_ALBUMS_REQUEST, handleGetAlbums);
}

export function* watchGetAlbum() {
  yield takeLatest(GET_ALBUM_REQUEST, handleGetAlbum);
}
