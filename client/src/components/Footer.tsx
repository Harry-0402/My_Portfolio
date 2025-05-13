import { Link } from "wouter";
import { Github, Linkedin, Twitter, Dribbble } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-dark-900 text-white py-12">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="text-2xl font-poppins font-bold">
              <span className="text-white">Harish</span>
              <span className="text-primary">Chavan</span>
            </Link>
            <p className="text-gray-400 mt-2">Actuarial Science Student</p>
          </div>

          <div className="flex space-x-8 mb-6 md:mb-0">
            <Link href="/" className="text-gray-300 hover:text-white transition-colors">
              Home
            </Link>
            <Link href="/projects" className="text-gray-300 hover:text-white transition-colors">
              Projects
            </Link>
            <Link href="/education" className="text-gray-300 hover:text-white transition-colors">
              Education
            </Link>
            <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
              Contact
            </Link>
          </div>

          <div className="flex space-x-4">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="h-5 w-5" />
            </a>
            <a
              href="https://dribbble.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors"
              aria-label="Dribbble"
            >
              <Dribbble className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">© {new Date().getFullYear()} Harish Chavan. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
