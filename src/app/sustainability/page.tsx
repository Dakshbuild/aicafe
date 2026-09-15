"use client";

import { motion } from "framer-motion";
import { Leaf, Recycle, Droplets, BatteryCharging, Coffee, LineChart } from "lucide-react";

export default function SustainabilityPage() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 }
  };

  const initiatives = [
    {
      title: "Waste Reduction & Reusable Cups",
      icon: <Recycle className="w-8 h-8 text-success-foreground" />,
      description: "We encourage the use of reusable cups by offering a 10% discount on beverages. All our takeaway packaging, including cups, lids, and straws, is 100% compostable."
    },
    {
      title: "AI Food Waste Monitoring",
      icon: <LineChart className="w-8 h-8 text-success-foreground" />,
      description: "We utilize predictive AI models to forecast daily demand for baked goods and fresh food, significantly reducing overproduction and daily food waste."
    },
    {
      title: "Responsible Sourcing",
      icon: <Coffee className="w-8 h-8 text-success-foreground" />,
      description: "Our coffee beans are 100% Fairtrade certified and sourced directly from cooperatives that practice shade-grown, bird-friendly agriculture."
    },
    {
      title: "Energy-Efficient Equipment",
      icon: <BatteryCharging className="w-8 h-8 text-success-foreground" />,
      description: "Our espresso machines and refrigerators use smart energy management systems that power down during off-peak hours to conserve electricity."
    },
    {
      title: "Water Conservation",
      icon: <Droplets className="w-8 h-8 text-success-foreground" />,
      description: "We use specialized water filtration systems that minimize wastewater, and our dishwashing facilities use low-flow technology."
    },
    {
      title: "Digital Receipts",
      icon: <Leaf className="w-8 h-8 text-success-foreground" />,
      description: "We operate a paperless POS system. Receipts are emailed or texted only upon request, saving thousands of feet of thermal paper monthly."
    }
  ];

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-success/20 rounded-full mb-4">
            <Leaf className="w-8 h-8 text-success-foreground" />
          </div>
          <h1 className="text-4xl font-bold mb-4 text-foreground">Sustainability at Lumina</h1>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
            Technology and ecology working together. We are committed to minimizing our environmental impact through smart practices and ethical sourcing.
          </p>
        </div>

        {/* Note about Sample Data */}
        <div className="bg-muted p-4 rounded-xl text-center mb-12 max-w-2xl mx-auto text-sm text-muted-foreground">
          <strong>Note:</strong> The environmental initiatives listed here represent the planned operational guidelines for the Lumina Café project.
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {initiatives.map((initiative, idx) => (
            <motion.div 
              key={idx}
              {...fadeIn}
              transition={{ delay: idx * 0.1 }}
              className="bg-card p-8 rounded-3xl border border-border shadow-sm hover:shadow-md transition-shadow group"
            >
              <div className="p-4 bg-success/10 rounded-2xl w-fit mb-6 group-hover:scale-110 transition-transform">
                {initiative.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{initiative.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {initiative.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
