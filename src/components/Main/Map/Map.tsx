import useSearch from "hooks/redux/useSearch";
import { useEffect, useState } from "react";
import {
  CustomOverlayMap,
  Map as CustomMap,
  MapMarker,
} from "react-kakao-maps-sdk";
import { Album } from "types/album";
import { CustomOverlayMapContant } from "./mapStyles";

interface mapType {
  albums: Album[];
  setAlbums: React.Dispatch<React.SetStateAction<Album[]>>;
}

const Map = ({ albums, setAlbums }: mapType) => {
  // const [latitude, setLatitude] = useState<number>(35.6632143);
  // const [longTitude, setLongTitude] = useState<number>(128.4140176);
  const { searchMapListState, setCenterSearching } = useSearch();

  const [mapAlbumList, setMapAlbumList] = useState<Array<Album[]>>([]);

  interface AddressItem {
    [key: string]: Array<Album>;
  }

  const addressList: AddressItem = {};

  useEffect(() => {
    albums.forEach(album => {
      if (!addressList[album.building.address]) {
        addressList[album.building.address] = [];
      }
      addressList[album.building.address].push(album);
    });

    for (const key in addressList) {
      console.log(key);
      console.log(addressList[key]);
      setMapAlbumList(albumList => [...albumList, addressList[key]]);
    }
  }, [albums]);
  return (
    <CustomMap
      center={searchMapListState.centerSearching}
      style={{
        // 지도의 크기
        flex: 3,
        height: "100%",
      }}
      level={3}
      onDragEnd={e =>
        setCenterSearching({
          lat: e.getCenter().getLat(),
          lng: e.getCenter().getLng(),
        })
      }
    >
      {mapAlbumList.map((albums, index) => {
        const album = albums[0];
        console.log(mapAlbumList);
        return (
          <CustomOverlayMap
            key={index}
            position={{
              lat: album.building.latitude,
              lng: album.building.longitude,
            }}
            id={album.building.address}
          >
            <CustomOverlayMapContant>
              <img
                width="50"
                height="50"
                src={`http://${album.photo}`}
                alt=""
              />
              <div className="image-length">{"+" + albums.length}</div>
            </CustomOverlayMapContant>
          </CustomOverlayMap>
        );
      })}
      {searchMapListState.searchMapList &&
        searchMapListState.searchMapList.map(current => (
          <MapMarker
            position={{ lat: current.y, lng: current.x }}
            infoWindowOptions={{ className: "map_marker" }}
          >
            {current.address_name + "/" + current.place_name}
          </MapMarker>
        ))}
    </CustomMap>
  );
};

export default Map;
