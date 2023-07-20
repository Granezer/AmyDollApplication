import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import { getAllCartItemsUrl } from '../../api/Api';

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const sessionId = localStorage.getItem('sessionId');
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const updateCartItems = async () => {
      const cartId = localStorage.getItem('cartId');
      const response = await axios.get(getAllCartItemsUrl(sessionId, cartId));
      if (response.status === 200) {
        setCartItems(response.data.response.data);
      } else {
        // Handle error here
      }
    };

    updateCartItems();
  }, [sessionId]);

  return (
    <CartContext.Provider value={{ cartItems, setCartItems }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
