import { motion } from "framer-motion";
import { MorphingText } from "@/components/ui/morphing-text";

const values = ["Trust", "Impact", "Collaboration", "Integrity", "Respect"];

export const Trust = () => {
  return (
    <section className="bg-white dark:bg-black py-24 md:py-32" id="trust">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center gap-4 text-2xl md:text-4xl font-bold"
        >
          <span>Built on</span>
          <MorphingText 
            texts={values} 
            className="!h-12 !text-[2rem] md:!text-[4rem] md:!h-20 !max-w-[500px]" 
          />
        </motion.div>
        
        <div className="mt-6 md:mt-10">
          <p className="text-base md:text-lg text-center text-gray-600 dark:text-gray-300 max-w-2xl mx-auto px-4 leading-relaxed">
            We believe in the power of collaboration and integrity. Our mission is to create lasting relationships built on trust and mutual respect.
          </p>
        </div>
      </div>
    </section>
  );
};