import React, { useEffect, useState } from 'react';
import { getCart } from '../cartUtils/cartUtils'; 
import { FaTrash } from 'react-icons/fa'; 

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  
  useEffect(() => {
    const initialCartItems = getCart();
    setCartItems(initialCartItems);
  }, []);

  const handleRemoveItem = (productId) => {
    
    const updatedCartItems = cartItems.filter(item => item.product_id !== productId);

    
    localStorage.setItem("cart", JSON.stringify(updatedCartItems));

    
    setCartItems(updatedCartItems);
  };
  

  return (
    <div>
      <h2 className="font-bold text-lg">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.product_id} className="flex items-center justify-between mb-4 p-4 border-b">
              <div className="flex items-center">
                <img src={item.product_image} alt={item.product_title} className="w-16 h-16 rounded-lg mr-4" />
                <div>
                  <h3 className="font-semibold">{item.product_title}</h3>
                  <p className="text-gray-600">{item.description}</p> {/* Show description */}
                  <p className="text-lg font-semibold">Price: ${item.price}</p>
                  {/* <p>Quantity: {item.quantity}</p> */}
                </div>
              </div>
              <button onClick={() => handleRemoveItem(item.product_id)} className="text-red-500 hover:text-red-700">
                <FaTrash className="text-xl" />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
