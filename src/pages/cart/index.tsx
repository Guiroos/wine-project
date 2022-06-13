import React, { useEffect, useState } from "react";
import CartItemsCard from "../../components/CartItemsCard";
import Navbar from "../../components/Navbar";
import { getItemLocalStorage } from "../../utils/localStorage";

const Cart: React.FC = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const cartLocalStorage = getItemLocalStorage("cart");
    setCartItems(cartLocalStorage);
  }, []);

  return (
    <div>
      <Navbar />
      <div>
        {cartItems ? (
          cartItems.map((cartItem) => (
            <CartItemsCard key={cartItem.id} cartItem={cartItem} />
          ))
        ) : (
          <div>Não há itens no carrinho</div>
        )}
      </div>
    </div>
  );
};

export default Cart;
