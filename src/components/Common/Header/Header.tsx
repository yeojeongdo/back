import Search from "components/Search/Search";
import useAuth from "hooks/redux/useAuth";
import { useCallback, useEffect } from "react";
import { useHistory } from "react-router";
import { HeaderContainer } from "./headerStyles";

const Header = () => {
  const history = useHistory();
  const { authState, logout } = useAuth();

  const pushMainPage = useCallback(() => {
    history.push("/");
  }, [history]);

  const handleLogout = useCallback(() => {
    logout();
    window.location.replace("/login");
  }, [logout]);

  return (
    <>
      <HeaderContainer>
        <h1 className="header-title" onClick={pushMainPage}>
          여정도
        </h1>
        <div className="header-search">
          <Search />
        </div>
        <ul className="header-options">
          <li>{authState.myInfo?.name}님 환영합니다</li>
          <li className="logout" onClick={handleLogout}>
            로그아웃
          </li>
        </ul>
      </HeaderContainer>
    </>
  );
};

export default Header;
