import { css, Global } from "@emotion/react";

const GlobalStyle = () => {
  return (
    <Global
      styles={css`
        *,
        *::after,
        *::before {
          box-sizing: border-box;
          font-family: "Noto Sans KR", sans-serif;
        }
        body {
          margin: 0px;
          padding: 0px;
        }
      `}
    />
  );
};

export default GlobalStyle;
