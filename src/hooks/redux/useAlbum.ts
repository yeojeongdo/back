import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "store/reducers";
import {
  CLOSE_ALBUM,
  GET_ALBUMS_REQUEST,
  GET_ALBUM_REQUEST,
  OPEN_ALBUM,
} from "store/reducers/albumReducer/actions";

const useAlbum = () => {
  const dispatch = useDispatch();

  const albumState = useTypedSelector((state) => state.album);

  const getAlbums = useCallback(
    (albumId?: string) => {
      dispatch({
        type: GET_ALBUMS_REQUEST,
        payload: albumId,
      });
    },
    [dispatch]
  );

  const getAlbum = useCallback(
    (albumId: number) => {
      dispatch({
        type: GET_ALBUM_REQUEST,
        payload: albumId,
      });
    },
    [dispatch]
  );

  const openAlbum = useCallback(() => {
    dispatch({
      type: OPEN_ALBUM,
    });
  }, [dispatch]);

  const closeAlbum = useCallback(() => {
    dispatch({
      type: CLOSE_ALBUM,
    });
  }, [dispatch]);

  return { albumState, openAlbum, closeAlbum, getAlbums, getAlbum };
};

export default useAlbum;
