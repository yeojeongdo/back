import { AxiosError, AxiosResponse } from "axios";
import { createAction, createAsyncAction } from "typesafe-actions";

export const GET_ALBUMS_REQUEST = "album/GET_ALBUMS_REQUEST";
export const GET_ALBUMS_SUCCESS = "album/GET_ALBUMS_SUCCESS";
export const GET_ALBUMS_FAILURE = "album/GET_ALBUMS_FAILURE";

export const OPEN_ALBUM = "album/OPEN_ALBUM";
export const CLOSE_ALBUM = "album/CLOSE_ALBUM";

export const getAlbumsAsyncAction = createAsyncAction(
  GET_ALBUMS_REQUEST,
  GET_ALBUMS_SUCCESS,
  GET_ALBUMS_FAILURE
)<any, AxiosResponse, AxiosError<any>>();

export const openAlbum = createAction(OPEN_ALBUM)();
export const closeAlbum = createAction(CLOSE_ALBUM)();
