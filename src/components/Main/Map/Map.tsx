import { useObserver } from "mobx-react-lite";
import { useEffect, useState } from "react";
import { StyledMap } from "./mapStyles";

declare global {
  interface Window {
    kakao: any;
  }
}

const Map = () => {
  const [latitude, setLatitude] = useState<number>(0);
  const [longTitude, setLongTitude] = useState<number>(0);

  useEffect(() => {
    if ("geolocation" in navigator) {
      /* 위치정보 사용 가능 */
      navigator.geolocation.getCurrentPosition((position) => {
        setLatitude(position.coords.latitude);
        setLongTitude(position.coords.longitude);
      });
    } else {
      /* 위치정보 사용 불가능 */
      alert(
        "죄송합니다. 저희 서비스를 이용하실 수 없습니다. (브라우저 버전을 업그레이드 해보세요)"
      );
    }
  }, []);

  useEffect(() => {
    let container = document.getElementById("map");
    let options = {
      center: new window.kakao.maps.LatLng(latitude, longTitude),
      level: 3,
    };

    let map = new window.kakao.maps.Map(container, options);
    console.log(map);
  }, [latitude, longTitude]);

  return useObserver(() => (
    <>
      <StyledMap id="map"></StyledMap>
    </>
  ));
};

export default Map;
