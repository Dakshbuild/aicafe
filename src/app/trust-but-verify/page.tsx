"use client";

import { motion } from "framer-motion";
import { ShieldCheck, ArrowRight, AlertTriangle, CheckCircle2, XCircle, Search, UserCheck, Edit } from "lucide-react";
import Link from "next/link";

export default function TrustButVerifyPage() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 }
  };

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-4">
            <ShieldCheck className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-4xl font-bold mb-4 text-foreground">Trust but Verify</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            AI is powerful, but not infallible. We actively monitor, verify, and correct AI outputs to ensure safety, accuracy, and fairness.
          </p>
        </div>

        {/* The Process */}
        <motion.div {...fadeIn} className="mb-20">
          <h2 className="text-2xl font-bold mb-8 text-center">Our Verification Process</h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center">
            <div className="bg-card border border-border p-6 rounded-2xl w-full md:w-1/4 shadow-sm">
              <span className="text-3xl mb-2 block">🤖</span>
              <h3 className="font-bold mb-1">AI Output</h3>
              <p className="text-xs text-muted-foreground">Initial suggestion generated</p>
            </div>
            <ArrowRight className="text-muted-foreground hidden md:block" />
            <div className="bg-card border border-border p-6 rounded-2xl w-full md:w-1/4 shadow-sm">
              <span className="text-3xl mb-2 block">🔍</span>
              <h3 className="font-bold mb-1">Verification</h3>
              <p className="text-xs text-muted-foreground">Error & bias detection</p>
            </div>
            <ArrowRight className="text-muted-foreground hidden md:block" />
            <div className="bg-primary text-primary-foreground p-6 rounded-2xl w-full md:w-1/4 shadow-md">
              <span className="text-3xl mb-2 block">👤</span>
              <h3 className="font-bold mb-1">Human Correction</h3>
              <p className="text-xs opacity-90">Final decision by staff</p>
            </div>
          </div>
        </motion.div>

        <hr className="border-border my-16" />

        {/* Errors Section */}
        <div className="mb-16">
          <motion.div {...fadeIn}>
            <h2 className="text-3xl font-bold mb-2 text-foreground">AI Errors in Practice</h2>
            <p className="text-muted-foreground mb-8">Below are real examples of errors our AI made during development, and how human verification caught them.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Example 1 */}
            <motion.div {...fadeIn} transition={{ delay: 0.1 }} className="bg-card border border-border rounded-3xl p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <AlertTriangle className="w-6 h-6 text-amber-500" />
                <h3 className="text-xl font-bold">Error Example 1</h3>
              </div>
              
              <div className="space-y-4">
                <div className="bg-muted p-4 rounded-xl">
                  <p className="text-sm font-bold text-foreground mb-1">The Scenario:</p>
                  <p className="text-sm text-muted-foreground">User requested a coffee and snack combo under ₹300.</p>
                </div>
                
                <div className="bg-destructive/10 border border-destructive/20 p-4 rounded-xl">
                  <p className="text-sm font-bold text-destructive mb-1">AI Output:</p>
                  <p className="text-sm text-destructive/80">AI recommended Iced Caramel Macchiato (₹220) + Truffle Croissant (₹190). Total: ₹410.</p>
                </div>
                
                <div className="bg-primary/10 border border-primary/20 p-4 rounded-xl">
                  <p className="text-sm font-bold text-primary mb-1">Verification & Correction:</p>
                  <p className="text-sm text-primary/80">Menu prices were manually calculated. The expensive combo was replaced with Classic Espresso (₹120) + Truffle Croissant (₹190) = ₹310.</p>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-border mt-4">
                  <span className="text-sm font-medium text-muted-foreground">Final Status:</span>
                  <span className="inline-flex items-center gap-1 px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-xs font-bold uppercase">
                    <Edit className="w-3 h-3" /> Revised
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Example 2 */}
            <motion.div {...fadeIn} transition={{ delay: 0.2 }} className="bg-card border border-border rounded-3xl p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <AlertTriangle className="w-6 h-6 text-amber-500" />
                <h3 className="text-xl font-bold">Error Example 2</h3>
              </div>
              
              <div className="space-y-4">
                <div className="bg-muted p-4 rounded-xl">
                  <p className="text-sm font-bold text-foreground mb-1">The Scenario:</p>
                  <p className="text-sm text-muted-foreground">User requested a dairy-free dessert option.</p>
                </div>
                
                <div className="bg-destructive/10 border border-destructive/20 p-4 rounded-xl">
                  <p className="text-sm font-bold text-destructive mb-1">AI Output:</p>
                  <p className="text-sm text-destructive/80">AI incorrectly classified the "Matcha Cheesecake" as dairy-free because matcha is a plant.</p>
                </div>
                
                <div className="bg-primary/10 border border-primary/20 p-4 rounded-xl">
                  <p className="text-sm font-bold text-primary mb-1">Verification & Correction:</p>
                  <p className="text-sm text-primary/80">Ingredients were checked against the menu database (contains cream cheese). The recommendation was removed entirely and an allergen warning was added.</p>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-border mt-4">
                  <span className="text-sm font-medium text-muted-foreground">Final Status:</span>
                  <span className="inline-flex items-center gap-1 px-3 py-1 bg-destructive/10 text-destructive rounded-full text-xs font-bold uppercase">
                    <XCircle className="w-3 h-3" /> Rejected
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bias Section */}
        <motion.div {...fadeIn} className="bg-accent border border-success/20 rounded-3xl p-8 lg:p-12 shadow-sm text-accent-foreground relative overflow-hidden">
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-4">
              <Search className="w-6 h-6 text-success-foreground" />
              <h2 className="text-2xl font-bold">Bias Identified & Corrected</h2>
            </div>
            <p className="mb-8 opacity-90 max-w-3xl text-lg">
              AI models often rely on statistical assumptions that can lead to stereotyping users. Here is how we caught and corrected a demographic bias.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-background/50 backdrop-blur p-6 rounded-2xl">
                <h4 className="font-bold mb-2 flex items-center gap-2">
                  <XCircle className="w-4 h-4 text-destructive" /> The Bias Assumption
                </h4>
                <p className="text-sm opacity-90">
                  During early testing, the AI system consistently assumed that if a user was identified as a "student", they primarily wanted the absolute cheapest products on the menu, completely ignoring taste, dietary requirements, and quality preferences.
                </p>
              </div>
              <div className="bg-background/80 backdrop-blur p-6 rounded-2xl border border-success/30">
                <h4 className="font-bold mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-success-foreground" /> Human Correction
                </h4>
                <p className="text-sm opacity-90">
                  Human review determined this was a harmful stereotype. Student preferences actually depend heavily on study duration, nutritional needs, and product quality. We rewrote the AI recommendation prompt logic to consider multiple contextual preferences instead of automatically defaulting to price as the primary factor.
                </p>
              </div>
            </div>
          </div>
          <UserCheck className="absolute -bottom-10 -right-10 w-64 h-64 text-success/10 pointer-events-none" />
        </motion.div>

        <div className="mt-16 text-center">
          <Link 
            href="/integrity-log" 
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-medium hover:bg-primary/90 transition-colors"
          >
            View Full AI Integrity Log <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </div>
  );
}
