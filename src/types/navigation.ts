import { LucideIcon } from "lucide-react";

export interface NavItem {
  name: string;
  url: string;
  icon: LucideIcon;
  onClick: () => void;
  isActive: boolean;
}