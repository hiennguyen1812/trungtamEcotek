import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5001",
});

const addJwt = (jwt) => {
  axiosInstance.interceptors.request.use((config) => {
    return {
      ...config,
      headers: {
        ...config.headers,
        Authorization: `Bearer ${jwt}`,
      },
    };
  });
};

export { addJwt };

export default axiosInstance;
