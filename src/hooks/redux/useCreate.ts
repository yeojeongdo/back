import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { SET_MARKER } from "store/reducers/createReducer/actions";

const useCreate = () => {
  const dispatch = useDispatch();

  const setMarker = useCallback(
    latLng => {
      dispatch({
        type: SET_MARKER,
        payload: latLng,
      });
    },
    [dispatch]
  );

  return { setMarker };
};

export default useCreate;
