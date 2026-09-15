"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Eye, UserCheck, Target, Scale, HeartHandshake, Lock } from "lucide-react";

export default function ResponsibleAIPage() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 }
  };

  const principles = [
    {
      title: "Privacy & Data Minimization",
      icon: <Lock className="w-8 h-8 text-primary" />,
      description: "No real personal data is required or collected for this demo. We only collect the minimum information necessary (like dietary preferences) for the current interaction and do not store it permanently."
    },
    {
      title: "Transparency",
      icon: <Eye className="w-8 h-8 text-primary" />,
      description: "Users are always informed when they are interacting with an AI. AI-generated suggestions are clearly labeled, and the 'Demo Mode' fallback is visibly indicated when active."
    },
    {
      title: "Human Oversight",
      icon: <UserCheck className="w-8 h-8 text-primary" />,
      description: "AI provides suggestions, but humans make the final decisions. Our system allows users to accept, modify, or reject AI recommendations and logs the reasons for human overrides."
    },
    {
      title: "Accuracy & Grounding",
      icon: <Target className="w-8 h-8 text-primary" />,
      description: "Our AI is strictly grounded in the official café menu dataset. It is prohibited from inventing menu items, hallucinating prices, or making unsupported health claims."
    },
    {
      title: "Bias Mitigation",
      icon: <Scale className="w-8 h-8 text-primary" />,
      description: "We actively monitor for and correct biases, such as assuming all students only want the cheapest items, to ensure our recommendations are fair and considerate of diverse preferences."
    },
    {
      title: "Safety First",
      icon: <HeartHandshake className="w-8 h-8 text-primary" />,
      description: "The AI is programmed to avoid providing medical, nutritional, or diagnostic advice. It explicitly warns users to confirm critical allergen information with staff."
    }
  ];

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-4">
            <ShieldCheck className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-4xl font-bold mb-4 text-foreground">Responsible AI Guidelines</h1>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
            At Lumina Café, we believe that AI should empower people, not replace their judgment. 
            Here are the ethical guardrails that govern our technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {principles.map((principle, idx) => (
            <motion.div 
              key={idx}
              {...fadeIn}
              transition={{ delay: idx * 0.1 }}
              className="bg-card p-8 rounded-3xl border border-border shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="p-3 bg-primary/10 rounded-2xl w-fit mb-6">
                {principle.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{principle.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {principle.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* AI Use Disclosure */}
        <motion.div {...fadeIn} className="bg-secondary p-8 lg:p-12 rounded-3xl border border-border">
          <h2 className="text-2xl font-bold mb-6">AI Use Disclosure</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <p className="text-muted-foreground mb-4">
                As part of this university project demonstration, Artificial Intelligence was used to assist with:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-foreground font-medium mb-6">
                <li>Brainstorming the café concept</li>
                <li>Developing menu recommendation logic</li>
                <li>Generating conversational chatbot responses</li>
                <li>Assisting with design ideation and code generation</li>
              </ul>
            </div>
            <div>
              <p className="text-muted-foreground mb-4">
                <strong>Crucially, we maintained human accountability:</strong>
              </p>
              <ul className="list-disc pl-5 space-y-2 text-foreground font-medium">
                <li>All AI outputs were reviewed by human team members.</li>
                <li>Important information (prices, allergens) was verified against a static dataset.</li>
                <li>AI suggestions were not automatically treated as correct.</li>
                <li>No real personal data was supplied to the AI models.</li>
              </ul>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
