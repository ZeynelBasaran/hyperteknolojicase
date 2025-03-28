// API Sunucu URL ve TOKEN Bilgileri
export const API_BASE_URL = "https://api.hyperteknoloji.com.tr";
export const token = process.env.TOKEN;

// Versiyon
export const API_VERSION = "v1";

// Sonrasında ihtiyaç dahilinde tree değiştirirsek.
export const API_URL_VERSION = `${API_BASE_URL}/${API_VERSION}`;

// Endpointler
export const API_ENDPOINTS = {
  PRODUCTS: "/Products/List",
  CUSTOMER: "/Customer/Get",
};

/*
process.env.NEXT_PUBLIC_TOKEN ||
*/
