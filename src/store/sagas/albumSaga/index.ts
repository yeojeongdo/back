import { all, fork } from "redux-saga/effects";
import { watchGetAlbum, watchGetAlbums } from "./watchers";

export default function* albumSaga() {
  yield all([fork(watchGetAlbums), fork(watchGetAlbum)]);
}
