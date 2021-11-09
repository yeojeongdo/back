import { userAlbumsAPI } from "apis/albumAPI";
import AlbumItem from "components/Main/Album/AlbumItem/AlbumItem";
import useUser from "hooks/redux/useUser";
import Map from "components/Main/Map/Map";
import { useCallback, useEffect, useState } from "react";
import { Album } from "types/album";
import { UserAlbumsContainer, UserAlbumList } from "./userAlbumsStyles";
import MenuHeader from "components/Common/Header/MenuHeader/MenuHeader";

const UserAlbums: React.FunctionComponent = () => {
  const {
    userState: { userInfo, albums, getUserAlbumsLoading },
    getUserAlbums,
  } = useUser();

  // const getUserAlbum = useCallback(async () => {
  //   if (userInfo?.id) {
  //     try {
  //       setLoading(true);
  //       const resposne = await userAlbumsAPI(userInfo?.id, 0);

  //       setData(resposne.data.data);
  //       setLoading(false);
  //     } catch (error) {
  //       setLoading(false);
  //     }
  //   }
  // }, [userInfo?.id]);

  useEffect(() => {
    userInfo && getUserAlbums(userInfo.id, 0);
  }, [getUserAlbums, userInfo]);

  if (getUserAlbumsLoading) {
    <>로딩 중...</>;
  }

  return (
    <>
      <UserAlbumsContainer>
        <Map albums={albums} />
        <UserAlbumList>
          <MenuHeader />
          {albums.map(album => (
            <AlbumItem album={album} />
          ))}
        </UserAlbumList>
      </UserAlbumsContainer>
    </>
  );
};

export default UserAlbums;
