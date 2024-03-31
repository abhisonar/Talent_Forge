import { STORAGE_KEY_USER_TOKEN } from '../constant/storage-key.constant.js';
import { getLocalStorageItem } from './storage.function';

export const getUserToken = () => {
  return getLocalStorageItem(STORAGE_KEY_USER_TOKEN);
};
