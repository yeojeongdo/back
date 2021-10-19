import styled from "@emotion/styled";

export const SearchContainer = styled.div`
  height: 100%;
  display: flex;
  position: absolute;
  flex-direction: column;
  form {
    min-height: 100%;
    flex-direction: row;
    align-items: center;
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
  width: 100%;
  background-color: white;
  border: 1px solid #989898;
`;

export const SearchListItem = styled.div`
  display: flex;
  flex-direction: row;

  cursor: pointer;
  font-size: 1.1rem;
  font-weight: bold;
  div {
    width: 100%;
  }
  div:hover {
    background-color: whitesmoke;
  }
`;
