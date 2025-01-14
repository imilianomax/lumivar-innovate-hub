import { motion } from "framer-motion";
import { Highlight } from "@/components/ui/hero-highlight";

export const Trust = () => {
  return (
    <section className="bg-white dark:bg-black py-16" id="trust">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-6 text-center"
        >
          Built on <Highlight>Trust and Impact</Highlight>
        </motion.h2>
        
        <div className="mt-10">
          <p className="text-lg text-center text-gray-600 dark:text-gray-300">
            We believe in the power of collaboration and integrity. Our mission is to create lasting relationships built on trust and mutual respect.
          </p>
        </div>
      </div>
    </section>
  );
};