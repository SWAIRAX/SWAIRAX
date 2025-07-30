import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, Eye, Award } from "lucide-react";

const About = () => {
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

  const team = [
    {
      name: "Dr. Sarah Chen",
      role: "Chief Technology Officer",
      bio: "Leading AI researcher with 15+ years experience in machine learning and computer vision.",
      image: "SC"
    },
    {
      name: "Marcus Johnson",
      role: "Head of Data Engineering", 
      bio: "Expert in building scalable data infrastructure and MLOps pipelines.",
      image: "MJ"
    },
    {
      name: "Dr. Amira Hassan",
      role: "AI Research Director",
      bio: "PhD in Natural Language Processing, specializing in large language models.",
      image: "AH"
    },
    {
      name: "David Park",
      role: "Business Strategy Lead",
      bio: "Former consultant helping enterprises adopt AI solutions strategically.",
      image: "DP"
    }
  ];

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
              We're a team of passionate AI researchers, data scientists, and engineers committed to making artificial intelligence accessible and beneficial for everyone.
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
                To be the leading global provider of data-centric AI solutions, creating a future where intelligent systems seamlessly integrate with human creativity and decision-making.
              </p>
              <p className="text-muted-foreground">
                We envision a world where AI amplifies human potential, making complex problems solvable and opening new frontiers of innovation.
              </p>
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
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="bg-background border-border text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-primary/20 rounded-lg flex items-center justify-center text-primary mx-auto mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
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
                Founded in 2020 by a team of AI researchers and data scientists, Quantum Intelligence emerged from a shared vision to make artificial intelligence more accessible and impactful for businesses of all sizes.
              </p>
              <p>
                Our journey began in the labs of leading universities, where our founders were pioneering research in machine learning, computer vision, and natural language processing. Recognizing the gap between cutting-edge research and practical business applications, we set out to bridge this divide.
              </p>
              <p>
                Today, we serve clients across industries, from startups to Fortune 500 companies, helping them harness the power of AI to solve complex challenges and drive innovation. Our commitment to ethical AI practices and inclusive development has earned us recognition as a trusted partner in the AI ecosystem.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-card">
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
      </section>

      {/* Stats */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <p className="text-muted-foreground">Projects Delivered</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">25+</div>
              <p className="text-muted-foreground">Team Members</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">15+</div>
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