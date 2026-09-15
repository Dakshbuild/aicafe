"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, Sparkles, Coffee, ShieldCheck } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Scene 1: Hero Text Reveal
      gsap.from(".hero-text", {
        y: 100,
        opacity: 0,
        duration: 1.5,
        stagger: 0.2,
        ease: "power4.out",
        delay: 0.5
      });

      // Scene 2: Image Parallax & Reveal
      gsap.utils.toArray(".reveal-section").forEach((section: any) => {
        gsap.from(section.querySelectorAll(".reveal-element"), {
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
          y: 50,
          opacity: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out"
        });
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="flex flex-col min-h-screen bg-transparent overflow-x-hidden">
      
      {/* SCENE 1: Hero */}
      <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=1600&q=80" 
            alt="Premium Espresso" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
        </div>
        
        <div className="relative z-10 text-center px-4">
          <h2 className="hero-text text-sm md:text-base font-sans tracking-[0.3em] uppercase text-primary mb-6">
            Lumina Café
          </h2>
          <h1 className="hero-text text-6xl md:text-8xl lg:text-9xl font-serif font-bold text-foreground leading-[0.9] tracking-tighter mb-8">
            Coffee.<br/>
            <span className="italic text-primary">Intelligence.</span><br/>
            Experience.
          </h1>
          <p className="hero-text text-lg md:text-2xl text-muted-foreground font-sans max-w-2xl mx-auto mb-12">
            A smarter café experience, designed around you.
          </p>
          <div className="hero-text flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/menu" className="px-8 py-4 bg-primary text-primary-foreground font-sans font-medium uppercase tracking-wider text-sm hover:bg-primary/90 transition-colors">
              Explore the Café
            </Link>
            <Link href="/recommendations" className="px-8 py-4 glass text-foreground font-sans font-medium uppercase tracking-wider text-sm hover:bg-white/10 transition-colors">
              Ask Café AI
            </Link>
          </div>
        </div>
      </section>

      {/* SCENE 2: The Craft */}
      <section className="reveal-section relative py-32 md:py-48 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 reveal-element">
            <h2 className="text-5xl md:text-7xl font-serif font-bold mb-8 leading-tight">
              More<br/>Than Coffee.
            </h2>
            <p className="text-xl text-muted-foreground font-sans leading-relaxed mb-8">
              We source the finest beans globally and roast them locally. But perfect extraction is only half the story. The atmosphere, the service, and the intelligence behind every recommendation create a symphony of taste.
            </p>
            <Link href="/about" className="inline-flex items-center gap-2 text-primary font-sans font-medium uppercase tracking-wider text-sm hover:opacity-80 transition-opacity">
              Discover Our Story <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="order-1 lg:order-2 reveal-element h-[60vh] w-full overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1511920170033-f8396924c348?w=1200&q=80" 
              alt="Pouring Coffee" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* SCENE 3: Space & AI Intro */}
      <section className="reveal-section relative py-32 md:py-48 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <Coffee className="w-12 h-12 mx-auto text-primary mb-8 reveal-element" />
          <h2 className="text-5xl md:text-7xl font-serif font-bold mb-8 reveal-element leading-tight">
            Tradition Meets<br/>Intelligence.
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground font-sans mb-16 reveal-element">
            Step into a space where classic barista craftsmanship is elevated by a discreet, highly personalized AI assistant.
          </p>
          
          <div className="relative aspect-video w-full overflow-hidden reveal-element">
            <img 
              src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1600&q=80" 
              alt="Modern Cafe Interior" 
              className="w-full h-full object-cover"
            />
            {/* AI Glass Overlay transition */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent flex items-end justify-center pb-12">
               <div className="glass px-8 py-6 max-w-lg w-full text-left reveal-element border-l-2 border-l-primary">
                 <p className="text-sm font-sans text-primary mb-2 uppercase tracking-widest">Café AI</p>
                 <p className="text-lg font-serif">"Good afternoon. The weather is crisp today. Shall I recommend a warm Cortado?"</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* SCENE 5: Verification (Trust but Verify) */}
      <section className="reveal-section py-32 md:py-48 bg-black/40 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
             <div className="reveal-element">
               <ShieldCheck className="w-12 h-12 text-primary mb-6" />
               <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6">AI Suggests.<br/>You Decide.</h2>
               <p className="text-lg text-muted-foreground font-sans mb-8">
                 We believe in Responsible AI. Our intelligence engine proposes the perfect pairings based on your budget and taste, but the final choice always remains yours. Our open Integrity Log ensures complete transparency.
               </p>
               <Link href="/trust-but-verify" className="inline-flex items-center gap-2 text-primary font-sans font-medium uppercase tracking-wider text-sm hover:opacity-80 transition-opacity">
                 Learn about our AI Ethics <ArrowRight className="w-4 h-4" />
               </Link>
             </div>
             <div className="reveal-element space-y-6">
                <div className="glass p-6">
                  <div className="flex justify-between mb-2">
                    <span className="font-serif text-xl">Matcha Latte</span>
                    <span className="text-primary font-sans">₹180</span>
                  </div>
                  <p className="text-sm text-muted-foreground font-sans">AI Reasoning: Fits your dairy-free preference and current budget.</p>
                </div>
                <div className="glass p-6 border-l-4 border-destructive opacity-50">
                  <div className="flex justify-between mb-2">
                    <span className="font-serif text-xl line-through">Caramel Macchiato</span>
                    <span className="text-destructive font-sans">₹220</span>
                  </div>
                  <p className="text-sm text-muted-foreground font-sans">Filtered: Contains Dairy.</p>
                </div>
             </div>
           </div>
        </div>
      </section>

      {/* SCENE 6: CTA */}
      <section className="relative h-[80vh] flex items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?w=1600&q=80" 
            alt="Coffee Beans" 
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative z-10 reveal-section px-4">
          <h2 className="reveal-element text-5xl md:text-8xl font-serif font-bold mb-8">
            Experience the Future<br/>of Café Culture.
          </h2>
          <div className="reveal-element">
            <Link href="/recommendations" className="px-10 py-5 bg-primary text-primary-foreground font-sans font-bold uppercase tracking-widest text-sm hover:bg-primary/90 transition-colors">
              Start Your Order
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
