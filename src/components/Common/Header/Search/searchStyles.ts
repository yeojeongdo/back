import styled from "@emotion/styled";

export const SearchContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  /* position: absolute; */
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
  position: absolute;
  width: 450px;
  top: 53px;
  flex-direction: column;
  background-color: white;
  border: 1px solid #989898;
`;

export const SearchListItem = styled.div`
  display: flex;
  flex-direction: row;
  cursor: pointer;
  font-size: 0.7rem;
  font-weight: bold;
  div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .title {
    }
    .subtitle {
      font-size: 0.5rem;
      color: gray;
      font-weight: 500;
    }
  }
  div:hover {
    background-color: whitesmoke;
  }
`;
