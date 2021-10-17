import Form from "components/Common/Form/Form";
import Input from "components/Common/Input/Input";
import useCreate from "hooks/redux/useCreate";
import useInput from "hooks/useInput";
import React, { useCallback } from "react";
import { CreateMenuContainer } from "./createMenuStyles";
const CreateMenu = () => {
  const { markerState, createAlbum } = useCreate();
  const latLng = markerState.LatLng;
  const [memo, onChangeMemo] = useInput("");

  const submit = useCallback(() => {
    createAlbum({ memo });
  }, [memo, createAlbum]);

  return (
    <CreateMenuContainer>
      {latLng.lat / latLng.lng}
      <Form hasSubmit submitText="작성하기" onSubmit={submit}>
        <Input type="file" id="albumFile" />
        <Input
          value={memo}
          onChange={onChangeMemo}
          placeholder="사진과 함께 남길 말을 작성해주세요."
        />
      </Form>
    </CreateMenuContainer>
  );
};

export default CreateMenu;
