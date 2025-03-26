// API Sunucu URL ve TOKEN Bilgileri
export const API_BASE_URL = "https://api.hyperteknoloji.com.tr";
export const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJMb2dpblR5cGUiOiIxIiwiQ3VzdG9tZXJJRCI6IjU1NzI0IiwiRmlyc3ROYW1lIjoiRGVtbyIsIkxhc3ROYW1lIjoiSHlwZXIiLCJFbWFpbCI6ImRlbW9AaHlwZXIuY29tIiwiQ3VzdG9tZXJUeXBlSUQiOiIzMiIsIklzUmVzZWxsZXIiOiIwIiwiSXNBUEkiOiIxIiwiUmVmZXJhbmNlSUQiOiIiLCJSZWdpc3RlckRhdGUiOiIzLzI1LzIwMjUgMTowMDo0OCBQTSIsImV4cCI6MjA1Mzk3MDc0MywiaXNzIjoiaHR0cHM6Ly9oeXBlcnRla25vbG9qaS5jb20iLCJhdWQiOiJodHRwczovL2h5cGVydGVrbm9sb2ppLmNvbSJ9.dJnOilP5umTtEYFKdpBNUMgIpl8mBN7SUrAPuMyPwn4`;

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
