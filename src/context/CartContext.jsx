/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItem, setCartItem] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  function toggleDarkMode() {
    setDarkMode(!darkMode);
  }

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
      value={{
        cartItem,
        addToCart,
        removeFromCart,
        clearCart,
        toggleDarkMode,
        darkMode
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
