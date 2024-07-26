import apiConfig from './apiConfig';

export const get = (url, params = {}) =>
  new Promise((resolve, reject) => {
    apiConfig
      .get(url, {params})
      .then(response => resolve(response.data))
      .catch(error => reject(error));
  });

export const post = (url, data) =>
  new Promise((resolve, reject) => {
    apiConfig
      .post(url, data)
      .then(response => resolve(response.data))
      .catch(error => reject(error));
  });

export const put = (url, data) =>
  new Promise((resolve, reject) => {
    apiConfig
      .put(url, data)
      .then(response => resolve(response.data))
      .catch(error => reject(error));
  });

export const del = url =>
  new Promise((resolve, reject) => {
    apiConfig
      .delete(url)
      .then(response => resolve(response.data))
      .catch(error => reject(error));
  });
