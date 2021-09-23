import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import LoginPage from "pages/LoginPage/LoginPage";
import JoinPage from "pages/JoinPage/JoinPage";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/">
          <App />
        </Route>
        <Route exact path="/login">
          <LoginPage />
        </Route>
        <Route exact path="/join">
          <JoinPage />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
