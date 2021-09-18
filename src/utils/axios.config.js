import axios from 'axios';
import NProgress from 'nprogress';

const instance = axios.create({
  baseURL: process.env.VUE_APP_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json; charset=utf-8',
  },
});

instance.interceptors.request.use(
  function (config) {
    NProgress.start();
    return config;
  },

  function (error) {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  function (response) {
    NProgress.done();
    return response;
  },

  function (error) {
    return Promise.reject(error);
  }
);

export default instance;
