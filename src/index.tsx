import React from "react";
import ReactDOM from "react-dom";
import Routes from "Routes";
import GlobalStyle from "styles/globalStyle";
import { Provider } from "react-redux";
import { applyMiddleware, compose, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "store/reducers";

const enhancer =
  process.env.NODE_ENV === "production"
    ? compose(applyMiddleware())
    : composeWithDevTools(applyMiddleware());

const store = createStore(rootReducer, enhancer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyle />
      <Routes />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
