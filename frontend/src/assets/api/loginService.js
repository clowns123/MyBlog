import client from "./client";

export const login = (loginData, token) => {
  console.log(loginData, "loginData");
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  return client.post("api/auth", loginData, config);
};
const TokenService = class {};
