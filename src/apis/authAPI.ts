import axios from "axios";
import { Token } from "lib/Token";

interface LoginData {
  id: string;
  password: string;
}

interface JoinData {
  id: string;
  password: string;
  confirmPassword: string;
  birth: string;
  sex: string;
  name: string;
}

export const loginAPI = (loginData: LoginData) => {
  return axios.post("/auth/login", loginData);
};

export const loadMyInfoAPI = () => {
  const { accessToken } = Token.getToken();
  return axios.get("/user", {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
};

export const joinAPI = (joinData: JoinData) => {
  return axios.post("/auth/register", joinData);
};
