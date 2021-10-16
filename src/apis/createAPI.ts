import axios from "axios";

export const createAlbum = (data: any) => {
  return axios.post("/album", data);
};
