import axios from "axios";

export const albumsAPI = () => {
  return axios.get(`/album/latest`);
};

export const albumDetailAPI = (albumId: number) => {
  return axios.get(`/album/detail/${albumId}`);
};
