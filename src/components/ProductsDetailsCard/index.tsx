import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import Image from "next/image";
import { formatPriceBRL } from "../../utils/functions";
import { saveToLocalStorage } from "../../utils/localStorage";


interface Product {
  id: number;
  discount: number;
  image: string;
  name: string;
  price: number;
  priceMember: number;
  priceNonMember: number;
}

interface CartItems extends Product {
  quantity: number;
}

interface ProductCardProps {
  product: Product;
  cartItems: CartItems[];
  setCartItems: Dispatch<SetStateAction<CartItems[]>>;
}

const ProductsDetailsCard: React.FC<ProductCardProps> = ({
  product,
  cartItems,
  setCartItems,
}: ProductCardProps) => {
  const firstHalfPriceMember = product.priceMember.toString().split(".")[0];
  const secondHalfPriceMember = product.priceMember.toString().split(".")[1];

  const onAddToCart = () => {
    const exist = cartItems.find((item) => item.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
      saveToLocalStorage("cart", cartItems);
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
      saveToLocalStorage("cart", cartItems);
    }
  };

  return (
    <div>

    </div>
  );
};

export default ProductsDetailsCard;
