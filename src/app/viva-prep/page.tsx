"use client";

import { motion } from "framer-motion";
import { BookOpen, Target, BrainCircuit, Code, Lightbulb, ShieldCheck } from "lucide-react";
import Link from "next/link";

export default function VivaPrepPage() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 }
  };

  const qaList = [
    {
      question: "What is the core objective of this project?",
      answer: "The core objective is to design a modern, AI-powered café web application ('Lumina Café') that demonstrates how AI can enhance customer experience (via smart recommendations) while strictly adhering to Responsible AI principles like 'Trust but Verify' and maintaining human oversight.",
      icon: <Target className="w-6 h-6 text-primary" />
    },
    {
      question: "How is AI integrated into the application?",
      answer: "AI is integrated through a Service Layer (using Google GenAI/Gemini). It powers the 'Smart Recommendations' feature where users input their budget, dietary preferences, and mood to get personalized suggestions. It also powers the floating chatbot. A demo fallback is implemented in case the API key is absent.",
      icon: <BrainCircuit className="w-6 h-6 text-primary" />
    },
    {
      question: "What is the 'Trust but Verify' principle demonstrated here?",
      answer: "We showcase 'Trust but Verify' by ensuring the AI's recommendations are transparent. The AI explains *why* it recommended an item, and users (or staff) have the final say. We don't blindly trust the AI with critical things like allergy safety—the UI explicitly adds disclaimers to check with human staff.",
      icon: <ShieldCheck className="w-6 h-6 text-primary" />
    },
    {
      question: "Which technologies were used to build this?",
      answer: "The application is built using Next.js (React framework) for the frontend and routing, Tailwind CSS for styling, Framer Motion for animations, and Lucide React for iconography. The AI integration uses the @google/genai SDK.",
      icon: <Code className="w-6 h-6 text-primary" />
    },
    {
      question: "How does the app handle AI hallucinations or errors?",
      answer: "We use strict system instructions (prompt engineering) to ground the AI strictly to the provided menu data. If the API fails or is unavailable, the application gracefully degrades to a 'Demo Fallback' mode that uses rule-based filtering instead of crashing.",
      icon: <Lightbulb className="w-6 h-6 text-primary" />
    }
  ];

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-4">
            <BookOpen className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-4xl font-bold mb-4 text-foreground">Viva Preparation Guide</h1>
          <p className="text-muted-foreground text-lg">
            Key questions and technical talking points for the project defense.
          </p>
        </div>

        <div className="space-y-8">
          {qaList.map((item, idx) => (
            <motion.div 
              key={idx}
              {...fadeIn}
              transition={{ delay: idx * 0.1 }}
              className="bg-card p-6 md:p-8 rounded-3xl border border-border shadow-sm"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-xl mt-1 shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">{item.question}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link href="/presentation" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors shadow-sm">
            Go to Presentation Mode
          </Link>
        </div>

      </div>
    </div>
  );
}
