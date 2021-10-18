import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "store/reducers";
import {
  SEARCH_MAP,
  SET_CENTER_SEARCHING,
} from "store/reducers/searchReducer/actions";

const useSearch = () => {
  const dispatch = useDispatch();

  const searchMapListState = useTypedSelector(state => state.search);

  const searchMap = useCallback(
    (data, searchValue) => {
      dispatch({
        type: SEARCH_MAP,
        payload: { data, searchValue },
      });
    },
    [dispatch]
  );

  const setCenterSearching = useCallback(
    data => {
      dispatch({
        type: SET_CENTER_SEARCHING,
        payload: data,
      });
    },
    [dispatch]
  );

  return { searchMap, setCenterSearching, searchMapListState };
};

export default useSearch;
