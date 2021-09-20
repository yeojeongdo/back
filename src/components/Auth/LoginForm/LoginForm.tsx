import Form from "components/Common/Form/Form";
import Input from "components/Common/Input/Input";
import useInput from "hooks/useInput";
import { useCallback } from "react";
import loginValidation from "utils/loginValidation";
import { LoginContainer } from "./loginFromStyles";

const LoginForm: React.VFC = () => {
  const [id, onChangeId] = useInput("");
  const [password, onChangePassword] = useInput("");

  const handleSubmit = useCallback(() => {
    const loginData = {
      id,
      password,
    };
    loginValidation(loginData);

    //!TODO Login Data HTTP connection
  }, [id, password]);

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
      </LoginContainer>
    </Form>
  );
};

export default LoginForm;
