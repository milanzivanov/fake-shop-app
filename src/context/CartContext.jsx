/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useState, useContext } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItem, setCartItem] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  function toggleDarkMode() {
    setDarkMode((darkMode) => !darkMode);
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

function useCart() {
  const context = useContext(CartContext);
  if (!context)
    throw new Error("CartContext must be used inside a CartProvider");
  return context;
}

export { CartProvider, useCart };
