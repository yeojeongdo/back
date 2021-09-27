import AdsForm from "components/Auth/AdsForm/AdsForm";
import LoginForm from "components/Auth/LoginForm/LoginForm";
import { LoginPageLayout } from "./PageStyle";

const LoginPage = () => {
  return (
    <LoginPageLayout>
      <LoginForm />
      <AdsForm />
    </LoginPageLayout>
  );
};
export default LoginPage;
