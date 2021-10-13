import { CreatePageStyle, CreatePageContent } from "./PageStyle";
import Header from "components/Common/Header/Header";
import CreaterMap from "components/Create/CreaterMap";
import useCreate from "hooks/redux/useCreate";

const CreatePage = () => {
  const { markerState } = useCreate();
  const latLng = markerState.LatLng;
  return (
    <>
      <CreatePageStyle>
        <Header />
        <CreatePageContent>
          <CreaterMap />
          <div style={{ flex: "2" }}>
            {latLng?.lat}/{latLng?.lng}
          </div>
        </CreatePageContent>
      </CreatePageStyle>
    </>
  );
};

export default CreatePage;
