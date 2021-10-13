import { all, fork } from "redux-saga/effects";
import { watchGetAlbum, watchGetAlbums, watchGetComments } from "./watchers";

export default function* albumSaga() {
  yield all([
    fork(watchGetAlbums),
    fork(watchGetAlbum),
    fork(watchGetComments),
  ]);
}
