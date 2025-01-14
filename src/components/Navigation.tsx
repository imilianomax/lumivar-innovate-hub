import { useState, useEffect } from "react";
import { Home, FileText, Briefcase } from "lucide-react";
import { TubelightNavbar } from "@/components/ui/tubelight-navbar";
import LumivarLogo from "@/components/ui/LumivarLogo";
import { MobileMenu } from "./MobileMenu";
import { useActiveSection } from "@/hooks/use-active-section";
import type { NavItem } from "@/types/navigation";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const activeSection = useActiveSection();

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

  const navLinks = [
    { 
      label: "Home", 
      href: "#home"
    },
    { 
      label: "What We Do", 
      href: "#what-we-do"
    },
    { 
      label: "Process", 
      href: "#process"
    },
    { 
      label: "Contact", 
      href: "#contact"
    },
  ];

  const navItems: NavItem[] = [
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

          <div className="hidden md:block">
            <TubelightNavbar 
              links={navLinks} 
              activeSection={activeSection} 
              className="static transform-none"
            />
          </div>

          <MobileMenu 
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            navItems={navItems}
          />
        </div>
      </div>
    </nav>
  );
};