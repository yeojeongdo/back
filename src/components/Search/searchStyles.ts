import styled from "@emotion/styled";

export const SearchContainer = styled.li`
  height: 100%;
  display: flex;
  position: absolute;
  flex-direction: column;
  form {
    min-height: 100%;
    flex-direction: row;
    box-shadow: none;
    padding: 0;
    flex: 1;
    input {
      margin: 0;
      flex: 2;
    }
  }
`;

export const SearchList = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 650px;
  width: 100%;
`;

export const SearchListItem = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid black;
  cursor: pointer;
`;
