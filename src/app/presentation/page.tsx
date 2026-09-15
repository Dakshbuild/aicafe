"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Presentation, MonitorPlay, BrainCircuit, ShieldCheck, FileText, CheckCircle2, UserCheck, Briefcase, HelpCircle } from "lucide-react";

export default function PresentationModePage() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const item = {
    hidden: { opacity: 0, scale: 0.95 },
    show: { opacity: 1, scale: 1 }
  };

  const slides = [
    { title: "1. The Challenge & Vision", desc: "Why we built Lumina Café", href: "/about", icon: <Presentation /> },
    { title: "2. Live Website (Home)", desc: "The main user experience", href: "/", icon: <MonitorPlay /> },
    { title: "3. Digital Menu & Cart", desc: "Standard eCommerce flow", href: "/menu", icon: <CheckCircle2 /> },
    { title: "4. Smart Recommendations", desc: "AI curation based on preferences", href: "/recommendations", icon: <BrainCircuit /> },
    { title: "5. Trust but Verify", desc: "How we keep AI accountable", href: "/trust-but-verify", icon: <ShieldCheck /> },
    { title: "6. AI Integrity Log", desc: "Transparent logging of AI usage", href: "/integrity-log", icon: <FileText /> },
    { title: "7. Responsible AI", desc: "Privacy & Ethics guardrails", href: "/responsible-ai", icon: <UserCheck /> },
    { title: "8. Admin Dashboard", desc: "Performance & AI Monitor", href: "/dashboard", icon: <Briefcase /> },
    { title: "9. Viva Preparation", desc: "Q&A and technical defense", href: "/viva-prep", icon: <HelpCircle /> },
  ];

  return (
    <div className="min-h-screen bg-primary py-12 text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">Project Presentation Mode</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            UPES AI Course Project: Designing a Café with AI — The Café Website
          </p>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {slides.map((slide, idx) => (
            <motion.div key={idx} variants={item}>
              <Link 
                href={slide.href}
                className="group flex flex-col h-full bg-background text-foreground p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all hover:scale-[1.02] border-2 border-transparent hover:border-primary/50"
              >
                <div className="p-4 bg-muted rounded-2xl w-fit mb-6 group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                  {slide.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3">{slide.title}</h3>
                <p className="text-muted-foreground mb-8 flex-grow">{slide.desc}</p>
                <div className="flex justify-end mt-auto">
                  <div className="p-3 bg-muted rounded-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-20 text-center">
          <p className="opacity-70 text-sm">Use this mode to quickly navigate through the required components during the live demo.</p>
        </div>

      </div>
    </div>
  );
}
