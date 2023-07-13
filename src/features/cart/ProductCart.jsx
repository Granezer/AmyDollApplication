import { useState } from 'react';
import { Button } from '@mui/material';

const ProductCart = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const toggleCart = () => {
    setCartOpen(!cartOpen);
  };

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (product) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== product.id);
    setCartItems(updatedCartItems);
  };

  const calculateTotal = () => {
    let total = 0;
    cartItems.forEach((item) => {
      total += item.price;
    });
    return total;
  };

  return (
    <div>
      <div className="cart-icon" onClick={toggleCart}>
        Cart ({cartItems.length})
      </div>
      {cartOpen && (
        <div className="cart-container">
          {cartItems.length > 0 ? (
            <div>
              {cartItems.map((item) => (
                <div key={item.id} className="cart-item">
                  <div>{item.name}</div>
                  <div>${item.price}</div>
                  <Button onClick={() => removeFromCart(item)}>Remove</Button>
                </div>
              ))}
              <div>Total: ${calculateTotal()}</div>
              <Button className="checkout-Button">Checkout</Button>
            </div>
          ) : (
            <div>No items in the cart.</div>
          )}
        </div>
      )}
    </div>
  );
};

export default ProductCart;
