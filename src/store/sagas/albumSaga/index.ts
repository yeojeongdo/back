import { all, fork } from "redux-saga/effects";
import { watchGetAlbums } from "./watchers";

export default function* albumSaga() {
  yield all([fork(watchGetAlbums)]);
}
