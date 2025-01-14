import { Lightbulb, Target, Rocket } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Lightbulb,
    title: "Proven Expertise",
    description: "Years of experience in launching transformative ventures.",
  },
  {
    icon: Target,
    title: "Execution-Focused",
    description: "From ideation to delivery, we bring ideas to life.",
  },
  {
    icon: Rocket,
    title: "Innovation-Driven",
    description: "Leveraging the latest technologies to drive meaningful change.",
  },
];

export const WhatWeDo = () => {
  return (
    <section className="h-screen flex items-center bg-white" id="what-we-do">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What We Do</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We specialize in identifying opportunities, solving complex challenges, and creating scalable solutions. Our proven track record demonstrates our ability to deliver results across diverse industries.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="p-6 rounded-lg bg-gradient-to-br from-primary/5 to-secondary/5 hover:shadow-lg transition-shadow"
            >
              <feature.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};