import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "store/reducers";
import { CLOSE_ALBUM, OPEN_ALBUM } from "store/reducers/albumReducer/actions";

const useAlbum = () => {
  const dispatch = useDispatch();

  const albumState = useTypedSelector((state) => state.album);

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

  return { albumState, openAlbum, closeAlbum };
};

export default useAlbum;
