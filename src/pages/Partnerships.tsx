import Header from "@/components/Header";
import Footer from "@/components/Footer";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
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
      <section className="container mx-auto px-6 pt-32 pb-16 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Our Partners in Innovation
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Quantum Intelligence proudly collaborates with leading institutions driving tech, research, and entrepreneurship in Tanzania.
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full shimmer-effect"></div>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="container mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {partners.map((partner) => (
            <Card
              key={partner.id}
              className="group bg-card border-border hover:border-primary/50 transition-all duration-500 animate-slide-in-bottom partner-card"
              style={{ animationDelay: partner.animationDelay }}
            >
              <CardContent className="p-8">
                {/* Logo and Header */}
                <div className="flex items-start gap-6 mb-6">
                  <div className="flex-shrink-0">
                    <img
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      className="w-16 h-16 object-contain rounded-lg bg-muted/30 p-2 transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {partner.name}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {partner.description}
                    </p>
                  </div>
                </div>

                {/* Mission Statement */}
                <div className="mb-6 p-4 bg-muted/30 rounded-lg border-l-4 border-primary/30">
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
                      className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors group/link"
                    >
                      Visit Partner Site
                      <ExternalLink className="w-4 h-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                    </a>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="container mx-auto px-6 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 border border-primary/20">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Ready to Partner with Quantum Intelligence?
            </h2>
            <p className="text-muted-foreground mb-6">
              Join our ecosystem of innovation and help shape the future of AI in Tanzania and beyond.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              Get In Touch
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Partnerships;
