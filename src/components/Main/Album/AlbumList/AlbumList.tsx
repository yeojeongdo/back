import { AlbumListContainer } from "./albumListStyles";

const AlbumList: React.VFC<{ albums: Album[] }> = ({ albums = [] }) => {
  return <AlbumListContainer></AlbumListContainer>;
};

export default AlbumList;
