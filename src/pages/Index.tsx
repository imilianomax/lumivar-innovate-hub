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
        <div className="absolute inset-0 pointer-events-none">
          <OrbEffect className="translate-y-[30%]" />
        </div>
        <div className="relative z-10 bg-background/80 backdrop-blur-sm rounded-lg mx-4 md:mx-auto max-w-4xl p-8 shadow-lg">
          <ContactForm />
        </div>
      </div>
      <div className="relative mt-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/10" />
        <svg
          className="absolute bottom-0 w-full h-48 text-background"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="currentColor"
            d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,224C672,213,768,171,864,149.3C960,128,1056,128,1152,133.3C1248,139,1344,149,1392,154.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
        <div className="container mx-auto text-center pb-8">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Lumivar. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;