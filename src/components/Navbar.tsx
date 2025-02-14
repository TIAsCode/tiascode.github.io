import { useState, useEffect } from "react";
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
import { Link, useLocation } from "react-router-dom";

const Logo = () => (
  <svg
    width="180"
    height="40"
    viewBox="0 0 180 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="transition-colors"
  >
    {/* Hexagonal Network Icon */}
    <path
      d="M12 8L20 12V24L12 28L4 24V12L12 8Z"
      className="fill-current"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M32 8L40 12V24L32 28L24 24V12L32 8Z"
      className="fill-current"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* TONMOY text */}
    <text
      x="54"
      y="24"
      className="fill-current font-bold text-xl tracking-wider"
      style={{ fontFamily: 'Arial, sans-serif' }}
    >
      TONMOY
    </text>
    {/* INFRASTRUCTURE text */}
    <text
      x="54"
      y="34"
      className="fill-current text-[10px] font-bold tracking-widest"
      style={{ fontFamily: 'Arial, sans-serif' }}
    >
      INFRASTRUCTURE
    </text>
  </svg>
);

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

  const navItems = [
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

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden absolute w-full bg-white shadow-lg">
            <div className="px-4 pt-2 pb-3 space-y-1">
              {navItems.map(({ path, label, icon }) => (
                <Link
                  key={path}
                  to={path}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    isActive(path)
                      ? "text-primary bg-primary/10"
                      : "text-gray-700 hover:text-primary hover:bg-gray-50"
                  } transition-colors flex items-center gap-2`}
                  onClick={() => setIsOpen(false)}
                >
                  {icon}
                  {label}
                </Link>
              ))}
              <button
                onClick={() => {
                  setShowAuthModal(true);
                  setIsOpen(false);
                }}
                className="w-full flex items-center gap-2 px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors"
              >
                <User size={18} />
                Account
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Auth Modal */}
      {showAuthModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6 scale-in">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">
                {isSignUp ? "Create Account" : "Welcome Back"}
              </h2>
              <button
                onClick={() => setShowAuthModal(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X size={24} />
              </button>
            </div>

            <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
              {isSignUp && (
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                    placeholder="John Doe"
                  />
                </div>
              )}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                  placeholder="••••••••"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-white py-2 rounded-lg hover:bg-opacity-90 transition-colors"
              >
                {isSignUp ? "Create Account" : "Sign In"}
              </button>
            </form>

            <div className="mt-4 text-center">
              <p className="text-sm text-gray-600">
                {isSignUp
                  ? "Already have an account?"
                  : "Don't have an account?"}
                <button
                  onClick={() => setIsSignUp(!isSignUp)}
                  className="text-primary hover:text-opacity-90 ml-1 font-medium"
                >
                  {isSignUp ? "Sign In" : "Sign Up"}
                </button>
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
