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
import { TextRevealCard } from "@/components/ui/text-reveal-card";
import {
  ArrowRight,
  BarChart3,
  Brain,
  Cog,
  Database,
  Lightbulb,
  Play,
  Rocket,
  ShieldCheck,
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
        "Data-centric platform leveraging Machine Learning & RLHF to help organizations understand impactt of their work, learn from their data, measure progress, and make smarter decisions.",
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
      icon: <Lightbulb className="h-5 w-5" />,
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
            </div>
            <SectionHeading className="mt-4 text-left text-4xl md:text-5xl font-black leading-tight bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
              AI-powered automation for every decision, safely in production.
            </SectionHeading>
            <SectionLead className="mt-4 text-left mx-0 max-w-none text-muted-foreground text-base md:text-lg">
              From our home and about pages: we’re the data-centric, ethical AI team that blends human talent with resilient MLOps so automation, copilots, and analytics reach production safely and lift business outcomes.
            </SectionLead>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-base font-semibold shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300"
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
      <section className="relative py-16 md:py-20 bg-background">
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-background to-transparent" />
        <div className="absolute top-1/4 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
        
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-10">
          <div className="flex flex-col md:flex-row items-start md:items-center md:justify-between gap-6 mb-10">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs uppercase tracking-[0.08em] text-primary-foreground mb-4">
                <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                Our services
              </div>
              <ScrollReveal>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black leading-tight bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent mb-4">
                  Built to feel vivid and perform.
                </h2>
              </ScrollReveal>
              <p className="text-base md:text-lg text-muted-foreground max-w-2xl">
                Select the lane you need. We pair bold visuals with resilient engineering so every interaction feels alive and every release feels safe.
              </p>
              <Button
                variant="outline"
                className="border-border text-foreground hover:bg-primary/10 hover:border-primary/50 w-fit mt-6 transition-all duration-300"
                onClick={() => navigateToTop("/research")}
              >
                View proofs & case notes <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <ScrollReveal key={service.id} delay={index * 100}>
                <Card
                  className="group relative overflow-hidden border border-border/50 hover:border-primary/50 bg-gradient-to-br from-card via-card/80 to-background shadow-lg hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-2 h-full"
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-primary/5 via-transparent to-primary/10" />
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <CardContent className="relative z-10 p-6 lg:p-8 space-y-4">
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-4 min-w-0 flex-1">
                        <div className="rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 p-3 lg:p-4 text-primary shadow-inner shadow-primary/10 shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                          {service.icon}
                        </div>
                        <div className="min-w-0 flex-1">
                          <h3 className="text-lg lg:text-xl font-bold leading-tight text-foreground group-hover:text-primary transition-colors">{service.title}</h3>
                        </div>
                      </div>
                      <Badge className="bg-primary/10 text-primary border-primary/20 text-xs shrink-0">{service.badge}</Badge>
                    </div>

                    <p className="text-sm lg:text-base text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors">{service.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {service.outcomes.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-border bg-muted/50 px-3 py-1 text-xs text-muted-foreground group-hover:border-primary/30 group-hover:bg-primary/5 transition-colors"
                        >
                          {item}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center pt-2">
                      <Button
                        variant="ghost"
                        className="p-0 text-sm text-primary hover:text-primary/80 hover:bg-transparent bg-transparent focus-visible:ring-0 group-hover:translate-x-2 transition-transform duration-300"
                        onClick={() => navigateToTop(service.href)}
                      >
                        Dive deeper <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="relative py-16 md:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,hsl(var(--primary)/0.08),transparent_30%),radial-gradient(circle_at_90%_10%,hsl(var(--foreground)/0.05),transparent_25%)]" />
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-10">
          <ScrollReveal className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black leading-tight bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent mb-4">
              How we keep motion & reliability aligned
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
              Every engagement is co-built with you. Clear checkpoints, minimal noise, and a visual-first approach that still honors governance.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((item, index) => (
              <ScrollReveal key={item.title} delay={index * 100}>
                <div className="group relative overflow-hidden rounded-2xl border border-border/50 hover:border-primary/50 bg-gradient-to-b from-card via-card/80 to-background p-6 lg:p-8 shadow-lg hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-2 h-full">
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-primary/10 via-transparent to-primary/5" />
                  <div className="relative z-10 space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 text-primary group-hover:scale-110 transition-transform duration-300">
                        {item.icon}
                      </div>
                      <span className="text-sm font-bold text-primary/60 group-hover:text-primary transition-colors">0{index + 1}</span>
                    </div>
                    <h3 className="text-lg lg:text-xl font-bold text-foreground group-hover:text-primary transition-colors">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors">{item.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-primary/15 via-background to-primary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          <ScrollReveal className="space-y-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
              Motion that sells your core: Analytics, Annotate, GenAI, MLOps.
            </h2>
            <p className="text-muted-foreground text-sm md:text-base lg:text-lg max-w-xl leading-relaxed">
              We choreograph cinematic motion with real product proof: data-centric analytics, human-led annotation, safety-checked GenAI, and production MLOps. Evals, observability, and on-call rituals keep everything calm in production.
            </p>
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <Button
                className="bg-primary hover:bg-primary/90 text-primary-foreground h-12 px-6 text-base shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300"
                onClick={() => navigateToTop("/contact")}
              >
                Start a project
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="relative group overflow-hidden rounded-2xl border border-border/50 hover:border-primary/50 bg-gradient-to-br from-card via-card/70 to-background shadow-2xl shadow-primary/10 transition-all duration-500">
              <div className="absolute -inset-12 bg-gradient-to-r from-primary/20 via-transparent to-primary/20 blur-3xl opacity-40 group-hover:opacity-60 transition-opacity duration-700" />
              <div className="relative aspect-video">
                <video
                  className="h-full w-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                  poster="/uploads/Quantum.png"
                >
                  <source src={showreel} type="video/mp4" />
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

export default Services;
