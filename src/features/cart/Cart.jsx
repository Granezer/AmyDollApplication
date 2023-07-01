import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CartItem from './CartItem';
import { addToCartUrl, getAllCartItemsUrl, deleteCartItemUrl, updateCartItemUrl } from '../../api/Api';

const Cart = ({ sessionId }) => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchCartItems(sessionId);
  }, [sessionId]);

  const fetchCartItems = async (sessionId) => {
    try {
      const response = await axios.get(getAllCartItemsUrl, {
        params: {
          sessionId: sessionId,
        },
      });
      setItems(response.data.data);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching cart items:', error);
      setIsLoading(false);
    }
  };

  const addToCart = async (productId) => {
    try {
      const response = await axios.post(addToCartUrl, {
        sessionId: sessionId,
        productId: productId,
      });
      setItems(response.data.data);
    } catch (error) {
      console.error('Error adding item to cart:', error);
    }
  };

  const updateCartItem = async (itemId, quantity) => {
    try {
      const response = await axios.put(updateCartItemUrl(itemId), { quantity: quantity });
      setItems(response.data.data);
    } catch (error) {
      console.error('Error updating cart item:', error);
    }
  };

  const removeCartItem = async (itemId) => {
    try {
      const response = await axios.delete(deleteCartItemUrl(itemId));
      setItems(response.data.data);
    } catch (error) {
      console.error('Error removing cart item:', error);
    }
  };

  if (isLoading) {
    return <div>Loading cart...</div>;
  }

  return (
    <div>
      <h1>Cart</h1>
      {items.map((item) => (
        <CartItem
          key={item._id}
          item={item}
          updateCartItem={updateCartItem}
          removeCartItem={removeCartItem}
        />
      ))}
    </div>
  );
};

export default Cart;
