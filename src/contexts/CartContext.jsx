import React, { createContext, useState, useEffect, useContext } from "react";

// Create a context
const CartContext = createContext();

// CartProvider component
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    // Initialize cart from localStorage
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Update localStorage whenever the cart changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  return (
    <CartContext.Provider value={{ cart, setCart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Hook to use cart context
export const useCart = () => {
  return useContext(CartContext);
};
