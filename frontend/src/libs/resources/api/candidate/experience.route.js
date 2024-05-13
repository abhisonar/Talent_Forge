import {
  httpDelete,
  httpGet,
  httpPost,
  httpPut,
} from "@libs/resources/api/base.api";

export const listCompaniesApi = async () => {
  return httpGet(`companies`).then((response) => response?.data);
};

export const listDesignationsApi = async (params) => {
  return httpGet(`designations`, params).then((response) => response?.data);
};

export const listCoursesApi = async (params) => {
  return httpGet(`courses`, params).then((response) => response?.data);
};

export const listExperiencesApi = async (params) => {
  return httpGet(`experience-detail`, params).then(
    (response) => response?.data
  );
};

export const addExperienceDetailApi = async (payload) => {
  return httpPost(`experience-detail`, payload).then(
    (response) => response?.data
  );
};

export const updateExperienceDetailApi = async (experienceId, payload) => {
  return httpPut(`experience-detail/${experienceId}`, payload).then(
    (response) => response?.data
  );
};

export const deleteExperienceDetailApi = async (experienceId, payload) => {
  return httpDelete(`experience-detail/${experienceId}`, payload).then(
    (response) => response?.data
  );
};
