import { httpPost } from '../base.api.js';

export const loginUserApi = async (payload) => {
  return httpPost(`login`, payload).then((res) => res.data);
};

export const registerUserApi = async (payload) => {
  return httpPost(`register`, payload).then((res) => res.data);
};
