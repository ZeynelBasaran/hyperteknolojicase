"use client";

import { useEffect, useMemo, useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useBasket } from "store/basketStore";

const Heart = ({ productID }) => {
  const { toggleFavorite, favorites } = useBasket();
  const [isFavorite, setIsFavorite] = useState(false);
  

  useEffect(() => {
    setIsFavorite(favorites.some((item) => item === productID));
  }, [favorites,productID]);

  return (
    <div className="absolute left-2 top-2 cursor-pointer">
      <FaRegHeart
        color={isFavorite ? "red" : "black"}
        size={25}
        onClick={() => {
          toggleFavorite(productID);
        }}
      />
    </div>
  );
};

export default Heart;

/*

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
*/
