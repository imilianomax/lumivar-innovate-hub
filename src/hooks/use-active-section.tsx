import { useState, useEffect } from "react";

export const useActiveSection = () => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries.filter(entry => entry.isIntersecting);
        
        if (visibleSections.length > 0) {
          const topSection = visibleSections.reduce((top, current) => {
            const topRect = document.getElementById(top.target.id)?.getBoundingClientRect();
            const currentRect = current.target.getBoundingClientRect();
            
            if (!topRect) return current;
            return currentRect.top < topRect.top ? current : top;
          });
          
          setActiveSection(topSection.target.id);
        } else if (window.scrollY === 0) {
          setActiveSection("home");
        }
      },
      {
        rootMargin: "-45% 0px -45% 0px",
        threshold: [0, 0.1, 0.5, 1]
      }
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));
    setActiveSection("home");

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return activeSection;
};