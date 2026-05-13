import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
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
} from "lucide-react";
import Header from "@/components/Header";
import ScrollReveal from "@/components/ScrollReveal";
import Footer from "@/components/Footer";
import { useNavigationWithScroll } from "@/utils/navigation";

const primarySchoolImages = Array.from(
  { length: 8 },
  (_, i) => `/kinara/kinara${i + 1}.jpg`,
);

const secondarySchoolImages = [
  "/kinara/kinara9.jpg",
  "/kinara/kinara10.jpg",
  "/kinara/kinara11.jpg",
  "/kinara/kinara12.jpg",
  "/kinara/kinara13.jpg",
  "/kinara/kinara14.jpg",
  "/kinara/kinara15.jpg",
  "/kinara/kinara16.jpg",
];

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
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/kinara/kinara15.jpg')" }}
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-background/85 backdrop-blur-sm"
          aria-hidden
        />
        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal className="space-y-6">
              <Badge variant="outline" className="border-primary/20 text-primary">
                Our Work · EdTech
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                <span className="text-primary">Kinara Copilot</span>
              </h1>
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

                {/* Floating labels */}
                <div className="absolute -top-4 -right-4 bg-card border border-border rounded-xl p-3 shadow-lg animate-float z-20">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-primary/15 flex items-center justify-center">
                      <span className="text-primary text-lg">✓</span>
                    </div>
                    <div>
                      <p className="text-xs font-medium text-foreground">NECTA aligned</p>
                      <p className="text-[10px] text-muted-foreground">Forms I–IV</p>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-2 -left-4 bg-card border border-border rounded-xl p-3 shadow-lg animate-float delay-200 z-20">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-emerald-400/15 flex items-center justify-center">
                      <span className="text-emerald-400 text-lg">🌍</span>
                    </div>
                    <div>
                      <p className="text-xs font-medium text-foreground">Kiswahili & English</p>
                      <p className="text-[10px] text-muted-foreground">Bilingual support</p>
                    </div>
                  </div>
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
              <Badge variant="outline" className="border-primary/20 text-primary">
                School & district view
              </Badge>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Designed for Tanzanian classrooms</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A learning companion that works in low-connectivity environments, for both students and teachers.
            </p>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {kinaraFeatures.map((f, i) => (
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

      {/* Our Work gallery – schools in the field */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/kinara/kinara15.jpg')" }}
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-background/85 backdrop-blur-sm"
          aria-hidden
        />
        <div className="relative z-10 max-w-[1200px] mx-auto px-6">
          <ScrollReveal className="text-center mb-12 md:mb-16">
            <Badge variant="outline" className="border-primary/20 text-primary mb-4">
              Our Work · In the field
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Kinara Copilot in schools across Tanzania
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From primary classrooms to secondary schools, we are putting an AI learning
              companion in the hands of every learner.
            </p>
          </ScrollReveal>

          {/* Primary schools */}
          <div className="mb-16">
            <ScrollReveal className="flex items-center gap-4 mb-6">
              <span className="h-px flex-1 bg-border" />
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-foreground whitespace-nowrap">
                Primary Schools
              </h3>
              <span className="h-px flex-1 bg-border" />
            </ScrollReveal>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
              {primarySchoolImages.map((src, i) => (
                <ScrollReveal key={src} delay={i * 50}>
                  <div className="group relative overflow-hidden rounded-2xl aspect-[4/3] bg-muted border border-border/50 hover:border-primary/30 transition-colors">
                    <img
                      src={src}
                      alt={`Kinara Copilot in primary school ${i + 1}`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                      draggable={false}
                    />
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Secondary schools */}
          <div>
            <ScrollReveal className="flex items-center gap-4 mb-6">
              <span className="h-px flex-1 bg-border" />
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-foreground whitespace-nowrap">
                Secondary Schools
              </h3>
              <span className="h-px flex-1 bg-border" />
            </ScrollReveal>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
              {secondarySchoolImages.map((src, i) => (
                <ScrollReveal key={src} delay={i * 50}>
                  <div className="group relative overflow-hidden rounded-2xl aspect-[4/3] bg-muted border border-border/50 hover:border-primary/30 transition-colors">
                    <img
                      src={src}
                      alt={`Kinara Copilot in secondary school ${i + 1}`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                      draggable={false}
                    />
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Storytelling 1 – learner journey */}
      <section className="py-12 md:py-16">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal>
              <div className="relative max-w-sm mx-auto">
                <img
                  src="/OUR%20WORK/iphone_PNG5735.png"
                  alt="Kinara Copilot phone"
                  className="w-full h-auto drop-shadow-2xl"
                  draggable={false}
                />
                <div className="absolute inset-[15%] rounded-2xl overflow-hidden bg-black/95 flex flex-col p-3">
                  <div className="flex justify-between text-[10px] text-white/80 mb-2">
                    <span>Kinara</span>
                    <span>SMS · WhatsApp</span>
                  </div>
                  <div className="flex-1 rounded-xl bg-white/10 p-3 text-white text-xs space-y-2">
                    <div>
                      <div className="font-semibold">Form 3 Physics · Waves</div>
                      <p className="text-white/80 text-[11px] mt-1">
                        Q: A bus horn sounds at 400 Hz. What happens to the pitch as it moves away from you?
                      </p>
                    </div>
                    <div className="rounded-lg bg-black/40 px-2 py-1.5 text-[11px]">
                      <span className="font-semibold">Kinara:</span>{" "}
                      The pitch becomes lower because the wavefronts spread out. This is called the Doppler effect.
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal className="space-y-4">
              <Badge variant="outline" className="border-primary/20 text-primary">
                Learner experience
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold">A tutor in every student's pocket</h2>
              <p className="text-muted-foreground">
                Students can ask questions, revise topics, and receive practice questions through SMS or WhatsApp,
                even on basic phones. Responses are grounded in the NECTA syllabus with Kiswahili-friendly prompts.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Storytelling 2 – teacher & school tools */}
      <section className="py-12 md:py-16 bg-card/30">
        <div className="max-w-[1200px] mx-auto px-6">
          <ScrollReveal className="space-y-4 max-w-2xl">
            <Badge variant="outline" className="border-primary/20 text-primary">
              Teachers & schools
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold">Turn questions into insight</h2>
            <p className="text-muted-foreground">
              Aggregate data shows which topics learners are struggling with, helping teachers adjust lessons and
              schools plan interventions without needing extra infrastructure.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 bg-gradient-to-r from-red-600/20 via-black to-red-500/15">
        <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <ScrollReveal className="space-y-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
              Bring AI-powered learning to your school network.
            </h2>
            <p className="text-muted-foreground text-sm md:text-base max-w-lg">
              Partner with Quantum Intelligence to pilot Kinara Copilot across classrooms, districts, or entire regions—with
              clear reporting and support from our education team.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button
                className="bg-red-600 hover:bg-red-500 text-white"
                onClick={() => navigateToTop("/contact")}
              >
                Book education demo
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

export default KinaraCopilot;
