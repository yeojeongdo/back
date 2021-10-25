import useCreate from "hooks/redux/useCreate";
import useSearch from "hooks/redux/useSearch";
import { useEffect } from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";

const CreaterMap = () => {
  const { setMarker, markerState, selectMarker } = useCreate();
  const { searchMapListState, setCenterSearching, setSearchModal } =
    useSearch();

  const searchAddrFromCoords = () => {
    const geocoder = new kakao.maps.services.Geocoder();
    geocoder.coord2RegionCode(
      markerState.LatLng.lng,
      markerState.LatLng.lat,
      result =>
        selectMarker({
          address_name: result[0].address_name,
          x: result[0].x,
          y: result[0].y,
        })
    );
  };
  return (
    <Map
      center={searchMapListState.centerSearching}
      style={{
        // 지도의 크기
        flex: "3 1 0%",
        height: "100%",
      }}
      level={3}
      onClick={(_t, mouseEvent: any) => {
        setSearchModal(false);
        setMarker({
          lat: mouseEvent.latLng.getLat(),
          lng: mouseEvent.latLng.getLng(),
        });
        searchAddrFromCoords();
      }}
      onDragStart={() => setSearchModal(false)}
      onDragEnd={e => {
        setCenterSearching({
          lat: e.getCenter().getLat(),
          lng: e.getCenter().getLng(),
        });
      }}
    >
      {markerState.LatLng && (
        <MapMarker
          position={markerState.LatLng}
          onDragEnd={(mouseEvent: any) => {
            searchAddrFromCoords();
            setMarker({
              lat: mouseEvent.getPosition().Ma,
              lng: mouseEvent.getPosition().La,
            });
          }}
          draggable={true}
        ></MapMarker>
      )}
      {searchMapListState.searchMapList &&
        searchMapListState.searchMapList.map(current => (
          <MapMarker
            onClick={() => {
              selectMarker(current);
            }}
            position={{ lat: current.y, lng: current.x }}
          />
        ))}
    </Map>
  );
};

export default CreaterMap;
