import { useHistory } from "react-router-dom";
import Button from "components/Common/Button/Button";
import GlobalStyle from "styles/globalStyle";

function App() {
  const history = useHistory();

  return (
    <div>
      <GlobalStyle />
      메인화면 구현안됨.
      <Button onClick={() => history.push("/login")}>로그인 화면으로</Button>
      <Button onClick={() => history.push("/join")}>회원가입 화면으로</Button>
    </div>
  );
}

export default App;
