"use client";

import { motion } from "framer-motion";
import { BarChart3, TrendingUp, Users, ShoppingBag, BrainCircuit, CheckCircle, Edit, XCircle, Clock } from "lucide-react";
import { useState, useEffect } from "react";

export default function DashboardPage() {
  const [waitTime, setWaitTime] = useState<number | null>(null);

  useEffect(() => {
    // Dynamically import ML to avoid server-side brain.js issues
    import('@/lib/ml').then((ml) => {
      setWaitTime(ml.predictWaitTime(14, 2, 0)); // e.g., 2PM, Wed, Sunny
    });
  }, []);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  return (
    <div className="min-h-screen bg-muted/30 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Café Dashboard</h1>
            <p className="text-muted-foreground">Overview of café performance and AI interaction metrics.</p>
          </div>
          <div className="bg-amber-100 text-amber-800 text-xs px-3 py-1.5 rounded-full font-bold uppercase tracking-wider">
            Sample / Demo Data
          </div>
        </div>

        {/* Business Metrics */}
        <h2 className="text-xl font-bold mb-4">Business Metrics (Today)</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <motion.div {...fadeIn} transition={{ delay: 0.1 }} className="bg-card p-6 rounded-2xl border border-border shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <div className="p-2 bg-primary/10 rounded-lg"><ShoppingBag className="w-5 h-5 text-primary" /></div>
              <span className="text-xs font-bold text-success-foreground bg-success/20 px-2 py-1 rounded-full">+12%</span>
            </div>
            <p className="text-sm text-muted-foreground">Demo Orders</p>
            <h3 className="text-3xl font-bold">142</h3>
          </motion.div>
          
          <motion.div {...fadeIn} transition={{ delay: 0.2 }} className="bg-card p-6 rounded-2xl border border-border shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <div className="p-2 bg-primary/10 rounded-lg"><TrendingUp className="w-5 h-5 text-primary" /></div>
              <span className="text-xs font-bold text-success-foreground bg-success/20 px-2 py-1 rounded-full">+8%</span>
            </div>
            <p className="text-sm text-muted-foreground">Estimated Revenue</p>
            <h3 className="text-3xl font-bold">₹42,500</h3>
          </motion.div>

          <motion.div {...fadeIn} transition={{ delay: 0.3 }} className="bg-card p-6 rounded-2xl border border-border shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <div className="p-2 bg-primary/10 rounded-lg"><BarChart3 className="w-5 h-5 text-primary" /></div>
              <span className="text-xs font-bold text-muted-foreground bg-muted px-2 py-1 rounded-full">-2%</span>
            </div>
            <p className="text-sm text-muted-foreground">Average Order Value</p>
            <h3 className="text-3xl font-bold">₹299</h3>
          </motion.div>

          <motion.div {...fadeIn} transition={{ delay: 0.4 }} className="bg-card p-6 rounded-2xl border border-border shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <div className="p-2 bg-primary/10 rounded-lg"><Users className="w-5 h-5 text-primary" /></div>
              <span className="text-xs font-bold text-success-foreground bg-success/20 px-2 py-1 rounded-full">+18%</span>
            </div>
            <p className="text-sm text-muted-foreground">Active Chatbot Users</p>
            <h3 className="text-3xl font-bold">89</h3>
          </motion.div>
        </div>

        {/* Client-Side ML Wait Time Predictor */}
        <div className="mb-12">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Clock className="w-5 h-5 text-primary" /> Live ML Wait Time Prediction
          </h2>
          <div className="bg-card p-6 md:p-8 rounded-2xl border border-border shadow-sm flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1">
              <h3 className="text-lg font-bold mb-2">Neural Network Powered</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Our client-side ML model (brain.js) is running locally in your browser to predict wait times based on the current time of day, day of the week, and weather patterns.
              </p>
              <div className="flex gap-4">
                <div className="bg-muted px-4 py-2 rounded-lg text-sm font-medium">
                  Input: <span className="text-primary font-bold">14:00 (Sunny)</span>
                </div>
              </div>
            </div>
            
            <div className="shrink-0 flex flex-col items-center justify-center p-6 bg-primary/5 border border-primary/20 rounded-full w-40 h-40 relative glow shadow-lg">
              <span className="text-3xl font-extrabold text-foreground mb-1">
                {waitTime !== null ? waitTime : "--"}
              </span>
              <span className="text-xs text-muted-foreground uppercase tracking-widest font-bold">Mins Wait</span>
              
              {/* Spinning animated ring */}
              <svg className="absolute inset-0 w-full h-full animate-[spin_10s_linear_infinite] opacity-30" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="10 10" className="text-primary" />
              </svg>
            </div>
          </div>
        </div>

        {/* AI Decision Monitor */}
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
          <BrainCircuit className="w-5 h-5 text-primary" /> AI Decision Monitor (This Week)
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          
          <div className="lg:col-span-2 bg-card p-6 rounded-2xl border border-border shadow-sm">
            <h3 className="text-lg font-bold mb-6">Recommendation Outcomes</h3>
            
            <div className="space-y-6">
              <div>
                <div className="flex justify-between mb-1 text-sm font-medium">
                  <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-success-foreground" /> Accepted (Without Edits)</span>
                  <span>68%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2.5">
                  <div className="bg-success h-2.5 rounded-full" style={{ width: '68%' }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-1 text-sm font-medium">
                  <span className="flex items-center gap-2"><Edit className="w-4 h-4 text-amber-500" /> Modified / Revised</span>
                  <span>22%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2.5">
                  <div className="bg-amber-400 h-2.5 rounded-full" style={{ width: '22%' }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-1 text-sm font-medium">
                  <span className="flex items-center gap-2"><XCircle className="w-4 h-4 text-destructive" /> Rejected</span>
                  <span>10%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2.5">
                  <div className="bg-destructive h-2.5 rounded-full" style={{ width: '10%' }}></div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-border flex justify-between text-sm text-muted-foreground">
              <span>Total Suggestions Generated: <strong>412</strong></span>
              <span className="italic">Humans remain involved in 100% of final decisions.</span>
            </div>
          </div>

          <div className="bg-card p-6 rounded-2xl border border-border shadow-sm">
            <h3 className="text-lg font-bold mb-6">Most Requested AI Categories</h3>
            <div className="space-y-4">
              {[
                { name: "Budget < ₹300", val: 145 },
                { name: "Vegetarian Options", val: 98 },
                { name: "Cold Beverages", val: 76 },
                { name: "Dairy-Free", val: 45 },
                { name: "High Caffeine", val: 32 }
              ].map((cat, i) => (
                <div key={i} className="flex justify-between items-center p-3 bg-muted/50 rounded-xl">
                  <span className="text-sm font-medium">{cat.name}</span>
                  <span className="text-xs font-bold bg-background px-2 py-1 rounded-md border border-border">{cat.val} queries</span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
