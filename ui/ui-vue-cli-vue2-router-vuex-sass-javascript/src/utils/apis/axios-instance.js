import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
});

console.log(`process.env.VUE_APP_API_URL: ${process.env.VUE_APP_API_URL}`);
