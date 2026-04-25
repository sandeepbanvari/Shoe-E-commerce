import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trash2, Plus, Minus, ArrowRight, ShoppingBag, CreditCard, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, cartTotal } = useCart();
  const shipping = cart.length > 0 ? 15.00 : 0.00;
  const tax = cartTotal * 0.08;
  const finalTotal = cartTotal + shipping + tax;

  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-display font-bold mb-12 italic">SHOPPING <span className="text-primary">BAG</span></h1>

        {cart.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Items List */}
            <div className="lg:col-span-2 space-y-6">
              <AnimatePresence>
                {cart.map((item) => (
                  <motion.div 
                    key={`${item.id}-${item.size}-${item.color}`}
                    layout
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className="glass p-6 rounded-[32px] flex flex-col sm:flex-row items-center gap-6 group"
                  >
                    <div className="w-32 h-32 glass rounded-2xl p-4 flex items-center justify-center shrink-0">
                      <img src={item.image} alt={item.name} className="max-w-full max-h-full object-contain" />
                    </div>
                    
                    <div className="flex-grow text-center sm:text-left">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                        <Link to={`/product/${item.id}`}>
                          <h3 className="text-xl font-bold hover:text-primary transition-colors">{item.name}</h3>
                        </Link>
                        <span className="text-xl font-display font-bold text-white">${(item.price * item.quantity).toFixed(2)}</span>
                      </div>
                      
                      <div className="flex flex-wrap justify-center sm:justify-start gap-4 mb-4 text-sm text-slate-500 font-medium">
                        <span className="flex items-center gap-2">
                          <span className="text-slate-600">Size:</span> 
                          <span className="text-slate-300">{item.size}</span>
                        </span>
                        <span className="flex items-center gap-2">
                          <span className="text-slate-600">Color:</span> 
                          <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                        </span>
                      </div>

                      <div className="flex items-center justify-center sm:justify-start gap-6">
                        <div className="flex items-center glass rounded-xl px-2 py-1">
                          <button 
                            onClick={() => updateQuantity(item.id, item.size, item.color, -1)}
                            className="p-1 hover:text-primary transition-colors"
                          >
                            <Minus size={16} />
                          </button>
                          <span className="w-8 text-center font-bold">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.id, item.size, item.color, 1)}
                            className="p-1 hover:text-primary transition-colors"
                          >
                            <Plus size={16} />
                          </button>
                        </div>
                        <button 
                          onClick={() => removeFromCart(item.id, item.size, item.color)}
                          className="text-slate-500 hover:text-red-500 flex items-center gap-2 text-xs font-bold uppercase tracking-widest transition-colors"
                        >
                          <Trash2 size={16} />
                          <span>Remove</span>
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* Summary */}
            <div className="space-y-6">
              <div className="glass p-8 rounded-[40px] sticky top-32">
                <h3 className="text-2xl font-display font-bold mb-8 italic">ORDER SUMMARY</h3>
                
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between text-slate-400">
                    <span>Subtotal</span>
                    <span className="text-white font-bold">${cartTotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-slate-400">
                    <span>Shipping</span>
                    <span className="text-white font-bold">${shipping.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-slate-400">
                    <span>Tax (8%)</span>
                    <span className="text-white font-bold">${tax.toFixed(2)}</span>
                  </div>
                </div>

                <div className="pt-6 border-t border-white/10 mb-10 flex justify-between items-end">
                  <span className="text-lg font-bold">Total Amount</span>
                  <div className="text-right">
                    <span className="text-3xl font-display font-bold text-primary block">${finalTotal.toFixed(2)}</span>
                  </div>
                </div>

                <Link to="/checkout" className="w-full py-5 bg-white text-black hover:bg-primary hover:text-white font-bold rounded-2xl flex items-center justify-center space-x-3 transition-all mb-4 group shadow-xl shadow-white/5">
                  <CreditCard size={20} />
                  <span>PROCEED TO CHECKOUT</span>
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                
                <div className="pt-6 flex items-center justify-center space-x-2 text-slate-500">
                  <ShieldCheck size={16} className="text-green-500" />
                  <span className="text-[10px] font-bold uppercase tracking-widest">Secure SSL Encryption</span>
                </div>
              </div>

              <div className="glass p-6 rounded-3xl">
                <p className="text-xs text-slate-500 leading-relaxed font-medium">
                  * Shipping and taxes are calculated based on your location during checkout. We offer a 30-day money-back guarantee for all unworn products.
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="max-w-xl mx-auto text-center py-24 glass rounded-[48px] px-12">
            <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto mb-8">
              <ShoppingBag size={48} />
            </div>
            <h2 className="text-3xl font-bold mb-4">Your bag is empty</h2>
            <p className="text-slate-400 mb-10">Looks like you haven't added anything to your cart yet. Step into style and explore our latest collection!</p>
            <Link 
              to="/shop" 
              className="px-8 py-4 bg-primary hover:bg-primary-dark text-white font-bold rounded-full transition-all inline-flex items-center space-x-2"
            >
              <span>START SHOPPING</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
