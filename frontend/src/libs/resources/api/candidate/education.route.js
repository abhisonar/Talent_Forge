import { httpDelete, httpGet, httpPost, httpPut } from '@libs/resources/api/base.api';

export const listInstitutes = async (params) => {
  return httpGet(`institutes`, params).then((response) => response?.data);
};

export const listEducationType = async (params) => {
  return httpGet(`educationType`, params).then((response) => response?.data);
};

export const listCourses = async (params) => {
  return httpGet(`courses`, params).then((response) => response?.data);
};

export const listGradingSystem = async (params) => {
  return httpGet(`gradingSystem`, params).then((response) => response?.data);
};

export const addEducationDetail = async (payload) => {
  return httpPost(`education-detail`, payload).then((response) => response?.data);
};

export const udpateEducationDetail = async (eduationId, payload) => {
  return httpPut(`education-detail/${eduationId}`, payload).then((response) => response?.data);
};

export const listEducationDetail = async () => {
  return httpGet(`education-detail`).then((response) => response?.data);
};

export const deleteEducationDetailApi = async (eduationId, payload) => {
  return httpDelete(`education-detail/${eduationId}`, payload).then(
    (response) => response?.data
  );
};
