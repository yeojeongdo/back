import useSearch from "hooks/redux/useSearch";
import { useState } from "react";
import {
  Map as CustomMap,
  MapMarker,
  MarkerClusterer,
} from "react-kakao-maps-sdk";
import { Album } from "types/album";

interface mapType {
  albums: Album[];
  setAlbums: React.Dispatch<React.SetStateAction<Album[]>>;
}

const Map = ({ albums, setAlbums }: mapType) => {
  const [latitude, setLatitude] = useState<number>(35.6632143);
  const [longTitude, setLongTitude] = useState<number>(128.4140176);
  const { searchMapListState } = useSearch();
  const LatLng = {
    lat: searchMapListState.searchMapList[0].y,
    lng: searchMapListState.searchMapList[0].x,
  };
  console.log(albums);
  return (
    <CustomMap
      center={LatLng}
      style={{
        // 지도의 크기
        flex: 3,
        height: "100%",
      }}
      level={3}
    >
      <MarkerClusterer
        averageCenter={true} // 클러스터에 포함된 마커들의 평균 위치를 클러스터 마커 위치로 설정
        minLevel={5} // 클러스터 할 최소 지도 레벨
        disableClickZoom={true} // 클러스터 마커를 클릭했을 때 지도가 확대되지 않도록 설정한다
        onClusterclick={(target, cluster) => {
          const markers: Album[] = [];
          cluster.getMarkers().map(marker => {
            console.log(marker.getTitle());
            return albums.map(album => {
              if (album.building.address === marker.getTitle()) {
                markers.push(album);
              }
              return 0;
            });
          });
          setAlbums(markers);
        }}
      >
        {albums.map((album, index) => (
          <MapMarker
            position={{
              lat: album.building.latitude,
              lng: album.building.longitude,
            }}
            image={{
              src: `http://${album.photo}`,
              size: {
                width: 24,
                height: 35,
              },
              options: {
                style: {
                  objectFit: "cover",
                },
              },
            }}
            title={album.building.address}
          />
        ))}
        {searchMapListState.searchMapList &&
          searchMapListState.searchMapList.map(current => (
            <MapMarker position={{ lat: current.y, lng: current.x }}>
              {current.address_name + "/" + current.place_name}
            </MapMarker>
          ))}
      </MarkerClusterer>
    </CustomMap>
  );
};

export default Map;
