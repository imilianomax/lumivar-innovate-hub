import { Search, Palette, Rocket } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    icon: Search,
    title: "Discover",
    description: "We dive deep into industries, identify pain points, and define opportunities.",
  },
  {
    icon: Palette,
    title: "Design",
    description: "Leveraging AI and user-centered design, we create practical, future-ready solutions.",
  },
  {
    icon: Rocket,
    title: "Deploy",
    description: "From MVPs to market-ready products, we turn visions into reality.",
  },
];

export const Process = () => {
  return (
    <section className="h-screen flex items-center bg-gradient-to-br from-primary/5 to-secondary/5" id="process">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Process</h2>
        </motion.div>

        <div className="relative grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative z-10"
            >
              <div className="bg-white dark:bg-zinc-900 p-6 rounded-lg shadow-lg">
                <step.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center text-lg font-medium mt-12"
        >
          We don't just imagine the future – we build it.
        </motion.p>
      </div>
    </section>
  );
};