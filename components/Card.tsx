'use client';

import React, { ReactNode } from "react";

interface CardProps {
	icon: ReactNode;
	title: string;
	description: string;
	bgColor?: string; // Optional background color prop
}

export function Card({ icon, title, description, bgColor = "#F0F7F8" }: CardProps): React.JSX.Element {
	return (
		<div
			className="p-6 rounded-lg shadow-lg bg-white"
			style={{backgroundColor: bgColor}}
		>
			<div className="flex items-center mb-4">
				<div className="flex-shrink-0 w-8 h-8 mr-2 text-[#78DA7D]">{icon}</div>
				<h3 className="text-[#0B4654] text-xl font-semibold">{title}</h3>
			</div>
			<p className="text-[#6C848C] text-base leading-relaxed">{description}</p>
		</div>
	);
}
