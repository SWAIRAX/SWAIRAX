import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin, Globe } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    hearAbout: "",
    project: "",
    needsNDA: "",
    agreeMarketing: false
  });

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission logic here
  };

  const partnerLogos = [
    { name: "KW", logo: "KW" },
    { name: "UBS", logo: "UBS" },
    { name: "Merck", logo: "Merck" },
    { name: "IKEA", logo: "IKEA" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-card">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              You need a partner.
            </h1>
            <h2 className="text-3xl md:text-5xl font-bold text-primary mb-8">
              We're here to help.
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              We would like to understand your needs. Before we start, please 
              fill in the form or send your RFP or inquiry via{" "}
              <a href="mailto:hello@quantumintelligence.com" className="text-primary underline">
                hello@quantumintelligence.com
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <Card className="bg-card border-border">
              <CardContent className="p-6 text-center">
                <Mail className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Email</h3>
                <p className="text-muted-foreground text-sm">
                  hello@quantumintelligence.com
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-card border-border">
              <CardContent className="p-6 text-center">
                <Phone className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Phone</h3>
                <p className="text-muted-foreground text-sm">
                  +255 123 456 789
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-card border-border">
              <CardContent className="p-6 text-center">
                <MapPin className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Location</h3>
                <p className="text-muted-foreground text-sm">
                  Dar es Salaam, Tanzania
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-card border-border">
              <CardContent className="p-6 text-center">
                <Globe className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Services</h3>
                <p className="text-muted-foreground text-sm">
                  Global AI Solutions
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {/* Partner Logos */}
            <div className="flex flex-wrap items-center justify-center gap-8 mb-12 opacity-60">
              {partnerLogos.map((partner, index) => (
                <div key={index} className="text-2xl font-bold text-muted-foreground">
                  {partner.logo}
                </div>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <Label htmlFor="firstName">First Name*</Label>
                  <Input
                    id="firstName"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange("firstName", e.target.value)}
                    required
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name*</Label>
                  <Input
                    id="lastName"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange("lastName", e.target.value)}
                    required
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email*</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    required
                    className="mt-2"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="company">Company name</Label>
                  <Input
                    id="company"
                    value={formData.company}
                    onChange={(e) => handleInputChange("company", e.target.value)}
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="hearAbout">How did you hear about us?*</Label>
                  <Input
                    id="hearAbout"
                    value={formData.hearAbout}
                    onChange={(e) => handleInputChange("hearAbout", e.target.value)}
                    required
                    className="mt-2"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="project">Tell us more about your project*</Label>
                  <Textarea
                    id="project"
                    value={formData.project}
                    onChange={(e) => handleInputChange("project", e.target.value)}
                    required
                    className="mt-2 min-h-32"
                    placeholder="Describe your project, goals, and requirements..."
                  />
                </div>
                <div>
                  <Label className="text-base font-medium">Do you need an NDA first?</Label>
                  <RadioGroup
                    value={formData.needsNDA}
                    onValueChange={(value) => handleInputChange("needsNDA", value)}
                    className="mt-4"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="yes" id="nda-yes" />
                      <Label htmlFor="nda-yes">Yes</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="no" id="nda-no" />
                      <Label htmlFor="nda-no">No</Label>
                    </div>
                  </RadioGroup>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="marketing"
                  checked={formData.agreeMarketing}
                  onCheckedChange={(checked) => handleInputChange("agreeMarketing", checked as boolean)}
                />
                <Label htmlFor="marketing" className="text-sm">
                  I agree to receive marketing communication from Quantum Intelligence.
                </Label>
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-4 text-lg"
              >
                Request Free Estimate
              </Button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;