import LoginForm from "components/Auth/LoginForm/LoginForm";
import { Link } from "react-router-dom";
import GlobalStyle from "styles/globalStyle";

function App() {
  return (
    <div>
      <GlobalStyle />
      여정도
      <LoginForm />
      <Link to="/other">다른페이지</Link>
    </div>
  );
}

export default App;
