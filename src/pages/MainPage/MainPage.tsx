import Button from "components/Common/Button/Button";
import Map from "components/Main/Map/Map";
import { observer } from "mobx-react";
import { useHistory } from "react-router-dom";
import { MainPageStyle } from "./PageStyle";

const Main = () => {
  const history = useHistory();

  return (
    <MainPageStyle>
      <h1>여정도</h1>
      <Map />
      <Button onClick={() => history.push("/login")}>로그인 화면으로</Button>
      <Button onClick={() => history.push("/join")}>회원가입 화면으로</Button>
    </MainPageStyle>
  );
};

export default observer(Main);
