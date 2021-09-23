import Form from "components/Common/Form/Form";
import Input from "components/Common/Input/Input";
import { JoinFormContainer } from "./joinFormStyles";

const JoinForm = () => {
  return (
    <Form hasSubmit submitText="로그인" onSubmit={() => {}}>
      <JoinFormContainer>
        <h1>회원가입</h1>
        <p>여정도에 가입해서 당신의 여정을 공유해보세요</p>
        <div>
          로그인
          <Input type="text" placeholder="아이디를 입력해주세요." />
        </div>
        <div>
          비밀번호
          <Input type="password" placeholder="비밀번호를 입력해주세요." />
        </div>
      </JoinFormContainer>
    </Form>
  );
};

export default JoinForm;
