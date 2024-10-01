'use client';

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { GitForkIcon, StarIcon } from "lucide-react";
import { Spinner } from "@/components/ui/Spinner";

interface Project {
	name: string;
	description: string;
	language: string;
	stars: number;
	forks: number;
	url: string;
}

interface ProjectsListProps {
	searchQuery: string;
}

export function ProjectsList({ searchQuery }: ProjectsListProps): React.JSX.Element {
	const [projects, setProjects] = useState<Project[]>([]);
	const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
	const [loading, setLoading] = useState<boolean>(true);
	const [currentPage, setCurrentPage] = useState<number>(1);
	const perPage = 9;

	// Fetch all projects once
	useEffect(() => {
		async function fetchAllProjects() {
			setLoading(true);
			try {
				const response = await fetch(`/api/projects`);
				if (!response.ok) {
					throw new Error("Failed to fetch projects");
				}
				const data = await response.json();

				// Remove '.github' repository from the list
				data.projects = data.projects.filter((project: Project) => project.name !== ".github");

				setProjects(data.projects);
				setFilteredProjects(data.projects); // Initially, filteredProjects is the same as projects
			} catch (error) {
				console.error("Error fetching projects:", error);
			} finally {
				setLoading(false);
			}
		}
		fetchAllProjects();
	}, []);

	// Filter projects based on the search query
	useEffect(() => {
		if (searchQuery) {
			const filtered = projects.filter(
				(project) =>
					project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
					(project.description && project.description.toLowerCase().includes(searchQuery.toLowerCase()))
			);
			setFilteredProjects(filtered);
		} else {
			setFilteredProjects(projects);
		}
		setCurrentPage(1); // Reset to the first page when search query changes
	}, [searchQuery, projects]);

	// Determine projects to display for the current page
	const currentProjects = filteredProjects.slice((currentPage - 1) * perPage, currentPage * perPage);
	const totalPages = Math.ceil(filteredProjects.length / perPage);

	if (loading) {
		return <Spinner className="text-[#D8EAEC]" />;
	}

	return (
		<>
			<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
				{currentProjects.map((project, index) => (
					<motion.div
						key={index}
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: index * 0.1 }}
					>
						<div className="bg-[#F0F7F8] p-4 rounded-md h-full flex flex-col">
							<div className="flex-grow">
								<h3 className="text-[#0B4654] text-lg font-bold mb-2">{project.name}</h3>
								<p className="text-[#6C848C] mb-4">{project.description}</p>
							</div>
							<div className="flex items-center space-x-4">
								<div className="flex items-center space-x-1">
									<StarIcon className="w-4 h-4 text-[#78DA7D]" />
									<span className="text-xs">{project.stars}</span>
								</div>
								<div className="flex items-center space-x-1">
									<GitForkIcon className="w-4 h-4 text-[#78DA7D]" />
									<span className="text-xs">{project.forks}</span>
								</div>
							</div>
							<Button asChild className="bg-[#78DA7D] text-white hover:bg-[#0B4654] w-full mt-4">
								<a href={project.url} target="_blank" rel="noopener noreferrer">Learn More</a>
							</Button>
						</div>
					</motion.div>
				))}
			</div>

			<div className="flex justify-center mt-8 space-x-4">
				<Button
					variant="outline"
					disabled={currentPage === 1}
					onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
				>
					Previous
				</Button>
				<Button
					variant="outline"
					disabled={currentPage === totalPages}
					onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
				>
					Next
				</Button>
			</div>
		</>
	);
}
