import Form from "components/Common/Form/Form";
import Input from "components/Common/Input/Input";
import useCreate from "hooks/redux/useCreate";
import useInput from "hooks/useInput";
import React, { useCallback } from "react";
import { useState } from "react";
import { CreateMenuContainer } from "./createMenuStyles";
const CreateMenu = () => {
  const { markerState, createAlbum } = useCreate();
  const latLng = markerState.LatLng;
  const selectedMarker = markerState.selectedMarker;
  const [memo, onChangeMemo] = useInput("");
  const [file, setFile] = useState<any>();
  const [preview, setPreview] = useState<string | ArrayBuffer | null>();

  const submit = useCallback(() => {
    const form = new FormData();
    selectedMarker && form.append("address", selectedMarker.address_name);
    selectedMarker && form.append("latitude", selectedMarker.y.toString());
    selectedMarker && form.append("longitude", selectedMarker.x.toString());
    form.append("memo", memo);

    file.forEach((file: any) => {
      form.append("files", file);
    });

    createAlbum(form);
  }, [file, memo, createAlbum, selectedMarker]);

  const handleFileInput = useCallback(e => {
    const reader = new FileReader();
    const file = e.target.files[0];
    const filesInArr = Array.from(e.target.files);

    reader.onloadend = () => {
      setFile(filesInArr);
      setPreview(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  }, []);

  return (
    <CreateMenuContainer>
      {latLng.lat + "/" + latLng.lng}
      <Form hasSubmit submitText="작성하기" onSubmit={submit}>
        {preview && <img src={preview.toString()} alt="" />}
        <Input type="file" id="albumFile" multiple onChange={handleFileInput} />
        <label htmlFor="albumFile">안녕</label>
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
