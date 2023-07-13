import React from 'react';
import { Button } from '@mui/material';

const CartItem = ({ item, updateCartItem, removeCartItem }) => {
  const handleQuantityChange = (event) => {
    const quantity = parseInt(event.target.value);
    updateCartItem(item._id, quantity);
  };

  const handleIncreaseQuantity = () => {
    const newQuantity = item.quantity + 1;
    updateCartItem(item._id, newQuantity);
  };

  const handleDecreaseQuantity = () => {
    if (item.quantity > 1) {
      const newQuantity = item.quantity - 1;
      updateCartItem(item._id, newQuantity);
    }
  };

  const handleRemoveItem = () => {
    removeCartItem(item._id);
  };

  return (
    <div>
      <h3>{item.name}</h3>
      <p>Price: ${item.price}</p>
      <p>
        Quantity:
        <Button onClick={handleDecreaseQuantity}>-</Button>
        <input
          type="number"
          value={item.quantity}
          onChange={handleQuantityChange}
          min={1}
        />
        <Button onClick={handleIncreaseQuantity}>+</Button>
      </p>
      <Button onClick={handleRemoveItem}>Remove</Button>
    </div>
  );
};

export default CartItem;
