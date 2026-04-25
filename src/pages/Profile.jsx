import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Mail, MapPin, Package, LogOut, Settings, Phone, Check, Edit2, ShieldCheck } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const Profile = () => {
  const { user, login, logout } = useAuth();
  const navigate = useNavigate();

  const [isEditingPhone, setIsEditingPhone] = useState(false);
  const [newPhone, setNewPhone] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [generatedOtp, setGeneratedOtp] = useState('');
  const [otpInput, setOtpInput] = useState('');

  const handleLogout = () => {
    logout();
    toast.success('Logged out successfully');
    navigate('/login');
  };

  const handleSendOtp = () => {
    if (!newPhone || newPhone.length < 10) {
      toast.error('Please enter a valid mobile number');
      return;
    }
    const mockOtp = Math.floor(100000 + Math.random() * 900000).toString();
    setGeneratedOtp(mockOtp);
    setOtpSent(true);
    toast.success(`OTP Sent! Your code is: ${mockOtp}`, { duration: 5000 });
  };

  const handleVerifyAndSave = () => {
    if (otpInput !== generatedOtp) {
      toast.error('Invalid OTP. Please try again.');
      return;
    }
    
    // Update global auth user with new mobile
    login({ ...user, mobile: newPhone });
    toast.success('Phone number updated successfully!');
    
    // Reset state
    setIsEditingPhone(false);
    setOtpSent(false);
    setGeneratedOtp('');
    setOtpInput('');
  };

  if (!user) {
    return (
      <div className="pt-40 pb-24 text-center min-h-screen">
        <h2 className="text-2xl font-bold mb-4">You are not logged in</h2>
        <button onClick={() => navigate('/login')} className="text-primary font-bold hover:underline">Go to Login</button>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-display font-bold mb-12 italic">MY <span className="text-primary">PROFILE</span></h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Sidebar */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-1 space-y-6"
          >
            <div className="glass p-8 rounded-3xl text-center relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-primary/20 to-transparent"></div>
              <div className="w-24 h-24 bg-slate-800 rounded-full mx-auto mb-4 border-4 border-slate-900 flex items-center justify-center relative z-10">
                <User size={40} className="text-slate-400" />
              </div>
              <h2 className="text-xl font-bold relative z-10">{user.name}</h2>
              <p className="text-slate-400 text-sm mb-6 relative z-10">{user.email}</p>
              
              <button 
                onClick={handleLogout}
                className="w-full py-3 glass border-white/10 hover:bg-red-500/10 hover:text-red-500 text-slate-300 font-bold rounded-xl flex items-center justify-center space-x-2 transition-all"
              >
                <LogOut size={18} />
                <span>Sign Out</span>
              </button>
            </div>

            <div className="glass p-4 rounded-3xl space-y-2">
              <button className="w-full flex items-center space-x-3 p-4 rounded-xl bg-primary/10 text-primary font-bold">
                <User size={20} />
                <span>Account Info</span>
              </button>
              <button className="w-full flex items-center space-x-3 p-4 rounded-xl hover:bg-white/5 text-slate-300 font-bold transition-all">
                <Package size={20} />
                <span>Orders</span>
              </button>
              <button className="w-full flex items-center space-x-3 p-4 rounded-xl hover:bg-white/5 text-slate-300 font-bold transition-all">
                <Settings size={20} />
                <span>Settings</span>
              </button>
            </div>
          </motion.div>

          {/* Main Content */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="glass p-10 rounded-[40px]">
              <h3 className="text-2xl font-bold mb-8">Account Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 block">Full Name</label>
                  <p className="text-lg font-medium">{user.name}</p>
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 block">Email Address</label>
                  <p className="text-lg font-medium">{user.email}</p>
                </div>
                <div className="col-span-1 md:col-span-2 mt-2">
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest block">Phone Number</label>
                    {!isEditingPhone && (
                      <div className="flex items-center space-x-4">
                        <button 
                          onClick={() => {
                            setNewPhone(user.mobile || '');
                            setIsEditingPhone(true);
                          }}
                          className="text-xs font-bold text-primary flex items-center space-x-1 hover:underline"
                        >
                          <Edit2 size={12} />
                          <span>{user.mobile ? 'Change' : 'Add Number'}</span>
                        </button>
                        {user.mobile && (
                          <button 
                            onClick={() => {
                              login({ ...user, mobile: '' });
                              toast.success('Phone number removed');
                            }}
                            className="text-xs font-bold text-red-500 flex items-center space-x-1 hover:underline"
                          >
                            <span>Remove</span>
                          </button>
                        )}
                      </div>
                    )}
                  </div>
                  
                  {isEditingPhone ? (
                    <div className="p-4 bg-black/20 rounded-2xl border border-white/5 space-y-4">
                      <div className="flex gap-2">
                        <div className="relative flex-grow">
                          <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
                          <input 
                            type="tel"
                            value={newPhone}
                            onChange={(e) => setNewPhone(e.target.value)}
                            disabled={otpSent}
                            placeholder="Enter mobile number"
                            className="w-full bg-slate-900 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-white text-sm focus:outline-none focus:border-primary/50"
                          />
                        </div>
                        {!otpSent && (
                          <button 
                            onClick={handleSendOtp}
                            className="px-4 py-3 bg-primary hover:bg-primary-dark text-white text-sm font-bold rounded-xl transition-colors whitespace-nowrap"
                          >
                            Get OTP
                          </button>
                        )}
                      </div>

                      {otpSent && (
                        <div className="flex gap-2 animate-in fade-in slide-in-from-top-2">
                          <div className="relative flex-grow">
                            <ShieldCheck className="absolute left-4 top-1/2 -translate-y-1/2 text-primary" size={18} />
                            <input 
                              type="text"
                              maxLength={6}
                              value={otpInput}
                              onChange={(e) => setOtpInput(e.target.value)}
                              placeholder="6-digit code"
                              className="w-full bg-slate-900 border border-primary/50 rounded-xl py-3 pl-10 pr-4 text-white text-sm shadow-[0_0_10px_rgba(59,130,246,0.1)] focus:outline-none"
                            />
                          </div>
                          <button 
                            onClick={handleVerifyAndSave}
                            className="px-4 py-3 bg-green-500 hover:bg-green-600 text-white text-sm font-bold rounded-xl transition-colors whitespace-nowrap flex items-center space-x-1"
                          >
                            <Check size={16} />
                            <span>Verify Details</span>
                          </button>
                        </div>
                      )}
                      
                      <button 
                        onClick={() => {
                          setIsEditingPhone(false);
                          setOtpSent(false);
                        }}
                        className="text-xs text-slate-500 hover:text-white transition-colors"
                      >
                        Cancel
                      </button>
                    </div>
                  ) : (
                    <p className={`text-lg font-medium ${!user.mobile ? 'text-slate-400' : ''}`}>
                      {user.mobile || 'Not provided'}
                    </p>
                  )}
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 block">Member Since</label>
                  <p className="text-lg font-medium">April 2026</p>
                </div>
              </div>
              <button className="mt-10 px-8 py-3 bg-white text-black hover:bg-primary hover:text-white font-bold rounded-xl transition-all">
                Edit Profile
              </button>
            </div>

            <div className="glass p-10 rounded-[40px]">
              <h3 className="text-2xl font-bold mb-8">Recent Orders</h3>
              <div className="flex flex-col items-center justify-center py-12">
                <Package size={48} className="text-slate-600 mb-4" />
                <p className="text-slate-400">You haven't placed any orders yet.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
