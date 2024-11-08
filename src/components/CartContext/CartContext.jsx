import React from 'react'
import React, { createContext, useContext, useState } from 'react';


function CartContext() {

const CartContext = createContext();


 const useCart = () => {
  return useContext(CartContext);
};
 const CartProvider = ({ children }) => {
  const [cartCount, setCartCount] = useState(0);

  const addToCart = () => {
    setCartCount(prevCount => prevCount + 1);
  };

  return (
    <CartContext.Provider value={{ cartCount, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};
}
export default CartContext
