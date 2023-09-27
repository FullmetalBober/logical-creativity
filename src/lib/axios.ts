import axios from 'axios';

let baseURL = process.env.BASE_DEV_URL;
if (process.env.NODE_ENV !== 'production') baseURL = process.env.BASE_PROD_URL;

const axiosInstance = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export { axiosInstance };
