import { Menu, X } from "lucide-react";
import { NavBar } from "@/components/ui/tubelight-navbar";
import { NavItem } from "@/types/navigation";

interface MobileMenuProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  navItems: NavItem[];
}

export const MobileMenu = ({ isOpen, setIsOpen, navItems }: MobileMenuProps) => {
  return (
    <>
      <button
        className="md:hidden text-gray-600"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X /> : <Menu />}
      </button>

      {isOpen && (
        <div className="md:hidden">
          <NavBar items={navItems} className="static transform-none mb-0 mt-4" />
        </div>
      )}
    </>
  );
};