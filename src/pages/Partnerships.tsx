import Header from "@/components/Header";
import Footer from "@/components/Footer";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SectionHeading, SectionLead } from "@/components/typography";
import ScrollReveal from "@/components/ScrollReveal";
import { ExternalLink, ArrowRight } from "lucide-react";
import { useNavigationWithScroll } from "@/utils/navigation";

const Partnerships = () => {
  const { navigateToTop } = useNavigationWithScroll();
  
  const partners = [
    {
      id: "buni",
      name: "Buni Innovation Hub",
      logo: "/uploads/buni.png",
      description: "A co-creation space under COSTECH focused on tech entrepreneurship and youth capacity building.",
      mission: "Empowering Tanzanian innovators through mentorship, training, and civic tech incubation.",
      link: "https://www.makingallvoicescount.org/project/buni-hub/",
    },
    {
      id: "costech",
      name: "COSTECH",
      logo: "/uploads/costech.png",
      description: "Tanzania's national science and technology commission, advising on innovation policy and research funding.",
      mission: "Coordinating and promoting technology development for Tanzania's socio-economic growth.",
      link: "https://costech.or.tz/",
    },
    {
      id: "dtbi",
      name: "DTBI",
      logo: "/uploads/dtbi.png",
      description: "A premier incubator supporting digital startups with shared spaces, mentorship, and commercialization services.",
      mission: "Driving digital innovation for youth and women-led startups in Tanzania.",
      link: "https://teknohama.or.tz/",
    },
    {
      id: "udsm",
      name: "UDSM",
      logo: "/uploads/udsm.png",
      description: "Tanzania's oldest and most prestigious public university, fostering research and academic excellence.",
      mission: "Empowering future leaders through world-class education and transformative research.",
      link: "https://www.udsm.ac.tz/",
    },
    {
      id: "swahilies",
      name: "Swahilies",
      logo: "/uploads/swahilies.png",
      description: "Building payments processing systems to digitize payments in Africa, making it easy for businesses to accept digital payments from anyone, anywhere.",
      mission: "Making digital payments quick and easy for African businesses without the hassle of traditional methods.",
      link: "https://www.swahilies.com/",
    },
    {
      id: "sinnovate",
      name: "SINNOVATE",
      logo: "/uploads/sinnovate-logo.png",
      description: "An auditing firm incorporated in 2023, specializing in providing innovative high-quality, value-added Taxation, Accounting, Auditing, and Other Business consulting services.",
      mission: "To consistently deliver innovative and exceptional Taxation, Auditing, and Accounting services with uncompromising quality and integrity.",
      link: "https://www.sinnovate.co.tz/",
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-28 md:pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-muted/5 to-background" />
        <div className="absolute -left-20 top-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute right-0 bottom-0 w-96 h-96 bg-muted/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-4 text-xs font-medium border-primary/30 bg-primary/5">
              Partnerships
            </Badge>
            <ScrollReveal>
              <SectionHeading className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
                Our Partners in Innovation
              </SectionHeading>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <SectionLead className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">
                Quantum Intelligence proudly collaborates with leading institutions driving tech, research, and entrepreneurship in Tanzania.
              </SectionLead>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="relative py-12 md:py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-muted/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
          <ScrollReveal className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
              Our Innovation Partners
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              Collaborating with leading institutions to drive tech innovation
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {partners.map((partner, index) => (
              <ScrollReveal key={partner.id} delay={index * 80}>
                <Card className="group relative overflow-hidden border border-border/50 hover:border-primary/50 bg-gradient-to-br from-card via-card/80 to-background shadow-lg hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-2 h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-primary/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <CardContent className="p-6 lg:p-8 relative z-10 flex flex-col h-full">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-14 h-14 bg-background rounded-xl border border-border/50 p-2 flex items-center justify-center group-hover:border-primary/30 transition-colors">
                        <img
                          src={partner.logo}
                          alt={`${partner.name} logo`}
                          className="w-10 h-10 object-contain"
                        />
                      </div>
                      <h3 className="text-lg lg:text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {partner.name}
                      </h3>
                    </div>

                    <p className="text-sm lg:text-base text-muted-foreground leading-relaxed mb-4 flex-grow group-hover:text-foreground/80 transition-colors">
                      {partner.description}
                    </p>

                    <p className="text-xs text-primary/70 italic mb-4">
                      {partner.mission}
                    </p>

                    {partner.link && (
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => window.open(partner.link, '_blank')}
                        className="w-full text-sm text-primary hover:text-primary/80 hover:bg-primary/5 group-hover:bg-primary/10 transition-all mt-auto"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Visit Site
                      </Button>
                    )}
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Case Study */}
      <section className="relative py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
          <ScrollReveal className="text-center mb-12">
            <Badge className="bg-primary/10 text-primary border-primary/20 mb-4">
              Partnership Success
            </Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
              Our Partnership Intervention
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              Focused Indicators • 2025 PROUD PARTNER OF THE YEAR
            </p>
          </ScrollReveal>

          <div className="max-w-6xl mx-auto">
            <ScrollReveal className="text-center mb-10">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-foreground">
                How can we use data to increase revenues?
              </h3>
              <p className="text-base text-muted-foreground max-w-lg mx-auto">
                10 ways we add value to this company through data intelligence.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <Card className="border border-primary/20 bg-card/80 backdrop-blur-sm mb-10">
                <CardContent className="p-6 lg:p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <div className="w-6 h-6 bg-primary rounded-lg"></div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      Quantum Intelligence partnered with the <span className="font-semibold text-primary">Swahilies Business team</span> to embed data intelligence directly into their product and operational layer.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <ScrollReveal delay={150}>
                <div className="space-y-4">
                  <h4 className="text-xl font-bold text-foreground mb-6">Implementation Approach</h4>
                  {[
                    "Designing a unified data pipeline across user, subscription, and entire platform data.",
                    "Implementing real-time analytics for users, revenue, and engagement.",
                    "Tracking every user click and session to understand true platform usage.",
                    "Building decision-oriented dashboards for growth and operations teams.",
                    "Translating raw usage data into clear business actions and engagement activities."
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border/50 hover:border-primary/30 transition-colors">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                        index % 2 === 0 ? 'bg-primary/20' : 'bg-muted'
                      }`}>
                        <div className={`w-3 h-3 rounded-full ${
                          index % 2 === 0 ? 'bg-primary' : 'bg-muted-foreground'
                        }`}></div>
                      </div>
                      <p className="text-sm lg:text-base text-muted-foreground leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </ScrollReveal>

              <ScrollReveal delay={250}>
                <div className="space-y-4">
                  {[
                    { title: "Acquisition", desc: "Does the business attract users who become active, paying, and long-term clients?", color: "from-green-500/20 to-green-500/10 border-green-500/30 text-green-400" },
                    { title: "Activation", desc: "Do users reach their first meaningful moment of value within the system/product?", color: "from-blue-500/20 to-blue-500/10 border-blue-500/30 text-blue-400" },
                    { title: "Engagement", desc: "Do people return because the product consistently solves real problems?", color: "from-purple-500/20 to-purple-500/10 border-purple-500/30 text-purple-400" },
                    { title: "Retention", desc: "Are there early signals of disengagement detected before users leave?", color: "from-orange-500/20 to-orange-500/10 border-orange-500/30 text-orange-400" },
                    { title: "Revenue", desc: "Does usage translate into sustainable revenue growth and trust over time?", color: "from-primary/20 to-primary/10 border-primary/30 text-primary" },
                  ].map((item, index) => (
                    <div key={index} className={`bg-gradient-to-r ${item.color} p-5 rounded-xl border`}>
                      <h5 className={`font-bold mb-2 ${item.color.includes('text-') ? '' : 'text-foreground'}`}>{item.title}</h5>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-primary/10 via-background to-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-10">
          <ScrollReveal className="max-w-4xl mx-auto text-center">
            <Card className="bg-gradient-to-br from-card via-card/80 to-background border border-primary/20 shadow-2xl shadow-primary/5 p-8 md:p-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                Ready to Partner with Quantum Intelligence?
              </h2>
              <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join our ecosystem of innovation and help shape the future of AI in Tanzania and beyond.
              </p>
              <Button
                size="lg"
                onClick={() => navigateToTop('/contact')}
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-base font-semibold shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300"
              >
                Get In Touch
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Card>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Partnerships;