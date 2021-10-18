import useAlbum from "hooks/redux/useAlbum";
import { AlbumViewContainer } from "./albumViewStyles";
import { createRef, useCallback, useState } from "react";
import AlbumComment from "../AlbumComment/AlbumComment";
import LoadingPage from "pages/LoadingPage/LoadingPage";
import Button from "components/Common/Button/Button";

const AlbumView = () => {
  const { albumState, closeAlbum, likeAlbum } = useAlbum();
  const commentInputRef = createRef<HTMLInputElement | null>();
  const [page, setPage] = useState(0);

  const album = albumState.album;

  const handleAlbumLike = useCallback(
    (albumId: number | undefined) => {
      if (albumId) {
        likeAlbum(albumId);
      }
    },
    [likeAlbum]
  );

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
            {page !== 0 && (
              <Button onClick={() => setPage(page - 1)}> 오른 </Button>
            )}
            <img src={album?.photo && `http://${album?.photo[page]}`} alt="" />
            {album?.photo[1] && page < album?.photo.length - 1 && (
              <Button onClick={() => setPage(page + 1)}> 오른 </Button>
            )}
          </div>
          <div className="album_main_content">
            <h3>{album?.memo}</h3>
            <div className="album_main_content_info">
              <span className="comment">댓글 : {album?.commentNum}</span>
              <span className="like">좋아요 :{album?.likeNum}</span>
            </div>
            <div className="album_main_content_tools">
              <button
                className="like"
                onClick={() => handleAlbumLike(album?.id)}
              >
                좋아요
              </button>
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
