import { takeLatest } from "redux-saga/effects";
import { GET_ALBUMS_REQUEST } from "store/reducers/albumReducer/actions";
import { handleGetAlbums } from "./handlers";

export function* watchGetAlbums() {
  yield takeLatest(GET_ALBUMS_REQUEST, handleGetAlbums);
}
