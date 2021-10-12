import styled from "@emotion/styled";

export const AlbumViewContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: white;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 9999;
  display: flex;
  .album_header {
    width: 100%;
    height: 50px;
    position: fixed;
    &_close {
      width: 60px;
      height: 60px;
      padding: 1rem;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 2rem;
      cursor: pointer;
      color: white;
      user-select: none;
    }
  }
  .album_main {
    width: 100%;
    height: 100%;
    background-color: black;
    display: flex;
    @media (max-width: 768px) {
      flex-direction: column;
      .album_main_comments {
        width: 100%;
      }
    }
    &_photos {
      flex: 3;
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
    &_comments {
      width: 400px;
      padding: 1rem;
      background-color: white;
    }
  }
  .album_profile {
    display: flex;
    align-items: center;
    justify-content: space-between;
    div {
      display: flex;
      align-items: center;
    }
    img {
      width: 42px;
      height: 42px;
      border-radius: 50%;
      object-fit: cover;
    }
    h1 {
      margin: 0;
      text-align: start;
    }
  }
`;
