import React from 'react';
import { getCart } from '../cartUtils/cartUtils'; 

const Cart = () => {
  const cartItems = getCart();

  return (
    <div>
      <h2 className="font-bold text-lg">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.product_id} className="flex justify-between items-center mb-4">
              <div>
                <h3 className="font-semibold">{item.product_title}</h3>
                <p>Price: ${item.price}</p>
                <p>Quantity: {item.quantity}</p>
              </div>
              <img src={item.product_image} alt={item.product_title} className="w-16 h-16 rounded-lg" />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
