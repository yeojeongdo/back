import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "store/reducers";
import {
  CLOSE_ALBUM,
  GET_ALBUMS_REQUEST,
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

  return { albumState, openAlbum, closeAlbum, getAlbums };
};

export default useAlbum;
