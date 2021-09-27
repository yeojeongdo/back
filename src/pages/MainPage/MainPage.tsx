import Map from "components/Main/Map/Map";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { MainPageStyle } from "./PageStyle";

const Main = () => {
  const history = useHistory();

  return (
    <MainPageStyle>
      <h1>여정도</h1>
      <Map />
    </MainPageStyle>
  );
};

export default Main;
