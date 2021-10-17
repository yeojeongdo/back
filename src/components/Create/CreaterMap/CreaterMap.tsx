import useCreate from "hooks/redux/useCreate";
import { Map, MapMarker } from "react-kakao-maps-sdk";

const CreaterMap = () => {
  const { setMarker, markerState } = useCreate();
  return (
    <Map
      center={{
        // 지도의 중심좌표
        lat: 33.450701,
        lng: 126.570667,
      }}
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
        />
      )}
    </Map>
  );
};

export default CreaterMap;
