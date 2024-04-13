import { httpGet } from '@libs/resources/api/base.api';

export const listInstitutes = async (params) => {
  return httpGet(`institutes`, params).then((response) => response?.data);
};
