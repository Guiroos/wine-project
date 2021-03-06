import React, { Dispatch, SetStateAction } from "react";
import Image from "next/image";
import { formatPriceBRL } from "../../utils/functions";
import { saveToLocalStorage } from "../../utils/localStorage";

import {
  ProductCardDiv,
  ProductCardPriceDiv,
  ProductCardMemberCardDiv,
  ProductCardNonMemberCardDiv,
  ProductCardButtonDiv,
  ProductCardButton,
} from "./style";
import Link from "next/link";

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

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  cartItems,
  setCartItems,
}: ProductCardProps) => {
  const firstHalfPriceMember = product.priceMember.toString().split(".")[0];
  const secondHalfPriceMember = product.priceMember.toString().split(".")[1];

  const onAddToCart = () => {
    const exist = cartItems.find((item) => item.id === product.id);
    if (exist) {
      const newCart = cartItems.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCartItems(newCart);
      saveToLocalStorage("cart", newCart);
    } else {
      const newCart = [...cartItems, { ...product, quantity: 1 }];
      setCartItems(newCart);
      saveToLocalStorage("cart", newCart);
    }
  };

  return (
    <div id={`product-card-${product.id}`}>
      <Link href={`store/product/${product.id}`}>
        <ProductCardDiv>
          <Image
            src={product.image}
            alt={product.name}
            height="220"
            width="140"
          />
          <div>
            <div>
              <div>{product.name}</div>
            </div>
            <div>
              <ProductCardPriceDiv>
                <div>{formatPriceBRL.format(product.price)}</div>
                <div>{`${product.discount}% OFF`}</div>
              </ProductCardPriceDiv>
              <ProductCardMemberCardDiv>
                <span>S??CIO WINE</span>
                <div>
                  <span>R$</span>
                  <span>{`${firstHalfPriceMember},`}</span>
                  <span>{`${secondHalfPriceMember}`}</span>
                </div>
              </ProductCardMemberCardDiv>
              <ProductCardNonMemberCardDiv>
                {`N??O S??CIO ${formatPriceBRL.format(product.priceNonMember)}`}
              </ProductCardNonMemberCardDiv>
            </div>
          </div>
        </ProductCardDiv>
      </Link>
      <ProductCardButtonDiv id={`product-button-${product.id}`}>
        <ProductCardButton type="button" onClick={onAddToCart}>
          ADICIONAR
        </ProductCardButton>
      </ProductCardButtonDiv>
    </div>
  );
};

export default ProductCard;
