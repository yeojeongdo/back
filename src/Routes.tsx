import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import LoginPage from "pages/LoginPage/LoginPage";
import JoinPage from "pages/JoinPage/JoinPage";
import Main from "pages/MainPage/MainPage";
import useStore from "hooks/useStore";
import { useObserver } from "mobx-react-lite";

const Routes = () => {
  return useObserver(() => (
    <Router>
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route exact path="/login">
          <LoginPage />
        </Route>
        <Route exact path="/join">
          <JoinPage />
        </Route>
      </Switch>
    </Router>
  ));
};

export default Routes;
