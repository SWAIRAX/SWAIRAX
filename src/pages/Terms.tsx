import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="py-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Terms & Conditions
            </h1>
            <p className="text-xl text-muted-foreground">
              Please read these terms carefully before using our services.
            </p>
          </div>

          <Card className="bg-card border-border">
            <CardContent className="p-8 space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">Acceptance of Terms</h2>
                <p className="text-muted-foreground mb-4">
                  By accessing and using our services, you accept and agree to be bound by 
                  the terms and provision of this agreement.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Use License</h2>
                <p className="text-muted-foreground mb-4">
                  Permission is granted to temporarily use our services for personal, 
                  non-commercial transitory viewing only.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Service Availability</h2>
                <p className="text-muted-foreground mb-4">
                  We strive to maintain high availability of our services, but we do not 
                  guarantee uninterrupted access.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Limitation of Liability</h2>
                <p className="text-muted-foreground">
                  In no event shall Quantum Intelligence be liable for any damages arising 
                  out of the use or inability to use our services.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Terms;