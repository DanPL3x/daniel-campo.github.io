import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Helper function to get the correct path for public assets
 * Handles base path for GitHub Pages deployments
 */
export function getPublicPath(path: string): string {
  if (!path) return path
  
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path
  // Get base URL from Vite (always ends with /)
  const base = import.meta.env.BASE_URL || '/'
  // Combine base with path
  return `${base}${cleanPath}`
}
