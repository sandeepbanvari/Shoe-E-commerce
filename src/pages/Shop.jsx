import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, SlidersHorizontal, X, ArrowUpDown, Grid, List as ListIcon } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

const Shop = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedBrand, setSelectedBrand] = useState('All');
  const [priceRange, setPriceRange] = useState(300);
  const [sortBy, setSortBy] = useState('default');
  const [showFilters, setShowFilters] = useState(false);

  const categories = ['All', 'Running', 'Casual', 'Sports', 'Sneakers', 'Formal'];
  const brands = ['All', 'Nike', 'Adidas', 'Puma', 'Reebok', 'Converse', 'New Balance', 'Skechers'];

  const filteredProducts = useMemo(() => {
    return products
      .filter(p => {
        const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                             p.brand.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory = selectedCategory === 'All' || p.category === selectedCategory;
        const matchesBrand = selectedBrand === 'All' || p.brand === selectedBrand;
        const matchesPrice = p.price <= priceRange;
        return matchesSearch && matchesCategory && matchesBrand && matchesPrice;
      })
      .sort((a, b) => {
        if (sortBy === 'price-low') return a.price - b.price;
        if (sortBy === 'price-high') return b.price - a.price;
        if (sortBy === 'rating') return b.rating - a.rating;
        return 0;
      });
  }, [searchQuery, selectedCategory, selectedBrand, priceRange, sortBy]);

  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
          <div>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-4">EXPLORE <span className="text-primary italic">ALL</span></h1>
            <p className="text-slate-400">Discover your perfect pair from our curated collection.</p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <div className="relative flex-grow sm:w-80">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={20} />
              <input 
                type="text"
                placeholder="Search shoes by name or brand..."
                className="w-full bg-slate-900 border border-white/5 rounded-2xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-primary/50 transition-colors"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <button 
              onClick={() => setShowFilters(true)}
              className="px-6 py-4 glass border-white/10 rounded-2xl flex items-center justify-center space-x-2 text-white font-bold hover:bg-white/10 transition-colors"
            >
              <SlidersHorizontal size={20} />
              <span>Filters</span>
            </button>
          </div>
        </div>

        {/* Filters and Grid */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar - Desktop Only */}
          <aside className="hidden lg:block w-72 space-y-10">
            <div>
              <h4 className="text-white font-bold mb-6 italic tracking-wider">CATEGORIES</h4>
              <div className="space-y-3">
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`block w-full text-left px-4 py-2 rounded-xl text-sm transition-all ${
                      selectedCategory === cat ? 'bg-primary text-white font-bold' : 'text-slate-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6 italic tracking-wider">BRANDS</h4>
              <div className="flex flex-wrap gap-2">
                {brands.map(brand => (
                  <button
                    key={brand}
                    onClick={() => setSelectedBrand(brand)}
                    className={`px-4 py-2 rounded-xl text-xs font-bold transition-all border ${
                      selectedBrand === brand ? 'bg-primary border-primary text-white' : 'border-white/5 text-slate-400 hover:border-white/20'
                    }`}
                  >
                    {brand}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-6">
                <h4 className="text-white font-bold italic tracking-wider">MAX PRICE</h4>
                <span className="text-primary font-bold">${priceRange}</span>
              </div>
              <input 
                type="range" 
                min="50" 
                max="500" 
                step="10"
                value={priceRange}
                onChange={(e) => setPriceRange(parseInt(e.target.value))}
                className="w-full accent-primary h-2 bg-slate-900 rounded-lg appearance-none cursor-pointer"
              />
            </div>

            <div>
              <h4 className="text-white font-bold mb-6 italic tracking-wider">SORT BY</h4>
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full bg-slate-900 border border-white/5 rounded-xl p-4 text-sm text-slate-300 focus:outline-none focus:border-primary/50"
              >
                <option value="default">Default Sorting</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-grow">
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-20 glass rounded-3xl">
                <div className="w-24 h-24 bg-white/5 rounded-full flex items-center justify-center text-slate-500 mb-6">
                  <Search size={48} />
                </div>
                <h3 className="text-2xl font-bold mb-2">No matching shoes found</h3>
                <p className="text-slate-400 mb-8">Try adjusting your search or filters.</p>
                <button 
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('All');
                    setSelectedBrand('All');
                    setPriceRange(500);
                  }}
                  className="px-6 py-3 bg-primary text-white font-bold rounded-full"
                >
                  Clear All Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filter Overlay */}
      <AnimatePresence>
        {showFilters && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/80 backdrop-blur-sm md:hidden"
          >
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              className="absolute right-0 top-0 bottom-0 w-80 bg-slate-950 p-8 overflow-y-auto"
            >
              <div className="flex items-center justify-between mb-10">
                <h2 className="text-2xl font-bold">Filters</h2>
                <button onClick={() => setShowFilters(false)} className="p-2"><X size={24}/></button>
              </div>

              <div className="space-y-10">
                {/* Same filters as desktop but vertical */}
                <div>
                  <h4 className="text-xs font-bold text-slate-500 mb-4 tracking-widest uppercase">Categories</h4>
                  <div className="flex flex-wrap gap-2">
                    {categories.map(cat => (
                      <button
                        key={cat}
                        onClick={() => setSelectedCategory(cat)}
                        className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                          selectedCategory === cat ? 'bg-primary text-white' : 'glass text-slate-300'
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                   <h4 className="text-xs font-bold text-slate-500 mb-4 tracking-widest uppercase">Max Price: ${priceRange}</h4>
                   <input 
                    type="range" 
                    min="50" 
                    max="500" 
                    step="10"
                    value={priceRange}
                    onChange={(e) => setPriceRange(parseInt(e.target.value))}
                    className="w-full accent-primary h-2 bg-slate-900 rounded-lg appearance-none cursor-pointer"
                  />
                </div>

                <button 
                  onClick={() => setShowFilters(false)}
                  className="w-full py-4 bg-primary text-white font-bold rounded-2xl mt-8"
                >
                  APPLY FILTERS
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Shop;
