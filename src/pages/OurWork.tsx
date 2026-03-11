import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { useNavigationWithScroll } from "@/utils/navigation";

const OurWork = () => {
  const { navigateToTop } = useNavigationWithScroll();

  const products = [
    {
      name: "Mifumo Labs",
      tag: "Product Studio",
      description:
        "Mifumo Labs is a human-centered software studio that partners with organizations to design and build impactful digital systems.",
      image: "/OUR WORK/desktop cover.png",
      path: "/mfumo-labs",
    },
    {
      name: "Mifumo SMS",
      tag: "Messaging Platform",
      description:
        "An SMS and AI system that helps businesses communicate with thousands of customers instantly and measure real results.",
      image: "/OUR WORK/mobile cover.png",
      path: "/mfumo-sms",
    },
    {
      name: "Kinara Copilot",
      tag: "EdTech · NECTA",
      description:
        "Student learning assistant that works over SMS, WhatsApp, and basic phones to support Tanzanian secondary students.",
      image: "/OUR WORK/mobile1.webp",
      path: "/kinara-copilot",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="relative py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <ScrollReveal className="text-center space-y-4 mb-12">
            <Badge variant="outline" className="border-primary/20 text-primary">
              Our Work
            </Badge>
            <h1 className="text-3xl md:text-5xl font-bold">
              Products built by Quantum Intelligence
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A focused portfolio of tools designed for African businesses,
              schools, and institutions.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {products.map((p) => (
              <ScrollReveal key={p.name}>
                <button
                  type="button"
                  onClick={() => navigateToTop(p.path)}
                  className="group flex h-full flex-col rounded-2xl bg-card/60 border border-border/60 hover:border-primary/40 hover:shadow-xl transition-all text-left overflow-hidden"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.name}
                      className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                      draggable={false}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-70 group-hover:opacity-80 transition-opacity" />
                    <div className="absolute bottom-3 left-3">
                      <Badge className="bg-black/70 text-white border-white/10">
                        {p.tag}
                      </Badge>
                    </div>
                  </div>
                  <div className="flex-1 p-5 flex flex-col gap-3">
                    <h2 className="text-lg font-semibold">{p.name}</h2>
                    <p className="text-sm text-muted-foreground flex-1">
                      {p.description}
                    </p>
                    <div className="mt-2">
                      <Button
                        variant="ghost"
                        className="px-0 text-primary hover:text-primary flex items-center gap-1"
                      >
                        View product
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </button>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OurWork;

