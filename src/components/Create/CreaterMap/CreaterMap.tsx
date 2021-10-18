import Input from "components/Common/Input/Input";
import useCreate from "hooks/redux/useCreate";
import useSearch from "hooks/redux/useSearch";
import useInput from "hooks/useInput";
import { useEffect } from "react";
import { useState } from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";

enum SortBy {
  DISTANCE = "distance",
}

const CreaterMap = () => {
  const { setMarker, markerState } = useCreate();
  const { searchMap, searchMapListState } = useSearch();
  const [text, onChangeText] = useInput("대구 소프트웨어 마이스터 고등학교");
  const [map, setMap] = useState<kakao.maps.Map>();

  return (
    <Map
      center={
        // 지도의 중심좌표
        markerState.LatLng
      }
      style={{
        // 지도의 크기
        flex: "3 1 0%",
        height: "100%",
      }}
      onCreate={setMap}
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
        >
          <Input value={text} onChange={onChangeText} />
        </MapMarker>
      )}
      {searchMapListState.searchMapList &&
        searchMapListState.searchMapList.map(current => (
          <MapMarker position={{ lat: current.y, lng: current.x }} />
        ))}
    </Map>
  );
};

export default CreaterMap;
