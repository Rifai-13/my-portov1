'use client';
import React from 'react';
import { motion } from 'motion/react';
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';
import { IconBrandLinkedin, IconBrandGithub, IconBrandInstagram } from '@tabler/icons-react';

export default function HomeSection() {
  return (
    <section 
      id="home" 
      className="relative min-h-screen pt-24 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden w-[100vw] lg:-ml-24 bg-[#020617]"
    >
      {/* Background Decoration */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
        {/* Dot Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:16px_16px] opacity-20"></div>
        {/* Ambient Glow */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-800/10 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="container relative z-10 flex flex-col items-center justify-center text-center w-full gap-8">
        
        {/* 3D Pop-out Profile Section */}
        <motion.div
           initial="hidden"
           animate="visible"
           variants={slideInFromTop(0.5)}
           className="relative group cursor-pointer"
        >
            <div className="relative w-72 h-72 md:w-80 md:h-80 transition-transform duration-500 group-hover:scale-105">
                {/* Layer 1: Circle Background & Bottom Glow */}
                <div className="absolute inset-0 rounded-full border-4 border-blue-500/80 shadow-[0_0_40px_rgba(59,130,246,0.5)] bg-gradient-to-b from-blue-900/20 to-blue-900/5 overflow-hidden z-10">
                    <div className="absolute inset-0 bg-blue-500/10 blur-xl"></div>
                </div>

                {/* Layer 2: Image confined to circle (The "Inside" part) */}
                <div className="absolute inset-0 rounded-full overflow-hidden z-20">
                    <img 
                        src="/image/profile.png" 
                        alt="Profile Base" 
                        className="object-cover w-full h-full transform -translate-y-2 scale-110" 
                    />
                </div>

                {/* Layer 3: The Pop-out Element (Hands/Bottom) 
                    Calculated to overlay the bottom border using clip-path or transparent positioning.
                    Assuming image has transparent background.
                */}
                <div className="absolute inset-0 z-30 pointer-events-none">
                     <img 
                        src="/image/profile.png" 
                        alt="Profile Popout" 
                        className="object-cover w-full h-full transform -translate-y-2 scale-110"
                        style={{
                            clipPath: "polygon(0% 0%, 100% 0%, 100% 85%, 0% 85%)" // Show head and hands, hide bottom belly
                        }}  
                    />
                </div>

                 {/* Rim Light Effect (Glow behind head?) */}
                 <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-3/4 h-1/2 bg-blue-400/30 blur-2xl -z-10"></div>
            </div>

            {/* Floating Social Icons */}
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-4 z-40">
                <SocialLink href="https://www.linkedin.com/in/muhammad-rifai-1508b230a/" icon={<IconBrandLinkedin size={20} />} label="LinkedIn" />
                <SocialLink href="https://github.com/Rifai-13" icon={<IconBrandGithub size={20} />} label="GitHub" />
                <SocialLink href="https://www.instagram.com/muh_rifai13/" icon={<IconBrandInstagram size={20} />} label="Instagram" />
            </div>
        </motion.div>

        {/* Text Content */}
        <div className="flex flex-col items-center max-w-4xl mx-auto mt-8">
            <motion.h1 
              className="text-5xl md:text-7xl font-sans font-bold mb-6 tracking-tight text-white"
              initial="hidden"
              animate="visible"
              variants={slideInFromLeft(0.8)}
            >
              <span>I'm a </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Fullstack Web Developer</span>
            </motion.h1>

            <motion.p 
              className="text-slate-300 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed font-light"
              initial="hidden"
              animate="visible"
              variants={slideInFromRight(1.1)}
            >
              I specialize in building robust, end-to-end web applications. My go-to stack includes <span className="text-blue-400 font-medium">Next.js</span> and <span className="text-blue-400 font-medium">React</span> for seamless frontends, powered by <span className="text-blue-400 font-medium">Laravel</span> and <span className="text-blue-400 font-medium">Supabase</span> for high-performance backends.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row items-center gap-6"
              initial="hidden"
              animate="visible"
              variants={slideInFromTop(1.4)}
            >
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-6 text-lg rounded-full shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)] transition-all duration-300 transform hover:-translate-y-1"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View My Work
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-blue-500/50 text-blue-400 hover:text-white hover:bg-blue-500/10 px-8 py-6 text-lg rounded-full transition-all duration-300"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Contact Me
              </Button>
            </motion.div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 1,
          delay: 2,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      >
        <ArrowDown className="w-6 h-6 text-blue-400 animate-bounce" />
      </motion.div>
    </section>
  );
}

const SocialLink = ({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) => {
    return (
        <a 
            href={href} 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-[#020617]/80 border border-blue-500/30 text-blue-400 hover:text-white hover:bg-blue-600 hover:border-blue-500 hover:shadow-[0_0_15px_rgba(37,99,235,0.5)] transition-all duration-300 transform hover:scale-110"
            aria-label={label}
        >
            {icon}
        </a>
    );
};