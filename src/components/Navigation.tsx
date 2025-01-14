import { useState, useEffect } from "react";
import { Menu, X, Home, FileText, Briefcase } from "lucide-react";
import { NavBar } from "@/components/ui/tubelight-navbar";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
      onClick: () => handleNavClick("#home")
    },
    { 
      name: "What We Do", 
      url: "#what-we-do", 
      icon: FileText,
      onClick: () => handleNavClick("#what-we-do")
    },
    { 
      name: "Process", 
      url: "#process", 
      icon: FileText,
      onClick: () => handleNavClick("#process")
    },
    { 
      name: "Contact", 
      url: "#contact", 
      icon: Briefcase,
      onClick: () => handleNavClick("#contact")
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
            className="text-2xl font-bold text-primary"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#home");
            }}
          >
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