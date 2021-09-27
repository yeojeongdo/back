import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "store/reducers";
import { LOG_IN, LOG_OUT } from "store/reducers/authReducer/actions";

const useAuth = () => {
  const dispatch = useDispatch();
  const authState = useTypedSelector((state) => state.auth);

  const login = useCallback(() => {
    dispatch({
      type: LOG_IN,
    });
  }, [dispatch]);

  const logout = useCallback(() => {
    dispatch({
      type: LOG_OUT,
    });
  }, [dispatch]);

  return { authState, login, logout };
};

export default useAuth;
