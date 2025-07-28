const Logo = ({ className = "", size = "default" }: { className?: string; size?: "sm" | "default" | "lg" }) => {
  const sizeClasses = {
    sm: "w-8 h-8",
    default: "w-10 h-10",
    lg: "w-12 h-12"
  };

  return (
    <div className={`${sizeClasses[size]} ${className}`}>
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Outer diamond shape */}
        <path
          d="M50 5 L85 35 L85 65 L50 95 L15 65 L15 35 Z"
          fill="hsl(var(--primary))"
          className="transition-colors duration-300"
        />
        
        {/* Inner diamond shape */}
        <path
          d="M50 20 L70 40 L70 60 L50 80 L30 60 L30 40 Z"
          fill="hsl(var(--background))"
          className="transition-colors duration-300"
        />
        
        {/* Central diamond */}
        <path
          d="M50 35 L60 45 L60 55 L50 65 L40 55 L40 45 Z"
          fill="hsl(var(--primary))"
          className="transition-colors duration-300"
        />
        
        {/* Inner core */}
        <rect
          x="47"
          y="47"
          width="6"
          height="6"
          fill="hsl(var(--background))"
          className="transition-colors duration-300"
        />
      </svg>
    </div>
  );
};

export default Logo;