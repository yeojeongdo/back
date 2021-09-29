import { AlbumItemContainer } from "./albumItemStyles";

interface AlbumItemProps {
  album: Album;
}

const AlbumItem: React.VFC<AlbumItemProps> = ({ album }) => {
  return (
    <AlbumItemContainer>
      <img src={album.photo} alt="" />
      <h4>{album.userName}</h4>
      <p>{album.createDate}</p>
    </AlbumItemContainer>
  );
};

export default AlbumItem;
