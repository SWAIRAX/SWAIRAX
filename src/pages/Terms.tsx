import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Section, Heading, PageHero } from "@/components/ui/section";
import { Card, CardContent } from "@/components/ui/card";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        <PageHero
          className="pb-2 sm:pb-3"
          title="Terms & Conditions"
          description="Please read these terms carefully before using our services."
        />

        <Section spacing="compact" className="pt-2 sm:pt-3 lg:pt-4 pb-14 sm:pb-16 lg:pb-20" containerClassName="max-w-4xl">
          <Card className="bg-card border-border">
            <CardContent className="p-8 space-y-8">
              <div>
                <Heading as="h2" size="h3" className="mb-4">Acceptance of Terms</Heading>
                <p className="text-muted-foreground mb-4">
                  By accessing and using our services, you accept and agree to be bound by 
                  the terms and provision of this agreement.
                </p>
              </div>

              <div>
                <Heading as="h2" size="h3" className="mb-4">Use License</Heading>
                <p className="text-muted-foreground mb-4">
                  Permission is granted to temporarily use our services for personal, 
                  non-commercial transitory viewing only.
                </p>
              </div>

              <div>
                <Heading as="h2" size="h3" className="mb-4">Service Availability</Heading>
                <p className="text-muted-foreground mb-4">
                  We strive to maintain high availability of our services, but we do not 
                  guarantee uninterrupted access.
                </p>
              </div>

              <div>
                <Heading as="h2" size="h3" className="mb-4">Limitation of Liability</Heading>
                <p className="text-muted-foreground">
                  In no event shall SWAIRAX Limited be liable for any damages arising
                  out of the use or inability to use our services.
                </p>
              </div>
            </CardContent>
          </Card>
        </Section>
      </main>

      <Footer />
    </div>
  );
};

export default Terms;