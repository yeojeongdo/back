import { CreatePageStyle, CreatePageContent } from "./PageStyle";
import Header from "components/Common/Header/Header";
import CreaterMap from "components/Create/CreaterMap";
const CreatePage = () => {
  return (
    <>
      <CreatePageStyle>
        <Header />
        <CreatePageContent>
          <CreaterMap />
          <div style={{ flex: "2" }}>a</div>
        </CreatePageContent>
      </CreatePageStyle>
    </>
  );
};

export default CreatePage;
