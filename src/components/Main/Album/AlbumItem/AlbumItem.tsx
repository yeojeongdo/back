import useAlbum from "hooks/redux/useAlbum";
import { AlbumItemContainer } from "./albumItemStyles";
import DefaultProfile from "assets/images/default_profile.svg";

interface AlbumItemProps {
  album: Album;
}

const AlbumItem: React.VFC<AlbumItemProps> = ({ album }) => {
  const { openAlbum } = useAlbum();

  return (
    <AlbumItemContainer onClick={openAlbum}>
      <div className="header">
        <img src={DefaultProfile} alt="" className="profile" />
        <h4>{album.user.name}</h4>
      </div>
      <p>{album.building.address}</p>
      <p>{album.createDate}</p>
      <img src={`http://${album.photo}`} alt="" className="thumnail" />
    </AlbumItemContainer>
  );
};

export default AlbumItem;
