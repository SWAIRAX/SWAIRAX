interface CubeProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

const Cube3D = ({ className = "", size = "md" }: CubeProps) => {
  const sizeClasses = {
    sm: "w-12 h-12",
    md: "w-16 h-16",
    lg: "w-24 h-24"
  };

  return (
    <div className={`${sizeClasses[size]} ${className} animate-float`}>
      <div className="relative w-full h-full perspective-1000">
        <div className="absolute inset-0 transform-style-preserve-3d animate-spin-slow">
          {/* Front face */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/40 border border-primary/30 transform translateZ-8"></div>
          {/* Back face */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/30 border border-primary/20 transform rotateY-180 translateZ-8"></div>
          {/* Top face */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-primary/50 border border-primary/40 transform rotateX-90 translateZ-8"></div>
          {/* Bottom face */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/20 border border-primary/20 transform rotateX-neg-90 translateZ-8"></div>
          {/* Left face */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/15 to-primary/35 border border-primary/25 transform rotateY-neg-90 translateZ-8"></div>
          {/* Right face */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/25 to-primary/45 border border-primary/35 transform rotateY-90 translateZ-8"></div>
        </div>
      </div>
    </div>
  );
};

export default Cube3D;