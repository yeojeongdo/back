import Header from "components/Common/Header/Header";
import AlbumList from "components/Main/Album/AlbumList/AlbumList";
import Map from "components/Main/Map/Map";
import { albumDummyData } from "data/albumDummyData";
import useAuth from "hooks/redux/useAuth";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { MainContent, MainPageStyle } from "./PageStyle";

const Main = () => {
  const { authState, loadMyInfo } = useAuth();

  useEffect(() => {
    if (!authState.myInfo) {
      loadMyInfo();
    }
  }, [loadMyInfo, authState.myInfo]);

  const [albums, setAlbums] = useState<Array<Album>>(albumDummyData);

  return (
    <MainPageStyle>
      <Header />
      <MainContent>
        <Map albums={albums} setAlbums={setAlbums} />
        <AlbumList albums={albums} />
      </MainContent>
    </MainPageStyle>
  );
};

export default Main;
