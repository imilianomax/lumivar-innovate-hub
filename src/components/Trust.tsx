import { motion } from "framer-motion";

export const Trust = () => {
  return (
    <section className="h-screen flex items-center bg-white" id="trust">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Built on Trust and Impact</h2>
          <p className="text-lg text-gray-600">
            With a foundation of technical expertise and strategic insight, we approach every challenge with creativity, precision, and purpose. Our mission is simple: to create products that solve real problems and deliver lasting value.
          </p>
        </motion.div>
      </div>
    </section>
  );
};