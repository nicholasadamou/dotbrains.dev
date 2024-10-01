'use client';

import React, { Suspense, useState } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";

import { ProjectsList } from "./ProjectsList";
import {Spinner} from "@/components/ui/Spinner";

export function ProjectsSection(): React.JSX.Element {
	const [searchQuery, setSearchQuery] = useState<string>("");

	return (
		<motion.section
			id="projects"
			className="w-full py-12 bg-[#0B4654]"
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 0.5 }}
			viewport={{ once: true }}
		>
			<div className="container mx-auto px-4 md:px-6">
				<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white mb-4">Projects</h2>
				<p className="max-w-[700px] text-[#D8EAEC] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mb-6">
					Explore our projects and discover how we&apos;re making developer lives easier.
				</p>

				<div className="mb-8 flex items-center gap-4">
					<div className="relative flex-1">
						<input
							type="text"
							placeholder="Search projects..."
							className="w-full h-11 px-4 pr-10 rounded-md border border-gray-300 text-sm outline-none focus:border-[#78DA7D] transition-all"
							value={searchQuery}
							onChange={(e) => setSearchQuery(e.target.value)}
						/>
						<Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
					</div>
				</div>

				<Suspense fallback={<Spinner className="text-[#D8EAEC]" />}>
					<ProjectsList searchQuery={searchQuery} />
				</Suspense>
			</div>
		</motion.section>
	);
}
