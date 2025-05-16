'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

export default function HomeSection() {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden w-full"
    >
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-700/20 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container relative z-10 flex flex-col items-center justify-center text-center w-full">
        <motion.div
          initial="hidden"
          animate="visible"
          className="mb-8"
          variants={slideInFromTop(0.5)}
        >
          {/* <span className="text-blue-900 text-lg font-medium">Welcome to my portfolio</span> */}
        </motion.div>

        <motion.h1 
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
          initial="hidden"
          animate="visible"
          variants={slideInFromLeft(0.8)}
        >
          <span>I'm a </span>
          <span className="text-gradient">Software</span>
          <span> Developer</span>
        </motion.h1>

        <motion.p 
          className="text-muted-foreground text-lg md:text-xl max-w-2xl mb-10"
          initial="hidden"
          animate="visible"
          variants={slideInFromRight(1.1)}
        >
          I create beautiful and functional web applications using cutting-edge technologies.
          Specializing in modern JavaScript frameworks and responsive design.
        </motion.p>

        <motion.div 
          className="flex flex-col sm:flex-row items-center gap-4"
          initial="hidden"
          animate="visible"
          variants={slideInFromTop(1.4)}
        >
          <Button 
            size="lg" 
            className="bg-blue-950 hover:bg-blue-900 text-white"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View My Work
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-blue-900 text-blue-400 hover:bg-blue-900/20"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Contact Me
          </Button>
        </motion.div>
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
        <ArrowDown className="w-6 h-6 text-blue-900" />
      </motion.div>
    </section>
  );
}