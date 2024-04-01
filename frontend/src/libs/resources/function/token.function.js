import { STORAGE_KEY_USER_TOKEN } from '../constant/storage-key.constant.js';
import { clearLocalStorage, getLocalStorageItem } from './storage.function.js';
import { jwtDecode } from 'jwt-decode';

export function getUserToken() {
  return getLocalStorageItem(STORAGE_KEY_USER_TOKEN);
}

export function checkUserTokenExpiry() {
  const token = getUserToken();
  if (!token) return true;

  if (jwtDecode(token).exp < Date.now() / 1000) {
    clearLocalStorage();
    return true;
  }

  return false;
}
