import { NextResponse } from 'next/server';

interface Repo {
	name: string;
	description: string | null;
	language: string | null;
	stargazers_count: number;
	forks_count: number;
	html_url: string;
}

export async function GET() {
	const GITHUB_USERNAME = 'dotbrains';
	const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

	// Check if the GitHub token is provided
	if (!GITHUB_TOKEN) {
		return NextResponse.json({ error: 'GitHub token not provided' }, { status: 500 });
	}

	try {
		let page = 1;
		let allRepos: Repo[] = [];
		let shouldFetchMore = true;

		// Fetch all repositories by iterating through pages
		while (shouldFetchMore) {
			const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?page=${page}&per_page=100`, {
				headers: {
					Authorization: `token ${GITHUB_TOKEN}`,
					'Accept': 'application/vnd.github.v3+json',  // Set the Accept header for proper API versioning
				},
			});

			// Check for response errors
			if (!response.ok) {
				const errorData = await response.json();  // Get error details from the response
				return NextResponse.json({ error: errorData.message || 'Error fetching repositories from GitHub' }, { status: response.status });
			}

			const repos: Repo[] = await response.json();
			allRepos = allRepos.concat(repos);

			// Stop if we received fewer than 100 repos, which means we're at the end of the list
			if (repos.length < 100) {
				shouldFetchMore = false;
			} else {
				page++;
			}
		}

		// Extract and format the required data
		const projects = allRepos.map((repo) => ({
			name: repo.name,
			description: repo.description,
			language: repo.language,
			stars: repo.stargazers_count,
			forks: repo.forks_count,
			url: repo.html_url,
		}));

		// Return all projects
		return NextResponse.json({ projects }, { status: 200 });
	} catch (error) {
		console.error('Error fetching data from GitHub:', error);
		return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
	}
}
