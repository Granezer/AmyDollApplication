import React from 'react';

const CartItem = ({ item, updateCartItem, removeCartItem }) => {
  const handleQuantityChange = (event) => {
    const quantity = parseInt(event.target.value);
    updateCartItem(item._id, quantity);
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
        <input
          type="number"
          value={item.quantity}
          onChange={handleQuantityChange}
          min={1}
        />
      </p>
      <button onClick={handleRemoveItem}>Remove</button>
    </div>
  );
};

export default CartItem;
