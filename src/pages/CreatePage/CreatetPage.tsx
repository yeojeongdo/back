import { CreatePageStyle, CreatePageContent, CreateMenu } from "./PageStyle";
import Header from "components/Common/Header/Header";
import CreaterMap from "components/Create/CreaterMap";
import useCreate from "hooks/redux/useCreate";
import Input from "components/Common/Input/Input";
import useInput from "hooks/useInput";
import Form from "components/Common/Form/Form";
import { useCallback } from "react";
import { create } from "domain";

const CreatePage = () => {
  const { markerState, createAlbum } = useCreate();
  const latLng = markerState.LatLng;
  const [memo, onChangeMemo] = useInput("");

  const submit = useCallback(() => {
    console.log("sumbit");
    createAlbum({ memo });
  }, [createAlbum, memo]);

  return (
    <>
      <CreatePageStyle>
        <Header />
        <CreatePageContent>
          <CreaterMap />
          <CreateMenu>
            {latLng?.lat}/{latLng?.lng}
            <Form hasSubmit submitText="작성하기" onSubmit={submit}>
              <Input type="file" />
              <Input
                value={memo}
                onChange={onChangeMemo}
                placeholder="사진과 함께 남길 말을 작성해주세요."
              />
            </Form>
          </CreateMenu>
        </CreatePageContent>
      </CreatePageStyle>
    </>
  );
};

export default CreatePage;
