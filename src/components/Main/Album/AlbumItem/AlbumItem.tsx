import useAlbum from "hooks/redux/useAlbum";
import { AlbumItemContainer } from "./albumItemStyles";

interface AlbumItemProps {
  album: Album;
}

const AlbumItem: React.VFC<AlbumItemProps> = ({ album }) => {
  const { openAlbum } = useAlbum();

  return (
    <AlbumItemContainer onClick={openAlbum}>
      <div>
        <img src={album.userProfile} alt="" />
        <h4>{album.userName}</h4>
      </div>
      <p>{album.address}</p>
      <p>{album.createDate}</p>
      <img src={album.photo} alt="" />
    </AlbumItemContainer>
  );
};

export default AlbumItem;
