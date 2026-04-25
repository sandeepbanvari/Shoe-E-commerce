import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ShoppingCart, Heart, ArrowLeft, Truck, RefreshCw, ShieldCheck, ChevronRight, Share2 } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/ProductCard';

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart, toggleWishlist, wishlist } = useCart();
  const product = products.find(p => p.id === parseInt(id));
  
  const [activeImage, setActiveImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [activeTab, setActiveTab] = useState('description');

  useEffect(() => {
    if (product) {
      setActiveImage(0);
      setSelectedSize(product.sizes[0]);
      setSelectedColor(product.colors[0]);
    }
    window.scrollTo(0, 0);
  }, [id, product]);

  if (!product) return <div className="pt-40 text-center">Product not found</div>;

  const isWishlisted = wishlist.some(item => item.id === product.id);
  const relatedProducts = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);

  const handleBuyNow = () => {
    if (!selectedSize || !selectedColor) {
      toast.error("Please select size and color");
      return;
    }
    const buyNowItem = { ...product, size: selectedSize, color: selectedColor, quantity: 1 };
    navigate('/checkout', { state: { buyNowItem } });
  };

  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-6">
        {/* Breadcrumbs */}
        <div className="flex items-center space-x-2 text-sm text-slate-500 mb-12">
          <Link to="/" className="hover:text-primary">Home</Link>
          <ChevronRight size={14} />
          <Link to="/shop" className="hover:text-primary">Shop</Link>
          <ChevronRight size={14} />
          <span className="text-white font-medium">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          {/* Gallery */}
          <div className="space-y-6">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="aspect-square glass rounded-[40px] overflow-hidden flex items-center justify-center p-12 relative"
            >
              <AnimatePresence mode="wait">
                <motion.img 
                  key={activeImage}
                  src={product.images[activeImage]} 
                  alt={product.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="max-w-full max-h-full object-contain drop-shadow-2xl"
                />
              </AnimatePresence>
              <button 
                onClick={() => toggleWishlist(product)}
                className="absolute top-8 right-8 p-4 glass rounded-3xl hover:bg-white text-slate-300 hover:text-red-500 transition-all shadow-xl"
              >
                <Heart size={24} fill={isWishlisted ? "currentColor" : "none"} className={isWishlisted ? "text-red-500" : ""} />
              </button>
            </motion.div>

            <div className="grid grid-cols-4 gap-4 px-2">
              {product.images.map((img, idx) => (
                <button 
                  key={idx}
                  onClick={() => setActiveImage(idx)}
                  className={`aspect-square rounded-2xl glass p-2 overflow-hidden border-2 transition-all ${
                    activeImage === idx ? 'border-primary' : 'border-transparent hover:border-white/10'
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-contain" />
                </button>
              ))}
            </div>
          </div>

          {/* Details */}
          <div className="flex flex-col">
            <div className="mb-8">
              <span className="text-primary font-bold tracking-widest text-xs uppercase mb-3 block">{product.brand}</span>
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 italic leading-tight">{product.name}</h1>
              <div className="flex items-center space-x-6">
                <div className="flex items-center glass px-3 py-1 rounded-full">
                  <div className="flex text-accent mr-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} fill={i < Math.floor(product.rating) ? "currentColor" : "none"} />
                    ))}
                  </div>
                  <span className="text-white text-sm font-bold">{product.rating}</span>
                </div>
                <span className="text-slate-500 text-sm">{product.reviews} customer reviews</span>
              </div>
            </div>

            <div className="flex items-end space-x-4 mb-10">
              <span className="text-4xl font-display font-bold text-white">${product.price}</span>
              {product.originalPrice && (
                <span className="text-2xl text-slate-500 line-through mb-1">${product.originalPrice}</span>
              )}
              {product.discount && (
                <span className="text-green-400 font-bold mb-1">Save {product.discount}%</span>
              )}
            </div>

            <p className="text-slate-400 leading-relaxed mb-10 text-lg">
              {product.description}
            </p>

            <div className="space-y-10 mb-12">
              {/* Color Selection */}
              <div>
                <h4 className="text-xs font-bold text-slate-500 mb-4 tracking-widest uppercase italic">Select Color</h4>
                <div className="flex space-x-3">
                  {product.colors.map((color, idx) => (
                    <button 
                      key={idx}
                      onClick={() => setSelectedColor(color)}
                      className={`w-10 h-10 rounded-full border-2 transition-all p-1 ${
                        selectedColor === color ? 'border-primary scale-110' : 'border-transparent'
                      }`}
                    >
                      <div className="w-full h-full rounded-full" style={{ backgroundColor: color }}></div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Size Selection */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-xs font-bold text-slate-500 tracking-widest uppercase italic">Select Size (US)</h4>
                  <button className="text-xs text-primary underline font-bold uppercase tracking-wider">Size Guide</button>
                </div>
                <div className="grid grid-cols-4 sm:grid-cols-6 gap-3">
                  {product.sizes.map((size) => (
                    <button 
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`py-3 rounded-xl font-bold transition-all border text-sm ${
                        selectedSize === size 
                          ? 'bg-primary border-primary text-white shadow-lg shadow-primary/20' 
                          : 'glass border-white/5 text-slate-400 hover:border-white/10'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button 
                onClick={() => addToCart(product, selectedSize, selectedColor)}
                className="flex-grow py-5 glass border-primary/20 hover:bg-white/5 text-primary font-bold rounded-2xl flex items-center justify-center space-x-3 transition-all"
              >
                <ShoppingCart size={22} />
                <span>ADD TO CART</span>
              </button>
              <button 
                onClick={handleBuyNow}
                className="flex-grow flex-[2] py-5 bg-primary hover:bg-primary-dark text-white font-bold rounded-2xl flex items-center justify-center space-x-3 shadow-2xl transition-all hover:-translate-y-1"
              >
                <span>BUY IT NOW</span>
              </button>
              <button className="p-5 glass hover:bg-white/10 rounded-2xl transition-all">
                <Share2 size={24} />
              </button>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-10 border-t border-white/5">
              <div className="flex items-center space-x-3">
                <div className="p-2 glass rounded-lg text-primary"><Truck size={18}/></div>
                <span className="text-xs font-medium text-slate-400">Fast Global Shipping</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="p-2 glass rounded-lg text-primary"><RefreshCw size={18}/></div>
                <span className="text-xs font-medium text-slate-400">30 Day Returns</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="p-2 glass rounded-lg text-primary"><ShieldCheck size={18}/></div>
                <span className="text-xs font-medium text-slate-400">Certified Authentic</span>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="mb-24">
          <div className="flex space-x-8 border-b border-white/5 mb-10 overflow-x-auto pb-1">
            {['Description', 'Specifications', 'Reviews (124)'].map((tab) => (
              <button 
                key={tab}
                onClick={() => setActiveTab(tab.toLowerCase().split(' ')[0])}
                className={`py-4 text-sm font-bold uppercase tracking-widest relative transition-colors ${
                  activeTab === tab.toLowerCase().split(' ')[0] ? 'text-primary' : 'text-slate-500 hover:text-white'
                }`}
              >
                {tab}
                {activeTab === tab.toLowerCase().split(' ')[0] && (
                  <motion.div layoutId="tab-underline" className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"></motion.div>
                )}
              </button>
            ))}
          </div>
          
          <div className="glass p-10 rounded-[32px] text-slate-400 leading-relaxed min-h-[200px]">
             {activeTab === 'description' && (
                <div className="space-y-6">
                  <p>Elevate your footwear game with the {product.name}. Designed for those who demand both style and unmatched performance, this pair is the result of years of research and innovation.</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Advanced breathable mesh upper for superior airflow</li>
                    <li>Adaptive fit technology for a customized feel</li>
                    <li>Eco-conscious materials sourced sustainably</li>
                    <li>High-traction outsole for multi-surface grip</li>
                  </ul>
                </div>
             )}
             {activeTab === 'specifications' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                  {[
                    { label: "Season", value: "Spring/Summer 2026" },
                    { label: "Technology", value: "AeroCushion Fluid-V" },
                    { label: "Weight", value: "240g (Size 9)" },
                    { label: "Material", value: "Vegan Leather / Recycled Polyester" },
                    { label: "Country of Origin", value: "Italy" },
                    { label: "Style Code", value: "SH-990-2026" }
                  ].map((spec, i) => (
                    <div key={i} className="flex justify-between border-b border-white/5 pb-2">
                      <span className="text-slate-500 font-medium italic">{spec.label}</span>
                      <span className="text-white font-bold">{spec.value}</span>
                    </div>
                  ))}
                </div>
             )}
             {activeTab === 'reviews' && (
                <div className="space-y-10">
                   {/* Review mock */}
                   <div className="flex gap-6">
                      <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary">JD</div>
                      <div>
                         <div className="flex items-center space-x-3 mb-2">
                            <span className="font-bold text-white">James D.</span>
                            <div className="flex text-accent text-xs">
                               {[...Array(5)].map((_, i) => <Star key={i} size={10} fill="currentColor" />)}
                            </div>
                         </div>
                         <p className="mb-2">Best purchase this year! The fit is perfect and the color is even better in person.</p>
                         <span className="text-xs text-slate-500">2 days ago</span>
                      </div>
                   </div>
                </div>
             )}
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div>
            <h2 className="text-3xl font-display font-bold mb-10 italic">YOU MAY ALSO <span className="text-primary italic">LIKE</span></h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {relatedProducts.map(p => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
