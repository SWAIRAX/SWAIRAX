import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, BarChart3, TrendingUp, Eye, Target } from "lucide-react";
import { Link } from "react-router-dom";

const BusinessAnalysis = () => {
  const features = [
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Data Visualization",
      description: "Interactive dashboards and charts that make complex data easy to understand."
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Predictive Analytics",
      description: "AI-powered forecasting to anticipate trends and business opportunities."
    },
    {
      icon: <Eye className="h-8 w-8" />,
      title: "Pattern Recognition",
      description: "Identify hidden patterns and correlations in your business data."
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Strategic Insights",
      description: "Actionable recommendations to drive business growth and efficiency."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Turning Data into <span className="text-primary">Opportunity</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              A comprehensive SaaS platform for data analysis and visualization with AI. 
              Simply drag and drop your dataset and discover opportunities in minutes.
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link to="/contact">Start Free Analysis</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Understand Your Business Better
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                In the digital age of data, we can quickly understand human behavior, 
                business needs, and market dynamics. Our AI-powered analysis helps you 
                see opportunities hidden in your data.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <ArrowRight className="h-5 w-5 text-primary mr-3" />
                  <span>Drag and drop datasets in minutes</span>
                </div>
                <div className="flex items-center">
                  <ArrowRight className="h-5 w-5 text-primary mr-3" />
                  <span>AI-powered insights and recommendations</span>
                </div>
                <div className="flex items-center">
                  <ArrowRight className="h-5 w-5 text-primary mr-3" />
                  <span>Real-time visualization and reporting</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-secondary p-8 rounded-lg border">
              <div className="grid grid-cols-3 gap-4">
                {Array.from({ length: 9 }).map((_, i) => (
                  <div key={i} className="aspect-square bg-primary/20 rounded border border-primary/30 flex items-center justify-center">
                    <div className="w-4 h-4 bg-primary/60 rounded"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Analytics Features</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive tools to analyze, visualize, and extract insights from your data
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-secondary border-border hover:shadow-card transition-all duration-300">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary/20 rounded-lg flex items-center justify-center mb-6">
                    <div className="text-primary">{feature.icon}</div>
                  </div>
                  <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Why Choose Our Business Analysis Platform?
            </h2>
            <p className="text-lg text-muted-foreground mb-12">
              Get started for free and scale as your business grows. No technical expertise required.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">Free</div>
                <p className="text-muted-foreground">Start with our free tier</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">1 Min</div>
                <p className="text-muted-foreground">Upload and analyze instantly</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">AI-Powered</div>
                <p className="text-muted-foreground">Smart insights automatically</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Discover Hidden Opportunities?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Start analyzing your data today and unlock insights that drive business growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link to="/contact">Try Free Demo</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/contact">Schedule Consultation</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BusinessAnalysis;