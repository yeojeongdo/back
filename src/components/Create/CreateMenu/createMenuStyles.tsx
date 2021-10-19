import styled from "@emotion/styled";

export const CreateMenuContainer = styled.div`
  flex: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  #albumFile {
    display: none;
  }
`;

export const CreateMenuImageView = styled.div`
  display: flex;
  justify-content: space-between;
  div {
    border: 1px solid black;
    img {
      width: 100%;
    }
  }
  label {
    width: 100%;
  }
`;
