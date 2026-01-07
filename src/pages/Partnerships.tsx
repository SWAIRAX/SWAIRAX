import Header from "@/components/Header";
import Footer from "@/components/Footer";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SectionHeading, SectionLead } from "@/components/typography";
import { ExternalLink } from "lucide-react";

const Partnerships = () => {
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
      name: "COSTECH (Commission for Science and Technology)",
      logo: "/uploads/costech.png",
      description: "Tanzania's national science and technology commission, advising on innovation policy and research funding.",
      mission: "Coordinating and promoting technology development for Tanzania's socio-economic growth.",
      link: "https://costech.or.tz/",
      animationDelay: "0.2s"
    },
    {
      id: "dtbi",
      name: "DTBi (Data-Teknohama Business Incubator)",
      logo: "/uploads/dtbi.png",
      description: "A premier incubator supporting digital startups with shared spaces, mentorship, and commercialization services.",
      mission: "Driving digital innovation for youth and women-led startups in Tanzania.",
      link: "https://teknohama.or.tz/",
      animationDelay: "0.4s"
    },
    {
      id: "udsm",
      name: "University of Dar-es-Salaam",
      logo: "/uploads/udsm.png",
      description: "Tanzania's oldest and most prestigious public university, fostering research and academic excellence.",
      mission: "Empowering future leaders through world-class education and transformative research.",
      link: "https://www.udsm.ac.tz/",
      animationDelay: "0.6s"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Header Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5" />
        <div className="absolute inset-0 bg-[url('/uploads/Hero%20Illustration%20F1.svg')] bg-cover bg-center opacity-10" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-3 text-xs font-medium">
              Partnerships
            </Badge>
            <SectionHeading className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Our Partners in Innovation
            </SectionHeading>
            <SectionLead>
              Quantum Intelligence proudly collaborates with leading institutions driving tech, research, and entrepreneurship in Tanzania.
            </SectionLead>
          </div>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="relative py-16 overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary" />
              <Badge variant="outline" className="px-4 py-1 text-xs font-semibold border-primary/30 bg-primary/5">
                Partners
              </Badge>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
              Our Innovation Partners
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              Collaborating with leading institutions to drive tech innovation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {partners.map((partner) => (
            <Card
              key={partner.id}
                className="group relative bg-gradient-to-br from-card to-card/50 border border-border/50 hover:border-primary/50 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2 animate-fade-in partner-card"
              style={{ animationDelay: partner.animationDelay }}
            >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 rounded-lg opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500 -z-10" />
                <CardContent className="p-6 relative z-10">
                {/* Logo and Header */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 p-2 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-lg">
                    <img
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                          className="w-full h-full object-contain"
                    />
                      </div>
                  </div>
                  <div className="flex-1">
                      <h3 className="text-lg font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                      {partner.name}
                    </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors">
                      {partner.description}
                    </p>
                  </div>
                </div>

                {/* Mission Statement */}
                  <div className="mb-4 p-4 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 rounded-xl border-l-4 border-primary/50 shadow-md">
                    <p className="text-sm font-medium text-foreground italic">
                    "{partner.mission}"
                  </p>
                </div>

                {/* External Link */}
                {partner.link && (
                  <div className="flex justify-end">
                    <a
                      href={partner.link}
                      target="_blank"
                      rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-all group/link px-4 py-2 rounded-lg hover:bg-primary/10"
                    >
                      Visit Partner Site
                        <ExternalLink className="w-4 h-4 transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
                    </a>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-10 text-center">
        <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 rounded-3xl p-8 md:p-12 border border-primary/20 shadow-2xl backdrop-blur-sm">
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              Ready to Partner with Quantum Intelligence?
            </h2>
              <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join our ecosystem of innovation and help shape the future of AI in Tanzania and beyond.
            </p>
            <a
              href="/contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-primary-foreground px-8 py-6 rounded-lg text-base font-semibold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              Get In Touch
                <ExternalLink className="w-5 h-5" />
            </a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Partnerships;
