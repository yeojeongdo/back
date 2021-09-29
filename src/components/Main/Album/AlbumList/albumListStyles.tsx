import styled from "@emotion/styled";

export const AlbumListContainer = styled.ul`
  & > h1 {
    width: 100%;
  }
  margin: 0;
  padding: 0;
  width: 456px;
  height: 100%;
  text-align: center;
  list-style: none;
  max-height: 100%;
  overflow-y: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 10px;
`;
