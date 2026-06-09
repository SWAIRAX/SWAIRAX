import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Zap,
  BarChart3,
  Database,
  MessageSquare,
  Target,
  FileText,
  Cpu,
  ShoppingCart,
  Signal,
  Wifi,
  BatteryFull,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import ScrollReveal from "@/components/ScrollReveal";
import Footer from "@/components/Footer";
import HeroBackdrop from "@/components/HeroBackdrop";
import Parallax from "@/components/Parallax";
import { useNavigationWithScroll } from "@/utils/navigation";
import { Heading } from "@/components/ui/section";

const heroSmsMessages = [
  {
    sender: "MIFUMO SMS",
    time: "10:32",
    message:
      "Hello FLORENCE, Your order at Fresh Market is ready for pickup today. Show this message to receive your 10% loyalty discount. Thank you for shopping with us.",
  },
  {
    sender: "SALE ALERT",
    time: "09:15",
    message:
      "Karibu Fashion Week! Get 25% OFF all shoes today only. Visit our store or order now. Reply STOP to unsubscribe.",
  },
  {
    sender: "Mifumo SMS",
    time: "08:00",
    message:
      "Dear Customer, Your electricity token is ready. Token: 5837-9284-9923. Thank you for using Mifumo SMS services.",
  },
];

const features = [
  {
    icon: <MessageSquare className="h-6 w-6" />,
    title: "Bulk SMS campaigns",
    description: "Send thousands of messages in one go with scheduling and templates.",
  },
  {
    icon: <Cpu className="h-6 w-6" />,
    title: "AI message optimization",
    description: "Improve open and conversion rates with smart content suggestions.",
  },
  {
    icon: <Target className="h-6 w-6" />,
    title: "Customer segmentation",
    description: "Target the right audience with lists and saved segments.",
  },
  {
    icon: <BarChart3 className="h-6 w-6" />,
    title: "Campaign analytics",
    description: "Track delivery, opens, and engagement in real time.",
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: "Delivery rate tracking",
    description: "Monitor success rates and retry failed deliveries.",
  },
  {
    icon: <Database className="h-6 w-6" />,
    title: "Customer database",
    description: "Centralize contacts and sync with your existing systems.",
  },
  {
    icon: <FileText className="h-6 w-6" />,
    title: "Automated campaigns",
    description: "Trigger messages from events, dates, or user actions.",
  },
  {
    icon: <ShoppingCart className="h-6 w-6" />,
    title: "Integration with POS systems",
    description: "Connect to tills and e-commerce for receipts and promotions.",
  },
];

const MfumoSMS = () => {
  const navigate = useNavigate();
  const { navigateToTop } = useNavigationWithScroll();

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Header />
      {/* Hero: LEFT text, RIGHT phone mockup */}
      <section className="relative pt-28 pb-16 sm:pt-32 sm:pb-20 overflow-hidden">
        <Parallax speed={-0.25} clamp={150} className="absolute inset-x-0 -inset-y-[24%] h-[148%]">
          <div
            className="absolute inset-0 opacity-[0.03] bg-cover bg-center"
            style={{ backgroundImage: "url('/OUR WORK/MIFUMOSMS.png')" }}
            aria-hidden
          />
        </Parallax>
        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal className="space-y-6">
              <Heading as="h1" size="display">
                Mifumo SMS
              </Heading>
              <p className="text-xl md:text-2xl font-semibold text-foreground">
                Don’t lose customers.
                <br />
                Turn every message into sales.
              </p>
              <p className="text-muted-foreground text-lg">
                Mifumo SMS is an intelligent messaging platform designed for African businesses.
                Send SMS campaigns to thousands of customers, track delivery rates, measure
                engagement, and turn communication into real revenue.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  onClick={() => navigateToTop("/contact")}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3"
                >
                  Request Demo
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => window.open("https://sms.mifumolabs.com/", "_blank")}
                  className="border-primary/30 text-primary hover:bg-primary/10 px-6 py-3"
                >
                  Start Messaging
                </Button>
              </div>
            </ScrollReveal>

            {/* Phone mockup with SMS UI */}
            <ScrollReveal>
              <div className="relative max-w-sm mx-auto">
                <img
                  src="/OUR WORK/iphone_PNG5735.png"
                  alt="Phone mockup"
                  className="w-full h-auto drop-shadow-2xl"
                  draggable={false}
                />
                <div className="absolute inset-[15%]">
                  <div className="flex h-full w-full flex-col rounded-2xl bg-black/95 overflow-hidden px-2 pt-1.5 pb-2 md:px-3 md:pt-2 md:pb-3">
                    <div className="flex items-center justify-between text-[9px] md:text-[10px] text-white/80 mb-1.5 md:mb-2">
                      <span className="font-semibold">Mifumo</span>
                      <span className="flex items-center gap-1">
                        <Signal className="h-2.5 w-2.5 md:h-3 md:w-3" />
                        <Wifi className="h-2.5 w-2.5 md:h-3 md:w-3" />
                        <BatteryFull className="h-2.5 w-2.5 md:h-3 md:w-3" />
                      </span>
                    </div>
                    <div className="flex-1 space-y-1.5 md:space-y-2 overflow-auto">
                      {heroSmsMessages.map((sms, i) => (
                        <div
                          key={i}
                          className="bg-white/10 rounded-xl px-2.5 py-1.5 md:px-3 md:py-2 text-white text-[10px] md:text-xs"
                        >
                          <div className="flex justify-between items-center mb-1">
                            <span className="font-semibold uppercase tracking-wide text-[10px] md:text-[11px]">
                              {sms.sender}
                            </span>
                            <span className="text-white/70 text-[9px] md:text-[10px]">
                              {sms.time}
                            </span>
                          </div>
                          <p className="leading-snug md:leading-relaxed text-[10px] md:text-xs">
                            {sms.message}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Desktop dashboard – ContainerScroll (desktop and larger only) */}
      <section className="relative hidden md:block py-8">
        <ContainerScroll
          titleComponent={
            <div className="text-center space-y-2">
              <Badge variant="outline" className="border-primary/20 text-primary">
                Dashboard
              </Badge>
              <h2 className="text-2xl md:text-4xl font-bold text-foreground">
                Campaigns, credits, and analytics in one place
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto text-sm md:text-base">
                Purchase SMS credits, run campaigns, and track delivery from a single dashboard.
              </p>
            </div>
          }
        >
          <img
            src="/OUR WORK/desktop cover.png"
            alt="Mifumo SMS dashboard"
            className="mx-auto h-full w-auto max-w-full object-contain rounded-2xl"
            draggable={false}
          />
        </ContainerScroll>
      </section>

      {/* Features grid */}
      <section id="features" className="py-12 md:py-16 bg-card/30">
        <div className="max-w-[1200px] mx-auto px-6">
          <ScrollReveal className="text-center mb-12">
            <Heading as="h2" size="h2" className="mb-4">Everything you need to scale messaging</Heading>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From one-off alerts to bulk campaigns and POS integrations.
            </p>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {features.map((f, i) => (
              <ScrollReveal key={f.title} delay={i * 50}>
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

      {/* Storytelling 1: LEFT phone, RIGHT campaign */}
      <section className="py-12 md:py-16">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div className="relative max-w-sm md:max-w-md mx-auto">
                <div className="absolute inset-[8%] left-[22%] right-[22%] bottom-[8%] rounded-2xl overflow-hidden z-0">
                  <img
                    src="/OUR WORK/mobile cover.png"
                    alt="Send SMS UI"
                    className="h-full w-full object-cover"
                    draggable={false}
                  />
                </div>
                <img
                  src="/OUR WORK/mobile1.webp"
                  alt="Mobile"
                  className="relative z-10 w-full h-auto"
                  draggable={false}
                />
              </div>
            </ScrollReveal>
            <ScrollReveal className="space-y-4">
              <Badge variant="outline" className="border-primary/20 text-primary">Campaigns</Badge>
              <Heading as="h2" size="h2">Send single SMS, bulk messages, or target segments</Heading>
              <p className="text-muted-foreground">
                Use Quick SMS for one-off messages, upload a CSV for File SMS, or target contacts from saved segments with Group SMS. All from one clean interface.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Storytelling 2: LEFT feature, RIGHT phone */}
      <section className="py-12 md:py-16 bg-card/30">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal className="space-y-4 order-2 lg:order-1">
              <Badge variant="outline" className="border-primary/20 text-primary">Credits & analytics</Badge>
              <Heading as="h2" size="h2">Purchase credits and track every message</Heading>
              <p className="text-muted-foreground">
                Top up with Lite, Standard, or Pro packages. View balance, delivery reports, and campaign performance in real time.
              </p>
            </ScrollReveal>
            <ScrollReveal className="order-1 lg:order-2">
              <div className="relative max-w-sm mx-auto">
                <img src="/OUR WORK/iphone_PNG5735.png" alt="Phone" className="w-full h-auto" draggable={false} />
                <div className="absolute inset-[15%] rounded-2xl overflow-hidden bg-black/95 flex flex-col p-3">
                  <div className="flex justify-between text-[10px] text-white/80 mb-2">
                    <span>Mifumo</span>
                    <span className="flex items-center gap-1">
                        <Signal className="h-2.5 w-2.5 md:h-3 md:w-3" />
                        <Wifi className="h-2.5 w-2.5 md:h-3 md:w-3" />
                        <BatteryFull className="h-2.5 w-2.5 md:h-3 md:w-3" />
                      </span>
                  </div>
                  <div className="flex-1 card-icon rounded-xl bg-white/10 p-3 text-white text-xs">
                    <div className="font-semibold mb-1">Balance: 0 SMS</div>
                    <div className="text-white/70">Purchase SMS · Sender Names · History</div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA – Research page style */}
      <section className="relative overflow-hidden pt-12 pb-40 sm:pb-44 bg-background">
        <HeroBackdrop />
        <div className="relative z-10 max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <ScrollReveal className="space-y-4 rounded-2xl border border-border/60 bg-background/85 p-6 md:p-8 shadow-[0_15px_40px_-25px_rgba(15,23,42,0.25)] backdrop-blur-md">
            <Heading as="h2" size="h2" className="text-foreground font-bold leading-tight">
              Start communicating with customers smarter.
            </Heading>
            <p className="text-foreground/85 leading-relaxed text-sm md:text-base max-w-lg">
              Whether you run a retail store, hospital, logistics company, or school, Mifumo SMS helps you reach thousands of customers instantly and measure the impact of every message.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
                onClick={() => navigateToTop("/contact")}
              >
                Book Demo
              </Button>

            </div>
          </ScrollReveal>
          <ScrollReveal>
            <div className="relative group overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-neutral-900 via-neutral-900/70 to-black shadow-lg">
              <div className="absolute -inset-12 bg-gradient-to-r from-secondary-accent/10 via-transparent to-secondary-accent/10 blur-3xl opacity-40 group-hover:opacity-60 transition-opacity duration-700" />
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

export default MfumoSMS;
