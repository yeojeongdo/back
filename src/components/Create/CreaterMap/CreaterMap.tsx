import useCreate from "hooks/redux/useCreate";
import useSearch from "hooks/redux/useSearch";
import { Map, MapMarker } from "react-kakao-maps-sdk";

const CreaterMap = () => {
  const { setMarker, markerState } = useCreate();
  const { searchMapListState } = useSearch();

  const LatLng = {
    lat: searchMapListState.searchMapList[0].y,
    lng: searchMapListState.searchMapList[0].x,
  };

  return (
    <Map
      center={
        // 지도의 중심좌표
        LatLng
      }
      style={{
        // 지도의 크기
        flex: "3 1 0%",
        height: "100%",
      }}
      level={3}
      onClick={(_t, mouseEvent: any) => {
        console.log(mouseEvent);
        setMarker({
          lat: mouseEvent.latLng.getLat(),
          lng: mouseEvent.latLng.getLng(),
        });
      }}
    >
      {markerState.LatLng && (
        <MapMarker
          position={markerState.LatLng}
          onDragEnd={(mouseEvent: any) => {
            console.log(mouseEvent.getPosition());
            setMarker({
              lat: mouseEvent.getPosition().Ma,
              lng: mouseEvent.getPosition().La,
            });
          }}
          draggable={true}
        ></MapMarker>
      )}
      {searchMapListState.searchMapList &&
        searchMapListState.searchMapList.map((current) => (
          <MapMarker position={{ lat: current.y, lng: current.x }} />
        ))}
    </Map>
  );
};

export default CreaterMap;
