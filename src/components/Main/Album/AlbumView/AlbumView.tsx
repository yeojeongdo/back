import useAlbum from "hooks/redux/useAlbum";
import { AlbumViewContainer } from "./albumViewStyles";
import { createRef, useCallback } from "react";
import AlbumComment from "../AlbumComment/AlbumComment";

const AlbumView = () => {
  const { albumState, closeAlbum } = useAlbum();
  const commentInputRef = createRef<HTMLInputElement | null>();

  const album = albumState.album;

  const handleFocusComment = useCallback(() => {
    if (commentInputRef.current) {
      commentInputRef.current.focus();
    }
  }, [commentInputRef]);

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
            <div className="album_main_content_tools">
              <button className="like">좋아요</button>
              <button className="comment" onClick={handleFocusComment}>
                댓글달기
              </button>
            </div>
            <AlbumComment commentInputRef={commentInputRef} />
          </div>
        </main>
      </AlbumViewContainer>
    </>
  );
};

export default AlbumView;
