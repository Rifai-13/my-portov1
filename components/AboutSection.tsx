"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { slideInFromLeft, slideInFromRight } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { FileText } from 'lucide-react';

export default function AboutSection() {
  return (
    <section 
      id="about" 
      className="py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <motion.div 
            className="flex-1 order-2 md:order-1"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideInFromLeft(0.3)}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              About <span className="text-gradient">Me</span>
            </h2>
            
            <p className="text-muted-foreground mb-4">
              I am an Informatics Engineering student who focuses on developing skills in mobile and web application
              development. Since starting university, I have been interested in creating digital solutions that can 
              make people's lives easier. I actively work on various mobile and web application development projects, 
              which allows me to deepen my understanding of the latest technologies and frameworks used in application
              development.
            </p>

            <p className="text-muted-foreground mb-4">
              As a developer, I always strive to deliver apps that are responsive, user-friendly, and efficient. 
              My main focus is on developing mobile and web applications that provide the best user experience. 
              With a passion for continuous learning and adapting to technological developments, I hope to contribute 
              in creating useful digital solutions in the future.
            </p>

            <Button 
              className="mt-4 bg-blue-900 hover:bg-blue-800 text-white"
              onClick={() => window.open('/resume.pdf', '_blank')}
            >
              <FileText className="mr-2 h-4 w-4" />
              Download Resume
            </Button>
          </motion.div>
          
          <motion.div 
            className="flex-1 order-1 md:order-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideInFromRight(0.5)}
          >
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg blur opacity-75"></div>
              <div className="relative rounded-lg overflow-hidden border border-blue-800/50 bg-background/80 backdrop-blur-sm">
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-4">Quick Info</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <p className="text-blue-400 font-medium">Name</p>
                      <p className="text-foreground">MUHAMMAD RIFAI</p>
                    </div>
                    
                    <div>
                      <p className="text-blue-400 font-medium">Email</p>
                      <p className="text-foreground">rifaimuh608@gmail.com</p>
                    </div>
                    
                    <div>
                      <p className="text-blue-400 font-medium">Location</p>
                      <p className="text-foreground">Malang, Jawa Timur</p>
                    </div>
                    
                    <div>
                      <p className="text-blue-400 font-medium">Expertise</p>
                      <p className="text-foreground">Full Stack Development, Web Design, Mobile Applications</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}