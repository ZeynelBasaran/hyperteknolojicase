
import { apiFactory } from "../config/axios";
import { API_ENDPOINTS } from "../config/api";

//Ürünlri getirmek için
export const getProduct = async () => {
  try {
    return await apiFactory.post(API_ENDPOINTS.PRODUCTS);
  } catch (err) {
    console.error("Product List Çekilemedi", err);
    return [];
  }
};

//Kullanıcıları getirmek için 
export const getCustomer = async () => {
  try {
    return await apiFactory.get(API_ENDPOINTS.CUSTOMER);
  } catch (err) {
    console.error("Product List Çekilemedi", err);
    return [];
  }
};

