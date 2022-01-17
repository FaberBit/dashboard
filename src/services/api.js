import axios from 'axios';

export const api = axios.create({
  // baseURL: "http://localhost:8080/",
  baseURL: 'http://localhost:8080/',
});

api.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem('@FaberBit/token');
    if (accessToken && accessToken.length > 0) {
      // eslint-disable-next-line no-param-reassign
      config.headers.Authorization = `Bearer ${accessToken}`;
      return config;
    }
    return config;
  },
  (error) => (error),
);

export default api;
