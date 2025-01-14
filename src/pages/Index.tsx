import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { WhatWeDo } from "@/components/WhatWeDo";
import { Process } from "@/components/Process";
import { Trust } from "@/components/Trust";
import { ContactForm } from "@/components/ContactForm";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <WhatWeDo />
      <Process />
      <Trust />
      <ContactForm />
    </div>
  );
};

export default Index;