"use client";
import React from "react";
import { FloatingNav } from "../components/ui/floating-navbar";
import { IconHome, IconUser, IconBriefcase, IconTools, IconStack, IconMail } from "@tabler/icons-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function FloatingNavbar() {
  const [active, setActive] = React.useState("home");
  
  return (
    <>
      {/* Desktop Navbar (hidden on mobile) */}
      <div className="hidden md:block fixed top-10 inset-x-0 z-50">
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="flex items-center justify-center gap-1 mx-auto w-max px-4 py-2 rounded-full border border-blue-600/70 bg-black/80 backdrop-blur-sm"
        >
          <NavItem href="#home" active={active === "home"} onClick={() => setActive("home")}>
            Home
          </NavItem>
          <NavItem href="#about" active={active === "about"} onClick={() => setActive("about")}>
            About
          </NavItem>
          <NavItem href="#experience" active={active === "experience"} onClick={() => setActive("experience")}>
            Experiences
          </NavItem>
          <NavItem href="#skills" active={active === "skills"} onClick={() => setActive("skills")}>
            Skills
          </NavItem>
          <NavItem href="#projects" active={active === "projects"} onClick={() => setActive("projects")}>
            Projects
          </NavItem>
          <NavItem href="#contact" active={active === "contact"} onClick={() => setActive("contact")}>
            Contact
          </NavItem>
        </motion.div>
      </div>

      {/* Mobile Navbar (hidden on desktop) */}
      <div className="md:hidden fixed bottom-4 inset-x-0 z-50 w-full px-2">
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="mx-auto max-w-[95vw] px-2 py-2 bg-black/80 backdrop-blur-sm border border-blue-600/70 rounded-full overflow-hidden"
        >
          <MobileNavItem href="#home" active={active === "home"} onClick={() => setActive("home")}>
            <IconHome size={20} />
            <span className="text-[10px]">Home</span>
          </MobileNavItem>
          <MobileNavItem href="#about" active={active === "about"} onClick={() => setActive("about")}>
            <IconUser size={20} />
            <span className="text-[10px]">About</span>
          </MobileNavItem>
          <MobileNavItem href="#experience" active={active === "experience"} onClick={() => setActive("experience")}>
            <IconBriefcase size={20} />
            <span className="text-[10px]">Exp</span>
          </MobileNavItem>
          <MobileNavItem href="#skills" active={active === "skills"} onClick={() => setActive("skills")}>
            <IconTools size={20} />
            <span className="text-[10px]">Skills</span>
          </MobileNavItem>
          <MobileNavItem href="#projects" active={active === "projects"} onClick={() => setActive("projects")}>
            <IconStack size={20} />
            <span className="text-[10px]">Projects</span>
          </MobileNavItem>
          <MobileNavItem href="#contact" active={active === "contact"} onClick={() => setActive("contact")}>
            <IconMail size={20} />
            <span className="text-[10px]">Contact</span>
          </MobileNavItem>
        </motion.div>
      </div>
    </>
  );
};

// Desktop Nav Item
const NavItem = ({ 
  href, 
  active, 
  children, 
  onClick 
}: { 
  href: string; 
  active: boolean; 
  children: React.ReactNode;
  onClick: () => void;
}) => {
  return (
    <a
      href={href}
      onClick={onClick}
      className={cn(
        "flex flex-col items-center min-w-[60px] p-1 rounded-full transition-colors flex-shrink-0",
        active ? "bg-blue-900 text-white" : "text-neutral-300 hover:text-white"
      )}
    >
      {children}
    </a>
  );
};

// Mobile Nav Item
const MobileNavItem = ({ 
  href, 
  active, 
  children, 
  onClick 
}: { 
  href: string; 
  active: boolean; 
  children: React.ReactNode;
  onClick: () => void;
}) => {
  return (
    <a
      href={href}
      onClick={onClick}
      className={cn(
        "flex flex-col items-center w-[60px] p-1 rounded-full transition-colors flex-shrink-0",
        active ? "bg-blue-900 text-white" : "text-neutral-300 hover:text-white"
      )}
    >
      {children}
    </a>
  );
};
