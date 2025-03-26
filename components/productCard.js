import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import AddBtn from "./addBtn";

const ProductCard = ({ product }) => {
  const { productName, salePrice, productData } = product;
  const value = salePrice.toFixed(2);
  const [intValue, floatValue] = value.split(".");

  return (
    <div className="rounded-lg border p-4 shadow-sm transition-all duration-300 hover:scale-105 hover:shadow-lg min-w-[250px] max-w-[500px] dark:bg-white dark:text-black">
      <div className="h-40 w-full flex items-center justify-center">
        {
          <Image
            src={productData.productMainImage}
            alt={productName}
            width={100}
            height={100}
            unoptimized
          />
        }
      </div>
      <div className="pt-6">
        <div className="h-10 hover:no-underline text-lg font-semibold leading-tight line-clamp-2 w-full">
          {productName}
        </div>

        <div className="mt-2 flex items-center justify-between gap-4">
          <p className="text-xl font-extrabold leading-tight">
            <span className="text-xs align-super">$</span>
            {intValue}
            <span className="text-xs align-super">.{floatValue}</span>
          </p>

          <AddBtn product={product} />
        </div>
        
      </div>
    </div>
  );
};

export default ProductCard;
