import { useMemo, type CSSProperties } from "react";
import { useNavigate } from "react-router-dom";
import { useNavigationWithScroll } from "@/utils/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Cube3D from "@/components/3DCube";
import AnimatedCounter from "@/components/AnimatedCounter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroBackdrop from "@/components/HeroBackdrop";
import ScrollReveal from "@/components/ScrollReveal";
import { SocialMediaButton } from "@/components/SocialMediaButton";
import { ArrowRight, CheckCircle, Database, Cog, Cloud, BarChart3, PieChart, TrendingUp, User, Clock, Target } from "lucide-react";
import { blogPosts, BlogPost } from "@/data/blogPosts";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { Eyebrow, Heading } from "@/components/ui/section";
import PlexusBackground from "@/components/PlexusBackground";
import Parallax from "@/components/Parallax";
import HeroDivider from "@/components/HeroDivider";
import LogoMarquee from "@/components/LogoMarquee";
import SectionDivider from "@/components/SectionDivider";

const Index = () => {
  const navigate = useNavigate();
  const { navigateToTop, scrollToSection } = useNavigationWithScroll();

  const stats = [
    { value: "40x", label: "More productivity for data scientists" },
    { value: "20%", label: "Faster to deliver AI models" },
    { value: "100+", label: "Data scientists and software Developers using our products." },
    { value: "10x", label: "Boost" },
    { value: "40%", label: "Model performance boost through improved" },
    { value: "5+", label: "Products & Tools" }
  ];

  const products = [
    {
      title: "Deep Operator",
      category: "Saas",
      description: "Data-centric platform leveraging Machine Learning & RLHF to help organizations understand impact of their work, measure progress and make smarter decisions.",
      cta: "Get Started"
    },
    {
      title: "Quantum Annotate",
      category: "Annotation Service",
      description: "Robust annotation solution supported by a full workforce, offering industry-grade labeling for text, image, audio, and video datasets.",
      cta: "Request Demo"
    },
    {
      title: "Quantum GenAI",
      category: "AI Enhancement",
      description: "Enhance generative AI model accuracy, reliability, and speed through in-house data expertise and fine-tuning techniques.",
      cta: "Learn More"
    }
  ];

  const productIcons = [
    <Database className="h-6 w-6" />,
    <Cog className="h-6 w-6" />,
    <Cloud className="h-6 w-6" />
  ];

  // Get all blog posts for infinite moving cards
  const allBlogPosts = blogPosts;

  const revenueSeries = useMemo(() => [18, 22, 19, 26, 31, 29, 37, 45], []);
  const revenuePath = useMemo(() => {
    const max = Math.max(...revenueSeries);
    const min = Math.min(...revenueSeries);
    const range = Math.max(1, max - min);
    const points = revenueSeries.map((value, i) => {
      const x = (i / (revenueSeries.length - 1)) * 100;
      const y = 90 - ((value - min) / range) * 70;
      return `${i === 0 ? "M" : "L"}${x},${y}`;
    });
    return points.join(" ");
  }, [revenueSeries]);

  const growthPercent = 0.86; // 86%
  const gaugeStyle = useMemo(
    () => ({ "--gauge-percent": growthPercent } as CSSProperties),
    [growthPercent]
  );

  const handleBlogClick = (article: BlogPost) => {
    navigateToTop(`/blog/${article.slug}`);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-24 pb-32 sm:py-0">
        {/* Animated red plexus network background — drifts on scroll for depth */}
        <Parallax speed={-0.22} clamp={170} className="absolute inset-x-0 -inset-y-[26%] h-[152%]">
          <PlexusBackground backgroundColor={0xeff1f5} className="absolute inset-0 h-full w-full" />
        </Parallax>
        {/* Radial vignette so the headline stays legible over the network */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,hsl(var(--background)/0.4)_58%,hsl(var(--background)/0.85)_100%)]" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <Heading
              as="h1"
              size="display"
              className="mb-5 sm:mb-6 text-[clamp(1.75rem,11vw,2.5rem)] sm:text-5xl lg:text-6xl uppercase tracking-tight text-foreground"
            >
              AI-powered Automation <br />
              For every decision
            </Heading>
            <p className="mx-auto max-w-2xl text-lg sm:text-xl lg:text-2xl font-semibold text-foreground leading-relaxed">
              Adopting data-centric operations and building AI solutions has never been easier —
              we are working on that.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 items-center justify-center">
              {/* Glossy primary button */}
              <button
                onClick={() => navigateToTop("/contact")}
                className="group relative inline-flex items-center justify-center rounded-full px-8 py-3.5 text-sm font-semibold text-white shadow-[0_8px_30px_-8px_rgba(0,0,0,0.8)] transition-transform duration-200 hover:scale-[1.03] active:scale-95
                  bg-[linear-gradient(180deg,rgba(255,255,255,0.18),rgba(255,255,255,0.04)),linear-gradient(180deg,#3a3a42,#15151b)]
                  ring-1 ring-white/10"
              >
                Get Started
              </button>
              {/* Red outline button */}
              <button
                onClick={() => navigateToTop("/kinara-copilot")}
                className="group inline-flex items-center justify-center gap-2 rounded-full border border-primary/60 bg-primary/5 px-8 py-3.5 text-sm font-semibold text-foreground transition-all duration-200 hover:bg-primary/10 hover:border-primary active:scale-95"
              >
                <CheckCircle className="h-4 w-4 text-primary" />
                Projects of Success
              </button>
            </div>
          </div>
        </div>

        {/* Red data-matrix divider (with central scroll-ring) along the bottom — lecdt-style */}
        <HeroDivider className="pointer-events-none absolute inset-x-0 bottom-0 z-10 w-full text-[#ff0000]" />
      </section>

      {/* Partner logos — red auto-scrolling band (lecdt-style).
          Pulled up under the hero divider so its red fills the divider's gaps —
          no white seam between the data-matrix divider and the red band. */}
      <LogoMarquee
        className="-mt-1"
        logos={[
          { src: "/uploads/buni.png", alt: "Buni Innovation Hub" },
          { src: "/uploads/costech.png", alt: "COSTECH" },
          { src: "/uploads/dtbi.png", alt: "DTBI" },
          { src: "/uploads/udsm.png", alt: "UDSM" },
          { src: "/uploads/swahilies.png", alt: "Swahilies" },
          { src: "/uploads/sinnovate-logo.png", alt: "SINNOVATE" },
        ]}
      />

      {/* Red data-matrix divider (lecdt projects-style) — red teeth on a white (bg-card)
          backing so the gaps match the why-quantum section below */}
      <SectionDivider className="-mt-1 w-full bg-card text-[#ff0000]" />

      {/* Why Quantum Intelligence Section */}
      <section id="why-quantum" className="py-12 sm:py-16 lg:py-20 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-8 sm:mb-12 lg:mb-16">
            <Eyebrow className="mb-3 sm:mb-4">Why Quantum Intelligence?</Eyebrow>
            <Heading as="h2" size="h2" className="mb-6 sm:mb-8">
              We help Business & Data Scientists to unlock<br />
              data & artificial intelligence full potential.
            </Heading>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            <div>
              <p className="text-lg text-muted-foreground mb-8">
                Through measurable <span className="text-primary">performance</span> & improvements we offer services as follows.
              </p>

              <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
                {stats.map((stat, index) => (
                  <div key={index} className="metric-card text-center p-3 sm:p-4 rounded-lg border border-primary/10 animate-slide-in-bottom" style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="metric-value text-3xl sm:text-4xl md:text-5xl font-bold mb-1 sm:mb-2 animate-counter-up" style={{ animationDelay: `${index * 0.15}s` }}>
                      <AnimatedCounter value={stat.value} />
                    </div>
                    <p className="text-xs sm:text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <ScrollReveal delay={120}>
              <div className="rounded-2xl border border-border/30 bg-card/60 p-10 md:p-12 text-center shadow-[0_25px_70px_-50px_rgba(0,0,0,0.5)]">
                <p className="text-lg md:text-xl text-muted-foreground">
                  And trusted by the <span className="text-primary">community</span> with
                </p>
                <div className="text-6xl md:text-7xl font-bold my-6 text-foreground">
                  100+
                </div>
                <p className="text-base md:text-lg text-muted-foreground">
                  Data scientists and software Developers using our products.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Data-Centric Solutions Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            <ScrollReveal>
              <Eyebrow className="mb-3 sm:mb-4">What do we do?</Eyebrow>
              <Heading as="h2" size="h2" className="mb-4 sm:mb-6 lg:mb-8">
                Data-Centric and AI solutions
              </Heading>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <div className="bg-card p-8 rounded-lg border">
                <Eyebrow className="mb-4">AI STUDIO & IDEAS</Eyebrow>
                <h3 className="text-2xl font-bold mb-4">
                  Get Customized AI powered solution for a research or business.
                </h3>
                <p className="text-muted-foreground mb-6">
                  Tell us a bit about your research and business challenge and our AI Team with combination
                  of expert data scientists, developers, and business strategists — will come up with a few solutions.
                </p>
                <p className="text-muted-foreground mb-6">
                  We are working on computer vision, NLP, LLMs, Generative AI and more. We help you to
                  reduce development timeline, cheap and faster.
                </p>

                {/* <Button asChild variant="ghost" className="text-foreground hover:text-primary p-0">
                  <Link to="/ai-studio">Know More <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button> */}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* MLOps Section */}
      <section className="bg-card pb-12 sm:pb-16 lg:pb-20">
        {/* Tone-on-tone interlocking top divider (lecdt "divisor um") */}
        <SectionDivider variant="ring" flip className="w-full text-[hsl(var(--background))]" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 lg:pt-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            <ScrollReveal>
              <Eyebrow className="mb-3 sm:mb-4">MLOps</Eyebrow>
              <Heading as="h2" size="h2" className="mb-4 sm:mb-6 lg:mb-8">
                Machine Learning + Devops
              </Heading>
              <p className="text-muted-foreground text-sm sm:text-base mb-4 sm:mb-6 leading-relaxed">
                You have the data and the model, but you still can't see the return on investment for your AI
                projects. Research shows that 50 - 90% of AI models are never commercialized because of
                the "last-mile" deployment problem.
              </p>
              <p className="text-muted-foreground text-sm sm:text-base mb-6 sm:mb-8 leading-relaxed">
                We practices Machine Learning Operations (MLOps) by bridging the gap between data and
                IT Ops teams. We help you convert your data to business value by deploying your models
                into production.
              </p>
              {/* <Button asChild variant="ghost" className="text-foreground hover:text-primary p-0">
                <Link to="/mlops">Learn more <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button> */}
            </ScrollReveal>

            <ScrollReveal delay={150} className="relative">
              {/* Animated Pipeline Flow */}
              <div className="flex items-center justify-center space-x-4 sm:space-x-8">
                <div className="flex flex-col items-center space-y-2 sm:space-y-4 animate-fade-in">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/20 rounded-lg flex items-center justify-center group hover:bg-primary/30 transition-colors duration-300">
                    <Database className="w-6 h-6 sm:w-8 sm:h-8 text-primary group-hover:scale-110 transition-transform" />
                  </div>
                  <span className="text-xs sm:text-sm text-muted-foreground">Dataset</span>
                </div>

                <div className="animate-pulse">
                  <ArrowRight className="w-4 h-4 sm:w-6 sm:h-6 text-primary" />
                </div>

                <div className="flex flex-col items-center space-y-2 sm:space-y-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/20 rounded-lg flex items-center justify-center group hover:bg-primary/30 transition-colors duration-300">
                    <Cog className="w-6 h-6 sm:w-8 sm:h-8 text-primary group-hover:scale-110 transition-transform animate-spin-slow" />
                  </div>
                  <span className="text-xs sm:text-sm text-muted-foreground">Model</span>
                </div>

                <div className="animate-pulse" style={{ animationDelay: '0.4s' }}>
                  <ArrowRight className="w-4 h-4 sm:w-6 sm:h-6 text-primary" />
                </div>

                <div className="flex flex-col items-center space-y-2 sm:space-y-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/20 rounded-lg flex items-center justify-center group hover:bg-primary/30 transition-colors duration-300">
                    <Cloud className="w-6 h-6 sm:w-8 sm:h-8 text-primary group-hover:scale-110 transition-transform" />
                  </div>
                  <span className="text-xs sm:text-sm text-muted-foreground">Deploy</span>
                </div>
              </div>

              {/* Background glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 rounded-lg -z-10"></div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Business Analysis Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            <ScrollReveal className="relative">
              {/* Interactive Dashboard Illustration */}
              <div className="bg-card/50 p-4 sm:p-6 lg:p-8 rounded-lg border border-border/50 backdrop-blur-sm">
                <div className="grid grid-cols-2 gap-6">
                  {/* Revenue Sparkline */}
                  <div className="bg-background/80 p-3 sm:p-4 rounded-lg border group hover:shadow-lg transition-all duration-300">
                    <div className="flex items-center justify-between mb-2 sm:mb-3">
                      <BarChart3 className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                      <div className="flex items-center gap-1 sm:gap-2">
                        <span className="text-[10px] sm:text-xs text-muted-foreground">Revenue</span>
                        <span className="text-[9px] sm:text-[10px] px-1 sm:px-2 py-0.5 sm:py-1 rounded-full bg-primary/10 text-primary font-semibold">+12.4%</span>
                      </div>
                    </div>
                    <div className="relative">
                      <svg viewBox="0 0 100 100" className="w-full h-28 overflow-visible">
                        <defs>
                          <linearGradient id="revenue-gradient" x1="0" x2="0" y1="0" y2="1">
                            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.28" />
                            <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
                          </linearGradient>
                        </defs>
                        <path
                          d={`${revenuePath} L100,100 L0,100 Z`}
                          fill="url(#revenue-gradient)"
                          className="sparkline-fill"
                        />
                        <path
                          d={revenuePath}
                          fill="none"
                          stroke="hsl(var(--primary))"
                          strokeWidth="2.5"
                          className="sparkline-line"
                          pathLength={400}
                        />
                        <circle r="2.8" fill="hsl(var(--primary))" className="sparkline-glow" >
                          <animateMotion
                            dur="4s"
                            repeatCount="indefinite"
                            path={revenuePath}
                            keyTimes="0;1"
                            keySplines="0.16 1 0.3 1"
                          />
                        </circle>
                      </svg>
                    </div>
                  </div>

                  {/* Growth Gauge */}
                  <div className="bg-background/80 p-3 sm:p-4 rounded-lg border group hover:shadow-lg transition-all duration-300">
                    <div className="flex items-center justify-between mb-2 sm:mb-3">
                      <PieChart className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                      <span className="text-[10px] sm:text-xs text-muted-foreground">Growth</span>
                    </div>
                    <div
                      className="relative w-20 h-20 sm:w-24 sm:h-24 mx-auto radial-gauge"
                      style={gaugeStyle}
                    >
                      <svg viewBox="0 0 120 120" className="w-full h-full">
                        <defs>
                          <linearGradient id="growth-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="hsl(var(--primary))" />
                            <stop offset="100%" stopColor="hsl(var(--primary) / 0.3)" />
                          </linearGradient>
                        </defs>
                        <circle
                          cx="60"
                          cy="60"
                          r="44"
                          stroke="hsl(var(--primary) / 0.16)"
                          strokeWidth="10"
                          fill="none"
                        />
                        <circle
                          cx="60"
                          cy="60"
                          r="44"
                          stroke="url(#growth-gradient)"
                          strokeWidth="10"
                          fill="none"
                          className="gauge-progress"
                          pathLength={276}
                        />
                        <circle
                          cx="60"
                          cy="60"
                          r="44"
                          fill="none"
                          stroke="none"
                        >
                          <animateTransform
                            attributeName="transform"
                            type="rotate"
                            from="0 60 60"
                            to="360 60 60"
                            dur="5s"
                            repeatCount="indefinite"
                          />
                        </circle>
                      </svg>
                      <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <div className="text-lg sm:text-xl lg:text-2xl font-bold text-primary">{Math.round(growthPercent * 100)}%</div>
                        <span className="text-[9px] sm:text-[10px] uppercase tracking-wide text-muted-foreground">Growth</span>
                      </div>
                    </div>
                  </div>

                  {/* KPI Widgets */}
                  <div className="bg-background/80 p-3 sm:p-4 rounded-lg border group hover:shadow-lg transition-all duration-300">
                    <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-primary mb-1 sm:mb-2" />
                    <div className="text-lg sm:text-xl lg:text-2xl font-bold text-primary">
                      <AnimatedCounter value="24%" />
                    </div>
                    <span className="text-[10px] sm:text-xs text-muted-foreground">Customer Growth</span>
                  </div>

                  <div className="bg-background/80 p-3 sm:p-4 rounded-lg border group hover:shadow-lg transition-all duration-300">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-primary mb-1 sm:mb-2" />
                    <div className="text-lg sm:text-xl lg:text-2xl font-bold text-primary">
                      <AnimatedCounter value="98%" />
                    </div>
                    <span className="text-[10px] sm:text-xs text-muted-foreground">Data Quality</span>
                  </div>
                </div>

                {/* Floating Analytics Icons */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center animate-bounce">
                  <BarChart3 className="h-4 w-4 text-primary" />
                </div>
                <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center animate-pulse">
                  <Target className="h-3.5 w-3.5 text-primary" />
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <Eyebrow className="mb-4">Business Analysis</Eyebrow>
              <Heading as="h2" size="h2" className="mb-8">
                Turn Insight Into Strategy
              </Heading>
              <p className="text-muted-foreground mb-6">
                A free SaaS option to start with Data analysis and visualization with AI with drag and drop a
                dataset in a minute. We help to you to see opportunities from your data.
              </p>
              <p className="text-muted-foreground mb-8">
                In the digital age of data we can Quickly understand human better, our needs,
                and business science overall.
              </p>
              {/* <Button asChild variant="ghost" className="text-foreground hover:text-primary p-0">
                <Link to="/business-analysis">Explore how <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button> */}
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="bg-card pb-12 sm:pb-16 lg:pb-20">
        {/* Tone-on-tone interlocking top divider (lecdt "divisor dois") */}
        <SectionDivider variant="matrix" flip className="w-full text-[hsl(var(--background))]" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 lg:pt-20">
          <ScrollReveal className="text-center mb-8 sm:mb-12 lg:mb-16">
            <Eyebrow className="mb-3 sm:mb-4">Ready to start?</Eyebrow>
            <Heading as="h2" size="h2">
              Solutions Built to Scale
            </Heading>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {products.map((product, index) => (
              <Card
                key={index}
                className="solution-card bg-secondary border-border animate-slide-in-bottom group relative overflow-hidden"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-8 relative overflow-hidden">
                  {/* Animated SVG background */}
                  <div className="absolute inset-0 opacity-5">
                    <svg className="w-full h-full" viewBox="0 0 100 100">
                      <circle
                        cx="50"
                        cy="50"
                        r="30"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1"
                        className="animate-spin-slow"
                      />
                      <circle
                        cx="50"
                        cy="50"
                        r="20"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="0.5"
                        className="animate-spin-slow"
                        style={{ animationDirection: 'reverse' }}
                      />
                    </svg>
                  </div>

                  <div className="flex items-center justify-between mb-6 relative z-10">
                    <div className={`rounded-xl bg-white/10 p-3 shadow-inner ${index % 2 === 1 ? "text-secondary-accent" : "text-primary"}`}>
                      {productIcons[index % productIcons.length]}
                    </div>
                    <span className="text-xs px-3 py-1 rounded-full bg-muted text-muted-foreground group-hover:bg-primary/20 transition-colors duration-300">
                      {product.category}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold mb-4 relative z-10">{product.title}</h3>
                  <p className="text-muted-foreground mb-6 text-sm leading-relaxed relative z-10">
                    {product.description}
                  </p>

                  <Button
                    variant="ghost"
                    className="text-foreground hover:text-primary bg-transparent hover:bg-transparent p-0 relative z-10 group-hover:translate-x-1 transition-transform duration-300 focus-visible:ring-0"
                    onClick={() => navigateToTop('/contact')}
                  >
                    {product.cta} <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>

                  {/* Sparkle effect on hover */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-2 h-2 bg-primary rounded-full animate-ping"></div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Infrastructure Section */}
      <section className="pb-12 sm:pb-16 lg:pb-20">
        {/* Tone-on-tone interlocking top divider (lecdt "divisor um") */}
        <SectionDivider variant="ring" flip className="w-full text-[hsl(var(--card))]" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 lg:pt-20">
          <ScrollReveal className="max-w-4xl">
            <Heading as="h2" size="h2" className="mb-4 sm:mb-6 lg:mb-8">
              Want to develop AI and data related solutions on-premises?
            </Heading>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground mb-4 sm:mb-6 lg:mb-8 leading-relaxed">
              Quantum Intelligence offers AI related solutions that can be deployed in any infrastructure for
              anyone eager to enter in the industry.
            </p>

          </ScrollReveal>
          <button
            className="estimate-project-btn"
            onClick={() => navigateToTop('/contact')}
          >
            <span className="circle">
              <span className="icon arrow"></span>
            </span>
            <span className="button-text">Contact Us</span>
          </button>
        </div>
      </section>

      {/* CTA Section — keeps the original light card background instead of the plexus canvas */}
      <section className="relative pt-12 sm:pt-16 lg:pt-20 pb-40 sm:pb-44 lg:pb-48 bg-card text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <Heading as="h2" size="h2" className="mb-4 sm:mb-6 lg:mb-8">
              Join the Data-Centric AI movement!
            </Heading>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground mb-6 sm:mb-8 lg:mb-12 max-w-3xl mx-auto leading-relaxed">
              Connect, profile, understand & orchestrate your data preparation flows to train models more
              efficiently! Improve AI initiatives performance in a iterative way.
            </p>
          </ScrollReveal>
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:justify-center">
            {/* <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8"
              onClick={() => navigateToTop('/contact')}
            >
              Try now
            </Button> */}
            <Button
              size="lg"
              variant="outline"
              className="border-foreground text-foreground hover:bg-foreground hover:text-background px-4 sm:px-8 h-10 sm:h-14 py-2 sm:py-4 text-sm sm:text-lg"
              onClick={() => navigateToTop('/contact')}
            >
              Estimate Project
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Articles Section — hero-style plexus background */}
      <section className="relative overflow-hidden bg-background pb-12 sm:pb-16 lg:pb-20">
        {/* Animated red plexus network background (same as hero) — drifts on scroll */}
        <Parallax speed={-0.18} clamp={140} className="absolute inset-x-0 -inset-y-[22%] h-[144%]">
          <PlexusBackground backgroundColor={0xeff1f5} className="absolute inset-0 h-full w-full" />
        </Parallax>
        {/* Radial vignette so content stays legible over the network */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,hsl(var(--background)/0.4)_58%,hsl(var(--background)/0.85)_100%)]" />
        {/* Tone-on-tone interlocking top divider (lecdt "divisor dois") */}
        <SectionDivider variant="matrix" flip className="relative z-10 w-full text-[hsl(var(--card))]" />
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 lg:pt-20">
          <ScrollReveal>
            <Heading as="h2" size="h2" className="mb-8 sm:mb-12 lg:mb-16">Our Latest Articles</Heading>
          </ScrollReveal>

          <InfiniteMovingCards
            items={allBlogPosts.map((article) => ({
              quote: '', // Remove excerpt text from cards
              name: article.title,
              title: `${article.author} • ${article.readTime}`,
              imageUrl: article.imageUrl,
            }))}
            direction="left"
            speed="normal"
            pauseOnHover={true}
            className="mt-8"
            cardType="simple"
            showImages={true}
            maskEdges={false}
            onLearnMore={(item) => {
              const article = allBlogPosts.find(a => a.title === item.name);
              if (article) {
                navigateToTop(`/blog/${article.slug}`);
              }
            }}
          />

          <div className="text-center mt-8 sm:mt-10 lg:mt-12">
            <Button
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-6 sm:px-8 py-3"
              onClick={() => navigateToTop('/blog')}
            >
              Explore More Articles <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
