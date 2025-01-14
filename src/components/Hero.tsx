import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="w-full bg-background relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative flex flex-col gap-4 items-center justify-center min-h-[calc(100vh-4rem)] px-4 pt-16"
        id="home"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-[#6366F1]">
          We Build. We Innovate.
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground text-center max-w-2xl">
          Transform your ideas into reality with our expert development team.
        </p>
        <Button
          onClick={scrollToContact}
          size="lg"
          className="mt-8"
        >
          Get in Touch
        </Button>
      </motion.div>
    </section>
  );
};