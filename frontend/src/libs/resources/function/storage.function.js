export const setLocalStorageItem = (key, value) => {
  localStorage.setItem(key, value);
};

export const getLocalStorageItem = (key) => {
  return localStorage.getItem(key);
};

export const removeLocalStorageItem = (key) => {
  return localStorage.removeItem(key);
};

export const clearLocalStorage = () => {
  return localStorage.clear();
};
