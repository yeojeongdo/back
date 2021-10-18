import useAlbum from "hooks/redux/useAlbum";
import { AlbumItemContainer } from "./albumItemStyles";
import DefaultProfile from "assets/images/default_profile.svg";
import TimeCounting from "time-counting";
import { useCallback } from "react";
import { Album } from "types/album";
import { useHistory } from "react-router";

interface AlbumItemProps {
  album: Album;
}

const AlbumItem: React.VFC<AlbumItemProps> = ({ album }) => {
  const history = useHistory();
  const { openAlbum, getAlbum } = useAlbum();

  const handlePushUserProfile = useCallback(
    (
      event: React.MouseEvent<HTMLImageElement, MouseEvent>,
      userIdx: number
    ) => {
      event.stopPropagation();
      history.push(`/user/${userIdx}`);
    },
    [history]
  );

  const handleCLickAlbum = useCallback(() => {
    openAlbum();
    getAlbum(album.id);
  }, [openAlbum, getAlbum, album.id]);

  return (
    <AlbumItemContainer onClick={handleCLickAlbum}>
      <div className="header">
        <img
          src={DefaultProfile}
          alt=""
          className="profile"
          onClick={(event) => handlePushUserProfile(event, album.user.id)}
        />
        <h4 className="userName">{album.user.name}</h4>
      </div>
      <div className="content">
        <p>📍{album.building.address}</p>
        <p>{TimeCounting(album.createDate, { lang: "ko" })}</p>
        <img src={`http://${album.photo}`} alt="" className="thumnail" />
      </div>
    </AlbumItemContainer>
  );
};

export default AlbumItem;
