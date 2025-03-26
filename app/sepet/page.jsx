"use client";
import Link from "next/link";
import { useBasket } from "../../store/basketStore";
import { useEffect, useState } from "react";
import Image from "next/image";





const SepetPage = () => {
  const { basketPrice, setBasketPrice } = useState(0)


  const { basket } = useBasket();

  useEffect(() => {

  }, [basket])


  console.log(basket)



  return (
    <main className="flex flex-grow">
      <ul className="">
        {basket.map((product, i) => (
          <li key={`${i}${product.productName}`} className="flex items-center my-2">
            <div className="">
              <Image src={product.productData.productMainImage} width={80} height={80} alt={product.productName} />
            </div>
            <div className="flex flex-grow">
              {product.productName}
            </div>
            <div>
              {product.salePrice}
            </div>
            <div>
              {product.adet}
            </div>
            <div>
              {product.salePrice * product.adet}
            </div>
          </li>
        ))}
      </ul>
    </main>
  )
}

export default SepetPage;