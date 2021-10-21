import Form from "components/Common/Form/Form";
import Input from "components/Common/Input/Input";
import useCreate from "hooks/redux/useCreate";
import useInput from "hooks/useInput";
import { createRef, useCallback, useEffect } from "react";
import { useState } from "react";
import { CreateMenuContainer, CreateMenuImageView } from "./createMenuStyles";

import Slider from "react-slick";
import { toast } from "react-toastify";
import autosize from "autosize";

const CreateMenu = () => {
  const { markerState, createAlbum } = useCreate();
  const latLng = markerState.LatLng;
  const selectedMarker = markerState.selectedMarker;
  const [memo, onChangeMemo] = useInput("");
  const [file, setFile] = useState<any>();
  const [preview, setPreview] = useState<string[]>([]);
  const memoRef = createRef<HTMLTextAreaElement>();

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
    const imageFileExtensions = [
      "image/apng",
      "image/bmp",
      "image/gif",
      "image/jpeg",
      "image/pjpeg",
      "image/png",
      "image/svg+xml",
      "image/tiff",
      "image/webp",
      "image/x-icon",
    ];
    const filesInArr: any[] = Array.from(e.target.files);
    let isValidImageType: boolean = true;

    filesInArr.forEach(imageFile => {
      isValidImageType = imageFileExtensions.includes(imageFile.type);
    });
    if (!isValidImageType) {
      toast.error("지원하지 않는 확장자입니다.");
      return;
    }

    if (filesInArr.length !== 0) {
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
    dots: false,
  };

  useEffect(() => {
    if (memoRef.current) {
      autosize(memoRef.current);
    }
  }, [memoRef]);

  return (
    <CreateMenuContainer>
      <Form hasSubmit submitText="작성하기" onSubmit={submit}>
        <b>위치 : {latLng.lat + "/" + latLng.lng}</b>
        <CreateMenuImageView>
          <div className="image-preview-container">
            {!file ? (
              <strong className="upload-require">
                이미지를 업로드해주세요.
              </strong>
            ) : (
              <Slider {...settings}>
                {preview[0] && preview.map(view => <img src={view} alt="" />)}
              </Slider>
            )}
          </div>
          <input
            type="file"
            multiple
            id="albumFile"
            className="file-input"
            onChange={handleFileInput}
          />
          <label htmlFor="albumFile" className="file-input-label">
            파일 업로드
          </label>
        </CreateMenuImageView>

        <textarea
          ref={memoRef}
          className="memo-input"
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
