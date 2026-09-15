"use client";

import { motion } from "framer-motion";
import { Users, User, Code, Palette, BrainCircuit, LineChart, ShieldCheck } from "lucide-react";

export default function TeamPage() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 }
  };

  const team = [
    { name: "[Student Name 1]", role: "Project Lead", contribution: "Architecture & Integration", icon: <Code /> },
    { name: "[Student Name 2]", role: "UI/UX Designer", contribution: "Design System & CSS", icon: <Palette /> },
    { name: "[Student Name 3]", role: "AI Engineer", prompt: "Prompt Eng. & Guardrails", icon: <BrainCircuit /> },
    { name: "[Student Name 4]", role: "Data Ethicist", contribution: "Responsible AI & Logs", icon: <ShieldCheck /> },
    { name: "[Student Name 5]", role: "Frontend Dev", contribution: "React Components", icon: <User /> },
    { name: "[Student Name 6]", role: "QA & Testing", contribution: "Verification & Dashboard", icon: <LineChart /> },
  ];

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-4">
            <Users className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-4xl font-bold mb-4 text-foreground">Project Team</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            The UPES student team behind the Designing a Café with AI project.
          </p>
        </div>

        <div className="bg-amber-100 text-amber-800 p-4 rounded-xl text-center mb-12 max-w-3xl mx-auto text-sm font-medium border border-amber-200">
          Editable Placeholders: Please update this page with real team names and specific contributions before the final submission. Do not use sensitive personal information (like phone numbers or student IDs).
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, idx) => (
            <motion.div 
              key={idx}
              {...fadeIn}
              transition={{ delay: idx * 0.1 }}
              className="bg-card p-8 rounded-3xl border border-border shadow-sm text-center hover:shadow-md transition-shadow"
            >
              <div className="w-20 h-20 mx-auto bg-muted rounded-full flex items-center justify-center text-muted-foreground mb-4 border border-border">
                {member.icon}
              </div>
              <h3 className="text-xl font-bold mb-1">{member.name}</h3>
              <p className="text-primary font-medium text-sm mb-4">{member.role}</p>
              <div className="bg-muted px-4 py-2 rounded-lg inline-block text-xs font-semibold text-muted-foreground">
                {member.contribution || member.prompt}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
