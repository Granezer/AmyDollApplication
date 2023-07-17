import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CartItem from './CartItem';
import { addToCartUrl, getAllCartItemsUrl, deleteCartItemUrl, updateCartItemUrl } from '../../api/Api';
import Loader from '../reusables/Loader';

const Cart = () => {
  const sessionId = localStorage.getItem('sessionId')
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchCartItems = async () => {
    const sessionId = localStorage.getItem('sessionId');
    const cartId = localStorage.getItem('cartId');
    try {
      const response = await axios.get(getAllCartItemsUrl(sessionId, cartId));
      setItems(response.data.data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      // alert ('Error fetching cart items:', error);
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
      // alert('Error adding item to cart:', error);
    }
  };

  const updateCartItem = async (itemId, quantity) => {
    try {
      const response = await axios.put(updateCartItemUrl(itemId), { quantity: quantity });
      setItems(response.data.data);
    } catch (error) {
      // alert ('Error updating cart item:', error);
    }
  };

  const removeCartItem = async (itemId) => {
    try {
      const response = await axios.delete(deleteCartItemUrl(itemId));
      setItems(response.data.data);
    } catch (error) {
      // alert ('Error removing cart item:', error);
    }
  };

  useEffect(() => {
    fetchCartItems(sessionId);
  }, [sessionId]);

  if (isLoading) {
    return (
      <div>
        <Loader />
      </div>
    );
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
