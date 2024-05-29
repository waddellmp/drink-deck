import axios from 'axios';

// TODO: Make port configurable via env variable
// TODO: Add success and error interceptors

// Create an axios instance
export const http = axios.create({
  baseURL: 'https://www.thecocktaildb.com/api/json/v1/1',
  timeout: 3000,
  headers: {
    'Content-Type': 'application/json'
  }
});
