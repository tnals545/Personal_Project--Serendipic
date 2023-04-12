import axios from "axios";

const instance = axios.create({ baseURL: "/services/" });

instance.defaults.timeout = 1000;

instance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

instance.interceptors.response.use((response: any) => {
  if (response.status === 200) {
    document.body.style.backgroundImage = `url(${response.data.urls.raw})`;
  }

  return response;
});

export default instance;
