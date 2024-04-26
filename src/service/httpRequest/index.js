import axios from 'axios';

const baseURL = 'http://localhost:3000';

const request = axios.create({ baseURL });

request.interceptors.request.use((config) => {
  config.headers['Content-Type'] = 'application/json';
  return config;
});

export default request;
