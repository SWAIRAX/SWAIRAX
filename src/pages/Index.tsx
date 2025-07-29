import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Cube3D from "@/components/3DCube";
import AnimatedCounter from "@/components/AnimatedCounter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, CheckCircle } from "lucide-react";

const Index = () => {
  const stats = [
    { value: "40x", label: "More productivity for data scientists" },
    { value: "20%", label: "Faster to deliver AI models" },
    { value: "100+", label: "Data scientists and software Developers using our products." },
    { value: "10x", label: "Boost" },
    { value: "40%", label: "Model performance boost through improved" },
    { value: "2k+", label: "Downloads & Interactions" }
  ];

  const products = [
    {
      title: "SURASOFT",
      category: "SaaS",
      description: "Surasoft is an AI security platform that analyzes video footage in existing camera networks, offering affordable biometric verification and instant alerts to prevent crimes for businesses and homes.",
      cta: "Try now"
    },
    {
      title: "AI Proctoring",
      category: "SaaS",
      description: "A Proctoring System Powered by Artificial Intelligence, this can be used to monitor the students and interviewees for safe and credible online assessment.",
      cta: "Request today"
    },
    {
      title: "Askari LLM",
      category: "Self-hosted",
      description: "A Python package designed to enforce policy guardrails on user input, particularly in the context of language models and other AI systems. It helps ensure that interactions remain within defined ethical and operational boundaries.",
      cta: "Build today"
    }
  ];

  const articles = [
    {
      date: "June 3, 2023",
      category: "Blog",
      title: "Digital Data is the new software code",
      description: "Drawing inspiration from the profound words of British Mathematician Clive Humby that 'Data is the new oil', we embark on a journey to discover the secrets of successful AI development, where data takes center stage.",
      cta: "Read More"
    },
    {
      date: "May 3, 2023",
      category: "Life On Data",
      title: "Overcoming the Barriers: A Look at the Challenges of Implementing AI in Africa.",
      description: "Implementing AI in Africa is not without its challenges. In this article, we will explore some of the key challenges of implementing AI in Africa, and we will discuss how these challenges can be addressed in order to realize the full potential of AI in the region.",
      cta: "Read More"
    },
    {
      date: "April 4, 2023",
      category: "Case Study",
      title: "What is Retrieval Augmented Generation (RAG) in AI?",
      description: "Think of RAG like having a super-smart assistant who can help you find just the right information you need, exactly when you need it Here we will teach you how to build one.",
      cta: "Read More"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 w-full h-full">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            style={{ filter: 'brightness(0.3)' }}
          >
            <source src="https://6266199.fs1.hubspotusercontent-na1.net/hubfs/6266199/YData_background_large_compressed.mp4#t=0.001" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-background/60"></div>
        </div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              We build, innovate &<br />
              deliver <span className="text-primary">data and AI solutions</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Adopting data-centric operations and building AI solutions has never been easier, we are working on that.
            </p>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg animate-glow-pulse"
            >
              Estimate Project
            </Button>
          </div>
        </div>
      </section>

      {/* Why Quantum Intelligence Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-primary text-sm font-semibold mb-4">Why Quantum Intelligence?</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              We help Business & Data Scientists to unlock<br />
              data & artificial intelligence full potential.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-lg text-muted-foreground mb-8">
                Through measurable <span className="text-primary">performance</span> & improvements we offer services as follows.
              </p>

              <div className="grid grid-cols-2 gap-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-4xl md:text-5xl font-bold mb-2">
                      <AnimatedCounter value={stat.value} />
                    </div>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center">
              <p className="text-lg text-muted-foreground mb-8">
                And trusted by the <span className="text-primary">community</span> with
              </p>
              <div className="text-6xl font-bold mb-4">
                <AnimatedCounter value="100+" />
              </div>
              <p className="text-muted-foreground">
                Data scientists and software Developers using our products.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Data-Centric Solutions Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-primary text-sm font-semibold mb-4">What do we do?</p>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                Data-Centric and AI solutions
              </h2>
            </div>

            <div>
              <div className="bg-card p-8 rounded-lg border">
                <p className="text-primary text-sm font-semibold mb-4">AI STUDIO & IDEAS</p>
                <h3 className="text-2xl font-bold mb-4">
                  Get Customized AI powered solution for a research or business.
                </h3>
                <p className="text-muted-foreground mb-6">
                  Tell us a bit about your research and business challenge and our AI Team with combination
                  of expert data scientists, developers, and business strategists — will come up with a few solutions.
                </p>
                <p className="text-muted-foreground mb-6">
                  We are working on computer vision, NLP, LLMs, Generative AI and more. We help you to
                  reduce development timeline, cheap and faster.
                </p>
                <Button variant="ghost" className="text-foreground hover:text-primary p-0">
                  Know More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MLOps Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-primary text-sm font-semibold mb-4">MLOps</p>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                Machine Learning + DevOps.
              </h2>
              <p className="text-muted-foreground mb-6">
                You have the data and the model, but you still can't see the return on investment for your AI
                projects. Research shows that 50 - 90% of AI models are never commercialized because of
                the "last-mile" deployment problem.
              </p>
              <p className="text-muted-foreground mb-8">
                We practices Machine Learning Operations (MLOps) by bridging the gap between data and
                IT Ops teams. We help you convert your data to business value by deploying your models
                into production.
              </p>
              <Button variant="ghost" className="text-foreground hover:text-primary p-0">
                Learn more <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            <div className="relative">
              {/* 3D Cube Visualization */}
              <div className="grid grid-cols-4 gap-4">
                {Array.from({ length: 16 }).map((_, i) => (
                  <Cube3D
                    key={i}
                    size="sm"
                    className={`opacity-${Math.random() > 0.5 ? '70' : '30'}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Analysis Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              {/* Isometric visualization placeholder */}
              <div className="bg-gradient-secondary p-8 rounded-lg border">
                <div className="grid grid-cols-3 gap-4">
                  {Array.from({ length: 9 }).map((_, i) => (
                    <div key={i} className="aspect-square bg-primary/20 rounded border border-primary/30"></div>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <p className="text-primary text-sm font-semibold mb-4">Business Analysis.</p>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                Turning Data into Opportunity.
              </h2>
              <p className="text-muted-foreground mb-6">
                A free SaaS option to start with Data analysis and visualization with AI with drag and drop a
                dataset in a minute. We help to you to see opportunities from your data.
              </p>
              <p className="text-muted-foreground mb-8">
                In the digital age of data we can Quickly understand human better, our needs,
                and business science overall.
              </p>
              <Button variant="ghost" className="text-foreground hover:text-primary p-0">
                Explore how <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-primary text-sm font-semibold mb-4">Ready to start?</p>
            <h2 className="text-4xl md:text-5xl font-bold">
              Get started with our flexible infrastructure
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <Card key={index} className="bg-secondary border-border hover:shadow-card transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                      <div className="w-6 h-6 bg-primary rounded"></div>
                    </div>
                    <span className="text-xs px-3 py-1 rounded-full bg-muted text-muted-foreground">
                      {product.category}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold mb-4">{product.title}</h3>
                  <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                    {product.description}
                  </p>

                  <Button variant="ghost" className="text-foreground hover:text-primary p-0">
                    {product.cta} <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Infrastructure Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Want to develop AI and data related solutions on-premises?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Quantum Intelligence offers AI related solutions that can be deployed in any infrastructure for
              anyone eager to enter in the industry.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              Contact us to know more!
            </p>
            <Button
              variant="outline"
              size="lg"
              className="border-foreground text-foreground hover:bg-foreground hover:text-background"
            >

            <a href="/contact" >Contact us</a>

            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-card text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Join the <span className="text-primary">Data-Centric AI</span> movement!
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Connect, profile, understand & orchestrate your data preparation flows to train models more
            efficiently! Improve AI initiatives performance in a iterative way.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8"
            >
              Try now
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-foreground text-foreground hover:bg-foreground hover:text-background px-8"
            >
              Estimate Project
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Articles Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-16">Our Featured Articles</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <Card key={index} className="bg-card border-border hover:shadow-card transition-all duration-300 overflow-hidden">
                <div className="aspect-video bg-gradient-secondary"></div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-muted-foreground">{article.date}</span>
                    <span className="text-xs px-3 py-1 rounded-full bg-muted text-muted-foreground">
                      {article.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold mb-4">{article.title}</h3>
                  <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                    {article.description}
                  </p>

                  <Button variant="ghost" className="text-foreground hover:text-primary p-0">
                    {article.cta} <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
