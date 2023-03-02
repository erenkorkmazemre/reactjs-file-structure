import axios from 'axios';
import {APP_CONFIG} from "@config/index";

const createClient = (prefix) => {
  const httpClient = axios.create({
    baseURL: `${APP_CONFIG.baseURL}/${prefix}/`,

    headers: {
      'Content-Type': 'application/json',
    },
  });

  httpClient.interceptors.request.use(
    function (config) {

      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );

  httpClient.interceptors.response.use(
    function (response) {
      return response.data;
    },

    function (error) {
      if (error.response.status === 401) {
        window.location.reload();
      }

      return Promise.reject(error);
    }
  );

  return httpClient;
};

export default createClient;
