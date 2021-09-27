import axios from "axios";
import { Token } from "lib/Token";
import { toast } from "react-toastify";

interface LoginData {
  id: string;
  password: string;
}

export const loginAPI = (loginData: LoginData) => {
  return axios.post("/auth/login", loginData);
};
