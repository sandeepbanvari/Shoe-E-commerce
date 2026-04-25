import React, { createContext, useContext, useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import { useAuth } from './AuthContext';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const { user } = useAuth();
  const userId = user ? user.email : 'guest';
  const cartKey = `shoes-cart-${userId}`;
  const wishlistKey = `shoes-wishlist-${userId}`;

  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  // Load data when user changes
  useEffect(() => {
    const savedCart = localStorage.getItem(cartKey);
    const savedWishlist = localStorage.getItem(wishlistKey);
    setCart(savedCart ? JSON.parse(savedCart) : []);
    setWishlist(savedWishlist ? JSON.parse(savedWishlist) : []);
  }, [cartKey, wishlistKey]);

  // Save cart changes
  useEffect(() => {
    // Prevent overwriting with empty array on initial load before the read effect runs
    if (cart.length > 0 || localStorage.getItem(cartKey)) {
        localStorage.setItem(cartKey, JSON.stringify(cart));
    }
  }, [cart, cartKey]);

  // Save wishlist changes
  useEffect(() => {
    if (wishlist.length > 0 || localStorage.getItem(wishlistKey)) {
        localStorage.setItem(wishlistKey, JSON.stringify(wishlist));
    }
  }, [wishlist, wishlistKey]);

  const addToCart = (product, size, color) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id && item.size === size && item.color === color);
      if (existing) {
        toast.success(`Updated ${product.name} quantity`);
        return prev.map(item => 
          item.id === product.id && item.size === size && item.color === color
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      toast.success(`${product.name} added to cart!`);
      return [...prev, { ...product, size, color, quantity: 1 }];
    });
  };

  const removeFromCart = (id, size, color) => {
    setCart(prev => prev.filter(item => !(item.id === id && item.size === size && item.color === color)));
    toast.error('Item removed from cart');
  };

  const updateQuantity = (id, size, color, delta) => {
    setCart(prev => prev.map(item => {
      if (item.id === id && item.size === size && item.color === color) {
        const newQty = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    }));
  };

  const toggleWishlist = (product) => {
    setWishlist(prev => {
      const exists = prev.find(item => item.id === product.id);
      if (exists) {
        toast('Removed from wishlist');
        return prev.filter(item => item.id !== product.id);
      }
      toast.success('Added to wishlist');
      return [...prev, product];
    });
  };

  const clearCart = () => {
    setCart([]);
    toast.success('Cart cleared');
  };

  const cartTotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <CartContext.Provider value={{
      cart,
      wishlist,
      addToCart,
      removeFromCart,
      updateQuantity,
      toggleWishlist,
      clearCart,
      cartTotal,
      cartCount
    }}>
      {children}
    </CartContext.Provider>
  );
};
