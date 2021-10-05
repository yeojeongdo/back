import useAlbum from "hooks/redux/useAlbum";
import { AlbumViewContainer } from "./albumViewStyles";
import Logo from "assets/images/logo.svg";

const AlbumView = () => {
  const { closeAlbum } = useAlbum();

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
            <img
              src="https://storage.googleapis.com/static.fastcampus.co.kr/prod/uploads/202011/122124-15/the-red-thumbnail1-4-2x.jpg"
              alt=""
            />
          </div>
          <div className="album_main_comments">
            <h1>여긴 콘텐츠와 댓글 리스트 위치입니다.</h1>
          </div>
        </main>
      </AlbumViewContainer>
    </>
  );
};

export default AlbumView;
