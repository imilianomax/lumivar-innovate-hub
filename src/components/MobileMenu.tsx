import { Menu, X } from "lucide-react";
import { TubelightNavbar } from "@/components/ui/tubelight-navbar";
import { NavItem } from "@/types/navigation";

interface MobileMenuProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  navItems: NavItem[];
}

export const MobileMenu = ({ isOpen, setIsOpen, navItems }: MobileMenuProps) => {
  const mobileLinks = navItems.map(item => ({
    label: item.name,
    href: item.url
  }));

  return (
    <>
      <button
        className="md:hidden text-gray-600"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X /> : <Menu />}
      </button>

      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white/90 backdrop-blur-md shadow-lg">
          <TubelightNavbar 
            links={mobileLinks} 
            activeSection={navItems.find(item => item.isActive)?.name.toLowerCase() || ''} 
            className="static transform-none mb-4 mt-4"
          />
        </div>
      )}
    </>
  );
};