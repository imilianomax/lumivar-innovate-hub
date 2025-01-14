"use client";
import React from "react";
import { cn } from "@/lib/utils";

interface TubelightNavbarProps extends React.HTMLAttributes<HTMLDivElement> {
  links: { label: string; href: string }[];
  activeSection: string;
}

export const TubelightNavbar = ({
  className,
  links,
  activeSection,
  ...props
}: TubelightNavbarProps) => {
  return (
    <div
      className={cn(
        "fixed left-1/2 top-4 z-50 flex -translate-x-1/2 items-center rounded-full border border-transparent bg-white/80 px-8 py-4 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] backdrop-blur-md dark:bg-gray-950/80",
        className
      )}
      {...props}
    >
      <div className="pointer-events-none absolute inset-x-2 top-[2px] h-8 rounded-full bg-gradient-to-b from-white/40 to-white/0 dark:from-gray-950/40" />
      <div className="relative flex items-center gap-4">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className={cn(
              "relative z-20 rounded-full px-3 py-1.5 text-sm font-medium text-gray-500 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50",
              {
                "text-gray-900 dark:text-gray-50": activeSection === link.label.toLowerCase(),
              }
            )}
          >
            {link.label}
            {activeSection === link.label.toLowerCase() && (
              <div className="absolute inset-0 -z-10 rounded-full bg-gray-100 dark:bg-gray-800" />
            )}
          </a>
        ))}
      </div>
    </div>
  );
};