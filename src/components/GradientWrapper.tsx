import React from "react";

interface IconWrapperProps {
  children: React.ReactNode;
  size?: "sm" | "md" | "lg";
}

const IconWrapper: React.FC<IconWrapperProps> = ({ children, size = "md" }) => {
  const sizeClasses = {
    sm: "w-5 h-5",
    md: "w-12 h-12",
    lg: "w-16 h-16",
  };

  const childSizeClasses = {
    sm: "w-4 h-4",
    md: "w-6 h-6",
    lg: "w-8 h-8",
  };

  return (
    <div
      className={`bg-primary/10 rounded-xl p-2 ${sizeClasses[size]} flex items-center justify-center`}
    >
      {React.cloneElement(children as React.ReactElement, {
        className: `${childSizeClasses[size]} text-primary`,
      })}
    </div>
  );
};

export default IconWrapper;
