"use client";

import { useCart } from "@/context/CartContext";
import { Minus, Plus, Trash2, ArrowLeft, ShoppingBag } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

export default function CartPage() {
  const { cart, updateQuantity, removeFromCart, clearCart, subtotal } = useCart();
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  
  const tax = subtotal * 0.05; // 5% GST assumption
  const total = subtotal + tax;

  const handleCheckout = () => {
    setIsCheckingOut(true);
    setTimeout(() => {
      clearCart();
      setIsCheckingOut(false);
      alert("Demo Checkout Complete! This was a simulation, no payment processed.");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex items-center gap-4 mb-8">
          <Link href="/menu" className="p-2 hover:bg-muted rounded-full transition-colors">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <h1 className="text-3xl font-bold text-foreground">Your Order</h1>
        </div>

        {cart.length === 0 ? (
          <div className="text-center py-20 bg-card rounded-2xl border border-border">
            <div className="inline-flex p-4 bg-muted rounded-full mb-4">
              <ShoppingBag className="w-8 h-8 text-muted-foreground" />
            </div>
            <h2 className="text-xl font-medium mb-2">Your cart is empty</h2>
            <p className="text-muted-foreground mb-6">Looks like you haven't added anything to your order yet.</p>
            <Link 
              href="/menu"
              className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors"
            >
              Browse Menu
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {cart.map((item) => (
                <motion.div 
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  key={item.id} 
                  className="flex gap-4 p-4 bg-card rounded-2xl border border-border shadow-sm"
                >
                  <div className="w-24 h-24 rounded-xl overflow-hidden bg-muted shrink-0">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  
                  <div className="flex-1 flex flex-col justify-between py-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-bold text-foreground leading-tight">{item.name}</h3>
                        <p className="text-xs text-muted-foreground mt-1">{item.category}</p>
                      </div>
                      <p className="font-bold text-primary whitespace-nowrap">₹{item.price}</p>
                    </div>
                    
                    <div className="flex justify-between items-center mt-4">
                      <div className="flex items-center gap-3 bg-muted rounded-full px-2 py-1 border border-border/50">
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-1 hover:bg-background rounded-full transition-colors text-foreground"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-sm font-medium w-4 text-center">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-1 hover:bg-background rounded-full transition-colors text-foreground"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      
                      <button 
                        onClick={() => removeFromCart(item.id)}
                        className="text-muted-foreground hover:text-destructive transition-colors p-2"
                        title="Remove item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
              
              <div className="flex justify-end">
                <button 
                  onClick={clearCart}
                  className="text-sm text-muted-foreground hover:text-destructive font-medium underline"
                >
                  Clear Cart
                </button>
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-card p-6 rounded-2xl border border-border shadow-sm sticky top-24">
                <h3 className="text-lg font-bold mb-6">Order Summary</h3>
                
                <div className="space-y-3 text-sm mb-6">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span className="font-medium text-foreground">₹{subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Tax (5% GST)</span>
                    <span className="font-medium text-foreground">₹{tax.toFixed(2)}</span>
                  </div>
                  <div className="border-t border-border pt-3 mt-3 flex justify-between items-center">
                    <span className="font-bold text-foreground">Total</span>
                    <span className="font-bold text-lg text-primary">₹{total.toFixed(2)}</span>
                  </div>
                </div>

                <div className="bg-amber-100 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900 text-amber-800 dark:text-amber-400 p-3 rounded-lg text-xs mb-6 text-center">
                  <strong>Demo Checkout</strong> <br/> No real payment is processed.
                </div>

                <button 
                  onClick={handleCheckout}
                  disabled={isCheckingOut}
                  className="w-full flex items-center justify-center py-3 bg-primary text-primary-foreground rounded-full font-bold hover:bg-primary/90 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isCheckingOut ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin"></span>
                      Processing...
                    </span>
                  ) : (
                    "Proceed to Demo Checkout"
                  )}
                </button>
              </div>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}
