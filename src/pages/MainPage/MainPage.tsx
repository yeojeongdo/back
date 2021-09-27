import Map from "components/Main/Map/Map";
import useCounter from "hooks/redux/useCounter";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { MainPageStyle } from "./PageStyle";

const Main = () => {
  const history = useHistory();
  const { number, decrease, increase } = useCounter();

  return (
    <MainPageStyle>
      {number}
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
      <h1>여정도</h1>
      <Map />
    </MainPageStyle>
  );
};

export default Main;
