"use client";
import { useEffect, useState } from 'react';
import { useBasket } from 'store/basketStore';


const BasketIcon = () => {
  const [number,setNumber] = useState(0);

  const { basket } = useBasket();

  useEffect(()=>{
    setNumber(basket.length)
  },[basket])

  return (
    <span className="absolute flex items-center justify-center rounded-full right-1 top-1 bg-black h-6 w-6 text-white">{number}</span>
  )
}

export default BasketIcon;

/*
 {basket.length}
*/