import styled from "@emotion/styled";
import { MAIN_COLOR } from "styles/colors";

export const HeaderContainer = styled.header`
  background-color: ${MAIN_COLOR};
  box-shadow: 0 0 10px 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 9999;
`;

export const HeaderContent = styled.div`
  margin: 0 auto;
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 4rem;
  gap: 15px;
  color: white;
  .header-title {
    font-size: 16px;
    cursor: pointer;
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
      display: flex;
      p {
        padding: 0;
        margin: 0;
        font-weight: bold;
      }
    }
    & > .logout {
      cursor: pointer;
      border-left: 1px solid white;
      padding-left: 15px;
    }
  }
`;
