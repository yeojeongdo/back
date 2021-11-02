import axios from "axios";

async function refreshAccessToken(refreshToken: string) {
  const response = await axios.post("/auth/token-renewal", {
    token: refreshToken,
  });

  return response.data.data;
}

export default refreshAccessToken;
