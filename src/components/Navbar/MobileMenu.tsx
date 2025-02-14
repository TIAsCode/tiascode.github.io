import React from "react";
import { Link } from "react-router-dom";
import { User } from "lucide-react";
import { NavItem } from "./types";

interface MobileMenuProps {
  isOpen: boolean;
  navItems: NavItem[];
  isActive: (path: string) => boolean;
  onClose: () => void;
  onAuthClick: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  navItems,
  isActive,
  onClose,
  onAuthClick,
}) => {
  if (!isOpen) return null;

  return (
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
            onClick={onClose}
          >
            {icon}
            {label}
          </Link>
        ))}
        <button
          onClick={() => {
            onAuthClick();
            onClose();
          }}
          className="w-full flex items-center gap-2 px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors"
        >
          <User size={18} />
          Account
        </button>
      </div>
    </div>
  );
};

export default MobileMenu;
