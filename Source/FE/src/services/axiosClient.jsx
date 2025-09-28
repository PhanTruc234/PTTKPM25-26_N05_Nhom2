import axios, { AxiosHeaders } from "axios";
import { store } from "../store/store";
import { doLogin, doLogout } from "../store/features/auth/authenSlice";

const BASE_URL = "http://localhost:3100";
const axiosClient = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});
// Gắn AccessToken vào mọi request
axiosClient.interceptors.request.use((config) => {
  const state = store.getState();
  const accessToken = state.authenSlice.accessToken;
  if (accessToken) {
    if (!config.headers) {
      config.headers = new AxiosHeaders();
    }
    config.headers.set("Authorization", `Bearer ${accessToken}`);
  }
  if (config.pathParams) {
    Object.entries(config.pathParams).forEach(([key, value]) => {
      config.url = config.url.replace(`:${key}`, value);
    });
  }
  return config;
});
axiosClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (
      error.response?.status === 401 &&
      !originalRequest._retry &&
      !originalRequest.url.includes("/auth/refresh")
    ) {
      originalRequest._retry = true;
      try {
        const res = await axiosClient.post("/auth/refresh");
        const { access_token, user } = res.data;
        store.dispatch(doLogin(res.data));
        originalRequest.headers = {
          ...originalRequest.headers,
          Authorization: `Bearer ${access_token}`,
        };

        return axiosClient(originalRequest);
      } catch (refreshError) {
        store.dispatch(doLogout());
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);
export default axiosClient;
