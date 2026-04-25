import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Heart, Star, Eye } from 'lucide-react';
import { motion } from 'framer-motion';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart, toggleWishlist, wishlist } = useCart();
  const isWishlisted = wishlist.some(item => item.id === product.id);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group"
    >
      <div className="relative aspect-square overflow-hidden rounded-3xl glass border-white/5 mb-4 group-hover:border-primary/30 transition-all duration-500">
        {/* Badges */}
        <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
          {product.isNew && (
            <span className="bg-primary text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">New</span>
          )}
          {product.discount && (
            <span className="bg-accent text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">-{product.discount}%</span>
          )}
        </div>

        {/* Action Buttons */}
        <div className="absolute top-4 right-4 z-10 flex flex-col gap-2 translate-x-12 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
          <button 
            onClick={() => toggleWishlist(product)}
            className={`p-2 rounded-full glass hover:bg-primary hover:text-white transition-colors ${isWishlisted ? 'text-primary fill-primary' : 'text-slate-300'}`}
          >
            <Heart size={18} />
          </button>
          <Link 
            to={`/product/${product.id}`}
            className="p-2 rounded-full glass hover:bg-primary hover:text-white text-slate-300 transition-colors"
          >
            <Eye size={18} />
          </Link>
        </div>

        {/* Product Image */}
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-contain p-8 group-hover:scale-110 transition-transform duration-500"
        />

        {/* Quick Add Button */}
        <button 
          onClick={() => addToCart(product, product.sizes[0], product.colors[0])}
          className="absolute bottom-4 left-4 right-4 py-3 bg-white text-black font-bold rounded-2xl flex items-center justify-center space-x-2 transform translate-y-20 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 hover:bg-primary hover:text-white"
        >
          <ShoppingCart size={18} />
          <span className="text-sm">ADD TO CART</span>
        </button>
      </div>

      {/* Info */}
      <div className="px-2">
        <div className="flex items-center justify-between mb-1">
          <span className="text-slate-500 text-xs font-bold uppercase tracking-widest">{product.brand}</span>
          <div className="flex items-center text-accent">
            <Star size={12} fill="currentColor" />
            <span className="text-white text-xs font-bold ml-1">{product.rating}</span>
          </div>
        </div>
        <Link to={`/product/${product.id}`}>
          <h3 className="text-white font-bold text-lg mb-2 group-hover:text-primary transition-colors line-clamp-1">{product.name}</h3>
        </Link>
        <div className="flex items-center space-x-3">
          <span className="text-primary font-display font-bold text-xl">${product.price}</span>
          {product.originalPrice && (
            <span className="text-slate-500 text-sm line-through">${product.originalPrice}</span>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
