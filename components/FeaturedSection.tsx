'use client';

import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import { Link } from "@/components/ui/Link";
import { Card } from "@/components/Card";
import { ArrowRight, Clock, CheckCircle2, Zap, FileCode, Terminal, Package, Lock, Code, Search, Shield, Users } from "lucide-react";

interface ProjectFeature {
  icon: React.JSX.Element;
  title: string;
  description: string;
}

interface ProjectComponent {
  icon: React.JSX.Element;
  title: string;
  description: string;
}

interface FeaturedProject {
  name: string;
  description: string;
  features: ProjectFeature[];
  components: ProjectComponent[];
  url: string;
}

export function FeaturedSection(): React.JSX.Element {
  const [activeTab, setActiveTab] = useState<string>("set-me-up");

  const featuredProjects: FeaturedProject[] = [
    {
      name: "set-me-up",
      description: "Automate and simplify the setup and maintenance of macOS or Debian Linux development environments.",
      features: [
        { icon: <Clock className="w-7 h-7 mr-5 text-[#78DA7D]" />, title: "Cut Setup Time by 99%", description: "Reduce environment setup time from hours to minutes, allowing you to start being productive almost immediately." },
        { icon: <CheckCircle2 className="w-7 h-7 mr-5 text-[#78DA7D]" />, title: "Consistency Across Setups", description: "Ensure your development environment is set up the same way every time, reducing configuration errors." },
        { icon: <Zap className="w-7 h-7 mr-5 text-[#78DA7D]" />, title: "Highly Customizable", description: "Tailor the setup to your needs without being locked into a specific configuration." }
      ],
      components: [
        { icon: <FileCode className="w-7 h-7 mr-5 text-[#78DA7D]" />, title: "set-me-up blueprint", description: "A customizable template for managing your setup" },
        { icon: <Terminal className="w-7 h-7 mr-5 text-[#78DA7D]" />, title: "set-me-up installer", description: "A universal installer script for Mac or Debian-based machines" },
        { icon: <Package className="w-7 h-7 mr-5 text-[#78DA7D]" />, title: "set-me-up Universal Modules", description: "A framework for setting up diverse development environments" }
      ],
      url: "https://github.com/dotbrains/set-me-up-docs"
    },
    {
        name: "Guardrails",
        description: "A modular, maintainable, and customizable security-compliant DevOps strategy designed for use with 👷🏼 Travis CI.",
        features: [
          { icon: <Shield className="w-7 h-7 mr-5 text-[#78DA7D]" />, title: "Enhanced Security", description: "Integrate security practices directly into your CI/CD pipeline without sacrificing productivity." },
          { icon: <Code className="w-7 h-7 mr-5 text-[#78DA7D]" />, title: "Flexible Architecture", description: "Easily adapt to a wide range of CI/CD solutions and cloud providers, enhancing efficiency and enabling faster releases." },
          { icon: <Users className="w-7 h-7 mr-5 text-[#78DA7D]" />, title: "Team-Friendly", description: "Ideal for teams that can't leverage centralized CI/CD platforms or trunk-based development." }
        ],
        components: [
          { icon: <Lock className="w-7 h-7 mr-5 text-[#78DA7D]" />, title: "AppScan Integration", description: "Static Application Security Testing (SAST) for comprehensive code analysis" },
          { icon: <Zap className="w-7 h-7 mr-5 text-[#78DA7D]" />, title: "Contrast Security", description: "Interactive Application Security Testing (IAST) for runtime vulnerability detection" },
          { icon: <Search className="w-7 h-7 mr-5 text-[#78DA7D]" />, title: "Detect Secrets", description: "Automated scanning for accidental secret exposure in your codebase" }
        ],
        url: "https://github.com/dotbrains/guardrails"
      }
  ];

  return (
    <motion.section
      id="featured-projects"
      className="w-full py-16 bg-gradient-to-b from-[#D8EAEC] to-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-[#0B4654] mb-6 text-center">
            Featured Projects
          </h2>
          <p className="max-w-[800px] text-[#6C848C] text-xl md:text-2xl mb-12 text-center mx-auto">
            Discover our flagship projects that are revolutionizing developer workflows and security practices.
          </p>
        </motion.div>
        <div>
          <div className="flex justify-center space-x-2 mb-8">
            {featuredProjects.map((project) => (
              <motion.button
                key={project.name}
                className={`px-4 py-2 rounded-full text-lg font-medium transition-all duration-300 ${
                  activeTab === project.name
                    ? "bg-[#78DA7D] text-white shadow-lg"
                    : "bg-white text-[#0B4654] hover:bg-[#F0F7F8]"
                }`}
                onClick={() => setActiveTab(project.name)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {project.name}
              </motion.button>
            ))}
          </div>
          <AnimatePresence mode="wait">
            {featuredProjects.map((project) =>
              project.name === activeTab && (
                <motion.div
                  key={project.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <div>
                    <h3 className="text-3xl font-bold text-[#0B4654] mb-6">{project.name}</h3>
                    <p className="text-[#6C848C] text-xl mb-6">{project.description}</p>
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-6">
                      {project.features.map((feature, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                        >
                          <Card
                            icon={feature.icon}
                            title={feature.title}
                            description={feature.description}
							bgColor="white"
                          />
                        </motion.div>
                      ))}
                    </div>
                    <motion.div
                      className="space-y-6"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.6 }}
                    >
                      <h4 className="text-2xl font-bold text-[#0B4654]">Key Components</h4>
                      <ul className="list-none text-[#6C848C] text-md sm:text-md md:text-md lg:text-lg space-y-4">
                        {project.components.map((component, index) => (
                          <li key={index} className="flex items-center">
                            {component.icon}
                            <span>
                              <strong>{component.title}:</strong> {component.description}
                            </span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-8 text-center">
                        <Link asChild className="bg-[#78DA7D] text-white hover:bg-[#0B4654] text-md lg:text-lg py-6 px-8">
                          <a href={project.url} className="flex items-center" target="_blank">
                            Learn More About {project.name}
                            <ArrowRight className="ml-2 h-6 w-6" />
                          </a>
                        </Link>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              )
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.section>
  );
}
