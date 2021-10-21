import styled from "@emotion/styled";
import { MAIN_COLOR } from "styles/colors";

export const CreateMenuContainer = styled.div`
  flex: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  #albumFile {
    display: none;
  }

  .memo-input {
    margin: 1rem 0;
    resize: none;
  }
`;

export const CreateMenuImageView = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  .image-preview-container {
    width: 100%;
    height: 400px;
    .upload-require {
      background-color: lightgray;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    img {
      height: 400px;
      overflow: hidden;
      object-fit: contain;
    }
  }
  .file-input {
    visibility: hidden;
  }
  .file-input-label {
    width: 100%;
    background-color: ${MAIN_COLOR};
    padding: 5px;
    text-align: center;
    font-size: 16px;
    color: white;
    cursor: pointer;
  }
`;
