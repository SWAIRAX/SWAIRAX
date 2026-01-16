import Header from "@/components/Header";
import Footer from "@/components/Footer";
import React, { useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SectionHeading, SectionLead } from "@/components/typography";
import { ExternalLink } from "lucide-react";

// Custom styles for glass effect cards with black/red theme
const cardStyles = `.parent { width: 290px; height: 300px; perspective: 1000px; margin: 0 auto; } .card { height: 100%; border-radius: 50px; background: linear-gradient(135deg, rgb(0, 0, 0) 0%, rgb(139, 0, 0) 100%); transition: all 0.5s ease-in-out; transform-style: preserve-3d; box-shadow: rgba(139, 0, 0, 0) 40px 50px 25px -40px, rgba(139, 0, 0, 0.2) 0px 25px 25px -5px; } .glass { transform-style: preserve-3d; position: absolute; inset: 8px; border-radius: 55px; border-top-right-radius: 100%; background: linear-gradient(0deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.2) 100%); transform: translate3d(0px, 0px, 25px); border-left: 1px solid rgba(255, 255, 255, 0.3); border-bottom: 1px solid rgba(255, 255, 255, 0.3); transition: all 0.5s ease-in-out; } .content { padding: 80px 40px 0px 25px; transform: translate3d(0, 0, 26px); } .content .title { display: block; color: white; font-weight: 700; font-size: 16px; } .content .text { display: block; color: rgba(255, 255, 255, 0.8); font-size: 12px; margin-top: 15px; } .bottom { padding: 10px 12px; transform-style: preserve-3d; position: absolute; bottom: 20px; left: 20px; right: 20px; display: flex; align-items: center; justify-content: space-between; transform: translate3d(0, 0, 26px); } .bottom .view-more { display: flex; align-items: center; width: 50%; justify-content: flex-end; transition: all 0.2s ease-in-out; } .bottom .view-more:hover { transform: translate3d(0, 0, 10px); } .bottom .view-more .view-more-button { background: none; border: none; color: #ff4444; font-weight: 600; font-size: 11px; } .bottom .view-more .svg { fill: none; stroke: #ff4444; stroke-width: 2px; max-height: 12px; } .logo { position: absolute; right: 0; top: 0; transform-style: preserve-3d; } .logo .circle { display: block; position: absolute; aspect-ratio: 1; border-radius: 50%; top: 0; right: 0; box-shadow: rgba(139, 0, 0, 0.3) -10px 10px 20px 0px; -webkit-backdrop-filter: blur(5px); backdrop-filter: blur(5px); background: rgba(255, 0, 0, 0.1); transition: all 0.5s ease-in-out; } .logo .circle1 { width: 120px; transform: translate3d(0, 0, 20px); top: 8px; right: 8px; } .logo .circle2 { width: 100px; transform: translate3d(0, 0, 40px); top: 10px; right: 10px; -webkit-backdrop-filter: blur(1px); backdrop-filter: blur(1px); transition-delay: 0.4s; } .logo .circle3 { width: 80px; transform: translate3d(0, 0, 60px); top: 17px; right: 17px; transition-delay: 0.8s; } .logo .circle4 { width: 60px; transform: translate3d(0, 0, 80px); top: 23px; right: 23px; transition-delay: 1.2s; } .logo .circle5 { width: 40px; transform: translate3d(0, 0, 100px); top: 30px; right: 30px; display: grid; place-content: center; transition-delay: 1.6s; background: rgba(0, 0, 0, 0.9) !important; } .logo .circle5 .svg { width: 16px; fill: white; } .parent:hover .card { transform: rotate3d(1, 1, 0, 30deg); box-shadow: rgba(139, 0, 0, 0.4) 30px 50px 25px -40px, rgba(139, 0, 0, 0.2) 0px 25px 30px 0px; } .parent:hover .card .logo .circle2 { transform: translate3d(0, 0, 50px); } .parent:hover .card .logo .circle3 { transform: translate3d(0, 0, 70px); } .parent:hover .card .logo .circle4 { transform: translate3d(0, 0, 90px); } .parent:hover .card .logo .circle5 { transform: translate3d(0, 0, 110px); } .pattern-bg { --color: rgba(255, 50, 50, 0.8); background-color: rgb(0, 0, 0); background-size: 40px 40px; background-image: linear-gradient(45deg, var(--color), transparent 40%), linear-gradient(-90deg, var(--color), transparent 20%); }`;

const Partnerships = () => {
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
      animationDelay: "0.2s"
    },
    {
      id: "dtbi",
      name: "DTBI",
      logo: "/uploads/dtbi.png",
      description: "A premier incubator supporting digital startups with shared spaces, mentorship, and commercialization services.",
      mission: "Driving digital innovation for youth and women-led startups in Tanzania.",
      link: "https://teknohama.or.tz/",
      animationDelay: "0.4s"
    },
    {
      id: "udsm",
      name: "UDSM",
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
      name: "SINNOVATE",
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
        <div className="absolute inset-0 pattern-bg opacity-20" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-3 text-xs font-medium">
              Partnerships
            </Badge>
            <SectionHeading className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto justify-items-center">
            {partners.map((partner) => (
              <div
                key={partner.id}
                className="parent animate-fade-in"
                style={{ animationDelay: partner.animationDelay }}
              >
                <div className="card">
                  <div className="glass">
                    <div className="content">
                      <span className="title">{partner.name}</span>
                      <span className="text line-clamp-3">{partner.description}</span>
                    </div>

                    <div className="bottom">
                      {partner.link && (
                        <div className="view-more">
                          <button
                            className="view-more-button"
                            onClick={() => window.open(partner.link, '_blank')}
                          >
                            Visit Site
                          </button>
                          <svg className="svg" viewBox="0 0 24 24">
                            <path d="M7 17L17 7M17 7H7M17 7V17" strokeLinecap="round" strokeLinejoin="round"></path>
                          </svg>
                        </div>
                      )}
                    </div>

                    <div className="logo">
                      <div className="circle circle1"></div>
                      <div className="circle circle2"></div>
                      <div className="circle circle3"></div>
                      <div className="circle circle4"></div>
                      <div className="circle5 circle">
                        <img
                          src={partner.logo}
                          alt={`${partner.name} logo`}
                          className="w-6 h-6 md:w-8 md:h-8 object-contain"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Case Study */}
      <section className="relative py-20 md:py-24 overflow-hidden bg-black">
        {/* Background pattern matching partners section */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-red-500/20 px-4 py-2 rounded-full mb-6 border border-red-500/30">
              <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
              <span className="text-sm font-medium text-white">Partnership Success</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
              Our Partnership Intervention
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Focused Indicators • 2025 PROUD PARTNER OF THE YEAR
            </p>
          </div>

          {/* Case Study Content */}
          <div className="max-w-6xl mx-auto">
            {/* Case Study Header */}
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                How can we use data to increase revenues?
              </h3>
              <p className="text-base text-gray-300 max-w-lg mx-auto">
                10 ways we add value to this company through data intelligence.
              </p>
            </div>

            {/* Partnership Overview */}
            <div className="bg-gray-900 rounded-2xl p-8 shadow-lg border border-red-500/20 mb-12">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <div className="w-6 h-6 bg-red-500 rounded-lg"></div>
                </div>
                <div>
                  <p className="text-gray-300 leading-relaxed">
                    Quantum Intelligence partnered with the <span className="font-semibold text-red-400">Swahilies Business team</span> to embed data intelligence directly into
                    their product and operational layer:
                  </p>
                </div>
              </div>
            </div>

            {/* Implementation Details */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              {/* Left Column - Implementation Points */}
              <div className="space-y-6">
                <h4 className="text-xl font-bold text-white mb-6">Implementation Approach</h4>
                <div className="space-y-4">
                  {[
                    "Designing a unified data pipeline across user, subscription, and entire platform data.",
                    "Implementing real-time analytics for users, revenue, and engagement.",
                    "Tracking every user click and session to understand true platform usage.",
                    "Building decision-oriented dashboards for growth and operations teams.",
                    "Translating raw usage data into clear business actions and engagement activities."
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-4 p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors border border-red-500/10">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                        index % 2 === 0 ? 'bg-red-500/20' : 'bg-blue-500/20'
                      }`}>
                        <div className={`w-3 h-3 rounded-full ${
                          index % 2 === 0 ? 'bg-red-400' : 'bg-blue-400'
                        }`}></div>
                      </div>
                      <p className="text-gray-300 leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column - AARRR Framework */}
              <div className="space-y-6">
                <div className="grid grid-cols-1 gap-4">
                  <div className="bg-gradient-to-r from-green-900/50 to-green-800/50 p-6 rounded-xl border border-green-500/30">
                    <h5 className="font-bold text-green-300 mb-2">Acquisition</h5>
                    <p className="text-green-200 text-sm">Does the business attract users who become active, paying, and long-term clients?</p>
                  </div>

                  <div className="bg-gradient-to-r from-blue-900/50 to-blue-800/50 p-6 rounded-xl border border-blue-500/30">
                    <h5 className="font-bold text-blue-300 mb-2">Activation</h5>
                    <p className="text-blue-200 text-sm">Do users reach their first meaningful moment of value within the system/product?</p>
                  </div>

                  <div className="bg-gradient-to-r from-purple-900/50 to-purple-800/50 p-6 rounded-xl border border-purple-500/30">
                    <h5 className="font-bold text-purple-300 mb-2">Engagement</h5>
                    <p className="text-purple-200 text-sm">Do people return because the product consistently solves real problems?</p>
                  </div>

                  <div className="bg-gradient-to-r from-orange-900/50 to-orange-800/50 p-6 rounded-xl border border-orange-500/30">
                    <h5 className="font-bold text-orange-300 mb-2">Retention</h5>
                    <p className="text-orange-200 text-sm">Are there early signals of disengagement detected before users leave?</p>
                  </div>

                  <div className="bg-gradient-to-r from-red-900/50 to-red-800/50 p-6 rounded-xl border border-red-500/30">
                    <h5 className="font-bold text-red-300 mb-2">Revenue</h5>
                    <p className="text-red-200 text-sm">Does usage translate into sustainable revenue growth and trust over time?</p>
                  </div>
                </div>
              </div>
            </div>

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
