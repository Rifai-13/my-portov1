"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion } from "framer-motion";
import { Separator } from "@/components/ui/separator";
import { Briefcase, GraduationCap, Users } from "lucide-react";

export default function ExperienceSection() {
  const experiences = [
    {
      icon: <Briefcase size={24} />,
      title: "Professional Experience",
      description:
        "Informatics student with a focus on front-end development using React and Next.js. Skilled in building responsive and efficient web applications, and experienced in full-stack development.",
      items: [
        {
          title: "CV INDO AZKA KONSULTAN",
          period: "Januari 2025 - Maret 2025",
          description:
            "create a material store website to make it easier for clients to buy materials and make it easier for admins to manage stock items.",
        },
        // {
        //   title: "Web Developer at DevStudio",
        //   period: "2019 - 2021",
        //   description:
        //     "Built responsive web applications and implemented CI/CD pipelines.",
        // },
      ],
    },
    {
      icon: <GraduationCap size={24} />,
      title: "Education",
      description:
        "Formal education and continuous learning through online courses and certifications.",
      items: [
        {
          title: "SMK NEGERI 1 WITA PONDA",
          period: "2019 - 2022",
          description:
            "Study in SMK 1 WITA PONDAH with a major in Computer and Network Engineering.",
        },
        {
          title: "CODEPOLITAN Digital Certificate",
          period: "November 2024",
          description:
            "Learn JavaScript class in CODEPOLITAN Online Class program.",
        },
        {
          title: "CODEPOLITAN Digital Certificate",
          period: "Desember 2024",
          description:
            "ReactJS class in the CODEPOLITAN Online Class program.",
        },
        {
          title: "CODEPOLITAN Digital Certificate",
          period: "Desember 2025",
          description:
            " Class Learn React.js by Creating a Split Bill Application in the CODEPOLITAN Online Class program.",
        },
        {
          title: "CODEPOLITAN Digital Certificate",
          period: "Desember 2025",
          description:
            " React.js State Management class - A Guide to Using Good State in CODEPOLITAN's Online Classroom program.",
        },
      ],
    },
    {
      icon: <Users size={24} />,
      title: "Achievements",
      description:
        "Recognized contributions to projects and the developer community.",
      items: [
        {
          title: "LabAku",
          period: "2025",
          description:
            "I contributed to the creation of Front end with nexjs stack, shadcn/ui, tailwindcss.",
        },
        {
          title: "E-commerce Website",
          period: "2024",
          description:
            "I made a simple shoe store website using vue js as frontend and laravel for backend.",
        },
        {
          title: "Coffe Shop",
          period: "2024",
          description:
            "I have created a company profile website for coffee shope using the basic stack, namely html, css and javascript.",
        },
        {
          title: "Reparatech",
          period: "2024",
          description:
            "I contributed to the process of making the Reparatech website on the frontend and backend where on the backend I used laravel and for the frontend I used next js.",
        },
      ],
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.5,
      },
    }),
  };
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Experiences</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A passionate software developer with experience in creating modern
            web applications and a strong foundation in full-stack development.
          </p>
          <Separator className="mt-8 max-w-md mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {experiences.map((item, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={cardVariants}
            >
              <Card className="h-full">
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <div className="p-2 rounded-full bg-primary/10 text-primary">
                      {item.icon}
                    </div>
                    <CardTitle>{item.title}</CardTitle>
                  </div>
                  <CardDescription className="mt-2">
                    {item.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {item.items.map((subItem, subIndex) => (
                      <div
                        key={subIndex}
                        className="border-l-2 border-primary pl-4 py-1"
                      >
                        <h4 className="font-medium">{subItem.title}</h4>
                        <p className="text-sm text-muted-foreground">
                          {subItem.period}
                        </p>
                        <p className="mt-1 text-sm">{subItem.description}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
