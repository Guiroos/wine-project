import Image from "next/image";

interface cartItem {
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

interface CartItemsCardProps {
  cartItem: cartItem;
}

const CartItemsCard: React.FC<CartItemsCardProps> = ({
  cartItem,
}: CartItemsCardProps) => {
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
      </div>
    </div>
  );
};

export default CartItemsCard;
