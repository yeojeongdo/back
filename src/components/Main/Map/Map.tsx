import { useEffect, useState } from "react";
import { StyledMap } from "./mapStyles";

declare global {
  interface Window {
    kakao: any;
  }
}

const { kakao } = window;

const Map = () => {
  const [latitude, setLatitude] = useState<number>(35.6632143);
  const [longTitude, setLongTitude] = useState<number>(128.4140176);
  const [markers, setMarkers] = useState<any>([]);
  const ms: any = [];

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

  const addMarker = async (map: any, position: any) => {
    // 마커를 생성합니다
    var marker = new kakao.maps.Marker({
      position: position,
    });
    marker.setMap(map);

    setMarkers([...markers, marker]);
    ms.push(marker);
    kakao.maps.event.addListener(marker, "click", function () {
      console.log(markers);
    });
    console.log(markers, ms);
  };

  useEffect(() => {
    let container = document.getElementById("map");
    let options = {
      center: new kakao.maps.LatLng(latitude, longTitude),
      level: 3,
    };

    let map = new kakao.maps.Map(container, options);
    const clusterer = new kakao.maps.MarkerClusterer({
      map: map, // 마커들을 클러스터로 관리하고 표시할 지도 객체
      averageCenter: true, // 클러스터에 포함된 마커들의 평균 위치를 클러스터 마커 위치로 설정
      minLevel: 5, // 클러스터 할 최소 지도 레벨
    });

    console.log(map);
    kakao.maps.event.addListener(map, "click", function (mouseEvent: any) {
      var latlng = mouseEvent.latLng;

      addMarker(map, latlng).then(() => clusterer.addMarkers(ms));
      console.log(markers);
    });
  }, [latitude, longTitude]);

  return (
    <>
      <StyledMap id="map"></StyledMap>
    </>
  );
};

export default Map;
