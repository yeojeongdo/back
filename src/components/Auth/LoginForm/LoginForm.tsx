import Form from "components/Common/Form/Form";
import Input from "components/Common/Input/Input";
import useInput from "hooks/useInput";
import { useCallback, useEffect } from "react";
import loginValidation from "utils/loginValidation";
import { LoginContainer } from "./loginFromStyles";
import { Link, useHistory } from "react-router-dom";
import useStore from "hooks/useStore";
import { useObserver } from "mobx-react-lite";

const LoginForm: React.VFC = () => {
  const { push } = useHistory();
  const { user } = useStore();
  const [id, onChangeId] = useInput("");
  const [password, onChangePassword] = useInput("");

  const handleSubmit = useCallback(async () => {
    const loginData = {
      id,
      password,
    };
    if (loginValidation(loginData)) {
      //!TODO Login Data HTTP connection
      user.login();
      push("/");
    }
  }, [id, password, user, push]);

  return (
    <Form hasSubmit submitText="로그인" onSubmit={handleSubmit}>
      <LoginContainer>
        <h1>로그인</h1>
        <p>여정도에서 사람들의 여정을 찾아보세요.</p>
        <div>
          로그인
          <Input
            type="text"
            placeholder="아이디를 입력해주세요."
            value={id}
            onChange={onChangeId}
          />
        </div>
        <div>
          비밀번호
          <Input
            type="password"
            placeholder="비밀번호를 입력해주세요."
            value={password}
            onChange={onChangePassword}
          />
        </div>
        <Link className="link-to-join" to="/join">
          회원이 아니신가요?
        </Link>
      </LoginContainer>
    </Form>
  );
};

export default LoginForm;
