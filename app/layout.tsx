import React from "react";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import {getBaseUrl} from "@/lib/utils";

// Load local fonts
const geistSans = localFont({
	src: "./fonts/GeistVF.woff",
	variable: "--font-geist-sans",
	weight: "100 900",
});

const geistMono = localFont({
	src: "./fonts/GeistMonoVF.woff",
	variable: "--font-geist-mono",
	weight: "100 900",
});

const baseUrl = getBaseUrl();

// Metadata for the page
export const metadata: Metadata = {
	title: "dotbrains",
	description: "A collective dedicated to the craft of software engineering whose mission is to make the world better through software.",
	openGraph: {
		title: "dotbrains",
		description: "A collective dedicated to the craft of software engineering whose mission is to make the world better through software.",
		url: `${baseUrl}`,
		siteName: "dotbrains",
		images: [
			{
				url: `${baseUrl}/api/og`, // Use images array for Open Graph
			},
		],
	},
};

// Root layout component
export default function RootLayout({
									   children,
								   }: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
		<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
		{children}
		<Analytics />
		</body>
		</html>
	);
}
