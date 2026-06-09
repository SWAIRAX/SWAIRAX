import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Section, PageHero } from "@/components/ui/section";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "What services does SWAIRAX offer?",
      answer: "SWAIRAX is an Africa-first technology company offering AI, Data Science, Cybersecurity, Big Data Analytics, and Software Engineering solutions."
    },
    {
      question: "How long does it take to deploy an AI model?",
      answer: "Deployment time varies based on complexity, but our MLOps approach typically reduces deployment time by 20% compared to traditional methods."
    },
    {
      question: "Do you offer support for AI model maintenance?",
      answer: "Yes, we provide comprehensive MLOps support including model monitoring, maintenance, and continuous improvement services."
    },
    {
      question: "Can you help with data preparation and analysis?",
      answer: "Absolutely! Our data-centric approach includes data preparation, cleaning, analysis, and visualization services to ensure your AI models perform optimally."
    },
    {
      question: "What industries do you serve?",
      answer: "We serve various industries including healthcare, finance, education, retail, telecommunications, and more, providing tailored AI solutions for each sector."
    },
    {
      question: "How do I get started with SWAIRAX?",
      answer: "Simply contact us through our website or schedule a consultation. We'll discuss your needs and provide a customized AI solution proposal."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        <PageHero
          title="Frequently Asked Questions"
          description="Find answers to common questions about our AI services and solutions."
        />

        <Section spacing="compact" containerClassName="max-w-4xl">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="text-lg font-semibold">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Section>
      </main>

      <Footer />
    </div>
  );
};

export default FAQ;