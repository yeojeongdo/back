import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "store/reducers";
import { SEARCH_MAP } from "store/reducers/searchReducer/actions";

const useSearch = () => {
  const dispatch = useDispatch();

  const searchMapListState = useTypedSelector(state => state.search);

  const searchMap = useCallback(
    data => {
      dispatch({
        type: SEARCH_MAP,
        payload: data,
      });
    },
    [dispatch]
  );

  return { searchMap, searchMapListState };
};

export default useSearch;
