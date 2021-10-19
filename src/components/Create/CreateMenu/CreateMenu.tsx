import Form from "components/Common/Form/Form";
import Input from "components/Common/Input/Input";
import useCreate from "hooks/redux/useCreate";
import useInput from "hooks/useInput";
import React, { useCallback } from "react";
import { useState } from "react";
import { CreateMenuContainer, CreateMenuImageView } from "./createMenuStyles";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CreateMenu = () => {
  const { markerState, createAlbum } = useCreate();
  const latLng = markerState.LatLng;
  const selectedMarker = markerState.selectedMarker;
  const [memo, onChangeMemo] = useInput("");
  const [file, setFile] = useState<any>();
  const [preview, setPreview] = useState<string[]>([]);

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
    const filesInArr: any[] = Array.from(e.target.files);

    if (filesInArr) {
      setFile(filesInArr);

      setPreview([
        ...filesInArr.map(file => {
          return URL.createObjectURL(file);
        }),
      ]);
    }
  }, []);

  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
  };

  return (
    <CreateMenuContainer>
      <Form hasSubmit submitText="작성하기" onSubmit={submit}>
        {latLng.lat + "/" + latLng.lng}
        <CreateMenuImageView>
          <Slider {...settings}>
            {preview[0] && preview.map(view => <img src={view} alt="" />)}
          </Slider>
          <Input
            type="file"
            id="albumFile"
            multiple
            onChange={handleFileInput}
          />
          <label htmlFor="albumFile">파일</label>
        </CreateMenuImageView>
        <Input
          value={memo}
          onChange={onChangeMemo}
          placeholder="사진과 함께 남길 말을 작성해주세요."
        />
        {selectedMarker?.address_name}
      </Form>
    </CreateMenuContainer>
  );
};

export default CreateMenu;
