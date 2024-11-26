import axios from 'axios';
import { API_URL } from "../config";

const instance = axios.create({
  baseURL: API_URL,
  withCredentials: true
});

instance.interceptors.request.use((config) => {
  console.log('Cookies:', document.cookie);
  return config;
});

export default instance;