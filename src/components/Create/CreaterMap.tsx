import useCreate from "hooks/redux/useCreate";
import React, { useState } from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";

interface markerLatLngType {
  lat: number;
  lng: number;
}

const CreaterMap = () => {
  const [markerLatLng, setMarkerLatLng] = useState<markerLatLngType>();
  const { setMarker } = useCreate();
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
        setMarkerLatLng({
          lat: mouseEvent.latLng.getLat(),
          lng: mouseEvent.latLng.getLng(),
        });
        setMarker(markerLatLng);
      }}
    >
      {markerLatLng && <MapMarker position={markerLatLng} draggable={true} />}
    </Map>
  );
};

export default CreaterMap;
