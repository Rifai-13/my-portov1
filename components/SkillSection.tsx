"use client";

import React from "react";
import { motion } from "framer-motion";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export default function SkillSection() {

  const items = [
    { name: "HTML", imageSrc: "/image/html.png" },
    { name: "CSS", imageSrc: "/image/css.png" },
    { name: "JavaScript", imageSrc: "/image/js.png" },
    { name: "Booststrap", imageSrc: "/image/boostraps.png" },
    { name: "MySQL", imageSrc: "/image/mysql.png" },
    { name: "Laravel", imageSrc: "/image/laravel.png" },
    { name: "PHP", imageSrc: "/image/php.png" },
    { name: "NodeJs", imageSrc: "/image/nodejs.png" },
    { name: "Vue", imageSrc: "/image/vue.png" },
    { name: "React", imageSrc: "/image/react.png" },
    { name: "Express", imageSrc: "/image/express.png" },
    { name: "Flutter", imageSrc: "/image/flutter.png" },
    { name: "Next.Js", imageSrc: "/image/nextjs.png" },
    { name: "Tailwindcss", imageSrc: "/image/tailwind.png" },
    { name: "Shadcn/Ui", imageSrc: "/image/shadcn.png" },
    { name: "Figma", imageSrc: "/image/figma.png" },
    { name: "Vite", imageSrc: "/image/vite.png" },
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="text-dark-red-500">Skills</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I've worked with a variety of technologies in web development.
            Here's a showcase of my technical expertise.
          </p>
        </motion.div>
        <div className="space-y-16">
          <div>
            <InfiniteMovingCards items={items}/>
          </div>
        </div>
      </div>
    </section>
  );
}
