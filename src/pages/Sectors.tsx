import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Parallax from "@/components/Parallax";
import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Heading, Lead } from "@/components/ui/section";
import { useNavigationWithScroll } from "@/utils/navigation";
import { ArrowRight } from "lucide-react";
import { sectors } from "@/data/sectors";

const Sectors = () => {
  const { navigateToTop, scrollToSection } = useNavigationWithScroll();

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
        {/* brand-red glow + dark gradient so the white type stays legible */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(179,33,10,0.5),transparent_60%)]" />
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
          src="/SWAIRAXLOGO.png"
          alt="SWAIRAX"
          className="pointer-events-none absolute left-4 top-1/2 z-10 hidden w-40 -translate-y-1/2 object-contain sm:left-10 lg:left-16 lg:block lg:w-52 xl:w-56"
        />
      </section>

      {/* Intro — top-bordered editorial statement (Research style) */}
      <section className="bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-t border-border py-14 sm:py-20 lg:py-24">
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

      {/* CTA */}
      <section className="py-16 sm:py-20 lg:py-24 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="mx-auto max-w-2xl text-center space-y-5">
            <Heading as="h2" size="h2">
              Don't see your sector?
            </Heading>
            <Lead className="mx-auto">
              If your business produces, serves, or sells — we can help you do it smarter. Tell us
              your challenge and we'll recommend the right solution.
            </Lead>
            <div className="flex justify-center pt-2">
              <Button
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
                onClick={() => navigateToTop("/contact")}
              >
                Talk to Us <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Sectors;
