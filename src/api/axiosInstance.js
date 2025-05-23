import axios from "axios";

export const instance = axios.create({
    baseURL: "https://parcial2-progweb.onrender.com/api"
})

instance.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem("token");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => Promise.reject(error)
  );