import axios from "axios";

const server = axios.create({
  baseURL: import.meta.env.VITE.APP_BASE_URL,
});

export default server;
