import { Link } from "wouter";
import { Github, Linkedin } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { cn } from "@/lib/utils";

export default function Footer() {
  const { theme } = useTheme();
  
  // Footer is already dark-themed, so we'll only make minor adjustments for light theme
  const isLight = theme === "light";
  
  return (
    <footer className={cn(
      "py-12", 
      isLight ? "bg-gray-100 text-dark-800" : "bg-dark-900 text-white"
    )}>
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="text-2xl font-poppins font-bold">
              <span className={isLight ? "text-dark" : "text-white"}>Harish</span>
              <span className="text-primary">Chavan</span>
            </Link>
            <p className={isLight ? "text-gray-600 mt-2" : "text-gray-400 mt-2"}>Actuarial Science Student</p>
          </div>

          <div className="flex space-x-8 mb-6 md:mb-0">
            <Link href="/" className={cn(
              "transition-colors",
              isLight ? "text-dark-600 hover:text-primary" : "text-gray-300 hover:text-white"
            )}>
              Home
            </Link>
            <Link href="/projects" className={cn(
              "transition-colors",
              isLight ? "text-dark-600 hover:text-primary" : "text-gray-300 hover:text-white"
            )}>
              Projects
            </Link>
            <Link href="/education" className={cn(
              "transition-colors",
              isLight ? "text-dark-600 hover:text-primary" : "text-gray-300 hover:text-white"
            )}>
              Education
            </Link>
            <Link href="/contact" className={cn(
              "transition-colors",
              isLight ? "text-dark-600 hover:text-primary" : "text-gray-300 hover:text-white"
            )}>
              Contact
            </Link>
          </div>

          <div className="flex space-x-4">
            <a
              href="https://www.linkedin.com/in/harish-chavan-6852b4285"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "transition-colors",
                isLight ? "text-dark-600 hover:text-primary" : "text-gray-300 hover:text-white"
              )}
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://github.com/Harry-0402"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "transition-colors",
                isLight ? "text-dark-600 hover:text-primary" : "text-gray-300 hover:text-white"
              )}
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className={cn(
          "mt-8 pt-8 flex flex-col md:flex-row justify-between items-center",
          isLight ? "border-t border-gray-200" : "border-t border-gray-700"
        )}>
          <p className={isLight ? "text-gray-600 text-sm" : "text-gray-400 text-sm"}>
            © {new Date().getFullYear()} Harish Chavan. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className={cn(
              "text-sm transition-colors",
              isLight ? "text-gray-600 hover:text-primary" : "text-gray-400 hover:text-white"
            )}>
              Privacy Policy
            </a>
            <a href="#" className={cn(
              "text-sm transition-colors",
              isLight ? "text-gray-600 hover:text-primary" : "text-gray-400 hover:text-white"
            )}>
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
