import { AxiosError, AxiosResponse } from "axios";
import { createAction, createAsyncAction } from "typesafe-actions";

export const GET_ALBUMS_REQUEST = "album/GET_ALBUMS_REQUEST";
export const GET_ALBUMS_SUCCESS = "album/GET_ALBUMS_SUCCESS";
export const GET_ALBUMS_FAILURE = "album/GET_ALBUMS_FAILURE";

export const GET_COMMENTS_REQUEST = "album/GET_COMMENTS_REQUEST";
export const GET_COMMENTS_SUCCESS = "album/GET_COMMENTS_SUCCESS";
export const GET_COMMENTS_FAILURE = "album/GET_COMMENTS_FAILURE";

export const CREATE_COMMENT_REQUEST = "album/CREATE_COMMENT_REQUEST";
export const CREATE_COMMENT_SUCCESS = "album/CREATE_COMMENT_SUCCESS";
export const CREATE_COMMENT_FAILURE = "album/CREATE_COMMENT_FAILURE";

export const GET_ALBUM_REQUEST = "album/GET_ALBUM_REQUEST";
export const GET_ALBUM_SUCCESS = "album/GET_ALBUM_SUCCESS";
export const GET_ALBUM_FAILURE = "album/GET_ALBUM_FAILURE";

export const OPEN_ALBUM = "album/OPEN_ALBUM";
export const CLOSE_ALBUM = "album/CLOSE_ALBUM";

export const getAlbumsAsyncAction = createAsyncAction(
  GET_ALBUMS_REQUEST,
  GET_ALBUMS_SUCCESS,
  GET_ALBUMS_FAILURE
)<any, AxiosResponse, AxiosError<any>>();

export const getCommentsAsyncAction = createAsyncAction(
  GET_COMMENTS_REQUEST,
  GET_COMMENTS_SUCCESS,
  GET_COMMENTS_FAILURE
)<any, AxiosResponse, AxiosError<any>>();

export const createCommentAsyncAction = createAsyncAction(
  CREATE_COMMENT_REQUEST,
  CREATE_COMMENT_SUCCESS,
  CREATE_COMMENT_FAILURE
)<any, AxiosResponse, AxiosError<any>>();

export const getAlbumAsyncAction = createAsyncAction(
  GET_ALBUM_REQUEST,
  GET_ALBUM_SUCCESS,
  GET_ALBUM_FAILURE
)<any, AxiosResponse, AxiosError<any>>();

export const openAlbum = createAction(OPEN_ALBUM)();
export const closeAlbum = createAction(CLOSE_ALBUM)();
