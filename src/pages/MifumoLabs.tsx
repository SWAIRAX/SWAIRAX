import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Lightbulb,
  Code2,
  Users,
  LayoutDashboard,
  Workflow,
  Sparkles,
} from "lucide-react";
import Header from "@/components/Header";
import ScrollReveal from "@/components/ScrollReveal";
import Footer from "@/components/Footer";
import { useNavigationWithScroll } from "@/utils/navigation";

const labsFeatures = [
  {
    icon: <Lightbulb className="h-6 w-6" />,
    title: "Product discovery",
    description: "Turn fuzzy ideas into validated product concepts with real user input.",
  },
  {
    icon: <Code2 className="h-6 w-6" />,
    title: "Rapid prototyping",
    description: "Ship clickable prototypes and MVPs in weeks, not months.",
  },
  {
    icon: <Workflow className="h-6 w-6" />,
    title: "End-to-end delivery",
    description: "From design sprints to production-grade platforms under one roof.",
  },
  {
    icon: <LayoutDashboard className="h-6 w-6" />,
    title: "Operational dashboards",
    description: "Give teams visibility into performance, adoption, and impact.",
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Co-creation",
    description: "We work alongside your teams, not in a black box.",
  },
  {
    icon: <Sparkles className="h-6 w-6" />,
    title: "AI-native",
    description: "Bring GenAI and analytics into your products from day one.",
  },
];

const MifumoLabs = () => {
  const { navigateToTop } = useNavigationWithScroll();

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Header />

      {/* Hero – same style as Mifumo SMS */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03] bg-cover bg-center"
          style={{ backgroundImage: "url('/OUR WORK/MIFUMOLABS.png')" }}
          aria-hidden
        />
        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal className="space-y-6">
              <Badge variant="outline" className="border-primary/20 text-primary">
                Our Work · Product Studio
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                <span className="text-primary">Mifumo Labs</span>
              </h1>
              <p className="text-xl md:text-2xl font-semibold text-foreground">
                We build digital products people actually want.
              </p>
              <p className="text-muted-foreground text-lg max-w-xl">
                A human-centered software studio partnering with organizations to design and ship
                impactful digital systems for Africa—fast iterations, deep research, and measurable outcomes.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  onClick={() => navigateToTop("/contact")}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3"
                >
                  Talk to our team
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => window.open("https://mifumolabs.com/", "_blank")}
                  className="border-primary/30 text-primary hover:bg-primary/10 px-6 py-3"
                >
                  Visit mifumolabs.com
                </Button>
              </div>
            </ScrollReveal>

            {/* Device mockup – Labs hero visual */}
            <ScrollReveal>
              <div className="relative max-w-xl mx-auto">
                <img
                  src="/OUR WORK/MIFUMOLABS.png"
                  alt="Mifumo Labs hero"
                  className="w-full h-auto drop-shadow-2xl rounded-3xl"
                  draggable={false}
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Desktop dashboard – ContainerScroll (desktop only) */}
      <section className="relative hidden md:block py-8">
        <ContainerScroll
          titleComponent={
            <div className="text-center space-y-2">
              <Badge variant="outline" className="border-primary/20 text-primary">
                Studio dashboard
              </Badge>
              <h2 className="text-2xl md:text-4xl font-bold text-foreground">
                From brief to launch in a single workspace
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto text-sm md:text-base">
                Track experiments, prototypes, and roll-outs across all your digital products.
              </p>
            </div>
          }
        >
          <img
            src="/OUR WORK/mifumocover.png"
            alt="Mifumo Labs studio dashboard"
            className="mx-auto h-full w-auto max-w-full object-contain rounded-2xl"
            draggable={false}
          />
        </ContainerScroll>
      </section>

      {/* Features grid – reuse SaaS layout */}
      <section className="py-12 md:py-16 bg-card/30">
        <div className="max-w-[1200px] mx-auto px-6">
          <ScrollReveal className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">A studio built for shipping</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Strategy, design, engineering, and AI capabilities brought together for ambitious teams.
            </p>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {labsFeatures.map((f, i) => (
              <ScrollReveal key={f.title} delay={i * 60}>
                <div className="p-6 rounded-2xl bg-background/80 border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300 group">
                  <div className="text-primary mb-3 group-hover:scale-110 transition-transform">
                    {f.icon}
                  </div>
                  <h3 className="font-semibold mb-2">{f.title}</h3>
                  <p className="text-sm text-muted-foreground">{f.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Storytelling 1 – discovery */}
      <section className="py-12 md:py-16">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div className="relative max-w-sm md:max-w-md mx-auto">
                <div className="absolute inset-[9%] left-[22%] right-[22%] bottom-[9%] rounded-2xl overflow-hidden z-0">
                  <img
                    src="/OUR WORK/mobile cover2.png"
                    alt="Mifumo Labs mobile UI"
                    className="h-full w-full object-cover"
                    draggable={false}
                  />
                </div>
                <img
                  src="/OUR WORK/mobile1.webp"
                  alt="Discovery sessions"
                  className="relative z-10 w-full h-auto"
                  draggable={false}
                />
              </div>
            </ScrollReveal>
            <ScrollReveal className="space-y-4">
              <Badge variant="outline" className="border-primary/20 text-primary">
                Discovery
              </Badge>
              <h2 className="text-3xl md:4xl font-bold">Workshops that start with real users</h2>
              <p className="text-muted-foreground">
                We run design sprints, field interviews, and rapid experiments with your teams and your
                customers to make sure we are solving the right problem before writing a single line of code.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Storytelling 2 – delivery */}
      <section className="py-12 md:py-16 bg-card/30">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal className="space-y-4 order-2 lg:order-1">
              <Badge variant="outline" className="border-primary/20 text-primary">
                Delivery
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold">From prototype to production</h2>
              <p className="text-muted-foreground">
                Mifumo Labs teams handle architecture, DevOps, quality, and handover so your systems can
                scale—whether it is SMS, web, mobile, or on-prem integrations.
              </p>
            </ScrollReveal>
            <ScrollReveal className="order-1 lg:order-2">
              <div className="relative max-w-sm mx-auto">

              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA – same style as Mifumo SMS */}
      <section className="py-10 bg-gradient-to-r from-red-600/20 via-black to-red-500/15">
        <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <ScrollReveal className="space-y-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
              Ready to build your next product with Quantum Intelligence?
            </h2>
            <p className="text-muted-foreground text-sm md:text-base max-w-lg">
              Whether you are a startup, NGO, or enterprise, Mifumo Labs helps you design, build, and
              launch digital systems that users actually love.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button
                className="bg-red-600 hover:bg-red-500 text-white"
                onClick={() => navigateToTop("/contact")}
              >
                Book discovery call
              </Button>
              <Button
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10"
                onClick={() => navigateToTop("/our-work")}
              >
                View more work
              </Button>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <div className="relative group overflow-hidden rounded-2xl border border-red-500/20 bg-gradient-to-br from-neutral-900 via-neutral-900/70 to-black shadow-[0_30px_100px_-60px_rgba(255,0,0,0.6)]">
              <div className="absolute -inset-12 bg-gradient-to-r from-red-500/20 via-transparent to-red-500/20 blur-3xl opacity-40 group-hover:opacity-60 transition-opacity duration-700" />
              <div className="relative">
                <video
                  className="h-full w-full object-cover animate-pan-slow"
                  autoPlay
                  loop
                  muted
                  playsInline
                  poster="/uploads/Quantum.png"
                >
                  <source src="https://cdn.coverr.co/videos/coverr-abstract-technology-10926/1080p.mp4" type="video/mp4" />
                </video>
                <div
                  className="absolute inset-0 bg-center bg-cover"
                  style={{ backgroundImage: "url('/uploads/CTA%20GIF.gif')" }}
                  aria-hidden="true"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MifumoLabs;
