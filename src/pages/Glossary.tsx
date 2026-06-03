import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Section, PageHero } from "@/components/ui/section";
import { Card, CardContent } from "@/components/ui/card";

const Glossary = () => {
  const terms = [
    {
      term: "Artificial Intelligence (AI)",
      definition: "The simulation of human intelligence in machines that are programmed to think and learn like humans."
    },
    {
      term: "Machine Learning (ML)",
      definition: "A subset of AI that enables machines to learn and improve from experience without being explicitly programmed."
    },
    {
      term: "MLOps",
      definition: "Machine Learning Operations - a practice that combines machine learning, DevOps, and data engineering to deploy and maintain ML systems in production."
    },
    {
      term: "Natural Language Processing (NLP)",
      definition: "A branch of AI that helps computers understand, interpret and manipulate human language."
    },
    {
      term: "Computer Vision",
      definition: "A field of AI that trains computers to interpret and understand the visual world from digital images or videos."
    },
    {
      term: "Deep Learning",
      definition: "A subset of machine learning that uses neural networks with multiple layers to model and understand complex patterns."
    },
    {
      term: "Data Science",
      definition: "An interdisciplinary field that uses scientific methods, processes, algorithms and systems to extract knowledge and insights from data."
    },
    {
      term: "RAG (Retrieval Augmented Generation)",
      definition: "A technique that combines information retrieval with text generation to produce more accurate and contextual AI responses."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        <PageHero
          title="AI Glossary"
          description="Key terms and definitions in artificial intelligence and data science."
        />

        <Section spacing="compact" containerClassName="max-w-4xl">
          <div className="grid gap-6">
            {terms.map((item, index) => (
              <Card key={index} className="bg-card border-border hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-primary">{item.term}</h3>
                  <p className="text-muted-foreground">{item.definition}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Section>
      </main>

      <Footer />
    </div>
  );
};

export default Glossary;