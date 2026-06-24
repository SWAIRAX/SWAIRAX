import { useRef, useState, type MouseEvent } from "react";

interface FloatingMockupProps {
  src: string;
  /** Optional dark-theme variant; shown via `dark:` when provided. */
  srcDark?: string;
  alt: string;
  /** Max parallax shift in px when the cursor is at the edge. */
  strength?: number;
  className?: string;
}

/**
 * A free-floating mobile mockup that:
 *  - gently floats up and down (CSS `animate-float`),
 *  - casts a ground shadow so it reads as "standing" on a surface, and
 *  - drifts toward the cursor when the mouse moves near it.
 *
 * The float (translateY) lives on the <img>, while the cursor parallax
 * (translate) lives on the wrapper, so the two transforms compose without
 * fighting each other.
 */
const FloatingMockup = ({ src, srcDark, alt, strength = 22, className = "" }: FloatingMockupProps) => {
  const areaRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = areaRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const dx = (e.clientX - (rect.left + rect.width / 2)) / (rect.width / 2);
    const dy = (e.clientY - (rect.top + rect.height / 2)) / (rect.height / 2);
    const clamp = (v: number) => Math.max(-1, Math.min(1, v));
    setOffset({ x: clamp(dx) * strength, y: clamp(dy) * strength });
  };

  const reset = () => setOffset({ x: 0, y: 0 });

  return (
    <div
      ref={areaRef}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      className={`relative flex items-end justify-center py-8 ${className}`}
    >
      {/* Ground shadow — sits under the phone and pulses with the float. */}
      <div
        aria-hidden
        className="animate-shadow-float pointer-events-none absolute bottom-3 left-1/2 h-5 w-1/2 rounded-[50%] bg-black/50 blur-2xl"
      />

      {/* Cursor-parallax wrapper */}
      <div
        className="relative z-10 transition-transform duration-300 ease-out will-change-transform"
        style={{ transform: `translate3d(${offset.x}px, ${offset.y}px, 0)` }}
      >
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className={`animate-float h-[30rem] w-auto max-w-full object-contain drop-shadow-2xl sm:h-[38rem] lg:h-[44rem] ${srcDark ? "dark:hidden" : ""}`}
        />
        {srcDark && (
          <img
            src={srcDark}
            alt={alt}
            loading="lazy"
            className="animate-float hidden h-[30rem] w-auto max-w-full object-contain drop-shadow-2xl sm:h-[38rem] lg:h-[44rem] dark:block"
          />
        )}
      </div>
    </div>
  );
};

export default FloatingMockup;
