import React from 'react';
import { getWishlist } from '../wishlistUtils/wishlistUtils';

const Wishlist = () => {
  const wishlistItems = getWishlist(); 

  return (
    <div>
      <h2 className="font-bold text-lg">Your Wishlist</h2>
      {wishlistItems.length === 0 ? (
        <p>Your wishlist is empty!</p>
      ) : (
        <ul>
          {wishlistItems.map((item) => (
            <li key={item.product_id} className="flex justify-between items-center mb-4">
              <div>
                <h3 className="font-semibold">{item.product_title}</h3>
                <p>Price: ${item.price}</p>
              </div>
              <img src={item.product_image} alt={item.product_title} className="w-16 h-16 rounded-lg" />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Wishlist;
