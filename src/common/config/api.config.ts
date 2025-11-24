import axios from 'axios';
import Config from 'react-native-config';

export const api = axios.create({
  baseURL: Config.API_BASE_URL,
  timeout: 10000,
});

api.interceptors.request.use(config => {
  config.params = config.params || {};

  if (!config.params.apikey && Config.API_KEY) {
    config.params.apikey = Config.API_KEY;
  }

  return config;
});
