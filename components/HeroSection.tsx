'use client';

import { motion } from "framer-motion";
import { Link } from "@/components/ui/Link";
import React from "react";

export function HeroSection(): React.JSX.Element {
  return (
    <section className="relative w-full py-24 md:py-32 lg:py-48 bg-[#D8EAEC]">
      <div className="container relative mx-auto px-4 md:px-6">
        <motion.div
          className="flex flex-col items-center space-y-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none text-[#0B4654] max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Making the World Better Through Software
          </motion.h1>
          <motion.p
            className="mx-auto max-w-[700px] text-[#6C848C] text-xl md:text-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            DotBrains is a collective dedicated to the craft of software engineering, driven by a mission to
            enhance lives and solve complex problems through innovative technology.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <Link
				href="https://github.com/orgs/dotbrains/repositories"
				className="bg-[#78DA7D] text-white hover:bg-[#0B4654] text-lg px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
			>
              We are Open Source
            </Link>
            <Link
			  href="https://github.com/dotbrains"
              variant="outline"
              className="border-[#0B4654] text-[#0B4654] hover:bg-[#0B4654] hover:text-white text-lg px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
            >
              Learn More
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
