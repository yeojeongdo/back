import Input from "components/Common/Input/Input";
import useCreate from "hooks/redux/useCreate";
import useInput from "hooks/useInput";
import { useEffect } from "react";
import { useState } from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";

const CreaterMap = () => {
  const { setMarker, markerState } = useCreate();
  const [text, onChangeText] = useInput("대구 소프트웨어 마이스터 고등학교");
  const [map, setMap] = useState<kakao.maps.Map>();
  useEffect(() => {
    if (!map) return;
    const ps = new kakao.maps.services.Places();

    ps.keywordSearch(text, (data, status) => {
      // const bounds = new kakao.maps.LatLngBounds()
      if (status === kakao.maps.services.Status.OK) {
        data && console.log(data);
        data.map(({ x, y }) => {
          setMarker({ lat: y, lng: x });
        });
      }
    });
  }, [text, onChangeText, setMarker]);

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
    </Map>
  );
};

export default CreaterMap;
