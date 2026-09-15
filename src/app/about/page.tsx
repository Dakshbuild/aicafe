"use client";

import { motion } from "framer-motion";
import { Users, Leaf, Cpu, BrainCircuit } from "lucide-react";
import Link from "next/link";

export default function About() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Story</h1>
          <p className="text-xl opacity-90 text-balance">
            Brewing connection, sustainability, and smart technology for the modern university campus.
          </p>
        </div>
      </section>

      {/* Story & Vision */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeIn}>
              <h2 className="text-3xl font-bold mb-6">The Lumina Vision</h2>
              <p className="text-muted-foreground mb-4">
                Lumina Café was born out of a simple observation: university students and faculty need a space that adapts to their fast-paced, diverse lifestyles. 
              </p>
              <p className="text-muted-foreground mb-4">
                Whether you're rushing to an 8 AM lecture, settling in for a 4-hour study session, or meeting peers for a group project, your café experience should be seamless. 
              </p>
              <p className="text-muted-foreground">
                We set out to create a premium environment that pairs ethically sourced coffee with an intelligent, AI-powered system designed to respect your time, budget, and dietary needs.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="aspect-[4/3] rounded-3xl overflow-hidden shadow-xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1521017430205-959c90226388?w=800&q=80" 
                alt="Students studying in cafe" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Core Pillars</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div {...fadeIn} className="bg-card p-8 rounded-2xl shadow-sm border border-border">
              <Users className="w-10 h-10 text-primary mb-6" />
              <h3 className="text-xl font-bold mb-3">Student-Focused</h3>
              <p className="text-muted-foreground">
                Designed specifically for the campus community. We offer affordable options, abundant power outlets, and an atmosphere conducive to both deep work and relaxation.
              </p>
            </motion.div>
            
            <motion.div {...fadeIn} transition={{ delay: 0.2 }} className="bg-card p-8 rounded-2xl shadow-sm border border-border">
              <Leaf className="w-10 h-10 text-success-foreground mb-6" />
              <h3 className="text-xl font-bold mb-3">Sustainable</h3>
              <p className="text-muted-foreground">
                Committed to minimizing our footprint. From biodegradable packaging to AI-driven inventory management that actively reduces food waste.
              </p>
            </motion.div>
            
            <motion.div {...fadeIn} transition={{ delay: 0.4 }} className="bg-card p-8 rounded-2xl shadow-sm border border-border">
              <Cpu className="w-10 h-10 text-primary mb-6" />
              <h3 className="text-xl font-bold mb-3">Smart Technology</h3>
              <p className="text-muted-foreground">
                Integrating AI thoughtfully to help you discover new favorites, stay within your budget, and safely navigate dietary restrictions.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Space Gallery */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Space</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Aesthetically designed to inspire creativity, foster deep work, and provide a welcoming sanctuary on campus.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <motion.div {...fadeIn} transition={{ delay: 0.1 }} className="col-span-1 md:col-span-2 aspect-video rounded-2xl overflow-hidden shadow-sm">
              <img src="https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=1200&q=80" alt="Aesthetic Cafe Interior" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </motion.div>
            <motion.div {...fadeIn} transition={{ delay: 0.2 }} className="aspect-square md:aspect-auto rounded-2xl overflow-hidden shadow-sm">
              <img src="https://images.unsplash.com/photo-1445116572660-236099ec97a0?w=800&q=80" alt="Pour over coffee" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </motion.div>
            <motion.div {...fadeIn} transition={{ delay: 0.3 }} className="aspect-square md:aspect-auto rounded-2xl overflow-hidden shadow-sm">
              <img src="https://images.unsplash.com/photo-1495474472207-464a4b11f0cc?w=800&q=80" alt="Barista preparing coffee" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </motion.div>
            <motion.div {...fadeIn} transition={{ delay: 0.4 }} className="col-span-1 md:col-span-2 aspect-video rounded-2xl overflow-hidden shadow-sm">
              <img src="https://images.unsplash.com/photo-1498804103079-a6351b050096?w=1200&q=80" alt="Cafe seating area" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* AI Assists, Humans Decide */}
      <section className="py-24 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div {...fadeIn}>
            <div className="inline-flex items-center justify-center p-4 bg-primary/10 rounded-full mb-6">
              <BrainCircuit className="w-12 h-12 text-primary" />
            </div>
            <h2 className="text-4xl font-bold mb-8">AI Assists. Humans Decide.</h2>
            
            <div className="prose prose-lg mx-auto text-muted-foreground mb-10 text-left">
              <p>
                At Lumina Café, we believe Artificial Intelligence is a powerful tool, not a replacement for human judgment. We use AI to provide personalized menu recommendations based on your preferences, budget, and dietary needs.
              </p>
              <p>
                However, <strong>you remain in control</strong>. AI recommendations are purely suggestions. Every user has the ability to review, modify, or reject what the AI proposes.
              </p>
              <p>
                Our system is built on a framework of transparency. We actively log when AI makes errors, identify underlying biases, and correct them. We invite you to explore our Trust but Verify methodology to see exactly how we keep our AI accountable.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/trust-but-verify" 
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors"
              >
                Explore Trust but Verify
              </Link>
              <Link 
                href="/integrity-log" 
                className="inline-flex items-center justify-center px-6 py-3 bg-muted text-foreground border border-border rounded-full font-medium hover:bg-muted/80 transition-colors"
              >
                View AI Integrity Log
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
