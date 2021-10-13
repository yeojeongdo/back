import React from "react";
import { Map } from "react-kakao-maps-sdk";

const CreaterMap = () => {
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
    />
  );
};

export default CreaterMap;
