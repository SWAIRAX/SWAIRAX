import Header from "@/components/Header";
import { openMeeting } from "@/utils/meeting";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import Parallax from "@/components/Parallax";
import React, { useEffect } from "react";
import { PageHero, Heading, Lead } from "@/components/typography";
import { ExternalLink, Handshake, ArrowUpRight } from "lucide-react";
import { useNavigationWithScroll } from "@/utils/navigation";

// Subtle dotted pattern used behind the hero.
const cardStyles = `.pattern-bg { --color: rgba(214, 46, 10, 0.35); background-color: rgb(0, 0, 0); background-size: 40px 40px; background-image: linear-gradient(45deg, var(--color), transparent 40%), linear-gradient(-90deg, var(--color), transparent 20%); }`;

const Partnerships = () => {
  const { navigateToTop } = useNavigationWithScroll();
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = cardStyles;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const partners = [
    {
      id: "buni",
      name: "Buni Innovation Hub",
      logo: "/uploads/buni.png",
      description: "A co-creation space under COSTECH focused on tech entrepreneurship and youth capacity building.",
      mission: "Empowering Tanzanian innovators through mentorship, training, and civic tech incubation.",
      link: "https://www.makingallvoicescount.org/project/buni-hub/",
      animationDelay: "0s"
    },
    {
      id: "costech",
      name: "COSTECH",
      logo: "/uploads/costech.png",
      description: "Tanzania's national science and technology commission, advising on innovation policy and research funding.",
      mission: "Coordinating and promoting technology development for Tanzania's socio-economic growth.",
      link: "https://costech.or.tz/",
      animationDelay: "0.1s"
    },
    {
      id: "dtbi",
      name: "DTBI",
      logo: "/uploads/dtbi.png",
      description: "A premier incubator supporting digital startups with shared spaces, mentorship, and commercialization services.",
      mission: "Driving digital innovation for youth and women-led startups in Tanzania.",
      link: "https://teknohama.or.tz/",
      animationDelay: "0.2s"
    },
    {
      id: "udsm",
      name: "UDSM",
      logo: "/uploads/udsm.png",
      description: "Tanzania's oldest and most prestigious public university, fostering research and academic excellence.",
      mission: "Empowering future leaders through world-class education and transformative research.",
      link: "https://www.udsm.ac.tz/",
      animationDelay: "0.3s"
    },
    {
      id: "swahilies",
      name: "Swahilies",
      logo: "/uploads/swahilies.png",
      description: "Building payments processing systems to digitize payments in Africa, making it easy for businesses to accept digital payments from anyone, anywhere.",
      mission: "Making digital payments quick and easy for African businesses without the hassle of traditional methods.",
      link: "https://www.swahilies.com/",
      animationDelay: "0.4s"
    },
    {
      id: "sinnovate",
      name: "SINNOVATE",
      logo: "/uploads/sinnovate-logo.png",
      description: "An auditing firm incorporated in 2023, specializing in providing innovative high-quality, value-added Taxation, Accounting, Auditing, and Other Business consulting services.",
      mission: "To consistently deliver innovative and exceptional Taxation, Auditing, and Accounting services with uncompromising quality and integrity.",
      link: "https://www.sinnovate.co.tz/",
      animationDelay: "0.5s"
    }
  ];

  const implementation = [
    "Designing a unified data pipeline across user, subscription, and entire platform data.",
    "Implementing real-time analytics for users, revenue, and engagement.",
    "Tracking every user click and session to understand true platform usage.",
    "Building decision-oriented dashboards for growth and operations teams.",
    "Translating raw usage data into clear business actions and engagement activities."
  ];

  const framework = [
    { letter: "A", title: "Acquisition", text: "Does the business attract users who become active, paying, and long-term clients?" },
    { letter: "A", title: "Activation", text: "Do users reach their first meaningful moment of value within the system/product?" },
    { letter: "E", title: "Engagement", text: "Do people return because the product consistently solves real problems?" },
    { letter: "R", title: "Retention", text: "Are there early signals of disengagement detected before users leave?" },
    { letter: "R", title: "Revenue", text: "Does usage translate into sustainable revenue growth and trust over time?", highlight: true }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero — research-page (passionlabs) design over the partner page's pattern background */}
      <section className="relative overflow-hidden text-white pt-36 pb-24 sm:pt-44 sm:pb-32 lg:pt-52 lg:pb-40">
        {/* same background as the partner page — drifts on scroll for depth */}
        <Parallax speed={-0.25} clamp={150} className="absolute inset-x-0 -inset-y-[24%] h-[148%]">
          <div className="absolute inset-0 pattern-bg" />
        </Parallax>
        {/* brand-red glow + dark gradient so the white type stays legible */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(179,33,10,0.5),transparent_60%)]" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/65 via-black/35 to-black/10" />
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl lg:ml-[32%]">
            <p className="mb-6 pl-6 text-xs font-semibold uppercase tracking-[0.25em] text-white/70">Partnerships</p>
            <h1 className="pl-6 text-5xl font-light leading-[1.03] tracking-tight text-white drop-shadow-sm sm:text-6xl lg:text-7xl">
              Partners in <span className="italic">innovation.</span>
            </h1>
            <div className="relative mt-10 inline-flex">
              {/* passionlabs "button_outlines" — white lines emanate from the button edges */}
              <span className="pointer-events-none absolute top-1/2 right-full h-px w-screen -translate-y-1/2 bg-white/80" />
              <span className="pointer-events-none absolute top-1/2 left-full h-px w-screen -translate-y-1/2 bg-white/80" />
              <span className="pointer-events-none absolute bottom-full left-0 h-screen w-px bg-white/80" />
              <span className="pointer-events-none absolute top-full left-0 h-[200vh] w-px bg-white/80" />
              <button
                onClick={() => openMeeting()}
                className="group relative z-10 inline-flex items-center gap-3 py-3 pr-4 text-sm font-semibold uppercase tracking-[0.2em] text-white drop-shadow-sm"
              >
                <span className="h-3 w-3 rounded-full bg-[#eb0000] transition-transform duration-300 group-hover:scale-150" />
                Become a partner
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="relative pt-8 pb-16 sm:pb-20 overflow-hidden">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" aria-hidden="true" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-secondary-accent/5 rounded-full blur-3xl" aria-hidden="true" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <Heading as="h2" size="h2" className="mb-4">
              Our Innovation Partners
            </Heading>
            <Lead className="max-w-2xl mx-auto">
              Collaborating with leading institutions to drive tech innovation
            </Lead>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {partners.map((partner) => (
              <div
                key={partner.id}
                className="group relative flex flex-col rounded-2xl border border-border bg-card p-6 animate-fade-in transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[var(--shadow-card)]"
                style={{ animationDelay: partner.animationDelay }}
              >
                <div className="mb-5 flex items-center gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-white/5 ring-1 ring-border">
                    <img
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      className="h-9 w-9 object-contain"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{partner.name}</h3>
                </div>

                <p className="mb-6 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {partner.description}
                </p>

                {partner.link && (
                  <a
                    href={partner.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
                  >
                    Visit site
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Case Study */}
      <section className="relative overflow-hidden bg-card py-16 sm:py-20 lg:py-24 border-y border-border/60">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[40rem] h-[40rem] bg-primary/5 rounded-full blur-3xl" aria-hidden="true" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 mb-6">
              <span className="h-2 w-2 rounded-full bg-primary"></span>
              <span className="text-sm font-medium text-primary">Partnership Success</span>
            </div>
            <Heading as="h2" size="h2" className="mb-4">
              Our Partnership Intervention
            </Heading>
            <p className="text-sm font-medium uppercase tracking-wide text-muted-foreground">
              Focused Indicators • 2025 PROUD PARTNER OF THE YEAR
            </p>
          </div>

          {/* Case Study Content */}
          <div className="max-w-6xl mx-auto">
            {/* Case Study Header */}
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
                How can we use data to increase revenues?
              </h3>
              <p className="text-base text-muted-foreground max-w-lg mx-auto">
                10 ways we add value to this company through data intelligence.
              </p>
            </div>

            {/* Partnership Overview */}
            <div className="rounded-2xl border border-border bg-secondary/40 p-6 sm:p-8 mb-12">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                  <Handshake className="h-6 w-6 text-primary" />
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  SWAIRAX partnered with the <span className="font-semibold text-primary">Swahilies Business team</span> to embed data intelligence directly into
                  their product and operational layer:
                </p>
              </div>
            </div>

            {/* Implementation Details */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
              {/* Left Column - Implementation Points */}
              <div>
                <h4 className="text-lg font-bold text-foreground mb-6">Implementation Approach</h4>
                <div className="space-y-3">
                  {implementation.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-4 rounded-xl border border-border bg-background/40 p-4 transition-colors hover:bg-secondary/50"
                    >
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/15 text-xs font-bold text-primary">
                        {index + 1}
                      </span>
                      <p className="text-sm leading-relaxed text-muted-foreground">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column - AARRR Framework */}
              <div>
                <h4 className="text-lg font-bold text-foreground mb-6">Growth Framework</h4>
                <div className="space-y-3">
                  {framework.map((stage, index) => (
                    <div
                      key={index}
                      className={`flex items-start gap-4 rounded-xl border p-4 transition-colors ${
                        stage.highlight
                          ? "border-primary/40 bg-primary/10"
                          : "border-border bg-background/40 hover:bg-secondary/50"
                      }`}
                    >
                      <span
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-sm font-bold ${
                          stage.highlight ? "bg-primary text-primary-foreground" : "bg-primary/15 text-primary"
                        }`}
                      >
                        {stage.letter}
                      </span>
                      <div>
                        <h5 className={`font-semibold mb-1 ${stage.highlight ? "text-primary" : "text-foreground"}`}>
                          {stage.title}
                        </h5>
                        <p className="text-sm leading-relaxed text-muted-foreground">{stage.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <CTASection
        title="Ready to Partner with SWAIRAX?"
        description="Join our ecosystem of innovation and help shape the future of AI in Tanzania and beyond."
        primary={{ label: "Get In Touch", href: "/contact" }}
      />

      <Footer />
    </div>
  );
};

export default Partnerships;
