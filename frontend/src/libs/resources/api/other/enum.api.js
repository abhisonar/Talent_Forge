import { httpGet } from '@libs/resources/api/base.api';

export const getEnumsByType = async (enumType) => {
  return httpGet(`enums/${enumType}`).then((response) => response?.data);
};
