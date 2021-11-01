import useSearch from "hooks/redux/useSearch";
import { useEffect } from "react";
import {
  CustomOverlayMap,
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
  // const [latitude, setLatitude] = useState<number>(35.6632143);
  // const [longTitude, setLongTitude] = useState<number>(128.4140176);
  const { searchMapListState, setCenterSearching } = useSearch();
  console.log(searchMapListState.searchMapList);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const mapAlbumList: Array<Album[]> = [];

  useEffect(() => {
    // eslint-disable-next-line array-callback-return
    albums.map(album => {
      mapAlbumList.map(mapAlbmus => {
        if (album.building.address === mapAlbmus[0]?.building?.address) {
          mapAlbmus.push(album);
          return false;
        }
        return true;
      }) && mapAlbumList.push([album]);

      console.log(mapAlbumList);
    });
  }, [albums, mapAlbumList]);

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
      {/* <MarkerClusterer
        averageCenter={true} // 클러스터에 포함된 마커들의 평균 위치를 클러스터 마커 위치로 설정
        minLevel={1} // 클러스터 할 최소 지도 레벨
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
        onClustered={(target, clusters) => {
          const markers: Album[] = [];
          clusters.map(cluster =>
            cluster.getMarkers().map(marker => {
              console.log(marker.getTitle());
              return albums.map(album => {
                if (album.building.address === marker.getTitle()) {
                  markers.push(album);
                }
                return 0;
              });
            })
          );
          console.log(markers, "abc");
          // setAlbums(markers)
        }}
        styles={[{ width: "50px", height: "50px" }]}
      > */}
      {
        // <CustomOverlayMap
        //   key={index}
        //   position={{
        //     lat: album.building.latitude,
        //     lng: album.building.longitude,
        //   }}
        //   // image={{
        //   //   src: `http://${album.photo}`,
        //   //   size: {
        //   //     width: 0,
        //   //     height: 0,
        //   //   },
        //   //   options: {
        //   //     style: {
        //   //       objectFit: "cover",
        //   //       width: "50px",
        //   //       borderRadius: "7px",
        //   //       height: "50px",
        //   //     },
        //   //   },
        //   // }}
        //   id={album.building.address}
        // >
        //   <img width="50" height="50" src={`http://${album.photo}`} alt="" />
        // </CustomOverlayMap>
      }
      {searchMapListState.searchMapList &&
        searchMapListState.searchMapList.map(current => (
          <MapMarker
            position={{ lat: current.y, lng: current.x }}
            infoWindowOptions={{ className: "map_marker" }}
          >
            {current.address_name + "/" + current.place_name}
          </MapMarker>
        ))}
      {/* </MarkerClusterer> */}
    </CustomMap>
  );
};

export default Map;
