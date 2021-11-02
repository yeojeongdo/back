import axios from "axios";

export const userInfoAPI = (userIdx: number) => {
  return axios.get(`/user`, {
    params: {
      idx: userIdx,
    },
  });
};

export const followNumberAPI = (userIdx: number) => {
  return axios.get(`/follow/numbers/${userIdx}`);
};

export const followersAPI = (userIdx: number) => {
  return axios.get(`/user/followers/${userIdx}`);
};

export const followingsAPI = (userIdx: number) => {
  return axios.get(`/user/followings/${userIdx}`);
};

export const requestFollowAPI = (userIdx: number) => {
  return axios.patch(`/follow/${userIdx}`);
};

export const getFollowState = (userIdx: number) => {
  return axios.get(`/follow/state/${userIdx}`);
};

export const editUserProfile = (profile: FormData) => {
  return axios.patch(`/user/image`, profile);
};

export const editUserName = (name: string) => {
  return axios.patch(`/user/name`, { name });
};

export const editUserBirth = (birthDate: string) => {
  return axios.patch(`/user/birth-date`, { birthDate });
};
