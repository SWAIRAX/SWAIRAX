import { useEffect, useRef } from "react";

interface HeroDividerProps {
  className?: string;
  /** degrees of rotation per pixel scrolled */
  spinFactor?: number;
}

/**
 * Red "data-matrix" divider at the bottom of the hero — the maze of red blocks
 * with a central scroll-ring, matching the lecdt.com divider. The white facing
 * arcs in the ring rotate in sync with scroll position (scroll up/down spins
 * them), like lecdt's `transform: rotate(...)` indicator.
 * Vector shape (viewBox 1920x150), fills with `currentColor`.
 */
const HeroDivider = ({ className = "", spinFactor = 0.45 }: HeroDividerProps) => {
  const spinnerRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = spinnerRef.current;
    if (!el) return;
    let raf = 0;
    const apply = () => {
      raf = 0;
      el.style.transform = `rotate(${window.scrollY * spinFactor}deg)`;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(apply);
    };
    apply();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [spinFactor]);

  return (
    <div className={`flex justify-center ${className}`} aria-hidden="true">
      <svg
        viewBox="0 0 1920 150"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        preserveAspectRatio="xMidYMax meet"
        className="block h-auto w-full min-w-[1000px] shrink-0"
        style={{ filter: "drop-shadow(0 0 8px rgba(255, 0, 0, 0.45))" }}
      >
        <path d="M153.563 98.2822H255.94V72.6885H281.534V123.877H358.316V47.0947H383.911L383.91 98.2822H460.692V72.6885H486.287V123.877H460.692V149.471H435.099V123.877H383.91V149.471H255.94V123.877H153.563V149.471H0V72.6885H25.5938V123.877H127.97V98.2822H51.1875V72.6885H127.97V47.0947H153.564L153.563 98.2822Z" />
        <path d="M904 0C904 7.41968 905.461 14.7672 908.301 21.6221C911.14 28.4768 915.302 34.7048 920.549 39.9512C925.795 45.1976 932.023 49.3598 938.878 52.1992C945.733 55.0386 953.08 56.5 960.5 56.5C967.92 56.5 975.267 55.0386 982.122 52.1992C988.977 49.3598 995.205 45.1976 1000.45 39.9512C1005.7 34.7048 1009.86 28.4768 1012.7 21.6221C1015.54 14.7672 1017 7.41969 1017 0H1037C1037 10.0461 1035.02 19.994 1031.18 29.2754C1027.33 38.5568 1021.7 46.9901 1014.59 54.0938C1007.49 61.1974 999.057 66.8323 989.775 70.6768C984.322 72.9355 978.639 74.5493 972.841 75.4971V98.2822H1049.54L1049.54 47.0947H1075.13V123.877H1151.91V149.471H1049.54V123.877H998.348V149.471H972.753V123.877H947.247V149.471H921.652V123.877H870.464V149.471H742.494V123.877H640.118V149.471H486.554V72.6885H512.147V123.877H614.524V98.2822H537.742V72.6885H614.524V47.0947H640.118V98.2822H742.494V72.6885H768.089L768.088 123.877H844.87V47.0947H870.465L870.464 98.2822H947.159V75.3262C941.708 74.3607 936.364 72.8055 931.225 70.6768C921.943 66.8323 913.51 61.1974 906.406 54.0938C899.303 46.9901 893.668 38.5568 889.823 29.2754C885.979 19.994 884 10.0461 884 0H904Z" />
        <path d="M1305.48 72.6885H1382.26V98.2822H1305.48L1305.48 123.877H1407.85V149.471H1279.88V123.877H1177.51V149.471H1151.91L1151.91 72.6885H1177.51V98.2822H1279.88V47.0947H1305.48V72.6885Z" />
        <path d="M1433.45 149.471H1407.85L1407.85 72.6885H1433.45V149.471Z" />
        <path d="M1561.68 123.877H1638.47V72.6885H1664.06V98.2822H1766.44L1766.44 47.0947H1792.03V72.6885H1868.81V98.2822H1792.03V123.877H1894.41V72.6885H1920V149.471H1766.44V123.877H1664.06V149.471H1536.09V123.877H1484.9V149.471H1459.31V123.877H1433.71L1433.71 72.6885H1459.31V98.2822H1536.09L1536.09 47.0947H1561.68V123.877Z" />
        <path d="M332.723 98.2822H307.128V47.0947H332.723V98.2822Z" />
        <path d="M819.276 98.2822H793.683V47.0947H819.276V98.2822Z" />
        <path d="M1126.32 98.2822H1100.72V47.0947H1126.32V98.2822Z" />
        <path d="M1612.87 98.2822H1587.28V47.0947H1612.87V98.2822Z" />
        <path d="M255.94 72.6885H204.752V21.5H255.94V72.6885Z" />
        <path d="M742.494 72.6885H691.307V21.5H742.494V72.6885Z" />
        <path d="M1228.69 72.6885H1177.51V21.5H1228.69L1228.69 72.6885Z" />
        <path d="M1715.25 72.6885H1664.06V21.5H1715.25V72.6885Z" />
      </svg>

      {/* Scroll-driven facing-arcs indicator in the center ring (white left/right
          borders, transparent top/bottom). Wrapper centers it; inner span is
          rotated by the scroll handler. */}
      <div className="absolute left-1/2 top-[6%] -translate-x-1/2 -translate-y-1/2">
        <span
          ref={spinnerRef}
          className="block h-10 w-10 sm:h-12 sm:w-12 lg:h-14 lg:w-14 rounded-full border-4 border-y-transparent border-x-black will-change-transform"
        />
      </div>
    </div>
  );
};

export default HeroDivider;
