import Button from "components/Common/Button/Button";
import { observer } from "mobx-react";
import { useHistory } from "react-router-dom";

const Main = () => {
  const history = useHistory();

  return (
    <div>
      메인화면 구현안됨.
      <Button onClick={() => history.push("/login")}>로그인 화면으로</Button>
      <Button onClick={() => history.push("/join")}>회원가입 화면으로</Button>
    </div>
  );
};
export default observer(Main);
