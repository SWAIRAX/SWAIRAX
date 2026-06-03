import PlexusBackground from "@/components/PlexusBackground";
import Parallax from "@/components/Parallax";

interface HeroBackdropProps {
  className?: string;
  /** Vanta NET background colour (decimal hex). Defaults to the same light
   *  off-white used in the homepage hero. */
  backgroundColor?: number;
}

// Drop-in animated plexus + radial vignette, identical to the homepage hero.
// Usage: parent <section> needs `relative overflow-hidden`; place <HeroBackdrop />
// as the FIRST child and wrap the foreground content with `relative z-10`.
const HeroBackdrop = ({ className = "", backgroundColor = 0xeff1f5 }: HeroBackdropProps) => (
  <>
    {/* Plexus layer drifts on scroll for depth; oversized so it never reveals an edge. */}
    <Parallax speed={-0.22} clamp={150} className="absolute inset-x-0 -inset-y-[24%] h-[148%]">
      <PlexusBackground
        backgroundColor={backgroundColor}
        className={`absolute inset-0 h-full w-full ${className}`}
      />
    </Parallax>
    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,hsl(var(--background)/0.4)_58%,hsl(var(--background)/0.85)_100%)]" />
  </>
);

export default HeroBackdrop;
