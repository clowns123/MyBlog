import client from "./client";

// const loginUserAPI = (loginData, token) => {
//   console.log(loginData, "loginData");
//   const config = {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   };
// };

export const loginUserApi = (loginData, token) => {
  console.log(loginData, "loginData");
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  return client.post("api/auth", loginData, config);
};
const TokenService = class {};
