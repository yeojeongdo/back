import Map from "components/Main/Map/Map";
import useAuth from "hooks/redux/useAuth";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { MainPageStyle } from "./PageStyle";

const Main = () => {
  const history = useHistory();
  const { authState } = useAuth();

  useEffect(() => {
    if (!authState.isLoggedIn) {
      history.replace("/login");
    }
  }, [authState, history]);

  return (
    <MainPageStyle>
      <h1>여정도</h1>
      <Map />
    </MainPageStyle>
  );
};

export default Main;
