import styled from "@emotion/styled";
import { MAIN_COLOR } from "styles/colors";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 4rem;
  background-color: ${MAIN_COLOR};
  position: fixed;
  left: 0;
  top: 0;
  gap: 15px;
  z-index: 9999;
  .header-title {
    font-size: 16px;
  }
  .header-search {
    display: flex;
    justify-content: center;
  }
  .header-options {
    display: flex;
    list-style: none;
    align-items: center;
    @media (max-width: 768px) {
      flex-direction: column;
    }
    li {
      cursor: pointer;
      margin-right: 1rem;
    }
    & > .logout {
      cursor: pointer;
    }
  }
`;
