import { useEffect, useState } from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Parallax from "@/components/Parallax";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  BookOpen,
  MessageCircle,
  WifiOff,
  Smartphone,
  GraduationCap,
  Bot,
  PlayCircle,
  CheckCircle2,
} from "lucide-react";
import Header from "@/components/Header";
import ScrollReveal from "@/components/ScrollReveal";
import Footer from "@/components/Footer";
import HeroBackdrop from "@/components/HeroBackdrop";
import SectionDivider from "@/components/SectionDivider";
import { useNavigationWithScroll } from "@/utils/navigation";
import { Heading } from "@/components/ui/section";

type ImageSlideshowProps = {
  images: string[];
  alt: string;
  intervalMs?: number;
};

const ImageSlideshow = ({ images, alt, intervalMs = 4500 }: ImageSlideshowProps) => {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || images.length <= 1) return;
    const id = window.setInterval(
      () => setIndex((i) => (i + 1) % images.length),
      intervalMs,
    );
    return () => window.clearInterval(id);
  }, [paused, images.length, intervalMs]);

  return (
    <div
      className="absolute inset-0"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {images.map((src, i) => (
        <img
          key={src}
          src={src}
          alt={`${alt} ${i + 1}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
          loading={i === 0 ? "eager" : "lazy"}
          draggable={false}
        />
      ))}
      {images.length > 1 && (
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 flex gap-1.5 px-3 py-1.5 rounded-full bg-black/30 backdrop-blur-sm">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Show slide ${i + 1} of ${images.length}`}
              className={`h-1.5 rounded-full transition-all ${
                i === index ? "w-6 bg-white" : "w-1.5 bg-white/60 hover:bg-white/80"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const kinaraFeatures = [
  {
    icon: <BookOpen className="h-6 w-6" />,
    title: "NECTA-aligned content",
    description: "Curriculum-mapped questions and explanations for Tanzanian secondary schools.",
  },
  {
    icon: <MessageCircle className="h-6 w-6" />,
    title: "SMS & WhatsApp",
    description: "Works on the channels students already use daily.",
  },
  {
    icon: <WifiOff className="h-6 w-6" />,
    title: "Offline friendly",
    description: "No smartphone or data bundle required to learn.",
  },
  {
    icon: <Smartphone className="h-6 w-6" />,
    title: "Any device",
    description: "Feature phones, basic phones, and smartphones are all supported.",
  },
  {
    icon: <GraduationCap className="h-6 w-6" />,
    title: "Teacher tools",
    description: "Insights that help teachers see gaps and support students.",
  },
  {
    icon: <Bot className="h-6 w-6" />,
    title: "AI tutor",
    description: "Conversational help that explains, quizzes, and encourages.",
  },
];

const KinaraCopilot = () => {
  const { navigateToTop } = useNavigationWithScroll();

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Header />

      {/* Hero – same style as Mifumo SMS */}
      <section className="relative pt-28 pb-16 sm:pt-32 sm:pb-20 overflow-hidden">
        <Parallax speed={-0.25} clamp={150} className="absolute inset-x-0 -inset-y-[24%] h-[148%]" aria-hidden>
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/kinara/kinara15.jpg')" }}
          />
        </Parallax>
        <div
          className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/45"
          aria-hidden
        />
        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal className="space-y-6">
              <Heading as="h1" size="display">
                Kinara Copilot
              </Heading>
              <p className="text-xl md:text-2xl font-semibold text-foreground">
                Student learning assistant.
                <br />
                No internet required.
              </p>
              <p className="text-muted-foreground text-lg max-w-xl">
                Kinara Copilot gives every secondary school student in Tanzania an AI learning companion
                that works through SMS, WhatsApp, and basic phones aligned with the NECTA curriculum.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  onClick={() => navigateToTop("/contact")}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3"
                >
                  Talk to our education team
                </Button>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-primary/30 text-foreground hover:bg-primary/10 px-6 py-3"
                    >
                      <PlayCircle className="mr-2 h-5 w-5" />
                      Watch the story
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl w-[95vw] p-0 overflow-hidden bg-black border-border/50">
                    <DialogTitle className="sr-only">
                      Kinara Copilot field interview
                    </DialogTitle>
                    <video
                      src="/kinara/interv1.mp4"
                      className="w-full h-auto max-h-[80vh] aspect-video bg-black"
                      controls
                      autoPlay
                      playsInline
                    />
                  </DialogContent>
                </Dialog>
              </div>
            </ScrollReveal>

            {/* Device mockup */}
            <ScrollReveal>
              <div className="relative max-w-sm md:max-w-md mx-auto lg:pl-4">
                {/* Glow Effect */}
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-emerald-400/20 to-blue-500/20 rounded-3xl blur-3xl opacity-60" />

                {/* Phone container with chat UI inside */}
                <div className="relative">
                  {/* Chat interface inside phone */}
                  <div className="absolute top-[7%] left-[17%] right-[17%] bottom-[6%] overflow-hidden rounded-[2.5rem] bg-background">
                    {/* Status bar – covers top, rounded to match screen */}
                    <div className="bg-black/95 rounded-t-[2rem] pl-6 pr-5 py-1.5 flex items-center justify-between text-white shrink-0">
                      <div className="flex items-center gap-2 text-[8px]">

                        <span className="font-medium">9:27</span>

                      </div>
                      <div className="flex items-center gap-1.5 text-[8px] text-white/90">
                        {/* Signal bars */}
                        <div className="flex items-end gap-[0.5px]">
                          <span className="w-[1.5px] h-0.5 bg-white/60 rounded-sm" />
                          <span className="w-[1.5px] h-1 bg-white/70 rounded-sm" />
                          <span className="w-[1.5px] h-1.5 bg-white/80 rounded-sm" />
                          <span className="w-[1.5px] h-2 bg-white rounded-sm" />
                        </div>
                        {/* WiFi */}
                        <span className="w-2.5 h-2.5 rounded-full border border-white/70 flex items-center justify-center">
                          <span className="w-1 h-1 rounded-full bg-white/80" />
                        </span>
                        {/* Battery */}
                        <div className="flex items-center gap-[0.5px]">
                          <div className="w-[11px] h-[5px] rounded-[2px] border border-white/70 flex items-center p-[0.5px]">
                            <div className="w-full h-full rounded-[1px] bg-emerald-400" />
                          </div>
                          <div className="w-[1.5px] h-[3px] rounded-r-[1px] bg-white/70" />
                        </div>
                      </div>
                    </div>
                    {/* Chat body */}
                    <div className="bg-background p-2.5 space-y-2.5 h-full overflow-y-auto">
                      <div className="flex justify-end">
                        <div className="bg-primary text-primary-foreground rounded-2xl rounded-br-md px-3 py-1.5 max-w-[80%]">
                          <p className="text-[11px]">
                            Nisaidie kuelewa formula ya Pythagoras.
                          </p>
                        </div>
                      </div>
                      <div className="flex justify-start">
                        <div className="bg-secondary rounded-2xl rounded-bl-md px-3 py-2 max-w-[85%]">
                          <p className="text-[11px] text-foreground leading-relaxed">
                            <span className="font-medium">Pythagoras Theorem:</span> Katika triangle yenye
                            angle ya 90°:{" "}
                            <span className="font-mono bg-muted px-1 py-0.5 rounded text-[10px]">
                              a² + b² = c²
                            </span>
                            . Hapa c ni hypotenuse (upande mrefu zaidi).
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        <span className="px-2.5 py-1 bg-muted rounded-full text-[10px] font-medium text-muted-foreground">
                          Nipe mfano mwingine
                        </span>
                        <span className="px-2.5 py-1 bg-muted rounded-full text-[10px] font-medium text-muted-foreground">
                          Quiz yangu
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Phone image overlay */}
                  <img
                    src="/OUR%20WORK/mobile1.webp"
                    alt="Learner on phone"
                    className="relative z-10 w-full h-auto drop-shadow-2xl"
                    draggable={false}
                  />
                </div>

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
              <h2 className="text-2xl md:text-4xl font-bold text-foreground">
                See how learners engage across every topic
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto text-sm md:text-base">
                Track questions asked, mastery by topic, and engagement across schools from a single dashboard.
              </p>
            </div>
          }
        >
          <img
            src="/OUR%20WORK/KINARACOVER.png"
            alt="Kinara Copilot analytics"
            className="mx-auto h-full w-auto max-w-full object-contain rounded-2xl"
            draggable={false}
          />
        </ContainerScroll>
      </section>

      {/* Features grid */}
      <section className="py-12 md:py-16 bg-card/30">
        <div className="max-w-[1200px] mx-auto px-6">
          <ScrollReveal className="text-center mb-12">
            <Heading as="h2" size="h2" className="mb-4">Designed for Tanzanian classrooms</Heading>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A learning companion that works in low-connectivity environments, for both students and teachers.
            </p>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {kinaraFeatures.map((f, i) => (
              <ScrollReveal key={f.title} delay={i * 60}>
                <div
                  className="solution-card bg-secondary border border-border rounded-lg animate-slide-in-bottom group relative overflow-hidden h-full"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <div className="p-8 relative overflow-hidden h-full">
                    <div className="absolute inset-0 opacity-5">
                      <svg className="w-full h-full" viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="1" className="animate-spin-slow" />
                        <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="0.5" className="animate-spin-slow" style={{ animationDirection: 'reverse' }} />
                      </svg>
                    </div>

                    <div className="flex items-center justify-between mb-6 relative z-10">
                      <div className="card-icon rounded-xl bg-white/10 p-3 shadow-inner text-primary">
                        {f.icon}
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold mb-4 relative z-10 group-hover:text-primary transition-colors">{f.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed relative z-10">{f.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Section 1 — Primary · Anywhere learning (image RIGHT) ===== */}
      <section className="py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <ScrollReveal className="space-y-5 lg:order-1">
              <Heading as="h2" size="h2" className="leading-tight">
                Learning that travels with the student
              </Heading>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                From the home compound to the schoolyard, Kinara Copilot follows the learner.
                Pupils get curriculum help on whichever device is in their hand — a parent&apos;s
                feature phone, a shared family handset, or a basic smartphone — without ever
                needing a data bundle.
              </p>
              <ul className="space-y-2.5 text-sm md:text-base text-foreground/90">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>SMS-based revision that works on any GSM network in Tanzania</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>WhatsApp tutor that explains in conversational Kiswahili</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>Offline learning packs that sync when signal returns</span>
                </li>
              </ul>
            </ScrollReveal>
            <ScrollReveal className="lg:order-2">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-primary/15 to-emerald-400/15 rounded-3xl blur-2xl opacity-70" />
                <div className="relative overflow-hidden rounded-3xl border border-border/50 shadow-2xl aspect-[4/3]">
                  <ImageSlideshow
                    images={[
                      "/kinara/kinara1.jpg",
                      "/kinara/kinara2.jpg",
                      "/kinara/kinara3.jpg",
                    ]}
                    alt="Primary school student using Kinara Copilot"
                  />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ===== Section 2 — Primary · Kiswahili-first (image LEFT) ===== */}
      <section className="py-16 md:py-24 bg-card/30">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <ScrollReveal className="order-2 lg:order-1">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-tr from-emerald-400/15 to-primary/15 rounded-3xl blur-2xl opacity-70" />
                <div className="relative overflow-hidden rounded-3xl border border-border/50 shadow-2xl aspect-[4/3]">
                  <ImageSlideshow
                    images={[
                      "/kinara/kinara4.jpg",
                      "/kinara/kinara5.jpg",
                    ]}
                    alt="Primary classroom learning in Kiswahili"
                  />
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal className="order-1 lg:order-2 space-y-5">
              <Heading as="h2" size="h2" className="leading-tight">
                Kiswahili first. English ready.
              </Heading>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                Most Tanzanian pupils think in Kiswahili long before they think in English.
                Kinara Copilot meets them where they are — explaining concepts in mother tongue,
                then bridging the same idea into the English vocabulary they&apos;ll be tested on.
              </p>
              
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ===== Section 3 — Primary · Adaptive practice (image RIGHT) ===== */}
      <section className="py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <ScrollReveal className="space-y-5 lg:order-1">
              <Heading as="h2" size="h2" className="leading-tight">
                Practice that adapts to every learner
              </Heading>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                Every learner has a different weak spot. Kinara&apos;s AI tutor watches which
                topics each student misses, then quietly builds the next quiz around those gaps —
                so revision is never a one-size-fits-all worksheet again.
              </p>
              <div className="grid grid-cols-3 gap-3 pt-2">
                <div className="rounded-2xl border border-border/50 bg-background/60 p-4 text-center">
                  <p className="text-2xl font-bold text-primary">24/7</p>
                  <p className="text-[11px] text-muted-foreground mt-1">Always-on tutor</p>
                </div>
                <div className="rounded-2xl border border-border/50 bg-background/60 p-4 text-center">
                  <p className="text-2xl font-bold text-primary">10+</p>
                  <p className="text-[11px] text-muted-foreground mt-1">Subjects covered</p>
                </div>
                <div className="rounded-2xl border border-border/50 bg-background/60 p-4 text-center">
                  <p className="text-2xl font-bold text-primary">∞</p>
                  <p className="text-[11px] text-muted-foreground mt-1">Practice questions</p>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal className="lg:order-2">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-bl from-primary/15 to-blue-500/15 rounded-3xl blur-2xl opacity-70" />
                <div className="relative overflow-hidden rounded-3xl border border-border/50 shadow-2xl aspect-[4/3]">
                  <ImageSlideshow
                    images={[
                      "/kinara/kinara7.jpg",
                      "/kinara/kinara6.jpg",
                      "/kinara/kinara8.jpg",
                    ]}
                    alt="Primary pupils with personalised AI practice"
                  />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ===== Section 4 — Secondary · NECTA-aligned (image LEFT) ===== */}
      <section className="py-16 md:py-24 bg-card/30">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <ScrollReveal className="order-2 lg:order-1">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-primary/15 to-amber-400/15 rounded-3xl blur-2xl opacity-70" />
                <div className="relative overflow-hidden rounded-3xl border border-border/50 shadow-2xl aspect-[4/3]">
                  <ImageSlideshow
                    images={[
                      "/kinara/kinara10.jpg",
                      "/kinara/kinara9.jpg",
                    ]}
                    alt="Secondary school students preparing for NECTA"
                  />
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal className="order-1 lg:order-2 space-y-5">
              <Heading as="h2" size="h2" className="leading-tight">
                Built for NECTA. Ready for Form IV.
              </Heading>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                Every question, every explanation, every mock paper is mapped to the NECTA syllabus.
                Students prepare with content that mirrors what they&apos;ll meet in CSEE — across
                sciences, mathematics, humanities and languages.
              </p>
              <div className="flex flex-wrap gap-2 pt-1">
                {["Biology", "Chemistry", "Physics", "Mathematics", "Geography", "History", "English", "Kiswahili"].map((subj) => (
                  <span
                    key={subj}
                    className="px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20"
                  >
                    {subj}
                  </span>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ===== Section 5 — Secondary · Teacher insight (image RIGHT) ===== */}
      <section className="py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <ScrollReveal className="space-y-5 lg:order-1">
              <Heading as="h2" size="h2" className="leading-tight">
                Teachers see what students miss
              </Heading>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                Every question a learner asks becomes signal. Teachers open a simple dashboard
                and see exactly which topics their class is struggling with — before the test,
                not after. Lesson planning stops being a guess.
              </p>
              <ul className="space-y-2.5 text-sm md:text-base text-foreground/90">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>Class-level mastery heatmaps by topic and sub-topic</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>Auto-flagged learners who need one-on-one support</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>Weekly digest sent via SMS or WhatsApp — no laptop required</span>
                </li>
              </ul>
            </ScrollReveal>
            <ScrollReveal className="lg:order-2">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-tl from-primary/15 to-purple-500/15 rounded-3xl blur-2xl opacity-70" />
                <div className="relative overflow-hidden rounded-3xl border border-border/50 shadow-2xl aspect-[4/3]">
                  <ImageSlideshow
                    images={[
                      "/kinara/kinara13.jpg",
                      "/kinara/kinara11.jpg",
                      "/kinara/kinara12.jpg",
                    ]}
                    alt="Teacher reviewing Kinara Copilot class insights"
                  />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ===== Section 6 — Secondary · School networks (image LEFT) ===== */}
      <section className="py-16 md:py-24 bg-card/30">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <ScrollReveal className="order-2 lg:order-1">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/15 to-emerald-400/15 rounded-3xl blur-2xl opacity-70" />
                <div className="relative overflow-hidden rounded-3xl border border-border/50 shadow-2xl aspect-[4/3]">
                  <ImageSlideshow
                    images={[
                      "/kinara/kinara16.jpg",
                      "/kinara/kinara14.jpg",
                      "/kinara/kinara15.jpg",
                    ]}
                    alt="Secondary school network adopting Kinara Copilot"
                  />
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal className="order-1 lg:order-2 space-y-5">
              <Heading as="h2" size="h2" className="leading-tight">
                From one school to a national network
              </Heading>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                Kinara Copilot is more than an app — it&apos;s a programme. We partner with schools,
                districts and ministries to roll it out the right way: onboarding, teacher training,
                monitoring, and reporting your stakeholders can trust.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <div className="rounded-xl border border-border/50 bg-background/60 p-4">
                  <p className="text-sm font-semibold text-foreground mb-1">Pilot programme</p>
                  <p className="text-xs text-muted-foreground">2 – 5 schools · 30 days · KPIs reported weekly</p>
                </div>
                <div className="rounded-xl border border-border/50 bg-background/60 p-4">
                  <p className="text-sm font-semibold text-foreground mb-1">District rollout</p>
                  <p className="text-xs text-muted-foreground">Full setup, training and impact dashboard</p>
                </div>
                <div className="rounded-xl border border-border/50 bg-background/60 p-4">
                  <p className="text-sm font-semibold text-foreground mb-1">Teacher training</p>
                  <p className="text-xs text-muted-foreground">In-person and remote upskilling included</p>
                </div>
                <div className="rounded-xl border border-border/50 bg-background/60 p-4">
                  <p className="text-sm font-semibold text-foreground mb-1">Ministry reporting</p>
                  <p className="text-xs text-muted-foreground">Aggregate insights for policy decisions</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden pt-12 pb-40 sm:pb-44 bg-background">
        <HeroBackdrop />
        <div className="relative z-10 max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <ScrollReveal className="space-y-4 rounded-2xl border border-border/60 bg-background/85 p-6 md:p-8 shadow-[0_15px_40px_-25px_rgba(15,23,42,0.25)] backdrop-blur-md">
            <Heading as="h2" size="h2" className="leading-tight text-foreground font-bold">
              Bring AI-powered learning to your school network.
            </Heading>
            <p className="text-foreground/85 text-sm md:text-base max-w-lg leading-relaxed">
              Pilot Kinara Copilot across classrooms, districts, or entire regions—with
              clear reporting and support from our education team every step of the way.
            </p>
            <div className="flex flex-wrap gap-3 pt-1">
              <Button
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
                onClick={() => navigateToTop("/contact")}
              >
                Book education demo
              </Button>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <div className="relative group overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-neutral-900 via-neutral-900/70 to-black shadow-lg">
              <div className="absolute -inset-12 bg-gradient-to-r from-card via-transparent to-card blur-3xl opacity-40 group-hover:opacity-60 transition-opacity duration-700" />
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

export default KinaraCopilot;
