import AlbumItem from "../AlbumItem/AlbumItem";
import { AlbumListContainer } from "./albumListStyles";

const AlbumList: React.VFC<{ albums: Album[] }> = ({ albums = [] }) => {
  return (
    <AlbumListContainer>
      <h1>여긴 앨범 리스트 컨테이너입니다.</h1>
      {albums.map((album) => (
        <AlbumItem album={album} />
      ))}
    </AlbumListContainer>
  );
};

export default AlbumList;
