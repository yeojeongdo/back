import { useEffect, useState } from "react";
import { StyledMap } from "./mapStyles";
import { Map as CustomMap, MapMarker } from "react-kakao-maps-sdk";

declare global {
  interface Window {
    kakao: any;
  }
}

const Map: React.VFC<{ albums: Album[] }> = ({ albums = [] }) => {
  const [latitude, setLatitude] = useState<number>(35.6632143);
  const [longTitude, setLongTitude] = useState<number>(128.4140176);
  return (
    <CustomMap
      center={{
        // 지도의 중심좌표
        lat: latitude,
        lng: longTitude,
      }}
      style={{
        // 지도의 크기
        width: "684px",
        height: "100%",
      }}
      level={3}
    >
      {albums.map((album, index) => (
        <MapMarker
          position={{
            lat:
              album.latitude +
              index /
                100 /* 더미데이터의 값이 같기떄문에 차이가 보이지 않아 임시로 지정 이후 삭제바람 */,
            lng: album.longitude,
          }}
          image={{
            src: album.photo,
            size: {
              width: 24,
              height: 35,
            },
          }}
        />
      ))}
    </CustomMap>
  );
};

export default Map;
