import Map from "components/Main/Map/Map";
import useStore from "hooks/useStore";
import { observer } from "mobx-react";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { MainPageStyle } from "./PageStyle";

const Main = () => {
  const {
    user: { isLoggedIn },
  } = useStore();
  const history = useHistory();

  useEffect(() => {
    if (!isLoggedIn) {
      history.replace("/login");
    }
  }, [isLoggedIn, history]);

  return (
    <MainPageStyle>
      <h1>여정도</h1>
      <Map />
    </MainPageStyle>
  );
};

export default observer(Main);
