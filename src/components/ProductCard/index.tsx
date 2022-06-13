import Image from "next/image";

interface Product {
  avaliations: number;
  classification: string;
  country: string;
  discount: number;
  flag: string;
  id: number;
  image: string;
  name: string;
  price: number;
  priceMember: number;
  priceNonMember: number;
  rating: number;
  region: string;
  size: string;
  sommelierComment: string;
  type: string;
}

import {
  ProductCardDiv,
  ProductCardPriceDiv,
  ProductCardMemberCardDiv,
  ProductCardNonMemberCardDiv,
  ProductCardButtonDiv,
  ProductCardButton,
} from "./style";

import { formatPriceBRL } from "../../utils/functions";

const ProductCard: React.FC = (product: Product) => {
  const firstHalfPriceMember = product.priceMember.toString().split(".")[0];
  const secondHalfPriceMember = product.priceMember.toString().split(".")[1];

  return (
    <div>
      <ProductCardDiv>
        <div>
          <Image
            src={product.image}
            alt={product.name}
            height="515"
            width="339"
          />
        </div>
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
              <span>SÓCIO WINE</span>
              <div>
                <span>R$</span>
                <span>{`${firstHalfPriceMember},`}</span>
                <span>{`${secondHalfPriceMember}`}</span>
              </div>
            </ProductCardMemberCardDiv>
            <ProductCardNonMemberCardDiv>
              {`NÃO SÓCIO ${formatPriceBRL.format(product.priceNonMember)}`}
            </ProductCardNonMemberCardDiv>
          </div>
        </div>
      </ProductCardDiv>
      <ProductCardButtonDiv>
        <ProductCardButton type="button">ADICIONAR</ProductCardButton>
      </ProductCardButtonDiv>
    </div>
  );
};

export default ProductCard;
