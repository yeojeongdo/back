import { AlbumItemContainer } from "./albumItemStyles";

interface AlbumItemProps {
  album: Album;
}

const AlbumItem: React.VFC<AlbumItemProps> = ({ album }) => {
  return <AlbumItemContainer>{album.userName}</AlbumItemContainer>;
};

export default AlbumItem;
