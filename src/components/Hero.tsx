import { motion } from "framer-motion";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { RainbowButton } from "@/components/ui/rainbow-button";

export const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-[#6366F1]">
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8"
        >
          <RainbowButton onClick={scrollToContact}>
            Get in Touch
          </RainbowButton>
        </motion.div>
      </motion.div>
    </AuroraBackground>
  );
};