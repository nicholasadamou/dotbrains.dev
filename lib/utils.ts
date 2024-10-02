import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getBaseUrl = (): string => {
	const isProduction = process.env.NODE_ENV === 'production';

	return isProduction ? 'https://dotbrains.dev' : 'http://localhost:3000';
};
