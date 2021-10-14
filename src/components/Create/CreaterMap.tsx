import useCreate from "hooks/redux/useCreate";
import React, { useState } from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";

interface markerLatLngType {
  lat: number;
  lng: number;
}

const CreaterMap = () => {
  const [markerLatLng, setMarkerLatLng] = useState<markerLatLngType>();
  const { setMarker, markerState } = useCreate();
  return (
    <Map
      center={{
        // 지도의 중심좌표
        lat: 35.6632143,
        lng: 128.4140176,
      }}
      style={{
        // 지도의 크기
        flex: "3 1 0%",
        height: "100%",
      }}
      level={3}
      onClick={(_t, mouseEvent: any) => {
        setMarker({
          lat: mouseEvent.latLng.getLat(),
          lng: mouseEvent.latLng.getLng(),
        });
      }}
    >
      {markerState.LatLng && (
        <MapMarker position={markerState.LatLng} draggable={true} />
      )}
    </Map>
  );
};

export default CreaterMap;
