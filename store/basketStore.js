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

//LS den favorileri çekme
const getLSFavorites = () => {
  if (typeof window !== "undefined" && localStorage.getItem("favorites")) {
    return JSON.parse(localStorage.getItem("favorites"));
  }
  return [];
};

const addLSFavorites = (item) => {
  localStorage.setItem("favorites", JSON.stringify(item));
};

export function BasketProvider({ children }) {
  const [basket, setBasket] = useState(getLSBasket());
  const [favorites, setFavorites] = useState(getLSFavorites());

  const addToBasket = (product) => {
    //Ürün daha önce eklenmiş mi kontrol et
    const findProduct = basket.find((item) => {
      return item.productID === product.productID;
    });

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
      //Eğer ürün daha önce eklenmemişse yeni bir ürün olarak ekle
      setBasket((prev) => [...prev, { ...product, adet: 1 }]);
      addLocalStorage([...basket, { ...product, adet: 1 }]);
    }
  };

  const toggleFavorite = (product) => {
    setFavorites((prevFavorites) => {
      let updatedFavorites;
      // Eğer ürün favorilerde varsa çıkar
      if (prevFavorites.find((fav) => fav.productID === product.productID)) {
        updatedFavorites = prevFavorites.filter(
          (fav) => fav.productID !== product.productID
        );
      } else {
        // Yeni bir favori eklerken önceki state'i koruyoruz
        updatedFavorites = [...prevFavorites, product];
      }

      addLSFavorites(updatedFavorites);
      return updatedFavorites;
    });
  };


  return (
    <BasketContext.Provider
      value={{ basket, addToBasket, toggleFavorite, favorites }}
    >
      {children}
    </BasketContext.Provider>
  );
}

// Context'i tüketmek için custom hook
export function useBasket() {
  return useContext(BasketContext);
}
