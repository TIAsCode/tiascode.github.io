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
    {/* TONMOY text with filled paths */}
    <g className="fill-current">
      {/* T */}
      <path d="M54 14H66V16H61V26H59V16H54V14Z" />
      {/* O */}
      <path d="M72 20C72 16.6863 74.6863 14 78 14C81.3137 14 84 16.6863 84 20C84 23.3137 81.3137 26 78 26C74.6863 26 72 23.3137 72 20ZM74 20C74 22.2091 75.7909 24 78 24C80.2091 24 82 22.2091 82 20C82 17.7909 80.2091 16 78 16C75.7909 16 74 17.7909 74 20Z" />
      {/* N */}
      <path d="M90 26V14H92L98 23L104 14H106V26H104V17.5L98.5 25.5H97.5L92 17.5V26H90Z" />
      {/* M */}
      <path d="M108 26V14H110L114 20L118 14H120V26H118V17L114 22L110 17V26H108Z" />
      {/* O */}
      <path d="M126 20C126 16.6863 128.686 14 132 14C135.314 14 138 16.6863 138 20C138 23.3137 135.314 26 132 26C128.686 26 126 23.3137 126 20ZM128 20C128 22.2091 129.791 24 132 24C134.209 24 136 22.2091 136 20C136 17.7909 134.209 16 132 16C129.791 16 128 17.7909 128 20Z" />
      {/* Y */}
      <path d="M144 14H146L150 19L154 14H156L151 20V26H149V20L144 14Z" />
    </g>
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
