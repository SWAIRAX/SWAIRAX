import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Users, Target, Eye, Award, ChevronDown, ChevronUp, CheckCircle } from "lucide-react";

const About = () => {
  const [expandedValues, setExpandedValues] = useState<{[key: string]: boolean}>({});

  const toggleValue = (valueId: string) => {
    setExpandedValues(prev => ({
      ...prev,
      [valueId]: !prev[valueId]
    }));
  };

  const values = [
    {
      icon: <Target className="h-8 w-8" />,
      title: "Innovation First",
      description: "We continuously push the boundaries of what's possible with AI and data science."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Inclusive Culture",
      description: "We believe diverse perspectives drive better solutions and innovation."
    },
    {
      icon: <Eye className="h-8 w-8" />,
      title: "Transparency",
      description: "We maintain open communication and ethical practices in all our work."
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Excellence",
      description: "We strive for excellence in every project and interaction."
    }
  ];

  // const team = [
  //   {
  //     name: "Dr. Sarah Chen",
  //     role: "Chief Technology Officer",
  //     bio: "Leading AI researcher with 15+ years experience in machine learning and computer vision.",
  //     image: "SC"
  //   },
  //   {
  //     name: "Marcus Johnson",
  //     role: "Head of Data Engineering",
  //     bio: "Expert in building scalable data infrastructure and MLOps pipelines.",
  //     image: "MJ"
  //   },
  //   {
  //     name: "Dr. Amira Hassan",
  //     role: "AI Research Director",
  //     bio: "PhD in Natural Language Processing, specializing in large language models.",
  //     image: "AH"
  //   },
  //   {
  //     name: "David Park",
  //     role: "Business Strategy Lead",
  //     bio: "Former consultant helping enterprises adopt AI solutions strategically.",
  //     image: "DP"
  //   }
  // ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-secondary">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
              About <span className="text-primary">Quantum Intelligence</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
             Quantum Intelligence is an AI research and deployment company.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-6">
                To democratize artificial intelligence by building innovative, ethical, and accessible AI solutions that empower businesses and individuals to unlock the full potential of their data.
              </p>
              <p className="text-muted-foreground">
                We believe that AI should be a force for good, driving positive change across industries while maintaining the highest standards of ethics and transparency.
              </p>
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6">Our Vision</h2>
              <p className="text-lg text-muted-foreground mb-6">
                We live in an exciting time when AI research and technology are delivering extraordinary advances.
In the coming years, AI — and ultimately artificial general intelligence (AGI) — has the potential to drive one of the greatest transformations in history.
              </p>
              <p className="text-muted-foreground">

We’re a team of scientists, engineers, ethicists and more, working to build the next generation of AI systems safely and responsibly.              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-xl text-muted-foreground">
            By solving some of the hardest scientific and engineering challenges of our time, we’re working to create breakthrough technologies that could advance science, transform work, serve diverse communities — and improve billions of people’s lives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="bg-background border-border text-center hover:shadow-card transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-primary/20 rounded-lg flex items-center justify-center text-primary mx-auto mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{value.description}</p>

                  <Collapsible open={expandedValues[value.title]} onOpenChange={() => toggleValue(value.title)}>
                    <CollapsibleTrigger asChild>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-primary hover:text-primary/80 p-0"
                        aria-expanded={expandedValues[value.title]}
                      >
                        Learn More
                        {expandedValues[value.title] ? (
                          <ChevronUp className="ml-1 h-3 w-3" />
                        ) : (
                          <ChevronDown className="ml-1 h-3 w-3" />
                        )}
                      </Button>
                    </CollapsibleTrigger>
                    <CollapsibleContent className="animate-accordion-down overflow-hidden">
                      <div className="bg-card/50 p-4 rounded-lg border border-border/30 mt-3">
                        {value.title === "Innovation First" && (
                          <div className="text-left text-sm space-y-2">
                            <div className="flex items-start space-x-2">
                              <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                              <span>Research-driven AI development</span>
                            </div>
                            <div className="flex items-start space-x-2">
                              <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                              <span>Cutting-edge technology adoption</span>
                            </div>
                            <div className="flex items-start space-x-2">
                              <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                              <span>Continuous learning culture</span>
                            </div>
                          </div>
                        )}
                        {value.title === "Inclusive Culture" && (
                          <div className="text-left text-sm space-y-2">
                            <div className="flex items-start space-x-2">
                              <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                              <span>Diverse team of experts</span>
                            </div>
                            <div className="flex items-start space-x-2">
                              <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                              <span>Equal opportunity workplace</span>
                            </div>
                            <div className="flex items-start space-x-2">
                              <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                              <span>Global perspective on AI ethics</span>
                            </div>
                          </div>
                        )}
                        {value.title === "Transparency" && (
                          <div className="text-left text-sm space-y-2">
                            <div className="flex items-start space-x-2">
                              <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                              <span>Open source contributions</span>
                            </div>
                            <div className="flex items-start space-x-2">
                              <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                              <span>Ethical AI practices</span>
                            </div>
                            <div className="flex items-start space-x-2">
                              <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                              <span>Clear communication standards</span>
                            </div>
                          </div>
                        )}
                        {value.title === "Excellence" && (
                          <div className="text-left text-sm space-y-2">
                            <div className="flex items-start space-x-2">
                              <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                              <span>Quality-first approach</span>
                            </div>
                            <div className="flex items-start space-x-2">
                              <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                              <span>Continuous improvement</span>
                            </div>
                            <div className="flex items-start space-x-2">
                              <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                              <span>Client success focus</span>
                            </div>
                          </div>
                        )}
                      </div>
                    </CollapsibleContent>
                  </Collapsible>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center">Our Story</h2>
            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                Founded in 2020 by a group of dreamers, builders, and researchers, Quantum Intelligence was born from a simple but powerful belief:
Artificial intelligence should serve humanity—not just optimize it.

              </p>
              <p>
                We started small—with curiosity, conviction, and a deep respect for what AI could become. Not just a tool for efficiency, but a way to solve meaningful problems, spark new ideas, and build a better future.
                As we grew, so did our purpose. We listened more. Learned faster. Built with intention. And always stayed close to the people behind the data—the teams, the communities, the individuals who inspire everything we do.
              </p>
              <p>
                Today, Quantum Intelligence is shaped by that same spirit.
We’re here to create, to collaborate, and to make every interaction—every insight—count.

              </p>
              <p>
                Because for us, it’s not just about what AI can do.
It’s about what it can do for you.
</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      {/* <section className="py-20 bg-card">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-xl text-muted-foreground">
              The brilliant minds behind Quantum Intelligence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="bg-background border-border text-center">
                <CardContent className="p-6">
                  <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg mx-auto mb-4">
                    {member.image}
                  </div>
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-primary text-sm mb-3">{member.role}</p>
                  <p className="text-muted-foreground text-sm">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* Stats */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">20+</div>
              <p className="text-muted-foreground">Projects Delivered</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">09+</div>
              <p className="text-muted-foreground">Team Members</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">6+</div>
              <p className="text-muted-foreground">Countries Served</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">99%</div>
              <p className="text-muted-foreground">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">Join Our Journey</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Ready to be part of the AI revolution? Let's build the future together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={() => window.location.href = '/careers'}
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              Explore Careers
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => window.location.href = '/contact'}
            >
              Partner With Us
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
