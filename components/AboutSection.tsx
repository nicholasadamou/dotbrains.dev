'use client';

import { motion } from "framer-motion";
import { Card } from "@/components/Card";
import { Shield, Users, Zap, Code } from "lucide-react";
import React from "react";

interface AboutItem {
  title: string;
  icon: React.JSX.Element;
  description: string;
}

export function AboutSection(): React.JSX.Element {
  const aboutItems: AboutItem[] = [
    { title: "Ethical", icon: <Shield className="w-6 h-6 mr-2 text-[#78DA7D]" />, description: "We prioritize user privacy and data protection in all our solutions." },
    { title: "User-Centric", icon: <Users className="w-6 h-6 mr-2 text-[#78DA7D]" />, description: "Our solutions are designed with the end-user's needs at the forefront." },
    { title: "Innovative", icon: <Zap className="w-6 h-6 mr-2 text-[#78DA7D]" />, description: "We constantly push the boundaries of what's possible in software engineering." },
    { title: "Quality-Driven", icon: <Code className="w-6 h-6 mr-2 text-[#78DA7D]" />, description: "Our work is grounded in rigorous discipline and attention to detail." },
  ];

  return (
    <motion.section
      id="about"
      className="w-full py-16 md:py-24 lg:py-32 bg-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 items-center">
          <div>
            <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl text-[#0B4654] mb-4">About Us</h2>
            <p className="text-xl text-[#6C848C] mb-6">
              We are committed to building software that is ethical and user-centric. Protecting user data and privacy
              is paramount, and we strive to develop solutions that enhance lives by automating mundane and
              time-consuming tasks.
            </p>
            <blockquote className="border-l-4 pl-4 italic text-[#0B4654] text-lg">
              &#34;The best way to predict the future is to invent it.&#34; - Alan Kay
            </blockquote>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {aboutItems.map((item, index) => (
              <Card key={index} icon={item.icon} title={item.title} description={item.description} />
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
