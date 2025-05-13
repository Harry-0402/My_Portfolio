import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./ThemeToggle";
import { useTheme } from "./ThemeProvider";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [location] = useLocation();
  const { theme } = useTheme();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActive = (path: string) => {
    if (path === "/" && location === "/") return true;
    if (path !== "/" && location.startsWith(path)) return true;
    return false;
  };

  return (
    <header
      className={cn(
        "fixed w-full z-50 transition-shadow duration-300",
        theme === "dark" 
          ? "bg-dark-900 text-white shadow-md" 
          : "bg-white shadow-sm",
        scrollPosition > 10 && "shadow-md"
      )}
    >
      <div className="container-custom">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-poppins font-bold">
              <span className={theme === "dark" ? "text-white" : "text-dark"}>Harish</span>
              <span className="text-primary">Chavan</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex space-x-8">
              <Link
                href="/"
                className={cn(
                  "font-medium transition-colors",
                  isActive("/")
                    ? "text-primary"
                    : theme === "dark" 
                      ? "text-gray-300 hover:text-primary" 
                      : "text-dark-600 hover:text-primary"
                )}
              >
                Home
              </Link>
              <Link
                href="/projects"
                className={cn(
                  "font-medium transition-colors",
                  isActive("/projects")
                    ? "text-primary"
                    : theme === "dark" 
                      ? "text-gray-300 hover:text-primary" 
                      : "text-dark-600 hover:text-primary"
                )}
              >
                Projects
              </Link>
              <Link
                href="/education"
                className={cn(
                  "font-medium transition-colors",
                  isActive("/education")
                    ? "text-primary"
                    : theme === "dark" 
                      ? "text-gray-300 hover:text-primary" 
                      : "text-dark-600 hover:text-primary"
                )}
              >
                Education
              </Link>
              <Link
                href="/contact"
                className={cn(
                  "font-medium transition-colors",
                  isActive("/contact")
                    ? "text-primary"
                    : theme === "dark" 
                      ? "text-gray-300 hover:text-primary" 
                      : "text-dark-600 hover:text-primary"
                )}
              >
                Contact
              </Link>
            </nav>
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button
              onClick={toggleMenu}
              className={cn(
                "focus:outline-none",
                theme === "dark" ? "text-white" : "text-dark-800"
              )}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-4 space-y-1">
              <Link
                href="/"
                onClick={closeMenu}
                className={cn(
                  "block px-3 py-2 rounded-md font-medium transition-colors",
                  isActive("/")
                    ? "text-primary"
                    : theme === "dark"
                      ? "text-gray-300 hover:text-primary hover:bg-dark-800"
                      : "text-dark-600 hover:text-primary hover:bg-gray-50"
                )}
              >
                Home
              </Link>
              <Link
                href="/projects"
                onClick={closeMenu}
                className={cn(
                  "block px-3 py-2 rounded-md font-medium transition-colors",
                  isActive("/projects")
                    ? "text-primary"
                    : theme === "dark"
                      ? "text-gray-300 hover:text-primary hover:bg-dark-800"
                      : "text-dark-600 hover:text-primary hover:bg-gray-50"
                )}
              >
                Projects
              </Link>
              <Link
                href="/education"
                onClick={closeMenu}
                className={cn(
                  "block px-3 py-2 rounded-md font-medium transition-colors",
                  isActive("/education")
                    ? "text-primary"
                    : theme === "dark"
                      ? "text-gray-300 hover:text-primary hover:bg-dark-800"
                      : "text-dark-600 hover:text-primary hover:bg-gray-50"
                )}
              >
                Education
              </Link>
              <Link
                href="/contact"
                onClick={closeMenu}
                className={cn(
                  "block px-3 py-2 rounded-md font-medium transition-colors",
                  isActive("/contact")
                    ? "text-primary"
                    : theme === "dark"
                      ? "text-gray-300 hover:text-primary hover:bg-dark-800"
                      : "text-dark-600 hover:text-primary hover:bg-gray-50"
                )}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
