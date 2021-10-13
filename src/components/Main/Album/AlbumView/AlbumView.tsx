import useAlbum from "hooks/redux/useAlbum";
import { AlbumViewContainer } from "./albumViewStyles";
import Logo from "assets/images/logo.svg";
import { useCallback } from "react";
import AlbumComment from "../AlbumComment/AlbumComment";

const AlbumView = () => {
  const { albumState, closeAlbum } = useAlbum();

  const album = albumState.album;

  return (
    <>
      <AlbumViewContainer>
        <header className="album_header">
          <div className="album_header_close" onClick={closeAlbum}>
            &times;
          </div>
        </header>
        <main className="album_main">
          <div className="album_main_photos">
            <img src={`http://${album?.photo}`} alt="" />
          </div>
          <div className="album_main_content">
            <h3>{album?.memo}</h3>
            <div className="album_main_content_info">
              <span className="comment">댓글 : {album?.commentNum}</span>
              <span className="like">좋아요 :{album?.likeNum}</span>
            </div>

            <AlbumComment />
          </div>
        </main>
      </AlbumViewContainer>
    </>
  );
};

export default AlbumView;
