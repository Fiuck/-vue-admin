import axios from "axios";

export function request(config) {
  const instance = axios.create({
    baseURL: "https://www.liulongbin.top:8888/api/private/v1/",
    timeout: 4000,
  });

  instance.interceptors.request.use(
    (config) => {
      // console.log(config);
      if(config.url !== '/login') config.headers.Authorization = window.sessionStorage.getItem('token')
      return config;
    },
    (error) => {}
  );

  instance.interceptors.response.use(
    (response) => {
      return response.data;
    },
    (error) => {}
  );

  return instance(config);
}
