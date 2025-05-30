import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import HomeSection from "@/components/HomeSection";
import ProjectSection from "@/components/ProjectSection";
import ContactSection from "@/components/ContactSection";
import { Contact } from "lucide-react";
import SkillSection from "@/components/SkillSection";


export default function Home() {
  return (
    <div className="main-h-screen">
    <HomeSection />
    <AboutSection />
    <ExperienceSection />
    <SkillSection />
    <ProjectSection />
    <ContactSection />
    </div>
  );
}
