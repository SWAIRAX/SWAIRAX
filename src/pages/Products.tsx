import { Fragment } from "react";
import { Helmet } from "react-helmet-async";
import { openMeeting } from "@/utils/meeting";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import SectionDivider from "@/components/SectionDivider";
import FullBleedHero from "@/components/FullBleedHero";
import FloatingMockup from "@/components/FloatingMockup";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heading, Lead } from "@/components/ui/section";
import { useNavigationWithScroll } from "@/utils/navigation";
import { getTechLogo, logoToneClass } from "@/data/services";
import {
  ArrowRight,
  CheckCircle2,
  Boxes,
  Package,
  MessageCircle,
  Store,
  MapPin,
  CalendarCheck,
  Wallet,
  Users,
  Building2,
  Scissors,
  type LucideIcon,
} from "lucide-react";

type Highlight = {
  icon: LucideIcon;
  title: string;
  description: string;
};

type Stat = {
  value: string;
  label: string;
};

type Product = {
  id: string;
  icon: LucideIcon;
  tag: string;
  title: string;
  tagline: string;
  status: string;
  live: boolean;
  heroImage: string;
  heroImageDark?: string;
  description: string;
  overview: string;
  stats: Stat[];
  highlights: Highlight[];
  features: string[];
  audience: string[];
  stack: string[];
};

const products: Product[] = [
  {
    id: "tanzabuild",
    icon: Building2,
    tag: "Construction Technology",
    title: "TanzaBuild",
    tagline: "Tanzania's Construction Services Platform",
    status: "Live",
    live: true,
    heroImage: "/build.webp",
    heroImageDark: "/build2.webp",
    description:
      "TanzaBuild connects contractors, material suppliers, and clients across Tanzania on one powerful platform. Search, compare, and order construction materials priced in TZS — with WhatsApp ordering and Swahili/English support.",
    overview:
      "Building in Tanzania usually means scattered suppliers, prices that live in people's heads, and ordering over endless phone calls. TanzaBuild brings the whole experience into one place: a searchable catalog of construction products with real local pricing, a marketplace that connects buyers and sellers, and one-tap ordering on the channel people already use — WhatsApp.",
    stats: [
      { value: "300+", label: "Products in catalog" },
      { value: "TZS", label: "Real local pricing" },
      { value: "1-tap", label: "WhatsApp ordering" },
      { value: "Live", label: "Available now" },
    ],
    highlights: [
      {
        icon: Package,
        title: "Real-Time Material Catalog",
        description:
          "300+ construction products with live Tanzanian pricing in TZS — fully searchable and filterable.",
      },
      {
        icon: MessageCircle,
        title: "WhatsApp Ordering",
        description:
          "Order in one tap with pre-filled Swahili/English messages — no app friction, no lost orders.",
      },
      {
        icon: Store,
        title: "Contractor & Supplier Marketplace",
        description:
          "Connects contractors, suppliers, and clients across Tanzania on a single trusted platform.",
      },
    ],
    features: [
      "300+ construction products with real Tanzanian pricing in TZS",
      "WhatsApp order integration with pre-filled Swahili/English messages",
      "Contractor and supplier marketplace",
      "Mobile app (React Native) + web platform",
      "Real-time material catalog with search and filtering",
    ],
    audience: [
      "Contractors sourcing materials at the best price",
      "Material suppliers reaching more buyers",
      "Homeowners and developers managing a build",
      "Hardware shops digitizing their catalog",
    ],
    stack: ["React Native", "Django", "PostgreSQL", "Railway", "Resend", "cPanel"],
  },
  {
    id: "florre",
    icon: Scissors,
    tag: "Beauty Technology",
    title: "Florré",
    tagline: "Luxury Salon Booking for Tanzania",
    status: "Coming Soon",
    live: false,
    heroImage: "/florre.webp",
    description:
      "Florré is a premium beauty discovery and salon booking app designed for Tanzania. Find top-rated stylists near you, book appointments in seconds, and pay with your favourite mobile money service.",
    overview:
      "Booking beauty services in Tanzania should be as simple as ordering a ride — but today it means calling around, waiting for replies, and sorting out payment separately. Florré fixes that with a clean, luxury experience: discover trusted stylists near you, book in seconds, chat to align on the look, and pay with the mobile money service you already use.",
    stats: [
      { value: "GPS", label: "Find stylists near you" },
      { value: "4+", label: "Mobile money options" },
      { value: "Seconds", label: "To book an appointment" },
      { value: "Soon", label: "Join the waitlist" },
    ],
    highlights: [
      {
        icon: MapPin,
        title: "Discover Nearby Stylists",
        description:
          "A GPS-based discovery map helps you find top-rated stylists and salons around you.",
      },
      {
        icon: CalendarCheck,
        title: "Book in Seconds",
        description:
          "Real-time appointment booking with in-app chat so you can align before you arrive.",
      },
      {
        icon: Wallet,
        title: "Pay with Mobile Money",
        description:
          "M-Pesa, Tigo Pesa, Airtel Money, and Halopesa via Selcom — built in from day one.",
      },
    ],
    features: [
      "GPS-based stylist and salon discovery map",
      "Real-time appointment booking",
      "In-app chat with stylists",
      "Mobile money payments (M-Pesa, Tigo Pesa, Airtel Money, Halopesa via Selcom)",
      "Firebase push notifications & Africa's Talking SMS",
      "Stylist profiles with portfolios and reviews",
    ],
    audience: [
      "Clients looking for trusted, top-rated stylists",
      "Salons and independent stylists growing bookings",
      "Anyone who prefers to pay with mobile money",
      "Beauty professionals building a portfolio and reviews",
    ],
    stack: ["React Native", "Node.js", "Supabase", "Selcom", "Firebase", "Africa's Talking"],
  },
];

const Products = () => {
  const { navigateToTop, scrollToSection } = useNavigationWithScroll();

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "TanzaBuild",
              description:
                "Tanzania's construction services platform — connect with contractors, source materials, and manage your build in one place.",
              applicationCategory: "BusinessApplication",
              operatingSystem: "Android, iOS",
              image: "https://swairax.com/build.webp",
              url: "https://swairax.com/products#tanzabuild",
              offers: { "@type": "Offer", price: "0", priceCurrency: "TZS" },
              publisher: { "@type": "Organization", name: "SWAIRAX", url: "https://swairax.com" },
            },
            {
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "Florré",
              description:
                "Luxury salon booking and beauty discovery app for Tanzania — find a stylist, book in seconds, pay with mobile money.",
              applicationCategory: "LifestyleApplication",
              operatingSystem: "Android, iOS",
              image: "https://swairax.com/florre.webp",
              url: "https://swairax.com/products#florre",
              offers: { "@type": "Offer", price: "0", priceCurrency: "TZS" },
              publisher: { "@type": "Organization", name: "SWAIRAX", url: "https://swairax.com" },
            },
          ])}
        </script>
      </Helmet>
      <Header />

      {/* Hero — FullBleedHero (same style as the service detail pages) */}
      <FullBleedHero
        imageSrc="/hero-bg.webp"
        imageAlt="SWAIRAX products"
        size="md"
        eyebrow={<><Boxes className="h-4 w-4 mr-2" />Our Products</>}
        title={
          <Heading as="h1" size="display" className="font-black text-white">
            Built in Tanzania. Designed for Africa.
          </Heading>
        }
        subtitle="Innovative platforms solving real problems in Tanzania and beyond — get to know what we've built and what's coming next."
        cta={
          <>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 md:px-8 py-4 text-base font-semibold"
              onClick={() => scrollToSection("tanzabuild")}
            >
              Explore Products <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              className="border-white/40 text-white bg-transparent hover:bg-white/10 hover:text-white hover:border-white"
              onClick={() => openMeeting()}
            >
              Start a Project
            </Button>
          </>
        }
      />

      {/* Product sections */}
      {products.map((product, index) => (
        <Fragment key={product.id}>
        <section
          id={product.id}
          className={`scroll-mt-24 py-14 sm:py-18 lg:py-20 ${
            index % 2 === 1 ? "bg-card" : "bg-background"
          }`}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            {/* Intro — text + image */}
            <ScrollReveal>
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center">
                {/* Left — copy */}
                <div className="space-y-5">
                  <div className="flex flex-wrap items-center gap-3">
                    <Badge className="inline-flex items-center gap-1.5 bg-primary/10 text-primary hover:bg-primary/15 border-transparent">
                      <product.icon className="h-3.5 w-3.5" />
                      {product.tag}
                    </Badge>
                    <Badge variant="secondary" className="inline-flex items-center gap-1.5">
                      <span className={`h-2 w-2 rounded-full ${product.live ? "bg-green-500" : "bg-amber-500"}`} />
                      {product.status}
                    </Badge>
                  </div>
                  <Heading as="h2" size="h2" className="text-primary">
                    {product.title}
                  </Heading>
                  <p className="text-lg font-semibold text-foreground">{product.tagline}</p>
                  <p className="text-muted-foreground leading-relaxed">{product.description}</p>
                  <p className="text-muted-foreground leading-relaxed">{product.overview}</p>

                  <div className="flex flex-wrap items-center gap-x-5 gap-y-2 pt-1">
                    {product.stack.map((tech) => {
                      const logo = getTechLogo(tech);
                      return (
                        <span key={tech} className="inline-flex items-center gap-1.5">
                          {logo ? (
                            <img
                              src={logo}
                              alt=""
                              loading="lazy"
                              className={`h-4 w-auto max-w-[64px] object-contain ${logoToneClass(tech)}`}
                            />
                          ) : (
                            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                          )}
                          <span className="font-mono text-[11px] font-medium tracking-tight text-foreground/70">
                            {tech}
                          </span>
                        </span>
                      );
                    })}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 pt-2">
                    {product.id === "tanzabuild" ? (
                      <>
                        <a href="https://tanzabuild.com" target="_blank" rel="noopener noreferrer">
                          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                            Visit TanzaBuild <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </a>
                        <a
                          href="https://tanzabuild.com/downloads/tanzabuild-release.apk"
                          target="_blank"
                          rel="noopener noreferrer"
                          download
                        >
                          <Button
                            variant="outline"
                            className="border-border text-foreground hover:bg-muted"
                          >
                            Download App <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </a>
                      </>
                    ) : (
                      <Button
                        className="bg-primary hover:bg-primary/90 text-primary-foreground w-fit"
                        onClick={() => openMeeting()}
                      >
                        Join the Waitlist <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    )}
                  </div>
                </div>

                {/* Right — interactive free-floating product mobile mockup */}
                <FloatingMockup
                  src={product.heroImage}
                  srcDark={product.heroImageDark}
                  alt={`${product.title} mobile app mockup`}
                />
              </div>
            </ScrollReveal>

            {/* Stats */}
            <ScrollReveal>
              <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                {product.stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-xl border border-border/60 bg-secondary/40 p-5 text-center"
                  >
                    <div className="text-2xl sm:text-3xl font-bold text-primary mb-1">
                      {stat.value}
                    </div>
                    <p className="text-xs text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            {/* Highlights */}
            <ScrollReveal>
              <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
                {product.highlights.map((h) => (
                  <Card key={h.title} className="border-border bg-secondary/40 group">
                    <CardContent className="p-6">
                      <div className="mb-4 w-fit card-icon rounded-xl bg-primary/10 p-3 text-primary group-hover:bg-primary/20 transition-colors">
                        <h.icon className="h-6 w-6" />
                      </div>
                      <h4 className="mb-2 text-lg font-bold">{h.title}</h4>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {h.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </ScrollReveal>

            {/* Key features + who it's for */}
            <ScrollReveal>
              <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                <div className="rounded-xl border border-border bg-secondary/40 p-6">
                  <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-primary">
                    Key Features
                  </h3>
                  <ul className="space-y-3">
                    {product.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-3 text-sm text-muted-foreground"
                      >
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-xl border border-border bg-secondary/40 p-6">
                  <h3 className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-primary">
                    <Users className="h-4 w-4" /> Who It's For
                  </h3>
                  <ul className="space-y-3">
                    {product.audience.map((who) => (
                      <li
                        key={who}
                        className="flex items-start gap-3 text-sm text-muted-foreground"
                      >
                        <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        <span>{who}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
        {/* Interlocking divider at the end of the section */}
        <SectionDivider
          variant={index === 0 ? "ring" : "matrix"}
          flip
          className="-mt-px w-full bg-card text-[hsl(var(--background))]"
        />
        </Fragment>
      ))}

      {/* More Coming Soon */}
      <section className="py-16 sm:py-20 lg:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="mx-auto max-w-2xl text-center space-y-5">
            <Heading as="h2" size="h2">
              More Coming Soon
            </Heading>
            <Lead className="mx-auto">
              SWAIRAX is constantly building. New products are in development — stay tuned.
            </Lead>
            <div className="flex justify-center pt-2">
              <Button
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
                onClick={() => navigateToTop("/blog")}
              >
                Follow Our Journey <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;
