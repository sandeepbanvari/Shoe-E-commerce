import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CreditCard, Truck, ShieldCheck, ArrowLeft, Package, CheckCircle2 } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import toast from 'react-hot-toast';

const Checkout = () => {
  const { cart, cartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  const location = useLocation();
  const [isOrdered, setIsOrdered] = useState(false);

  // Check if "Buy Now" data exists in location state
  const buyNowItem = location.state?.buyNowItem;
  
  const checkoutItems = buyNowItem ? [buyNowItem] : cart;
  const subtotal = buyNowItem ? buyNowItem.price * buyNowItem.quantity : cartTotal;
  const shipping = 15.00;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    zip: '',
    cardNumber: '',
    expiry: '',
    cvv: ''
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    // Validate empty fields
    const emptyFields = Object.values(formData).some(val => val === '');
    if (emptyFields) {
      toast.error("Please fill in all checkout details");
      return;
    }

    // Mock processing
    const toastId = toast.loading('Processing your secure payment...');
    
    setTimeout(() => {
      toast.success('Payment successful!', { id: toastId });
      setIsOrdered(true);
      if (!buyNowItem) clearCart();
    }, 2000);
  };

  if (checkoutItems.length === 0 && !isOrdered) {
    return (
      <div className="pt-40 pb-24 text-center">
        <h2 className="text-2xl font-bold mb-4">Your bag is empty</h2>
        <Link to="/shop" className="text-primary font-bold hover:underline">Return to shop</Link>
      </div>
    );
  }

  if (isOrdered) {
    return (
      <div className="pt-40 pb-24 flex flex-col items-center justify-center container mx-auto px-6">
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="glass p-16 rounded-[48px] text-center max-w-2xl w-full"
        >
          <div className="w-24 h-24 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle2 size={64} />
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 italic">ORDER <span className="text-primary italic">PLACED!</span></h1>
          <p className="text-slate-400 text-lg mb-10">
            Thank you for shopping with SHOEVAULT. Your order #SV-{Math.floor(Math.random() * 90000) + 10000} has been confirmed. You will receive a tracking link via email shortly.
          </p>
          <div className="space-y-4">
             <Link to="/" className="block w-full py-4 bg-primary text-white font-bold rounded-2xl hover:bg-primary-dark transition-all">
                RETURN TO HOME
             </Link>
             <Link to="/shop" className="block w-full py-4 glass text-white font-bold rounded-2xl hover:bg-white/10 transition-all">
                CONTINUE SHOPPING
             </Link>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-6">
        <div className="flex items-center gap-4 mb-12">
          <button onClick={() => navigate(-1)} className="p-2 glass rounded-xl hover:text-primary transition-colors">
            <ArrowLeft size={20} />
          </button>
          <h1 className="text-4xl font-display font-bold italic lowercase tracking-tight">Checkout</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Form */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-12"
          >
            <form onSubmit={handlePlaceOrder} className="space-y-10">
              {/* Contact */}
              <section>
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-bold">1</div>
                  <h3 className="text-xl font-bold uppercase tracking-widest text-sm text-slate-500">Contact Information</h3>
                </div>
                <div className="space-y-4">
                  <input 
                    type="email" 
                    name="email"
                    required
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full bg-slate-900 border border-white/5 rounded-2xl p-4 text-white focus:outline-none focus:border-primary/50 transition-colors"
                  />
                </div>
              </section>

              {/* Shipping */}
              <section>
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-bold">2</div>
                  <h3 className="text-xl font-bold uppercase tracking-widest text-sm text-slate-500">Shipping Address</h3>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <input 
                    type="text" 
                    name="firstName"
                    required
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="bg-slate-900 border border-white/5 rounded-2xl p-4 text-white focus:outline-none focus:border-primary/50 transition-colors"
                  />
                  <input 
                    type="text" 
                    name="lastName"
                    required
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="bg-slate-900 border border-white/5 rounded-2xl p-4 text-white focus:outline-none focus:border-primary/50 transition-colors"
                  />
                </div>
                <div className="space-y-4">
                  <input 
                    type="text" 
                    name="address"
                    required
                    placeholder="Street Address"
                    value={formData.address}
                    onChange={handleInputChange}
                    className="w-full bg-slate-900 border border-white/5 rounded-2xl p-4 text-white focus:outline-none focus:border-primary/50 transition-colors"
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <input 
                      type="text" 
                      name="city"
                      required
                      placeholder="City"
                      value={formData.city}
                      onChange={handleInputChange}
                      className="bg-slate-900 border border-white/5 rounded-2xl p-4 text-white focus:outline-none focus:border-primary/50 transition-colors"
                    />
                    <input 
                      type="text" 
                      name="zip"
                      required
                      placeholder="Zip Code"
                      value={formData.zip}
                      onChange={handleInputChange}
                      className="bg-slate-900 border border-white/5 rounded-2xl p-4 text-white focus:outline-none focus:border-primary/50 transition-colors"
                    />
                  </div>
                </div>
              </section>

              {/* Payment */}
              <section>
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-bold">3</div>
                  <h3 className="text-xl font-bold uppercase tracking-widest text-sm text-slate-500">Payment Details</h3>
                </div>
                <div className="glass p-8 rounded-3xl space-y-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-bold">Credit/Debit Card</span>
                    <div className="flex gap-2">
                       <CreditCard size={20} className="text-slate-500" />
                    </div>
                  </div>
                  <input 
                    type="text" 
                    name="cardNumber"
                    required
                    placeholder="Card Number"
                    value={formData.cardNumber}
                    onChange={handleInputChange}
                    className="w-full bg-slate-800/50 border border-white/5 rounded-2xl p-4 text-white focus:outline-none focus:border-primary/50 transition-colors"
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <input 
                      type="text" 
                      name="expiry"
                      required
                      placeholder="MM/YY"
                      value={formData.expiry}
                      onChange={handleInputChange}
                      className="bg-slate-800/50 border border-white/5 rounded-2xl p-4 text-white focus:outline-none focus:border-primary/50 transition-colors"
                    />
                    <input 
                      type="text" 
                      name="cvv"
                      required
                      placeholder="CVV"
                      value={formData.cvv}
                      onChange={handleInputChange}
                      className="bg-slate-800/50 border border-white/5 rounded-2xl p-4 text-white focus:outline-none focus:border-primary/50 transition-colors"
                    />
                  </div>
                </div>
              </section>

              <button 
                type="submit"
                className="w-full py-6 bg-primary hover:bg-primary-dark text-white font-bold rounded-[32px] text-xl shadow-2xl shadow-primary/30 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-3 italic"
              >
                <span>CONFIRM ORDER</span>
                <div className="w-1.5 h-1.5 rounded-full bg-white animate-ping"></div>
              </button>
            </form>
          </motion.div>

          {/* Order Summary Sidebar */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:pl-8"
          >
            <div className="glass p-10 rounded-[40px] sticky top-32">
              <h3 className="text-2xl font-display font-bold mb-8 italic flex items-center gap-2">
                <Package size={22} className="text-primary"/>
                YOUR ORDER
              </h3>

              <div className="max-h-[300px] overflow-y-auto mb-8 space-y-4 pr-2">
                {checkoutItems.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4">
                    <div className="w-20 h-20 glass rounded-2xl p-2 shrink-0">
                      <img src={item.image} alt="" className="w-full h-full object-contain" />
                    </div>
                    <div className="flex-grow">
                      <p className="font-bold text-sm line-clamp-1">{item.name}</p>
                      <p className="text-xs text-slate-500 uppercase font-bold tracking-tight">Size: {item.size} • Qty: {item.quantity}</p>
                    </div>
                    <span className="font-bold text-white text-sm">${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
              </div>

              <div className="pt-8 border-t border-white/5 space-y-4">
                <div className="flex justify-between text-slate-400 text-sm">
                  <span>Subtotal</span>
                  <span className="text-white font-bold">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-slate-400 text-sm">
                  <span>Shipping Fee</span>
                  <span className="text-white font-bold">${shipping.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-slate-400 text-sm pb-6">
                  <span>Taxes (8%)</span>
                  <span className="text-white font-bold">${tax.toFixed(2)}</span>
                </div>
                
                <div className="flex justify-between items-center py-6 border-t border-primary/20">
                  <span className="text-lg font-bold">Total Amount</span>
                  <span className="text-3xl font-display font-bold text-primary italic">${total.toFixed(2)}</span>
                </div>
              </div>

              <div className="mt-8 flex items-center justify-center gap-6 text-slate-600">
                <ShieldCheck size={40} />
                <p className="text-[10px] uppercase font-bold tracking-widest leading-none">
                  Your data is protected <br />
                  <span className="text-slate-400 font-black">by 256-bit encryption</span>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
