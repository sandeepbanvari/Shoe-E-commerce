import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, Shield, Truck, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
import heroShoe from '../assets/images/hero-shoe.png';

const Home = () => {
  const trendingProducts = products.filter(p => p.isTrending || p.isNew).slice(0, 4);

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
          <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[80%] bg-primary/20 blur-[120px] rounded-full"></div>
          <div className="absolute -bottom-[20%] -right-[10%] w-[50%] h-[80%] bg-accent/10 blur-[120px] rounded-full"></div>
        </div>

        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full glass border-primary/30 text-primary text-xs font-bold tracking-widest uppercase mb-6">
              New Collection 2026
            </span>
            <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight mb-6 italic">
              ENGINEERED FOR <br />
              <span className="text-gradient">PEAK MOTION</span>
            </h1>
            <p className="text-slate-400 text-lg mb-10 max-w-lg leading-relaxed">
              Step into the future of footwear. Our latest technology provides 30% more energy return and a glove-like fit that adapts to your every move.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                to="/shop" 
                className="px-8 py-4 bg-primary hover:bg-primary-dark text-white font-bold rounded-full transition-all flex items-center space-x-2 group"
              >
                <span>SHOP NOW</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/about" 
                className="px-8 py-4 glass hover:bg-white/10 text-white font-bold rounded-full transition-all"
              >
                LEARN MORE
              </Link>
            </div>

            <div className="mt-12 flex items-center space-x-8">
              <div>
                <p className="text-3xl font-display font-bold">250k+</p>
                <p className="text-slate-500 text-xs uppercase tracking-widest">Happy Customers</p>
              </div>
              <div className="w-px h-12 bg-white/10"></div>
              <div>
                <p className="text-3xl font-display font-bold">4.9/5</p>
                <p className="text-slate-500 text-xs uppercase tracking-widest">Top Performance</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/20 blur-[100px] -z-10 rounded-full animate-pulse"></div>
            <img 
              src={heroShoe} 
              alt="Engineered Shoe" 
              className="w-full h-auto drop-shadow-[0_20px_50px_rgba(59,130,246,0.5)] animate-float"
            />
          </motion.div>
        </div>
      </section>

      {/* Stats/Features */}
      <section className="py-20 bg-slate-950/50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Truck, title: "Global Shipping", desc: "Fast delivery to 150+ countries" },
              { icon: Shield, title: "Secure Checkout", desc: "Fully encrypted payment systems" },
              { icon: Zap, title: "Lightweight Tech", desc: "Engineered for maximum speed" },
              { icon: Star, title: "Premium Quality", desc: "Only the finest materials used" },
            ].map((feature, idx) => (
              <div key={idx} className="flex flex-col items-center text-center p-8 glass rounded-3xl hover:border-primary/30 transition-colors">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6">
                  <feature.icon size={30} />
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-slate-400 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Sections */}
      <section className="py-12 space-y-24">
        {[
          { 
            title: "Running Shoes", 
            subtitle: "Built for speed and endurance", 
            items: products.filter(p => p.category === 'Running').slice(0, 4) 
          },
          { 
            title: "Lifestyle Sneakers", 
            subtitle: "Street-ready style and comfort", 
            items: products.filter(p => p.category === 'Casual' || p.category === 'Sneakers').slice(0, 4) 
          },
          { 
            title: "Basketball Gear", 
            subtitle: "Dominate the court", 
            items: products.filter(p => p.category === 'Sports').slice(0, 4) 
          },
          { 
            title: "Formal Collection", 
            subtitle: "Elegance for every occasion", 
            items: products.filter(p => p.category === 'Formal').slice(0, 4) 
          },
          { 
            title: "Last Chance Sale", 
            subtitle: "Limited time deals", 
            items: products.filter(p => p.discount).slice(0, 4) 
          }
        ].map((section, idx) => (
          <div key={idx} className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row items-end justify-between mb-12">
              <div>
                <span className="text-primary font-bold tracking-widest text-xs uppercase mb-2 block">{section.subtitle}</span>
                <h2 className="text-4xl md:text-5xl font-display font-bold uppercase">{section.title}</h2>
              </div>
              <Link to="/shop" className="text-primary font-bold flex items-center space-x-2 mt-4 md:mt-0 hover:underline">
                <span>View All</span>
                <ArrowRight size={18} />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {section.items.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Testimonials */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[40%] h-[80%] bg-primary/5 blur-[120px] rounded-full -z-10"></div>
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-16">VOICES FROM THE <br /><span className="text-primary italic">TRACK</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "John Doe", role: "Marathon Runner", content: "The cushioning in these shoes is unlike anything I've ever felt. It literally feels like I'm bouncing off the pavement." },
              { name: "Sarah Smith", role: "Daily Commuter", content: "I walk 10,000 steps a day and these are the only shoes that don't leave my feet sore by evening. Minimalist yet powerful." },
              { name: "Mike Johnson", role: "Basketball Player", content: "Lateral support is key on the court. SHOEVAULT delivered exactly what I needed for my explosive cuts and jumps." }
            ].map((t, i) => (
              <div key={i} className="p-8 glass rounded-3xl text-left relative h-full">
                <div className="flex text-primary mb-4">
                  {[...Array(5)].map((_, j) => <Star key={j} size={16} fill="currentColor" />)}
                </div>
                <p className="text-slate-300 italic mb-8 leading-relaxed">"{t.content}"</p>
                <div>
                  <p className="font-bold">{t.name}</p>
                  <p className="text-primary text-xs uppercase tracking-wider">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
