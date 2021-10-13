import useAlbum from "hooks/redux/useAlbum";
import { AlbumItemContainer } from "./albumItemStyles";
import DefaultProfile from "assets/images/default_profile.svg";
import TimeCounting from "time-counting";
import { useCallback } from "react";
import { Album } from "types/album";

interface AlbumItemProps {
  album: Album;
}

const AlbumItem: React.VFC<AlbumItemProps> = ({ album }) => {
  const { openAlbum, getAlbum } = useAlbum();

  const handleCLickAlbum = useCallback(() => {
    openAlbum();
    getAlbum(1);
  }, [openAlbum, getAlbum]);

  return (
    <AlbumItemContainer onClick={handleCLickAlbum}>
      <div className="header">
        <img src={DefaultProfile} alt="" className="profile" />
        <h4 className="userName">{album.user.name}</h4>
      </div>
      <div className="content">
        <p>📍{album.building.address}</p>
        <p>{TimeCounting(album.createDate, { lang: "ko" })}</p>
        <img src={`http://${album.photo}`} alt="" className="thumnail" />
      </div>
    </AlbumItemContainer>
  );
};

export default AlbumItem;
