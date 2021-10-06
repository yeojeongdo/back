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
            <div className="album_profile">
              <div>
                <img
                  src={
                    "https://storage.googleapis.com/static.fastcampus.co.kr/prod/uploads/202011/122124-15/the-red-thumbnail1-4-2x.jpg"
                  }
                  alt=""
                />
                <h4>천명태</h4>
              </div>
              <div>
                <p>2021-10-08</p>
              </div>
            </div>
          </div>
        </main>
      </AlbumViewContainer>
    </>
  );
};

export default AlbumView;
