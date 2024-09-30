/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItem, setCartItem] = useState([]);

  function addToCart(product) {
    setCartItem([...cartItem, product]);
    console.log(cartItem);
  }

  const removeFromCart = (productId) => {
    setCartItem(cartItem.filter((product) => product.id !== productId));
  };

  function clearCart() {
    setCartItem([]);
  }

  return (
    <CartContext.Provider
      value={{ cartItem, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
