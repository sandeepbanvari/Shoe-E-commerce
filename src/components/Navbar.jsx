import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Search, User, Menu, X, Heart } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { cartCount } = useCart();
  const { user } = useAuth();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Shop', path: '/shop' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-4 glass-dark shadow-2xl' : 'py-6 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2 group">
          <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center transform group-hover:rotate-12 transition-transform">
            <span className="text-white font-bold text-xl">S</span>
          </div>
          <span className="text-2xl font-display font-bold tracking-tighter">
            SHOE<span className="text-primary italic">VAULT</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium tracking-wide transition-colors hover:text-primary ${
                location.pathname === link.path ? 'text-primary' : 'text-slate-300'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Desktop Icons */}
        <div className="hidden md:flex items-center space-x-5">
          <Link to="/shop" className="p-2 text-slate-300 hover:text-primary transition-colors">
            <Search size={22} />
          </Link>
          <Link to="/wishlist" className="p-2 text-slate-300 hover:text-primary transition-colors relative">
            <Heart size={22} />
          </Link>
          <Link to="/cart" className="p-2 text-slate-300 hover:text-primary transition-colors relative">
            <ShoppingCart size={22} />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-accent text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-bg-dark">
                {cartCount}
              </span>
            )}
          </Link>
          {user ? (
            <Link to="/profile" className="flex items-center space-x-2 bg-primary/20 text-primary hover:bg-primary hover:text-white px-4 py-2 rounded-full border border-primary/30 transition-all font-bold">
              <User size={18} />
              <span className="text-sm">Profile</span>
            </Link>
          ) : (
            <Link to="/login" className="flex items-center space-x-2 bg-slate-800/50 hover:bg-slate-800 px-4 py-2 rounded-full border border-white/10 transition-colors">
              <User size={18} />
              <span className="text-sm font-medium">Login</span>
            </Link>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden p-2 text-slate-300"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden glass-dark absolute top-full left-0 right-0 border-t border-white/5 shadow-2xl"
          >
            <div className="flex flex-col p-6 space-y-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-lg font-medium text-slate-300"
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex items-center space-x-6 pt-4 border-t border-white/5">
                <Link to="/cart" className="relative">
                  <ShoppingCart size={24} />
                  {cartCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-accent text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center">
                      {cartCount}
                    </span>
                  )}
                </Link>
                <Link to="/wishlist"><Heart size={24} /></Link>
                <Link to="/shop"><Search size={24} /></Link>
                {user ? (
                  <Link to="/profile" className="text-primary"><User size={24} /></Link>
                ) : (
                  <Link to="/login"><User size={24} /></Link>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
