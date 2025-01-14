import { motion } from "framer-motion";
import { AuroraBackground } from "@/components/ui/aurora-background";

export const Hero = () => {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          We Build. We Innovate.
        </h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-center"
        >
          At our core, we are builders. We turn bold ideas into transformative solutions through cutting-edge technology, rigorous execution, and a relentless focus on impact.
        </motion.p>
      </motion.div>
    </AuroraBackground>
  );
};