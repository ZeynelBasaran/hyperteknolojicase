import axios from "axios";
export const API_BASE_URL = "https://api.hyperteknoloji.com.tr";
import { token } from "./api";

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export const apiFactory = {
  get: async (
    url,
    config = {
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  ) => {
    const response = await api.get(url, config);
    return response.data;
  },
  post: async (
    url,
    data = {},
    config = {
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  ) => {
    const response = await api.post(url, data, config);
    return response.data;
  },
};

/*

api.interceptors.request.use(
  (config) => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("token");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => Promise.reject(error)
);





export const getAllProducts = async () => {
  try {
    return await apiFactory.get("/customer/get");
  } catch (err) {
    console.error("Product List Çekilemedi", err);
    throw err;
  }
};



/*
import axios from "axios";
//import { API_BASE_URL } from "./api";

export const API_BASE_URL = "https://api.hyperteknoloji.com.tr";

// Temel Base URL kurulumu
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// CRUD işlemleri için gerekli olan axios instance
export const apiFactory = {
  get: async (url, config = {}) => {
    const response = await api.get(url, config); // axiosInstance yerine api kullanıldı
    return response.data;
  },

  post: async (url, data, config = {}) => {
    const response = await api.post(url, data, config); // axiosInstance yerine api kullanıldı
    return response.data;
  },
};

export const getAllProducts = async () => {
  try {
    return await apiFactory.get("/customer/get");
  } catch (err) {
    console.error("Product List Çekilemedi", err);
    return [];
  }
};
*/
