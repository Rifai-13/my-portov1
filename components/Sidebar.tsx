"use client";
import React, { useState, useEffect } from "react";
import { 
    IconHome, 
    IconUser, 
    IconBriefcase, 
    IconTools, 
    IconStack, 
    IconMail 
} from "@tabler/icons-react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";

export function Sidebar() {
  const [active, setActive] = useState("home");
  
  const navItems = [
    { id: "home", label: "Home", icon: <IconHome size={24} />, href: "#home" },
    { id: "about", label: "About", icon: <IconUser size={24} />, href: "#about" },
    { id: "experience", label: "Experience", icon: <IconBriefcase size={24} />, href: "#experience" },
    { id: "skills", label: "Skills", icon: <IconTools size={24} />, href: "#skills" },
    { id: "projects", label: "Projects", icon: <IconStack size={24} />, href: "#projects" },
    { id: "contact", label: "Contact", icon: <IconMail size={24} />, href: "#contact" },
  ];

  // ScrollSpy Logic with IntersectionObserver
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -35% 0px", // Adjust active zone
      threshold: 0.1
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActive(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    navItems.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [navItems]);

  return (
    <>
      {/* Desktop Floating Sidebar */}
      <div className="hidden md:flex fixed left-4 top-1/2 -translate-y-1/2 z-50 flex-col gap-4">
        <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="flex flex-col items-center gap-3 p-3 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl"
        >
            {navItems.map((item) => (
                <SidebarItem 
                    key={item.id}
                    href={item.href}
                    active={active === item.id}
                    onClick={() => setActive(item.id)}
                    icon={item.icon}
                    label={item.label}
                />
            ))}
        </motion.div>
      </div>

      {/* Mobile Bottom Floating Dock */}
      <div className="md:hidden fixed bottom-6 inset-x-0 z-50 flex justify-center px-4">
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="flex items-center gap-1 p-2 bg-black/80 backdrop-blur-lg border border-white/10 rounded-full shadow-2xl"
        >
            {navItems.map((item) => (
                <MobileNavItem 
                    key={item.id}
                    href={item.href}
                    active={active === item.id}
                    onClick={() => setActive(item.id)}
                    icon={React.cloneElement(item.icon as React.ReactElement<any>, { size: 20 })}
                />
            ))}
        </motion.div>
      </div>
    </>
  );
}

const SidebarItem = ({ 
  href, 
  active, 
  icon,
  label,
  onClick 
}: { 
  href: string; 
  active: boolean; 
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href={href}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative flex items-center justify-center"
    >
        <motion.div
            layout
            className={cn(
                "relative z-10 p-3 rounded-xl transition-all duration-300 flex items-center justify-center",
                active 
                 ? "bg-blue-600 text-white shadow-[0_0_20px_rgba(37,99,235,0.5)]" 
                 : "text-neutral-400 hover:text-white hover:bg-white/10"
            )}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
        >
            {icon}
        </motion.div>

        {/* Floating Tooltip */}
        <AnimatePresence>
            {isHovered && (
                <motion.div
                    initial={{ opacity: 0, x: 10, scale: 0.8 }}
                    animate={{ opacity: 1, x: 20, scale: 1 }}
                    exit={{ opacity: 0, x: 10, scale: 0.8 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-full ml-2 px-3 py-1.5 bg-zinc-900 border border-white/10 text-white text-sm rounded-lg whitespace-nowrap shadow-xl z-0"
                >
                    {label}
                    {/* Tiny arrow pointing left */}
                    <div className="absolute top-1/2 -left-1 -translate-y-1/2 w-2 h-2 bg-zinc-900 border-l border-b border-white/10 rotate-45 transform" />
                </motion.div>
            )}
        </AnimatePresence>
    </a>
  );
};

const MobileNavItem = ({ 
  href, 
  active, 
  icon, 
  onClick 
}: { 
  href: string; 
  active: boolean; 
  icon: React.ReactElement; 
  onClick: () => void;
}) => {
  return (
    <a
      href={href}
      onClick={onClick}
      className={cn(
        "relative p-3 rounded-full transition-all duration-300",
        active ? "text-white bg-blue-600/20" : "text-neutral-400"
      )}
    >
        {active && (
            <motion.div
                layoutId="mobile-nav-pill"
                className="absolute inset-0 bg-blue-600 rounded-full -z-10"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
        )}
      {icon}
    </a>
  );
};
