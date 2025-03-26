"use client";
import Link from "next/link";
import { useBasket } from "../../store/basketStore";
import { useEffect, useState } from "react";
import Image from "next/image";





const SepetPage = () => {
  const { basketPrice, setBasketPrice } = useState(0)

  const { basket } = useBasket();




  return (
    <main className="flex flex-grow ">
      <ul className="w-full px-4">
        {basket.length > 0 ? (
          basket.map((product, i) => (
            <li
              key={`${i}${product.productName}`}
              className="flex flex-col gap-y-4 sm:flex-row items-center sm:justify-between p-4 border-b border-gray-300"
            >
              <div className="flex-shrink-0">
                <Image
                  src={product.productData.productMainImage}
                  width={80}
                  height={80}
                  alt={product.productName}
                  className="rounded-md"
                />
              </div>

              <div className="flex-1 text-center sm:text-left text-lg text-gray-700 dark:text-white ml-4">
                {product.productName}
              </div>

              <div className="flex items-center gap-4 text-gray-600">
                <div className="text-lg dark:text-white min-w-10">
                  {product.salePrice}
                  <span className="text-xs align-super">$</span>
                </div>
                <div className="dark:text-white text-lg">{product.adet} Adet</div>
                <div className="font-semibold dark:text-white text-lg min-w-20 text-right">
                  {(product.salePrice * product.adet).toFixed(2)}
                  <span className="text-xs align-super">$</span>
                </div>
              </div>
            </li>
          ))
        ) : (
          <li className="text-center p-4 text-gray-500 dark:text-gray-300">Sepet Boş</li>
        )}
      </ul>



    </main>
  )
}

export default SepetPage;