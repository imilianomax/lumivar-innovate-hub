import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { WhatWeDo } from "@/components/WhatWeDo";
import { Process } from "@/components/Process";
import { Trust } from "@/components/Trust";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { OrbEffect } from "@/components/ui/orb-effect";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <WhatWeDo />
      <Process />
      <Trust />
      <div className="relative">
        <ContactForm />
        <div className="absolute inset-0 top-[400px] pointer-events-none">
          <OrbEffect />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Index;