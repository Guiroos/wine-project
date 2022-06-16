import { Dispatch, SetStateAction } from "react";
import {
  getItemLocalStorage,
  saveToLocalStorage,
} from "../../utils/localStorage";
import Image from "next/image";

interface CartItem {
  id: number;
  discount: number;
  image: string;
  name: string;
  price: number;
  priceMember: number;
  priceNonMember: number;
  quantity: number;
  country: string;
}

interface CartItemCardProps {
  cartItem: CartItem;
  setCartItems: Dispatch<SetStateAction<string[]>>;
}

const CartItemsCard: React.FC<CartItemCardProps> = ({
  cartItem,
  setCartItems,
}: CartItemCardProps) => {
  const handleClick = (_e, item) => {
    const cartStorage = getItemLocalStorage("cart");
    const filteredMap = cartStorage.filter((iCart) => iCart.id !== item.id);
    setCartItems(filteredMap);
    saveToLocalStorage("cart", filteredMap);
  };
  return (
    <div>
      <div>
        <Image
          src={cartItem.image}
          alt={cartItem.name}
          height="220"
          width="140"
        />
        <div>
          <div>
            <div>{cartItem.name}</div>
            <div>{cartItem.country}</div>
            <div>{cartItem.quantity}</div>
          </div>
        </div>
        <button onClick={(e) => handleClick(e, cartItem)}>Remover</button>
      </div>
    </div>
  );
};

export default CartItemsCard;
