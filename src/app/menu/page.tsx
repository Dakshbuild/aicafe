"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Leaf, Plus } from "lucide-react";
import { menuData } from "@/data/menu";
import { useCart } from "@/context/CartContext";

const categories = ["All", "Coffee", "Tea", "Cold Beverages", "Mocktails", "Breakfast", "Snacks", "Main Dishes", "Pizza", "Pasta", "Desserts"];

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const { addToCart } = useCart();

  const filteredMenu = menuData.filter(item => {
    const matchesCategory = activeCategory === "All" || item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-transparent py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-sm md:text-base font-sans tracking-[0.3em] uppercase text-primary mb-4">
            The Catalogue
          </h2>
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 text-foreground">
            Curated Excellence
          </h1>
          <p className="text-muted-foreground font-sans max-w-2xl mx-auto text-lg">
            A meticulously designed selection of premium roasts and culinary craftsmanship.
          </p>
        </div>

        {/* Filters and Search (Glassmorphic) */}
        <div className="flex flex-col lg:flex-row gap-6 justify-between items-start lg:items-center mb-16 glass p-2 rounded-full border border-border shadow-sm">
          
          {/* Categories */}
          <div className="flex gap-2 overflow-x-auto w-full lg:w-auto scrollbar-hide px-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`whitespace-nowrap px-6 py-3 rounded-full text-sm font-sans uppercase tracking-wider transition-all duration-300 ${
                  activeCategory === cat 
                  ? "bg-primary text-primary-foreground" 
                  : "text-foreground hover:bg-muted"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="flex w-full lg:w-auto px-4 lg:px-2 pb-2 lg:pb-0">
            {/* Search */}
            <div className="relative w-full lg:w-72">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input 
                type="text" 
                placeholder="Search..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-transparent border border-border rounded-full text-sm font-sans focus:ring-1 focus:ring-primary focus:outline-none text-foreground"
              />
            </div>
          </div>
        </div>

        {/* Cinematic Menu Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          <AnimatePresence mode="popLayout">
            {filteredMenu.map((item, idx) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="group relative flex flex-col h-[400px] rounded-2xl overflow-hidden shadow-lg"
              >
                <div className="absolute inset-0 z-0 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-opacity duration-500 group-hover:opacity-90"></div>
                </div>
                
                <div className="relative z-10 flex flex-col justify-end h-full p-6 md:p-8">
                  <div className="transform translate-y-8 transition-transform duration-500 ease-out group-hover:translate-y-0">
                    <div className="flex justify-between items-end mb-4">
                      <div>
                        <span className="text-primary text-[10px] font-sans tracking-widest uppercase mb-1 block">
                          {item.category}
                        </span>
                        <h3 className="font-serif font-bold text-2xl text-white leading-tight">
                          {item.name}
                        </h3>
                      </div>
                      <span className="font-sans text-lg text-white border-b border-primary pb-0.5">
                        ₹{item.price}
                      </span>
                    </div>
                    
                    <div className="opacity-0 transition-opacity duration-500 delay-100 group-hover:opacity-100">
                      <p className="text-sm text-gray-300 font-sans mb-6 line-clamp-3">
                        {item.description}
                      </p>
                      
                      <div className="flex gap-4">
                        <button 
                          onClick={() => addToCart(item)}
                          className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-sans text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-colors"
                        >
                          Add to Order <Plus className="w-3 h-3" />
                        </button>
                        <Link href="/recommendations" className="flex items-center gap-2 px-6 py-3 border border-white/30 text-white font-sans text-xs uppercase tracking-widest hover:bg-white/10 transition-colors backdrop-blur-sm">
                          Ask AI
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                
                {item.vegetarian && (
                  <div className="absolute top-6 left-6 z-10 flex items-center gap-2">
                    <Leaf className="w-4 h-4 text-primary" />
                  </div>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredMenu.length === 0 && (
          <div className="text-center py-32">
            <p className="text-muted-foreground font-serif text-2xl italic">"Nothing matches your refined search."</p>
            <button 
              onClick={() => { setActiveCategory("All"); setSearchQuery(""); }}
              className="mt-6 text-primary font-sans uppercase tracking-widest text-sm hover:underline"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
