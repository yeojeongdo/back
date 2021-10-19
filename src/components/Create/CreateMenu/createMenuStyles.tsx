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
  flex-direction: column;
  div {
    img {
      width: 100%;
      height: 100%;
      height: 400px;
      object-fit: cover;
    }
  }
  label {
    margin-top: 20px;
    width: 100%;
  }
`;
