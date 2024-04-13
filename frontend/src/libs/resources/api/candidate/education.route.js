import { httpGet } from '@libs/resources/api/base.api';

export const listInstitutes = async (params) => {
  return httpGet(`institutes`, params).then((response) => response?.data);
};

export const listEducationType = async (params) => {
  return httpGet(`educationType`, params).then((response) => response?.data);
};

export const listCourses = async (params) => {
  return httpGet(`courses`, params).then((response) => response?.data);
}

export const listGradingSystem = async (params) => {
  return httpGet(`gradingSystem`, params).then((response) => response?.data);
}