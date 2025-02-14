import React from "react";

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
    <path
      d="M60 14H54V26H60M60 26V20H66M60 26V14M72 26V14L78 26L84 14V26"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="fill-none"
    />
    <path
      d="M96 14H90V26H96M102 14V26H108L114 20V14H108M108 20H102"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="fill-none"
    />
    <path
      d="M126 14H120V26H126M132 14V26"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="fill-none"
    />
    {/* INFRASTRUCTURE text */}
    <text
      x="145"
      y="12"
      className="fill-current text-[8px] font-bold tracking-wider"
    >
      INFRASTRUCTURE
    </text>
  </svg>
);

export default Logo;
