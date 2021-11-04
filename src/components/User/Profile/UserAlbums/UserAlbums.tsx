import { userAlbumsAPI } from "apis/albumAPI";
import AlbumItem from "components/Main/Album/AlbumItem/AlbumItem";
import useUser from "hooks/redux/useUser";
import { useCallback, useEffect, useState } from "react";
import { Album } from "types/album";

const UserAlbums: React.FunctionComponent = () => {
  const {
    userState: { userInfo },
  } = useUser();
  const [data, setData] = useState<Album[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const getUserAlbums = useCallback(async () => {
    if (userInfo?.id) {
      try {
        setLoading(true);
        const resposne = await userAlbumsAPI(userInfo?.id, 0);

        setData(resposne.data.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    }
  }, [userInfo?.id]);

  useEffect(() => {
    getUserAlbums();
  }, [getUserAlbums]);

  if (loading) {
    <>로딩 중...</>;
  }

  return (
    <>
      {data.map((album) => (
        <AlbumItem album={album} />
      ))}
    </>
  );
};

export default UserAlbums;
