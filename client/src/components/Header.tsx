import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [location] = useLocation();

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
        "fixed w-full bg-white shadow-sm z-50 transition-shadow duration-300",
        scrollPosition > 10 && "shadow-md"
      )}
    >
      <div className="container-custom">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-poppins font-bold">
              <span className="text-dark">Harish</span>
              <span className="text-primary">Chavan</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link
              href="/"
              className={cn(
                "font-medium transition-colors",
                isActive("/")
                  ? "text-primary"
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
                  : "text-dark-600 hover:text-primary"
              )}
            >
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-dark-800 focus:outline-none"
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
                    ? "text-primary bg-gray-50"
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
                    ? "text-primary bg-gray-50"
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
                    ? "text-primary bg-gray-50"
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
                    ? "text-primary bg-gray-50"
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
