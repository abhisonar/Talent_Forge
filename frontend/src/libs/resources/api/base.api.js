import axios from 'axios';
import { getUserToken } from '../function/token.function.js';

const API_URL = process.env.API_URL;

const setRequestAuthorisation = () => {
  axios.interceptors.request.use(function (config) {
    const token = getUserToken();
    config.headers.Authorization = token ? `Bearer ${token}` : '';
    return config;
  });
};

export async function httpGet(url, params) {
  setRequestAuthorisation();
  return await axios.get(`${API_URL}/${url}`, { params }).then((response) => response?.data);
}

export async function httpPost(url, paylaod) {
  setRequestAuthorisation();
  return await axios.post(`${API_URL}/${url}`, paylaod).then((response) => response?.data);
}

export async function httpPut(url, paylaod) {
  setRequestAuthorisation();
  return await axios.put(`${API_URL}/${url}`, paylaod).then((response) => response?.data);
}

export async function httpDelete(url) {
  setRequestAuthorisation();
  return await axios.delete(`${API_URL}/${url}`).then((response) => response?.data);
}

const httpClient = {
  get: httpGet.bind(this),
  post: httpPost.bind(this),
  put: httpPut.bind(this),
  delete: httpDelete.bind(this),
};

export default httpClient;
