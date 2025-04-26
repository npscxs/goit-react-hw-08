import axios from "axios";
const axiosAPI = axios.create({
  baseURL: "https://connections-api.goit.global/",
});

export const setAuthorizationToken = (token) =>
  (axiosAPI.defaults.headers.common.Authorization = `Bearer ${token}`);

export default axiosAPI;
