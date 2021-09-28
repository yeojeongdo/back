import AdsForm from "components/Auth/AdsForm/AdsForm";
import LoginForm from "components/Auth/LoginForm/LoginForm";
import useAuth from "hooks/redux/useAuth";
import { Token } from "lib/Token";
import LoadingPage from "pages/LoadingPage/LoadingPage";
import { useEffect } from "react";
import { useHistory } from "react-router";
import isEmpty from "utils/isEmptyObject";
import { LoginPageLayout } from "./PageStyle";

const LoginPage = () => {
  const history = useHistory();
  const {
    authState: { loadMyInfoLoading, loginDone },
  } = useAuth();

  useEffect(() => {
    if (loginDone) {
      history.push("/");
    }
  }, [loginDone, history]);

  if (loadMyInfoLoading) {
    return <LoadingPage />;
  }

  return (
    <LoginPageLayout>
      <LoginForm />
      <AdsForm />
    </LoginPageLayout>
  );
};
export default LoginPage;
