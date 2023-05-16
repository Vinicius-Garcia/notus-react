import axios from "axios";
const url = "http://localhost:1337/api";
//const url = "http://prkng-hml-a.dsr.net.br:32209/api/v0";
const api = axios.create({
  baseURL: url,
});

api.interceptors.request.use(
  function (config) {
    const token = sessionStorage.getItem("token");
    if (token) config.headers.authorization = `Bearer ${token}`;
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default api;
