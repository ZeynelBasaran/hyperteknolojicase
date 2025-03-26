"use client";
import { useBasket } from 'store/basketStore';


const BasketIcon = () => {

  const { basket } = useBasket();

  return (
    <span className="absolute flex items-center justify-center rounded-full right-1 top-1 bg-black h-6 w-6 text-white">{basket.length}</span>
  )
}

export default BasketIcon;