import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Menu,
  X,
  Home,
  Package,
  Lightbulb,
  Wrench,
  Building2,
  Briefcase,
  User,
} from "lucide-react";
import Logo from "./Logo";
import AuthModal from "./AuthModal";
import MobileMenu from "./MobileMenu";
import { NavItem } from "./types";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  const navItems: NavItem[] = [
    { path: "/", label: "Home", icon: <Home size={18} /> },
    { path: "/products", label: "Products", icon: <Package size={18} /> },
    { path: "/solutions", label: "Solutions", icon: <Lightbulb size={18} /> },
    { path: "/services", label: "Services", icon: <Wrench size={18} /> },
    { path: "/company", label: "Company", icon: <Building2 size={18} /> },
    { path: "/careers", label: "Careers", icon: <Briefcase size={18} /> },
  ];

  return (
    <>
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-white/95 backdrop-blur-sm shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="flex items-center group">
                <div
                  className={`${scrolled ? "text-primary" : "text-white"} hover:text-primary transition-colors`}
                >
                  <Logo />
                </div>
              </Link>
            </div>

            <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
              {navItems.map(({ path, label, icon }) => (
                <Link
                  key={path}
                  to={path}
                  className={`relative font-medium transition-colors ${
                    scrolled ? "text-gray-700" : "text-white"
                  } hover:text-primary group flex items-center gap-1`}
                >
                  {icon}
                  {label}
                  <span
                    className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 ${
                      isActive(path) ? "w-full" : "group-hover:w-full"
                    }`}
                  ></span>
                </Link>
              ))}
              <button
                onClick={() => setShowAuthModal(true)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full border-2 ${
                  scrolled
                    ? "border-primary text-primary hover:bg-primary hover:text-white"
                    : "border-white text-white hover:bg-white hover:text-primary"
                } transition-all duration-300`}
              >
                <User size={18} />
                <span className="hidden sm:inline">Account</span>
              </button>
            </div>

            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`${scrolled ? "text-gray-700" : "text-white"} hover:text-primary transition-colors p-2`}
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        <MobileMenu
          isOpen={isOpen}
          navItems={navItems}
          isActive={isActive}
          onClose={() => setIsOpen(false)}
          onAuthClick={() => setShowAuthModal(true)}
        />
      </nav>

      <AuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        isSignUp={isSignUp}
        onToggleMode={() => setIsSignUp(!isSignUp)}
      />
    </>
  );
};

export default Navbar;
