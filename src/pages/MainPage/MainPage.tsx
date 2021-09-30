import Header from "components/Common/Header/Header";
import AlbumList from "components/Main/Album/AlbumList/AlbumList";
import Map from "components/Main/Map/Map";
import { albumDummyData } from "data/albumDummyData";
import useAuth from "hooks/redux/useAuth";
import { Token } from "lib/Token";
import { useEffect, useState } from "react";
import { MainContent, MainPageStyle } from "./PageStyle";
import { useHistory } from "react-router-dom";

const Main = () => {
  const history = useHistory();
  const { authState, loadMyInfo } = useAuth();

  useEffect(() => {
    if (!Token.getToken()) {
      history.push("/login");
    }
    if (!authState.myInfo) {
      loadMyInfo();
    }
  }, [loadMyInfo, authState.myInfo, history]);

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
