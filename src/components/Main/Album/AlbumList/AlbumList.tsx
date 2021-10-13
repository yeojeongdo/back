import { Album } from "types/album";
import AlbumItem from "../AlbumItem/AlbumItem";
import { AlbumListContainer } from "./albumListStyles";

const AlbumList: React.VFC<{ albums: Album[] }> = ({ albums = [] }) => {
  return (
    <AlbumListContainer>
      {albums.map((album) => (
        <AlbumItem album={album} />
      ))}
    </AlbumListContainer>
  );
};

export default AlbumList;
