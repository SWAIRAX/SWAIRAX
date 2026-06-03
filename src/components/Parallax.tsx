import React from "react";
import { useParallax } from "@/hooks/useParallax";

interface ParallaxProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Fraction of distance-from-viewport-centre to shift. + = down/slower, - = up/faster. */
  speed?: number;
  axis?: "x" | "y";
  /** Optional max |offset| in px so background layers never reveal their edges. */
  clamp?: number;
}

/**
 * Drop-in parallax layer. Wrap any decorative/background element:
 *   <Parallax speed={-0.08} className="absolute inset-0">…</Parallax>
 * For background images, oversize the inner element (e.g. -inset-y-[12%] h-[124%])
 * or pass a `clamp` so the shift never exposes an edge.
 */
const Parallax = ({ speed = 0.12, axis = "y", clamp = 0, className, children, ...props }: ParallaxProps) => {
  const ref = useParallax<HTMLDivElement>(speed, axis, clamp);
  return (
    <div ref={ref} className={className} {...props}>
      {children}
    </div>
  );
};

export default Parallax;
