import styled from "@emotion/styled";

export const AlbumItemContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
  padding: 1rem;

  &:hover {
    background-color: rgba(0, 0, 0, 0.2);
    cursor: pointer;
  }
  & > .header {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .header > img {
    width: 150px;
    height: 150px;
    object-fit: cover;
  }

  .content {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    & > p {
      text-align: start;
      margin: 0;
    }
    .thumnail {
      width: 100%;
      height: 500px;
      object-fit: contain;
    }
  }
  .user {
    display: flex;
    justify-content: space-between;
    align-items: center;
    & > h4 {
      font-size: 1.2rem;
      margin: 0;
      text-align: start;
    }
    & > img {
      width: 31px;
      height: 31px;
      border-radius: 50%;
      margin-right: 10px;
    }
  }
`;
