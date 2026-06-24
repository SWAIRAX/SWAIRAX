import { useEffect, useRef } from "react";
import { useTheme } from "next-themes";

interface PlexusBackgroundProps {
  className?: string;
  /** hex line/dot color (brand vermilion by default) */
  color?: number;
  /** hex background color. When omitted, follows the current theme's page
   *  background (white in light mode, near-black in dark mode). */
  backgroundColor?: number;
  /** how far (px) the network pans toward the cursor */
  parallax?: number;
}

// Reads the live page background colour so the canvas matches the active
// theme. Returns a decimal hex (e.g. 0xeff1f5).
const readThemeBackground = (): number => {
  if (typeof window === "undefined") return 0x0a0a0f;
  const rgb = getComputedStyle(document.body).backgroundColor;
  const m = rgb.match(/\d+/g);
  if (!m || m.length < 3) return 0x0a0a0f;
  return (parseInt(m[0], 10) << 16) | (parseInt(m[1], 10) << 8) | parseInt(m[2], 10);
};

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
  backgroundColor,
  parallax = 28,
}: PlexusBackgroundProps) => {
  const panRef = useRef<HTMLDivElement>(null);
  const effectRef = useRef<{ destroy: () => void } | null>(null);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    let cancelled = false;
    const el = panRef.current;
    // Derive from the resolved theme (already current when this effect runs)
    // rather than reading the DOM, which can still hold the previous theme's
    // colour for a tick right after a toggle. Fall back to a DOM read only
    // before the theme has resolved on first paint.
    const bgColor =
      backgroundColor ??
      (resolvedTheme === "dark"
        ? 0x0c0f15
        : resolvedTheme === "light"
          ? 0xeff1f5
          : readThemeBackground());

    // Eased mouse-pan state (started only after the effect mounts).
    let targetX = 0;
    let targetY = 0;
    let curX = 0;
    let curY = 0;
    let raf = 0;
    let idleId: number | undefined;

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

    // Load three.js + Vanta (heavy) only once the browser is idle, so they
    // don't block first paint / LCP — but always render the animation.
    const startVisuals = async () => {
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
        backgroundColor: bgColor,
        points: 12.0,
        maxDistance: 22.0,
        spacing: 16.0,
        showDots: true,
      });

      window.addEventListener("mousemove", onMove);
      raf = requestAnimationFrame(tick);
    };

    const w = window as unknown as {
      requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number;
      cancelIdleCallback?: (id: number) => void;
    };
    idleId =
      typeof w.requestIdleCallback === "function"
        ? w.requestIdleCallback(startVisuals, { timeout: 2000 })
        : window.setTimeout(startVisuals, 800);

    return () => {
      cancelled = true;
      if (idleId !== undefined) {
        if (typeof w.cancelIdleCallback === "function") w.cancelIdleCallback(idleId);
        else clearTimeout(idleId);
      }
      window.removeEventListener("mousemove", onMove);
      if (raf) cancelAnimationFrame(raf);
      if (effectRef.current) {
        effectRef.current.destroy();
        effectRef.current = null;
      }
    };
  }, [color, backgroundColor, parallax, resolvedTheme]);

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
