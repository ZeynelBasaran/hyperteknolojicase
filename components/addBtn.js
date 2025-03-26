"use client"

import { Button } from "./ui/button";
import { useBasket } from "../store/basketStore";

const AddBtn = ({product}) => {

  const { addToBasket } = useBasket();


  return (
    <Button onClick={()=>{addToBasket(product)}} type="button" variant="visne">
      Sepete Ekle
    </Button>
  );
};

export default AddBtn;
