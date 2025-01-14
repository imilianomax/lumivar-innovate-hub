import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section className="min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="container px-4 py-16 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
        >
          We Build. We Innovate.
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto"
        >
          At our core, we are builders. We turn bold ideas into transformative solutions through cutting-edge technology, rigorous execution, and a relentless focus on impact.
        </motion.p>
      </div>
    </section>
  );
};