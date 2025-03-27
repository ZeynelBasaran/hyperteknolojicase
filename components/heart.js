"use client";

import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useBasket } from "store/basketStore";

const Heart = ({ product }) => {
  const { toggleFavorite, favorites } = useBasket();

  return (
    <div className="absolute left-2 top-2 cursor-pointer">
      {favorites.find((fav) => fav.productID === product.productID) ? (
        <FaHeart
          color="red"
          size={25}
          onClick={() => {
            toggleFavorite(product);
          }}
        />
      ) : (
        <FaRegHeart
          color=""
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
