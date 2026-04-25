import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, Send, Camera, Play, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-950 border-t border-white/5 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-base">S</span>
              </div>
              <span className="text-xl font-display font-bold tracking-tighter">
                SHOE<span className="text-primary italic">VAULT</span>
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-8">
              Premium footwear for the modern explorer. We combine state-of-the-art technology with timeless design to create the ultimate walking experience.
            </p>
            <div className="flex space-x-4">
              {[MessageCircle, Send, Camera, Play].map((Icon, idx) => (
                <a key={idx} href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center text-slate-300 hover:bg-primary hover:text-white transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-display font-bold mb-6 italic">Shop Categories</h4>
            <ul className="space-y-4">
              {['Running Shoes', 'Lifestyle Sneakers', 'Basketball Gear', 'Formal Collection', 'Last Chance Sale'].map((link) => (
                <li key={link}>
                  <Link to="/shop" className="text-slate-400 text-sm hover:text-primary transition-colors">{link}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white font-display font-bold mb-6 italic">Help & Support</h4>
            <ul className="space-y-4">
              {['Order Status', 'Returns & Exchanges', 'Shipping Policy', 'Size Guide', 'Contact Us'].map((link) => (
                <li key={link}>
                  <Link to="/contact" className="text-slate-400 text-sm hover:text-primary transition-colors">{link}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-display font-bold mb-6 italic">Store Location</h4>
            <ul className="space-y-6">
              <li className="flex items-start space-x-3">
                <MapPin className="text-primary mt-1" size={18} />
                <span className="text-slate-400 text-sm">Hyderabad</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="text-primary" size={18} />
                <span className="text-slate-400 text-sm">+91 739654****</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="text-primary" size={18} />
                <span className="text-slate-400 text-sm">sandeepbanvari77@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <p className="text-slate-500 text-xs text-center md:text-left">
            © 2026 SHOEVAULT E-Commerce. All rights reserved. Designed with passion.
          </p>
          <div className="flex space-x-6">
            <Link to="#" className="text-slate-500 text-xs hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="#" className="text-slate-500 text-xs hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
