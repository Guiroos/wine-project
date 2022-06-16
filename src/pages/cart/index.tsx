import React, { useEffect, useState } from "react";
import CartItemsCard from "../../components/CartItemsCard";
import Navbar from "../../components/Navbar";
import {
  getItemLocalStorage,
  removeFromLocalStorage,
} from "../../utils/localStorage";

const Cart: React.FC = () => {
  const [cartItems, setCartItems] = useState([]);

  const clearCart = () => {
    removeFromLocalStorage("cart");
    setCartItems([]);
  };

  useEffect(() => {
    const cartLocalStorage = getItemLocalStorage("cart");
    setCartItems(cartLocalStorage);
  }, [setCartItems]);

  return (
    <div id="cart-page">
      <Navbar />
      <div>
        {cartItems && cartItems.length > 0 ? (
          cartItems.map((cartItem) => (
            <CartItemsCard
              key={cartItem.id}
              cartItem={cartItem}
              setCartItems={setCartItems}
            />
          ))
        ) : (
          <div id="no-cart-message">No items in cart</div>
        )}
      </div>
      {cartItems && cartItems.length > 0 && (
        <button id="clear-cart-button" onClick={() => clearCart()}>
          Clear Cart
        </button>
      )}
    </div>
  );
};

export default Cart;
