import Header from "components/Common/Header/Header";
import AlbumList from "components/Main/Album/AlbumList/AlbumList";
import Map from "components/Main/Map/Map";
import { albumDummyData } from "data/albumDummyData";
import useAuth from "hooks/redux/useAuth";
import { Token } from "lib/Token";
import { useEffect, useState } from "react";
import { MainContent, MainPageStyle } from "./PageStyle";
import { useHistory } from "react-router-dom";
import useAlbum from "hooks/redux/useAlbum";
import AlbumView from "components/Main/Album/AlbumView/AlbumView";

const Main = () => {
  const history = useHistory();
  const { authState, loadMyInfo } = useAuth();
  const { albumState, getAlbums } = useAlbum();

  console.log(albumState.albums);

  useEffect(() => {
    getAlbums();
  }, [getAlbums]);

  useEffect(() => {
    if (!Token.getToken()) {
      history.push("/login");
    }
    if (!authState.myInfo) {
      loadMyInfo();
    }
  }, [loadMyInfo, authState, history]);

  const { albums } = albumState;

  return (
    <>
      <MainPageStyle>
        <Header />
        <MainContent>
          <Map albums={albumState.albums} setAlbums={() => {}} />
          <AlbumList albums={albums} />
        </MainContent>
      </MainPageStyle>
      {albumState.albumOpen && <AlbumView />}
    </>
  );
};

export default Main;
