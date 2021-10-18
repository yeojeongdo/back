import axios from "axios";

export const userInfoAPI = (userIdx: number) => {
  return axios.get("/user");
};

export const followersAPI = (userIdx: number) => {
  return axios.get(`/user/followers/${userIdx}`);
};

export const followingsAPI = (userIdx: number) => {
  return axios.get(`/user/followings/${userIdx}`);
};
