import axios from "axios";
import "server-only";

const api = axios.create({
  baseURL: process.env.API_URL,
});

export default api;
