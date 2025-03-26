"use client"; // Çünkü useState ve useContext kullanıyoruz!

import { createContext, useContext, useState } from "react";

const BasketContext = createContext();

//Local Strogare'dan sepeti çekme
const getLSBasket = () => {
  if (typeof window !== "undefined" && localStorage.getItem("basket")) {
    return JSON.parse(localStorage.getItem("basket"));
  }
  return [];
};

//LS ye item ekleme
const addLocalStorage = (item) => {
  localStorage.setItem("basket", JSON.stringify(item));
};


export function BasketProvider({ children }) {

  const [basket, setBasket] = useState(getLSBasket());

  const addToBasket = (product) => {
    
    //Ürün daha önce eklenmiş mi kontrol et
    const findProduct = basket.find((item) => {
      return item.productID === product.productID;
    });
    console.log(findProduct)
    
    //Eğer ürün daha önce eklenmişse adetini arttır
    if (findProduct) {
      const newArr = basket.map((item) => {
        return item.productID === findProduct.productID
          ? { ...item, adet: item.adet + 1 }
          : item;
      });
      setBasket(newArr);
      addLocalStorage(newArr);
      
    } else {
      setBasket((prev) => [...prev, { ...product, adet: 1 }]);
      addLocalStorage([...basket, { ...product, adet: 1 }]); 
    }
      
  };
  

  return (
    <BasketContext.Provider value={{ basket,addToBasket }}>
      {children}
    </BasketContext.Provider>
  );
}

// Context'i tüketmek için custom hook
export function useBasket() {
  return useContext(BasketContext);
}
