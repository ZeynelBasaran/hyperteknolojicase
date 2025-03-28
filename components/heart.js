"use client";

import { useEffect, useMemo, useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useBasket } from "store/basketStore";

const Heart = ({ product }) => {
  const { toggleFavorite, favorites } = useBasket();


  const isFavorite = useMemo(() => {
    return favorites.some((item) => item.productID === product.productID);
  }, [favorites, product.productID]);
  


 

  return (
    <div className="absolute left-2 top-2 cursor-pointer">
      {isFavorite ? (
        <FaHeart
          color="red"
          size={25}
          onClick={() => {
            toggleFavorite(product);
          }}
        />
      ) : (
        <FaRegHeart
          color="black"
          className=""
          size={25}
          onClick={() => {
            toggleFavorite(product);
          }}
        />
      )}
    </div>
  );
};

export default Heart;
