'use client';

import { Button } from "@/components/ui/Button";
import React, { useState } from "react";
import { Link } from "react-scroll";
import Image from "next/image";
import { Menu } from "lucide-react";
import { motion } from "framer-motion";

import Logo from "@/public/logo.png";

export function Header(): React.JSX.Element {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 lg:px-6 h-20 flex items-center bg-[#dde9ef] backdrop-blur-md">
      <a className="flex items-center justify-center" href="/">
        <Image
          src={Logo}
          alt="DotBrains Logo"
          width={50}
          height={50}
          className="mr-2 rounded-full"
        />
        <span className="text-2xl font-bold text-[#0B4654]">DotBrains</span>
      </a>
      <nav className="ml-auto hidden md:flex gap-4 sm:gap-6">
        {["About", "Mission", "Featured Projects", "Projects"].map((section) => (
          <Link
            key={section}
            className="text-sm font-medium hover:underline underline-offset-4 text-[#0B4654] cursor-pointer"
			to={`${section.toLowerCase().replace(" ", "-")}`}
			smooth={true}
			duration={500}
          >
            {section}
          </Link>
        ))}
      </nav>
      <Button
        className="ml-auto md:hidden"
        variant="ghost"
        size="icon"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <Menu className="h-6 w-6" />
      </Button>
      <motion.nav
        className={`${isMenuOpen ? "flex" : "hidden"} md:hidden flex-col items-center py-4 bg-[#D8EAEC] backdrop-blur-md fixed top-20 left-0 right-0 z-40`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: isMenuOpen ? 1 : 0, y: isMenuOpen ? 0 : -20 }}
        transition={{ duration: 0.3 }}
      >
        {["About", "Mission", "Featured Projects", "Projects"].map((section) => (
          <Link
            key={section}
            className="text-sm font-medium py-2 text-[#0B4654] cursor-pointer"
			to={`${section.toLowerCase().replace(" ", "-")}`}
			smooth={true}
			duration={500}
            onClick={() => setIsMenuOpen(false)}
          >
            {section}
          </Link>
        ))}
      </motion.nav>
    </header>
  );
}
