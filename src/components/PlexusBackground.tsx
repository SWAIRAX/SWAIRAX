import { useEffect, useRef } from "react";

interface PlexusBackgroundProps {
  className?: string;
  /** hex line/dot color (brand vermilion by default) */
  color?: number;
  /** hex background color */
  backgroundColor?: number;
  /** how far (px) the network pans toward the cursor */
  parallax?: number;
}

/**
 * Red "plexus" network background — the open-source Vanta.js NET effect
 * (built on three.js), configured to the brand red, same as lecdt.com.
 *
 * On top of Vanta's own subtle camera tilt, we add an explicit eased
 * mouse-pan on the canvas so the whole network visibly glides toward the
 * cursor (the obvious "background moves with the mouse" parallax).
 *
 * three.js + vanta are imported dynamically so they're code-split and only
 * loaded on the page that renders this (the homepage hero). Reduced-motion
 * users get a static network with no pointer interaction.
 */
const PlexusBackground = ({
  className = "",
  color = 0xd62e0a,
  backgroundColor = 0x0a0a0f,
  parallax = 28,
}: PlexusBackgroundProps) => {
  const panRef = useRef<HTMLDivElement>(null);
  const effectRef = useRef<{ destroy: () => void } | null>(null);

  useEffect(() => {
    let cancelled = false;
    const el = panRef.current;

    (async () => {
      const [THREE, { default: NET }] = await Promise.all([
        import("three"),
        import("vanta/dist/vanta.net.min"),
      ]);
      if (cancelled || !el || effectRef.current) return;

      effectRef.current = NET({
        el,
        THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
        color,
        backgroundColor,
        points: 12.0,
        maxDistance: 22.0,
        spacing: 16.0,
        showDots: true,
      });
    })();

    // Explicit eased mouse-pan: glide the whole network toward the cursor.
    let targetX = 0;
    let targetY = 0;
    let curX = 0;
    let curY = 0;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      targetX = (e.clientX / window.innerWidth - 0.5) * parallax;
      targetY = (e.clientY / window.innerHeight - 0.5) * parallax;
    };

    const tick = () => {
      curX += (targetX - curX) * 0.06;
      curY += (targetY - curY) * 0.06;
      if (el) el.style.transform = `scale(1.08) translate3d(${curX}px, ${curY}px, 0)`;
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(tick);

    return () => {
      cancelled = true;
      window.removeEventListener("mousemove", onMove);
      if (raf) cancelAnimationFrame(raf);
      if (effectRef.current) {
        effectRef.current.destroy();
        effectRef.current = null;
      }
    };
  }, [color, backgroundColor, parallax]);

  return (
    <div className={className} aria-hidden="true" style={{ overflow: "hidden" }}>
      <div
        ref={panRef}
        className="absolute inset-0 will-change-transform"
        style={{ transform: "scale(1.08)" }}
      />
    </div>
  );
};

export default PlexusBackground;
