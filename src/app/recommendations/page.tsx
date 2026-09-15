"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, BrainCircuit, Check, X as XIcon, Edit3, ArrowRight } from "lucide-react";
import { generateSmartRecommendation, RecommendationPreferences, AIRecommendationResult } from "@/app/actions/ai";
import { menuData } from "@/data/menu";
import { useCart } from "@/context/CartContext";
import Link from "next/link";

export default function RecommendationsPage() {
  const { addToCart } = useCart();
  
  const [prefs, setPrefs] = useState<RecommendationPreferences>({
    budget: 300,
    dietary: "Any",
    mood: "Any",
  });
  
  const [isGenerating, setIsGenerating] = useState(false);
  const [result, setResult] = useState<AIRecommendationResult | null>(null);
  const [decision, setDecision] = useState<"Accepted" | "Rejected" | "Modified" | null>(null);
  const [rejectReason, setRejectReason] = useState("");
  const [showRejectModal, setShowRejectModal] = useState(false);

  const handleGenerate = async () => {
    setIsGenerating(true);
    setResult(null);
    setDecision(null);
    
    try {
      const res = await generateSmartRecommendation(prefs);
      setResult(res);
    } catch (error) {
      console.error(error);
    } finally {
      setIsGenerating(false);
    }
  };

  const recommendedItems = result 
    ? result.itemIds.map(id => menuData.find(m => m.id === id)).filter(Boolean)
    : [];

  const handleAccept = () => {
    recommendedItems.forEach(item => {
      if (item) addToCart(item);
    });
    setDecision("Accepted");
  };

  const handleRejectSubmit = () => {
    if (!rejectReason) return;
    setDecision("Rejected");
    setShowRejectModal(false);
    // In a real app, log to DB
  };

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-4">
            <Sparkles className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-4xl font-bold mb-4 text-foreground">Smart Recommendations</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Tell us what you're looking for, and our AI will curate the perfect selection from our menu. 
            You always have the final say.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Preferences Form */}
          <div className="bg-card p-8 rounded-3xl border border-border shadow-sm h-fit">
            <h2 className="text-2xl font-bold mb-6">Your Preferences</h2>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Budget (Max ₹{prefs.budget})
                </label>
                <input 
                  type="range" 
                  min="100" 
                  max="1000" 
                  step="50"
                  value={prefs.budget}
                  onChange={(e) => setPrefs({...prefs, budget: parseInt(e.target.value)})}
                  className="w-full accent-primary"
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-1">
                  <span>₹100</span>
                  <span>₹1000</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Dietary Requirements</label>
                <select 
                  value={prefs.dietary}
                  onChange={(e) => setPrefs({...prefs, dietary: e.target.value})}
                  className="w-full p-3 bg-muted border border-border rounded-xl text-sm focus:ring-2 focus:ring-primary focus:outline-none"
                >
                  <option value="Any">None / Any</option>
                  <option value="Vegetarian">Vegetarian</option>
                  <option value="Vegan">Vegan</option>
                  <option value="Dairy-Free">Dairy-Free</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Craving / Mood</label>
                <div className="grid grid-cols-2 gap-3">
                  {["Any", "Hot Drink", "Cold Drink", "Sweet", "Savory", "Filling"].map(mood => (
                    <button
                      key={mood}
                      onClick={() => setPrefs({...prefs, mood})}
                      className={`py-2 px-3 text-sm rounded-lg border transition-colors ${
                        prefs.mood === mood 
                        ? "bg-primary text-primary-foreground border-primary" 
                        : "bg-background text-foreground border-border hover:bg-muted"
                      }`}
                    >
                      {mood}
                    </button>
                  ))}
                </div>
              </div>

              <button
                onClick={handleGenerate}
                disabled={isGenerating}
                className="w-full py-4 mt-4 bg-foreground text-background rounded-full font-bold hover:bg-foreground/90 transition-colors flex items-center justify-center gap-2 disabled:opacity-70"
              >
                {isGenerating ? (
                  <span className="flex items-center gap-2">
                    <BrainCircuit className="w-5 h-5 animate-pulse" /> Generating...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Sparkles className="w-5 h-5" /> Generate AI Suggestion
                  </span>
                )}
              </button>
            </div>
          </div>

          {/* AI Result Area */}
          <div>
            <AnimatePresence mode="wait">
              {!result && !isGenerating && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="h-full flex flex-col items-center justify-center text-center p-8 border-2 border-dashed border-border rounded-3xl text-muted-foreground"
                >
                  <BrainCircuit className="w-16 h-16 mb-4 opacity-20" />
                  <p>Set your preferences and click generate to see AI magic at work.</p>
                </motion.div>
              )}

              {isGenerating && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="h-full flex flex-col items-center justify-center text-center p-8 bg-muted rounded-3xl border border-border"
                >
                  <div className="flex gap-2 mb-6">
                    <span className="w-3 h-3 bg-primary rounded-full animate-bounce"></span>
                    <span className="w-3 h-3 bg-primary rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></span>
                    <span className="w-3 h-3 bg-primary rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></span>
                  </div>
                  <p className="text-foreground font-medium animate-pulse">Analyzing menu & constraints...</p>
                </motion.div>
              )}

              {result && !isGenerating && (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-card border border-border rounded-3xl p-6 shadow-xl relative overflow-hidden"
                >
                  {result.isDemoFallback && (
                    <div className="absolute top-0 left-0 w-full bg-amber-500/10 text-amber-600 text-[10px] font-bold py-1 px-4 text-center uppercase tracking-widest border-b border-amber-500/20">
                      Demo Fallback Mode
                    </div>
                  )}
                  
                  <div className="mt-4 mb-6">
                    <h3 className="text-sm font-bold text-primary uppercase tracking-wider mb-2">AI Reasoning</h3>
                    <p className="text-foreground text-lg leading-relaxed bg-muted p-4 rounded-xl italic">
                      "{result.explanation}"
                    </p>
                  </div>

                  <div className="space-y-4 mb-8">
                    {recommendedItems.length > 0 ? (
                      recommendedItems.map(item => item && (
                        <div key={item.id} className="flex gap-4 items-center bg-background border border-border p-3 rounded-xl">
                          <img src={item.image} alt={item.name} className="w-16 h-16 rounded-lg object-cover" />
                          <div className="flex-1">
                            <h4 className="font-bold">{item.name}</h4>
                            <p className="text-sm text-primary">₹{item.price}</p>
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="p-4 bg-destructive/10 text-destructive rounded-xl text-sm">
                        No exact matches found. Please loosen your constraints.
                      </div>
                    )}
                  </div>

                  {!decision ? (
                    <div className="border-t border-border pt-6">
                      <p className="text-center text-xs text-muted-foreground mb-4 font-medium uppercase tracking-wider">
                        Human Verification Required
                      </p>
                      <div className="grid grid-cols-2 gap-3">
                        <button 
                          onClick={handleAccept}
                          disabled={recommendedItems.length === 0}
                          className="flex items-center justify-center gap-2 py-3 bg-success text-success-foreground rounded-xl font-bold hover:bg-success/90 transition-colors disabled:opacity-50"
                        >
                          <Check className="w-5 h-5" /> Accept
                        </button>
                        <button 
                          onClick={() => setShowRejectModal(true)}
                          className="flex items-center justify-center gap-2 py-3 bg-destructive/10 text-destructive rounded-xl font-bold hover:bg-destructive/20 transition-colors"
                        >
                          <XIcon className="w-5 h-5" /> Reject / Edit
                        </button>
                      </div>
                    </div>
                  ) : (
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className={`p-4 rounded-xl text-center font-bold ${
                        decision === "Accepted" ? "bg-success/20 text-success-foreground" : "bg-destructive/20 text-destructive"
                      }`}
                    >
                      Decision Logged: {decision}
                      {decision === "Accepted" && (
                        <p className="text-sm font-normal mt-2">
                          Items added to <Link href="/cart" className="underline">cart</Link>.
                        </p>
                      )}
                      <button 
                        onClick={() => setResult(null)}
                        className="mt-4 text-xs underline font-normal"
                      >
                        Start over
                      </button>
                    </motion.div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Reject Modal */}
        <AnimatePresence>
          {showRejectModal && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-card w-full max-w-md rounded-3xl p-6 shadow-2xl border border-border"
              >
                <h3 className="text-xl font-bold mb-2">Human Override</h3>
                <p className="text-sm text-muted-foreground mb-6">
                  Please select why you are rejecting the AI's recommendation. This helps train the system and log AI errors.
                </p>
                
                <div className="space-y-2 mb-6">
                  {["Too expensive", "Dietary mismatch", "Not what I craved", "AI hallucinated an item", "Just changed my mind"].map(reason => (
                    <button
                      key={reason}
                      onClick={() => setRejectReason(reason)}
                      className={`w-full text-left px-4 py-3 rounded-xl border text-sm transition-colors ${
                        rejectReason === reason ? "bg-primary text-primary-foreground border-primary" : "bg-muted text-foreground border-border hover:bg-muted/80"
                      }`}
                    >
                      {reason}
                    </button>
                  ))}
                </div>

                <div className="flex gap-3">
                  <button 
                    onClick={() => setShowRejectModal(false)}
                    className="flex-1 py-3 text-sm font-bold text-foreground bg-muted rounded-xl hover:bg-muted/80"
                  >
                    Cancel
                  </button>
                  <button 
                    onClick={handleRejectSubmit}
                    disabled={!rejectReason}
                    className="flex-1 py-3 text-sm font-bold text-primary-foreground bg-primary rounded-xl hover:bg-primary/90 disabled:opacity-50"
                  >
                    Submit Rejection
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}
