import React from "react";
import ReactDOM from "react-dom";
import Routes from "Routes";
import GlobalStyle from "styles/globalStyle";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Routes />
  </React.StrictMode>,
  document.getElementById("root")
);
