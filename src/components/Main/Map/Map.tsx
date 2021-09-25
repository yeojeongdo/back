import { useEffect } from "react";
import { StyledMap } from "./mapStyles";

declare global {
  interface Window {
    kakao: any;
  }
}

const Map = () => {
  useEffect(() => {
    let container = document.getElementById("map");
    let options = {
      center: new window.kakao.maps.LatLng(33.450701, 126.570667),
      level: 3,
    };

    let map = new window.kakao.maps.Map(container, options);
    console.log(map);
  }, []);

  return (
    <>
      <StyledMap id="map"></StyledMap>
    </>
  );
};

export default Map;
