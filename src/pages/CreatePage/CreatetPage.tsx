import { CreatePageStyle, CreatePageContent } from "./PageStyle";
import Header from "components/Common/Header/Header";
import CreaterMap from "components/Create/CreaterMap/CreaterMap";
import CreateMenu from "components/Create/CreateMenu/CreateMenu";
import useCreate from "hooks/redux/useCreate";
import Input from "components/Common/Input/Input";
import useInput from "hooks/useInput";
import Form from "components/Common/Form/Form";
import { useCallback } from "react";
import { create } from "domain";

const CreatePage = () => {
  return (
    <>
      <CreatePageStyle>
        <Header />
        <CreatePageContent>
          <CreaterMap />
          <CreateMenu />
        </CreatePageContent>
      </CreatePageStyle>
    </>
  );
};

export default CreatePage;
