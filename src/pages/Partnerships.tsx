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
    },
    {
      id: "swahilies",
      name: "Swahilies",
      logo: "/uploads/swahilies.png",
      description: "Building payments processing systems to digitize payments in Africa, making it easy for businesses to accept digital payments from anyone, anywhere.",
      mission: "Making digital payments quick and easy for African businesses without the hassle of traditional methods.",
      link: "https://www.swahilies.com/",
      animationDelay: "0.8s"
    },
    {
      id: "sinnovate",
      name: "SINNOVATE CHARTERED ACCOUNTANTS",
      logo: "/uploads/sinnovate-logo.png",
      description: "An auditing firm incorporated in 2023, specializing in providing innovative high-quality, value-added Taxation, Accounting, Auditing, and Other Business consulting services.",
      mission: "To consistently deliver innovative and exceptional Taxation, Auditing, and Accounting services with uncompromising quality and integrity.",
      link: "https://www.sinnovate.co.tz/",
      animationDelay: "1.0s"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
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
      <section className="relative pt-8 pb-16 overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
          <div className="text-center mb-12">
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
                className="group relative bg-gradient-to-br from-card to-card/50 border border-border/50 overflow-hidden transition-all duration-500 hover:shadow-xl hover:shadow-black/10 hover:-translate-y-1 animate-fade-in partner-card"
                style={{ animationDelay: partner.animationDelay }}
              >
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
                      <h3 className="text-lg font-bold text-foreground mb-1">
                        {partner.name}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
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

      {/* Partnership Case Study */}
      <section className="relative py-20 overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-red-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-foreground via-red-500 to-foreground bg-clip-text text-transparent">
              Our Partnership Intervention
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              Focused Indicators • 2025 PROUD PARTNER OF THE YEAR
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <Card className="bg-gradient-to-br from-card to-card/50 border border-border/50 shadow-2xl backdrop-blur-sm">
              <CardContent className="p-8 md:p-12">
                <div className="text-center mb-8">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent">
                    How can we use data to increase revenues?
                  </h3>
                  <p className="text-lg text-muted-foreground">
                    10 ways we add value to this company through data intelligence.
                  </p>
                </div>

                <div className="mb-8 p-6 bg-gradient-to-r from-red-500/10 via-blue-500/10 to-red-500/10 rounded-xl border border-red-500/20">
                  <p className="text-foreground leading-relaxed">
                    Quantum Intelligence partnered with the <strong className="text-red-500">Swahilies Business team</strong> to embed data intelligence directly into
                    their product and operational layer:
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-sm text-muted-foreground">Designing a unified data pipeline across user, subscription, and entire platform data.</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-sm text-muted-foreground">Implementing real-time analytics for users, revenue, and engagement.</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-sm text-muted-foreground">Tracking every user click and session to understand true platform usage.</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-sm text-muted-foreground">Building decision-oriented dashboards for growth and operations teams.</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-sm text-muted-foreground">Translating raw usage data into clear business actions and engagement activities.</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <Card className="bg-gradient-to-r from-green-500/10 to-green-600/10 border-green-500/20">
                      <CardContent className="p-4">
                        <h4 className="font-bold text-green-600 mb-2">Acquisition</h4>
                        <p className="text-sm text-muted-foreground">Does the business attract users who become active, paying, and long-term clients?</p>
                      </CardContent>
                    </Card>

                    <Card className="bg-gradient-to-r from-blue-500/10 to-blue-600/10 border-blue-500/20">
                      <CardContent className="p-4">
                        <h4 className="font-bold text-blue-600 mb-2">Activation</h4>
                        <p className="text-sm text-muted-foreground">Do users reach their first meaningful moment of value within the system/product?</p>
                      </CardContent>
                    </Card>

                    <Card className="bg-gradient-to-r from-purple-500/10 to-purple-600/10 border-purple-500/20">
                      <CardContent className="p-4">
                        <h4 className="font-bold text-purple-600 mb-2">Engagement</h4>
                        <p className="text-sm text-muted-foreground">Do people return because the product consistently solves real problems?</p>
                      </CardContent>
                    </Card>

                    <Card className="bg-gradient-to-r from-orange-500/10 to-orange-600/10 border-orange-500/20">
                      <CardContent className="p-4">
                        <h4 className="font-bold text-orange-600 mb-2">Retention</h4>
                        <p className="text-sm text-muted-foreground">Are there early signals of disengagement detected before users leave?</p>
                      </CardContent>
                    </Card>

                    <Card className="bg-gradient-to-r from-red-500/10 to-red-600/10 border-red-500/20">
                      <CardContent className="p-4">
                        <h4 className="font-bold text-red-600 mb-2">Revenue</h4>
                        <p className="text-sm text-muted-foreground">Does usage translate into sustainable revenue growth and trust over time?</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </CardContent>
            </Card>
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
