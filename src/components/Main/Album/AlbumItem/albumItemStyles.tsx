import styled from "@emotion/styled";

export const AlbumItemContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 1rem;
  margin-bottom: 24px;
  :hover {
    cursor: pointer;
    background-color: #d2d8dd;
  }
  & > .header {
    display: flex;
    align-items: center;
  }
  .header > img {
    width: 42px;
    height: 42px;
    border-radius: 50%;
    object-fit: cover;
  }
  .header > h4 {
    margin: 0;
    text-align: start;
  }
  & > p {
    text-align: start;
    margin: 0;
  }
  & > .thumnail {
    width: 100%;
    height: 400px;
  }
`;
