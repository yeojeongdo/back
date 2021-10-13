import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "store/reducers";
import { SET_MARKER } from "store/reducers/createReducer/actions";

const useCreate = () => {
  const dispatch = useDispatch();

  const markerState = useTypedSelector(state => state.create);

  const setMarker = useCallback(
    latLng => {
      dispatch({
        type: SET_MARKER,
        payload: latLng,
      });
    },
    [dispatch]
  );

  return { setMarker, markerState };
};

export default useCreate;
