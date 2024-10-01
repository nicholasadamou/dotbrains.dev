'use client';

import { motion } from "framer-motion";
import { Target, Zap, Shield, Users } from "lucide-react";

interface MissionItem {
  title: string;
  icon: JSX.Element;
  description: string;
}

export function MissionSection(): JSX.Element {
  const missionItems: MissionItem[] = [
    {
      title: "Simplicity",
      icon: <Target className="w-12 h-12 mb-4 text-[#78DA7D]" />,
      description: "We strive to simplify complex processes and make them accessible to all developers."
    },
    {
      title: "Efficiency",
      icon: <Zap className="w-12 h-12 mb-4 text-[#78DA7D]" />,
      description: "Our tools are designed to boost productivity and streamline workflows."
    },
    {
      title: "Ethical Software",
      icon: <Shield className="w-12 h-12 mb-4 text-[#78DA7D]" />,
      description: "We are committed to developing software that respects user privacy and data."
    },
    {
      title: "Community",
      icon: <Users className="w-12 h-12 mb-4 text-[#78DA7D]" />,
      description: "We foster a collaborative environment where developers can learn and grow together."
    }
  ];

  return (
    <motion.section
      id="mission"
      className="w-full py-16 md:py-24 lg:py-32 bg-[#0B4654] text-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl mb-4">Our Mission</h2>
          <p className="text-xl text-[#D8EAEC] max-w-[800px] mx-auto">
            At DotBrains, our mission is to make the lives of developers easier by providing tools and resources that
            simplify developer operations and enhance productivity.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {missionItems.map((item, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center p-6 bg-[#0A3F4C] rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {item.icon}
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-[#D8EAEC]">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
