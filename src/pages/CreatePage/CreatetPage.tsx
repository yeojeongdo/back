import { CreatePageStyle, CreatePageContent } from "./PageStyle";
import Header from "components/Common/Header/Header";
import CreaterMap from "components/Create/CreaterMap";
import { useState } from "react";

interface markerLatLngType {
  lat: number;
  lng: number;
}

const CreatePage = () => {
  const [markerLatLng, setMarkerLatLng] = useState<markerLatLngType>();
  return (
    <>
      <CreatePageStyle>
        <Header />
        <CreatePageContent>
          <CreaterMap
          // markerLatLng={markerLatLng}
          // setMarkerLatLng={setMarkerLatLng}
          />
          <div style={{ flex: "2" }}>
            {markerLatLng?.lat}/{markerLatLng?.lng}
          </div>
        </CreatePageContent>
      </CreatePageStyle>
    </>
  );
};

export default CreatePage;
