// import axios from "axios";
// const BASE_URL = "https://14220.fullstack.clarusway.com/";

// const useAxios = () => {
//   const escapedToken = JSON.parse(localStorage.getItem("persist:root"))?.token;
//   const token = escapedToken && JSON.parse(escapedToken);

//   export const axiosWithToken = axios.create({
//     baseURL: "https://14220.fullstack.clarusway.com/",
//     headers: { Authorization: `Token ${token}` },
//   });

//   axiosWithToken.interceptors.request.use(function (config) {
//     console.log("interseptor run");
//     if (!config.headers["Authorization"]) {
//       config.headers["Authorization"] = `Token ${token}`;
//     }
//     return config;
//   });

//   return <div></div>;
// };

// export default useAxios;

import axios from "axios";
import { useSelector } from "react-redux";

const BASE_URL = "https://14220.fullstack.clarusway.com/";

//* Axios Instance for Public API Request
export const axiosPublic = axios.create({
  baseURL: BASE_URL,
});

const useAxios = () => {
  const { token } = useSelector((state) => state.auth);

  //* Axios Instance for Private API Request
  const axiosWithToken = axios.create({
    baseURL: BASE_URL,
    headers: { Authorization: `Token ${token}` },
  });

  return { axiosWithToken };
};

export default useAxios;
