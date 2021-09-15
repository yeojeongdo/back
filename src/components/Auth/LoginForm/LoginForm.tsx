import Form from "components/Common/Form/Form";
import Input from "components/Common/Input/Input";
import { LoginContainer } from "./loginFromStyles";

const LoginForm: React.VFC = () => {
  return (
    <Form hasSubmit submitText="로그인">
      <LoginContainer>
        <h1>로그인</h1>
        <p>여정도에서 사람들의 여정을 찾아보세요.</p>
        <Input type="text" placeholder="아이디를 입력해주세요." />
        <Input type="password" placeholder="비밀번호를 입력해주세요." />
      </LoginContainer>
    </Form>
  );
};

export default LoginForm;
