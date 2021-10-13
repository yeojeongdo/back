import axios from "axios";

export const albumsAPI = () => {
  return axios.get(`/album/latest`);
};

export const albumDetailAPI = (albumId: number) => {
  return axios.get(`/album/detail/${albumId}`);
};

export const commentsAPI = (albumId: number) => {
  return axios.get(`/comment/list/${albumId}`);
};

interface ICreateCommentData {
  comment: string;
  albumId: number;
}

export const createCommentAPI = (data: ICreateCommentData) => {
  return axios.post(`/comment`, data);
};
