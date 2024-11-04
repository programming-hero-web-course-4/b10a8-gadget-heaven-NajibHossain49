import React, { useState, useEffect } from 'react';
import { getWishlist } from '../wishlistUtils/wishlistUtils'; 
import { addToCart } from '../cartUtils/cartUtils'; 
import { FaTrash } from 'react-icons/fa'; 

const Wishlist = () => {
  const [wishlistItems, setWishlistItems] = useState([]);

  useEffect(() => {
    const initialWishlistItems = getWishlist();
    setWishlistItems(initialWishlistItems);
  }, []);

  const handleRemoveItem = (productId) => {
    const updatedWishlistItems = wishlistItems.filter(item => item.product_id !== productId);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlistItems));
    setWishlistItems(updatedWishlistItems);
  };

  const handleAddToCart = (item) => {
    const result = addToCart(item);
    if (result.success) {
      alert(result.message); 
      handleRemoveItem(item.product_id); 
    } else {
      alert(result.message); 
    }
  };

  return (
    <div>
      <h2 className="font-bold text-lg">Your Wishlist</h2>
      {wishlistItems.length === 0 ? (
        <p>Your wishlist is empty!</p>
      ) : (
        <ul>
          {wishlistItems.map((item) => (
            <li key={item.product_id} className="flex justify-between items-center mb-4 p-4 border-b">
              <div className="flex items-center">
                <img src={item.product_image} alt={item.product_title} className="w-16 h-16 rounded-lg mr-4" />
                <div className="flex flex-col">
                  <h3 className="font-semibold">{item.product_title}</h3>
                  <p className="text-lg">Description: ${item.description}</p>
                  <p className="text-lg">Price: ${item.price}</p>
                  <div className="mt-2"> {/* Margin for spacing */}
                    <button 
                      onClick={() => handleAddToCart(item)} 
                      className="bg-purple-500 text-white rounded-full px-4 py-2 hover:bg-gray-200"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => handleRemoveItem(item.product_id)} 
                className="text-red-500 hover:text-red-700"
              >
                <FaTrash className="text-xl" />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Wishlist;
