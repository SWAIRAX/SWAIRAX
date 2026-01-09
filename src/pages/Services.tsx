// React imports removed (no hooks needed here)
import { useNavigate } from "react-router-dom";
import { useNavigationWithScroll } from "@/utils/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SectionHeading, SectionLead } from "@/components/typography";
import {
  ArrowRight,
  BarChart3,
  Brain,
  Cog,
  Database,
  Play,
  Rocket,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const Services = () => {
  const navigate = useNavigate();
  const { navigateToTop } = useNavigationWithScroll();

  const heroHighlights = [
    {
      title: "AI that ships",
      description: "Copilots and automations with evals, safety, and uptime baked in.",
      pill: "Production ready",
    },
    {
      title: "Data-first & ethical",
      description: "Human + machine pipelines to keep datasets current, inclusive, and trusted.",
      pill: "Responsible AI",
    },
    {
      title: "Operational MLOps",
      description: "CI/CD, observability, and drift defense so models stay healthy after launch.",
      pill: "Always-on",
    },
  ];

  const services = [
    {
      id: "analytics",
      icon: <Brain className="h-8 w-8" />,
      title: "Deep Operator",
      description:
        "Data-centric platform leveraging Machine Learning & RLHF to help organizations understand impact, learn from their data, measure progress, and make smarter decisions.",
      outcomes: ["Machine Learning & RLHF", "Impact Measurement", "Progress Tracking", "Smart Decision Making"],
      href: "/deep-operator",
      timeline: "4-6 weeks to first lift",
      badge: "Analytics",
    },
    {
      id: "annotate",
      icon: <Database className="h-8 w-8" />,
      title: "Quantum Annotate",
      description:
        "Robust annotation solution supported by a full workforce, offering industry-grade labeling for text, image, audio, and video datasets.",
      outcomes: ["Multi-modal Annotation", "Professional Workforce", "Industry-Grade Quality", "Scalable Solutions"],
      href: "/quantum-annotate",
      timeline: "Launch in days",
      badge: "Data Ops",
    },
    {
      id: "genai",
      icon: <Cog className="h-8 w-8" />,
      title: "Quantum GenAI",
      description:
        "Enhance generative AI model accuracy, reliability, and speed through in-house data expertise and fine-tuning techniques.",
      outcomes: ["Model Fine-tuning", "Data Expertise", "Performance Enhancement", "Speed Optimization"],
      href: "/quantum-genai",
      timeline: "Pilot in 3-4 weeks",
      badge: "GenAI",
    },
    {
      id: "mlops",
      icon: <BarChart3 className="h-8 w-8" />,
      title: "MLOps & DevOps",
      description:
        "Bridge the gap between data science and production with our MLOps expertise and deployment solutions.",
      outcomes: ["Model Deployment", "CI/CD for ML", "Model Monitoring", "Infrastructure as Code"],
      href: "/mlops-devops",
      timeline: "Prod-ready in 6 weeks",
      badge: "Ops",
    },
  ];

  const process = [
    {
      title: "Discovery Sprint",
      description: "Shape the smallest valuable AI slice with measurable success criteria.",
      icon: <Sparkles className="h-5 w-5" />,
    },
    {
      title: "Co-Create & Validate",
      description: "Design, prototype, and test the human-AI loop with your team involved.",
      icon: <ShieldCheck className="h-5 w-5" />,
    },
    {
      title: "Ship & Observe",
      description: "Harden infra, add evaluations, and monitor performance in production.",
      icon: <Rocket className="h-5 w-5" />,
    },
    {
      title: "Optimize",
      description: "Tight feedback loops, cost/perf tuning, and continuous retraining cadence.",
      icon: <BarChart3 className="h-5 w-5" />,
    },
  ];

  const showreel =
    "https://cdn.coverr.co/videos/coverr-abstract-technology-10926/1080p.mp4";

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden pt-24 md:pt-28 pb-14">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-95"
            style={{ backgroundImage: "url('/uploads/services.jpg')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/70 to-black/85" />
          <div className="absolute inset-0 holo-grid opacity-20" />
          <div className="absolute -left-10 top-10 w-64 h-64 aurora-glow opacity-60" />
          <div className="absolute -right-12 bottom-12 w-72 h-72 aurora-glow opacity-60 delay-300" />
        </div>

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-10">
          <div className="max-w-5xl">
            <div className="flex items-center gap-3">
              <Badge className="bg-white/10 text-white border-white/10">AI for every decision</Badge>
              <Badge variant="outline" className="border-red-500/40 text-red-200">
                Built for bold teams
              </Badge>
            </div>
            <SectionHeading className="mt-4 text-left text-4xl md:text-5xl font-black leading-tight bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
              AI-powered automation for every decision, safely in production.
            </SectionHeading>
            <SectionLead className="mt-4 text-left mx-0 max-w-3xl text-muted-foreground text-base md:text-lg">
              From our home and about pages: we’re the data-centric, ethical AI team that blends human talent with resilient MLOps so automation, copilots, and analytics reach production safely and lift business outcomes.
            </SectionLead>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button
                size="lg"
                className="bg-gradient-to-r from-red-600 via-red-500 to-red-400 hover:from-red-500 hover:to-red-500 text-white px-6 md:px-8 py-6 text-base font-semibold shadow-[0_20px_60px_-30px_rgba(255,0,0,0.75)]"
                onClick={() => navigateToTop("/contact")}
              >
                Build with our team <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            {/* <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
              {heroHighlights.map((item) => (
                <div
                  key={item.title}
                  className="relative overflow-hidden rounded-2xl border border-white/5 bg-white/5 px-5 py-4 shadow-[0_20px_60px_-40px_rgba(0,0,0,0.8)] backdrop-blur"
                >
                  <div className="flex items-center gap-2 text-xs text-red-200">
                    <span className="h-2 w-2 rounded-full bg-red-500 animate-pulse-glow" />
                    {item.pill}
                  </div>
                  <h3 className="mt-2 text-lg font-semibold">{item.title}</h3>
                  <p className="text-sm text-white/70 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div> */}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="relative py-12 bg-background">
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-background to-transparent" />
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-red-500/20 bg-red-500/10 px-4 py-1 text-xs uppercase tracking-[0.08em] text-red-100">
                <span className="h-2 w-2 rounded-full bg-red-400 animate-pulse" />
                Our services
              </div>
              <h2 className="mt-3 text-3xl md:text-4xl font-bold bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
                Built to feel vivid and perform.
              </h2>
              <p className="text-base md:text-lg text-muted-foreground max-w-2xl">
                Select the lane you need. We pair bold visuals with resilient engineering so every interaction feels alive and every release feels safe.
              </p>
            </div>
            <Button
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10"
              onClick={() => navigateToTop("/research")}
            >
              View proofs & case notes <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {services.map((service, index) => (
              <Card
                key={service.id}
                className="group relative overflow-hidden border border-red-500/15 bg-gradient-to-br from-neutral-900/80 via-neutral-900/60 to-black shadow-[0_20px_70px_-50px_rgba(0,0,0,0.8)] transition-all duration-500 hover:-translate-y-2 hover:border-red-400/40"
                style={{ animationDelay: `${index * 120}ms` }}
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-red-500/5 via-transparent to-red-500/10" />
                <CardContent className="relative z-10 p-6 space-y-4">
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="rounded-xl bg-white/10 p-3 text-red-200 shadow-inner shadow-red-500/20">
                        {service.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold">{service.title}</h3>
                        <p className="text-xs text-white/60">{service.timeline}</p>
                      </div>
                    </div>
                    <Badge className="bg-white/10 text-white border-white/10">{service.badge}</Badge>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {service.outcomes.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-red-500/30 bg-red-500/10 px-3 py-1 text-xs text-white/80"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-1">
                    <Button
                      variant="ghost"
                      className="p-0 text-white hover:text-red-400 hover:bg-transparent bg-transparent focus-visible:ring-0"
                      onClick={() => navigateToTop(service.href)}
                    >
                      Dive deeper <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                    <div className="relative">
                      <span className="absolute inset-0 rounded-full border border-red-500/30 animate-orbit" />
                      <div className="relative flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/5">
                        <Sparkles className="h-4 w-4 text-red-200" />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="relative py-14">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(255,0,0,0.08),transparent_30%),radial-gradient(circle_at_90%_10%,rgba(255,255,255,0.05),transparent_25%)]" />
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-10">
          <ScrollReveal className="text-center mb-10">
            <h2 className="mt-3 text-3xl md:text-4xl font-bold bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
              How we keep motion & reliability aligned
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
              Every engagement is co-built with you. Clear checkpoints, minimal noise, and a visual-first approach that still honors governance.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
            {process.map((item, index) => (
              <div
                key={item.title}
                className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-neutral-900/80 to-neutral-950/60 p-6 shadow-[0_15px_60px_-50px_rgba(0,0,0,1)]"
              >
                <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-red-500/10 via-transparent to-red-500/10" />
                <div className="relative z-10 space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-red-200">
                      {item.icon}
                    </div>
                    <span className="text-xs text-white/60">0{index + 1}</span>
                  </div>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-sm text-white/70 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA (Live experience moved here) */}
      <section className="py-16 bg-gradient-to-r from-red-600/20 via-black to-red-500/15">
        <div className="container mx-auto px-4 sm:px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <ScrollReveal className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold leading-tight bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
              Motion that sells your core: Analytics, Annotate, GenAI, MLOps.
            </h2>
            <p className="text-muted-foreground text-sm md:text-base max-w-xl">
              We choreograph cinematic motion with real product proof: data-centric analytics, human-led annotation, safety-checked GenAI, and production MLOps. Evals, observability, and on-call rituals keep everything calm in production.
            </p>
            <div className="flex gap-3">
              <Button
                className="bg-red-600 hover:bg-red-500 text-white"
                onClick={() => navigateToTop("/contact")}
              >
                Start a project
              </Button>
              <Button
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10"
                onClick={() => navigateToTop("/careers")}
              >
                Partner with us
              </Button>
            </div>
          </ScrollReveal>

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
                <source src={showreel} type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
