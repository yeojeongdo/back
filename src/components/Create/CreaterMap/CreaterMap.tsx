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
  // useEffect(() => {
  //   if (!map) return;
  //   const ps = new kakao.maps.services.Places();
  //   // const bounds = new kakao.maps.LatLngBounds()
  //   ps.keywordSearch(
  //     text,
  //     (data, status) => {
  //       // const bounds = new kakao.maps.LatLngBounds()
  //       if (status === kakao.maps.services.Status.OK) {
  //         data && console.log(data);
  //         console.log(searchMapListState);
  //         data.map(({ x, y }) => {
  //           searchMap([{ LatLng: { lat: y, lng: x } }]);
  //           // setMarker({ lat: x, lng: y });
  //         });
  //       }
  //     },
  //     {
  //       y: markerState.LatLng.lat,
  //       x: markerState.LatLng.lng,
  //       sort: SortBy.DISTANCE,
  //     }
  //   );
  // }, [text, onChangeText, setMarker, map, markerState, searchMap]);

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
      {/* {markers.map(current => {
        <MapMarker position={current.LatLng} draggable={true} />;
      })} */}
    </Map>
  );
};

export default CreaterMap;
