import useStoreRoles from "@/public-Store/useStoreRoles";
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 10000,
  withCredentials: true,
  headers: {
    Accept: "application/json",
  },
});

axiosInstance.interceptors.request.use((config) => {
  const role = useStoreRoles.getState().role;

  if (config.data instanceof FormData) {
    config.headers["Content-Type"] = "multipart/form-data";
  } else {
    config.headers["Content-Type"] = "application/json";
  }


  const tokenKeys = {
    admin: "adminToken",
    astrologer: "astrologerToken",
    // user: "userToken",
  };
  const token = localStorage.getItem(tokenKeys[role]);
  // console.log(`Role:${role},  Token:${token}`);

  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }
  return config;
});


let isRefreshing = false;
let failedQueue = [];

const processQueue = (error, token = null) => {
  failedQueue.forEach(p => (error ? p.reject(error) : p.resolve(token)));
  failedQueue = [];
};

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if ((error.response?.status === 401 || error.response?.status === 403) && !originalRequest._retry) {
      if (isRefreshing) {
        // Queue requests while refreshing
        return new Promise((resolve, reject) => {
          failedQueue.push({ resolve, reject });
        })
          .then((token) => {
            originalRequest.headers["Authorization"] = `Bearer ${token}`;
            return axiosInstance(originalRequest);
          })
          .catch((err) => Promise.reject(err));
      }
      originalRequest._retry = true;
      isRefreshing = true;

      try {
        const { data } = await axios.post(
          `${import.meta.env.VITE_API_BASE_URL}/public/refreshToken`,
          {},
          { withCredentials: true } // send cookies
        );
        const role = useStoreRoles.getState().role;
        const tokenKeys = {
          admin: "adminToken",
          astrologer: "astrologerToken",
          // user: "userToken",
        };
        localStorage.setItem(`${tokenKeys[role]}`, data.accessToken);

        axiosInstance.defaults.headers["Authorization"] = `Bearer ${data.accessToken}`;
        originalRequest.headers["Authorization"] = `Bearer ${data.accessToken}`;
        processQueue(null, data.accessToken);
        return axiosInstance(originalRequest);
      } catch (err) {
        processQueue(err, null);
        return Promise.reject(err);
      } finally {
        isRefreshing = false;
      }
    }
    return Promise.reject(error);
  }
)

export default axiosInstance;