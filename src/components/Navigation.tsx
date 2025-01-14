import { useState, useEffect } from "react";
import { Menu, X, Home, FileText, Briefcase } from "lucide-react";
import { NavBar } from "@/components/ui/tubelight-navbar";
import LumivarLogo from "@/components/ui/LumivarLogo";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);

    // Set up intersection observer for each section
    const observer = new IntersectionObserver(
      (entries) => {
        // Filter for sections that are intersecting
        const visibleSections = entries.filter(entry => entry.isIntersecting);
        
        if (visibleSections.length > 0) {
          // Get the first visible section from top
          const topSection = visibleSections.reduce((top, current) => {
            const topRect = document.getElementById(top.target.id)?.getBoundingClientRect();
            const currentRect = current.target.getBoundingClientRect();
            
            if (!topRect) return current;
            return currentRect.top < topRect.top ? current : top;
          });
          
          setActiveSection(topSection.target.id);
        } else if (window.scrollY === 0) {
          // If we're at the top of the page, set to home
          setActiveSection("home");
        }
      },
      {
        rootMargin: "-45% 0px -45% 0px", // Adjusted margin to better detect sections
        threshold: [0, 0.1, 0.5, 1] // Multiple thresholds for better detection
      }
    );

    // Observe all sections
    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    // Set initial active section to home
    setActiveSection("home");

    return () => {
      window.removeEventListener("scroll", handleScroll);
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const handleNavClick = (url: string) => {
    const element = document.querySelector(url);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const navItems = [
    { 
      name: "Home", 
      url: "#home", 
      icon: Home,
      onClick: () => handleNavClick("#home"),
      isActive: activeSection === "home"
    },
    { 
      name: "What We Do", 
      url: "#what-we-do", 
      icon: FileText,
      onClick: () => handleNavClick("#what-we-do"),
      isActive: activeSection === "what-we-do"
    },
    { 
      name: "Process", 
      url: "#process", 
      icon: FileText,
      onClick: () => handleNavClick("#process"),
      isActive: activeSection === "process"
    },
    { 
      name: "Contact", 
      url: "#contact", 
      icon: Briefcase,
      onClick: () => handleNavClick("#contact"),
      isActive: activeSection === "contact"
    },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-sm shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <a 
            href="#home" 
            className="flex items-center gap-2 text-2xl font-bold text-primary"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#home");
            }}
          >
            <LumivarLogo />
            Lumivar
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <NavBar items={navItems} />
          </div>

          {/* Mobile Navigation Button */}
          <button
            className="md:hidden text-gray-600"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden">
            <NavBar items={navItems} className="static transform-none mb-0 mt-4" />
          </div>
        )}
      </div>
    </nav>
  );
};