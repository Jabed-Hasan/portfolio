import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Add scroll utility
export function scrollToSection(sectionId: string) {
  const section = document.getElementById(sectionId);
  
  if (section) {
    // Add offset to account for fixed header
    const offsetTop = section.getBoundingClientRect().top + window.scrollY - 100;
    
    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth'
    });
    
    // Update URL without scroll jump
    window.history.pushState(null, '', `#${sectionId}`);
  }
}
