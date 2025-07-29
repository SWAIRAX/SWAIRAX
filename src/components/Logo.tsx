import React from "react";

type LogoProps = {
  className?: string;
  size?: "sm" | "default" | "lg";
  useImage?: boolean;
};

const sizeClasses = {
  sm: "w-8 h-8",
  default: "w-10 h-10",
  lg: "w-12 h-12"
};

const Logo: React.FC<LogoProps> = ({
  className = "",
  size = "default",
  useImage = false
}) => {
  const classes = `${sizeClasses[size]} ${className}`;

  if (useImage) {
    return (
      <img
        src="/uploads/logo.png"
        alt="Logo"
        className={classes}
        style={{ objectFit: "contain" }}
      />
    );
  }

    return (
      <img
        src="/uploads/logo.png"
        alt="Logo"
        className={classes}
        style={{ objectFit: "contain" }}
      />
    );
};

export default Logo;