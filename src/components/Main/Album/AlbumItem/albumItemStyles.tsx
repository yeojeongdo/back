import styled from "@emotion/styled";

export const AlbumItemContainer = styled.div`
  margin: 1rem 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  &:hover {
    background-color: rgba(0, 0, 0, 0.2);
    cursor: pointer;
  }
  & > .header {
    display: flex;
    align-items: center;
  }
  .header > .profile {
    width: 42px;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
  }
  .header > .userName {
    padding-left: 1rem;
    margin: 0;
    text-align: start;
  }

  .content {
    & > p {
      text-align: start;
      margin: 0;
    }
    .thumnail {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;
