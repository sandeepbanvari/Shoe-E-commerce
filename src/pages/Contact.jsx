import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageCircle, Clock } from 'lucide-react';
import toast from 'react-hot-toast';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Message sent! We'll get back to you soon.");
    e.target.reset();
  };

  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-display font-bold italic mb-6 leading-tight"
          >
            LET'S <span className="text-primary italic">CONNECT</span>
          </motion.h1>
          <p className="max-w-xl mx-auto text-slate-400">
            Have questions about a product or your order? Our team is available 24/7 to assist you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Info */}
          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-display font-bold mb-8 italic">OFFICE HQ</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-6">
                  <div className="p-4 glass rounded-2xl text-primary"><MapPin size={24}/></div>
                  <div>
                    <p className="text-white font-bold mb-1">Hyderabad, Telangana, India</p>
                    <p className="text-slate-400 text-sm">Hyderabad, Telangana, India</p>
                  </div>
                </div>
                <div className="flex items-start space-x-6">
                  <div className="p-4 glass rounded-2xl text-primary"><Phone size={24}/></div>
                  <div>
                    <p className="text-white font-bold mb-1">Phone Contact</p>
                    <p className="text-slate-400 text-sm">+91 739654****</p>
                  </div>
                </div>
                <div className="flex items-start space-x-6">
                  <div className="p-4 glass rounded-2xl text-primary"><Mail size={24}/></div>
                  <div>
                    <p className="text-white font-bold mb-1">Email Support</p>
                    <p className="text-slate-400 text-sm">sandeepbanvari77@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-10 glass rounded-[40px] border-primary/20">
              <h4 className="text-lg font-bold mb-6 flex items-center gap-2">
                <Clock className="text-primary" size={20} />
                OPERATING HOURS
              </h4>
              <div className="space-y-4">
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-slate-400">Monday - Friday</span>
                  <span className="text-white font-medium">08:00 AM - 10:00 PM</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-slate-400">Saturday</span>
                  <span className="text-white font-medium">09:00 AM - 08:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Sunday</span>
                  <span className="text-white font-medium">10:00 AM - 06:00 PM</span>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="glass p-10 rounded-[48px] border-white/5 shadow-2xl relative">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 blur-3xl -z-10 rounded-full"></div>
            <h3 className="text-2xl font-display font-bold mb-10 italic uppercase tracking-wider">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Full Name</label>
                  <input 
                    type="text" 
                    required
                    placeholder="Enter your name"
                    className="w-full bg-slate-900 border border-white/5 rounded-2xl p-4 text-white focus:outline-none focus:border-primary/50 transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Email Address</label>
                  <input 
                    type="email" 
                    required
                    placeholder="name@email.com"
                    className="w-full bg-slate-900 border border-white/5 rounded-2xl p-4 text-white focus:outline-none focus:border-primary/50 transition-colors"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Subject</label>
                <select className="w-full bg-slate-900 border border-white/5 rounded-2xl p-4 text-white focus:outline-none focus:border-primary/50 transition-colors appearance-none">
                  <option>Order Inquiry</option>
                  <option>Product Support</option>
                  <option>Returns & Refunds</option>
                  <option>Brand Cooperation</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Your Message</label>
                <textarea 
                  rows="5"
                  required
                  placeholder="How can we help you?"
                  className="w-full bg-slate-900 border border-white/5 rounded-2xl p-4 text-white focus:outline-none focus:border-primary/50 transition-colors"
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full py-5 bg-primary hover:bg-primary-dark text-white font-bold rounded-2xl flex items-center justify-center space-x-3 transition-all hover:shadow-2xl hover:shadow-primary/20 transform hover:-translate-y-1"
              >
                <Send size={20} />
                <span>SEND MESSAGE</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
