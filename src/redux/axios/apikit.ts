import axios from 'axios';

export const apiUrl = 'https://grocery.chainpulse.tech/api/'; // dev

const APIKit = axios.create({
  baseURL: apiUrl,
  timeout: 60000000,
});

APIKit.interceptors.request.use(async config => {
  return config;
});

APIKit.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    console.error('Error:', error.response); // Log error response data if any
    return Promise.reject(error);
  },
);

export default APIKit;
