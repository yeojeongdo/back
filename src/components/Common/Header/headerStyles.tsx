import styled from "@emotion/styled";
import { MAIN_COLOR } from "styles/colors";

export const HeaderContainer = styled.header`
  width: 100%;
  padding: 10px 20px;
  line-height: 1rem;
  background-color: ${MAIN_COLOR};
  position: fixed;
  left: 0;
  top: 0;
  z-index: 9999;
  .header-title {
    font-size: 16px;
  }
`;
