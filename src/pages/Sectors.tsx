import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Header from "@/components/Header";
import { openMeeting } from "@/utils/meeting";
import Footer from "@/components/Footer";
import Parallax from "@/components/Parallax";
import HeroBackdrop from "@/components/HeroBackdrop";
import SectionDivider from "@/components/SectionDivider";
import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/section";
import { useNavigationWithScroll } from "@/utils/navigation";
import { ArrowRight } from "lucide-react";
import { sectors } from "@/data/sectors";

const Sectors = () => {
  const { navigateToTop, scrollToSection } = useNavigationWithScroll();
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const ctaImageSrc = mounted
    ? resolvedTheme === "dark"
      ? "/services/hero-network-dark.gif"
      : "/services/hero-network-light.gif"
    : "/services/hero-network-light.gif";

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Hero — blog-style: dotted red pattern, light editorial headline */}
      <section className="relative overflow-hidden text-white pt-36 pb-24 sm:pt-44 sm:pb-32 lg:pt-52 lg:pb-40">
        {/* dotted red pattern background — drifts on scroll for depth */}
        <Parallax speed={-0.25} clamp={150} className="absolute inset-x-0 -inset-y-[24%] h-[148%]">
          <div
            className="absolute inset-0"
            style={{
              backgroundColor: "rgb(0,0,0)",
              backgroundSize: "40px 40px",
              backgroundImage:
                "linear-gradient(45deg, rgba(214,46,10,0.35), transparent 40%), linear-gradient(-90deg, rgba(214,46,10,0.35), transparent 20%)",
            }}
          />
        </Parallax>
        {/* dark gradient so the white type stays legible */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/65 via-black/35 to-black/10" />
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl lg:ml-[32%]">
            <p className="mb-6 pl-6 text-xs font-semibold uppercase tracking-[0.25em] text-white/70">
              Sectors We Empower
            </p>
            <h1 className="pl-6 text-5xl font-light leading-[1.03] tracking-tight text-white drop-shadow-sm sm:text-6xl lg:text-7xl">
              Industries we help <span className="italic">produce more.</span>
            </h1>
            <div className="relative mt-10 inline-flex">
              {/* crosshair lines emanating from the button edges */}
              <span className="pointer-events-none absolute top-1/2 right-full h-px w-screen -translate-y-1/2 bg-white/80" />
              <span className="pointer-events-none absolute top-1/2 left-full h-px w-screen -translate-y-1/2 bg-white/80" />
              <span className="pointer-events-none absolute bottom-full left-0 h-screen w-px bg-white/80" />
              <span className="pointer-events-none absolute top-full left-0 h-[200vh] w-px bg-white/80" />
              <button
                onClick={() => scrollToSection("sectors-list")}
                className="group relative z-10 inline-flex items-center gap-3 py-3 pr-4 text-sm font-semibold uppercase tracking-[0.2em] text-white drop-shadow-sm"
              >
                <span className="h-3 w-3 rounded-full bg-[#eb0000] transition-transform duration-300 group-hover:scale-150" />
                Explore sectors
              </button>
            </div>
          </div>
        </div>

        {/* Transparent brand graphic — small, anchored to the left, blends into the dark hero */}
        <img
          src="/SWAY.png"
          alt="SWAIRAX"
          className="pointer-events-none absolute left-4 top-1/2 z-10 hidden w-40 -translate-y-1/2 object-contain sm:left-10 lg:left-16 lg:block lg:w-52 xl:w-56"
        />
      </section>

      {/* Intro — editorial statement, closed by an interlocking matrix divider */}
      <section className="bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-14 sm:py-20 lg:py-24">
            <div className="grid gap-6 lg:grid-cols-[1fr_2.4fr] lg:gap-12">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
                Built for your industry.
              </p>
              <p className="max-w-3xl text-2xl font-light leading-snug text-foreground sm:text-3xl lg:text-[2.4rem] lg:leading-[1.25]">
                Whatever you produce, serve, or sell, SWAIRAX helps you do it smarter — with AI, data
                science, cybersecurity, and software engineering built for African realities. These
                are the sectors where we create the most impact.
              </p>
            </div>
          </div>
        </div>
        <SectionDivider variant="ring" className="-mb-px w-full bg-background text-[#b3210a]" />
      </section>

      {/* Sector list — numbered editorial rows on a red background (Research style) */}
      <section
        id="sectors-list"
        className="bg-[#b3210a] text-white pt-14 pb-16 sm:pt-16 sm:pb-20 lg:pb-24"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <p className="mb-2 border-t border-white/25 pt-6 text-xs font-semibold uppercase tracking-[0.25em] text-white/70">
            Sectors We Empower
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-10 lg:gap-x-16">
            {sectors.map((sector, index) => (
              <button
                key={sector.slug}
                onClick={() => navigateToTop(`/sectors/${sector.slug}`)}
                className="group block w-full border-t border-white/20 text-left transition-colors hover:bg-white/5"
              >
                <div className="flex gap-5 py-8 sm:gap-6 lg:py-10">
                  <span className="text-2xl font-light tabular-nums text-white sm:pt-1">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="flex-1">
                    <h3 className="mb-2 text-xl font-normal text-white transition-colors group-hover:text-white/80 sm:text-2xl">
                      {sector.name}.
                    </h3>
                    <p className="text-sm leading-relaxed text-white/75 sm:text-base">
                      {sector.description}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {sector.solutions.map((s) => (
                        <span
                          key={s}
                          className="rounded-full border border-white/30 px-3 py-1 text-xs text-white/80"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                  <ArrowRight className="hidden h-5 w-5 shrink-0 self-center text-white/70 transition-all group-hover:translate-x-1 group-hover:text-white lg:block" />
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* CTA — same combined panel style as the Services page */}
      <section className="relative overflow-hidden pt-16 sm:pt-20 lg:pt-24 pb-40 sm:pb-44 lg:pb-48 bg-background">
        <HeroBackdrop />
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-10">
          {/* Text + visual combined into one panel; the image fades into the
              card via a gradient so the two halves read as a single block. */}
          <ScrollReveal className="group mx-auto max-w-5xl overflow-hidden rounded-2xl border border-border bg-card shadow-[0_18px_50px_-28px_rgba(15,23,42,0.4)]">
            <div className="grid grid-cols-1 items-stretch lg:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4 p-8 md:p-10">
                <Heading as="h2" size="h2" className="font-bold leading-tight text-foreground">
                  Don't see your sector?
                </Heading>
                <p className="max-w-xl text-sm leading-relaxed text-foreground/85 md:text-base">
                  If your business produces, serves, or sells — we can help you do it smarter. Tell us
                  your challenge and we'll recommend the right solution.
                </p>
                <div className="flex flex-col items-start gap-3 pt-1 sm:flex-row">
                  <Button
                    className="h-10 w-auto bg-primary px-4 py-2 text-sm text-primary-foreground hover:bg-primary/90 sm:h-12 sm:px-6 sm:py-3 sm:text-base"
                    onClick={() => openMeeting()}
                  >
                    Talk to Us →
                  </Button>
                </div>
              </div>

              <div className="relative min-h-[240px] lg:min-h-full">
                <img
                  src={ctaImageSrc}
                  alt="SWAIRAX in motion"
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                {/* fade the image into the card so there's no hard seam */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-card via-card/20 to-transparent lg:bg-gradient-to-r" />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Sectors;
