import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Parallax from "@/components/Parallax";
import { Calendar, Clock, User, ArrowRight } from "lucide-react";
import { blogPosts } from "@/data/blogPosts";
import { useNavigationWithScroll } from "@/utils/navigation";
import { Section, Heading } from "@/components/ui/section";

const Blog = () => {
  const { navigateToTop, scrollToSection } = useNavigationWithScroll();

  const handlePostClick = (slug: string) => {
    navigateToTop(`/blog/${slug}`);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero — same style as the Partnerships page */}
      <section className="relative overflow-hidden text-white pt-36 pb-24 sm:pt-44 sm:pb-32 lg:pt-52 lg:pb-40">
        {/* dotted red pattern background — drifts on scroll for depth */}
        <Parallax speed={-0.25} clamp={150} className="absolute inset-x-0 -inset-y-[24%] h-[148%]">
          <div
            className="absolute inset-0"
            style={{
              backgroundColor: "rgb(0,0,0)",
              backgroundSize: "40px 40px",
              backgroundImage:
                "linear-gradient(45deg, rgba(214,46,10,0.35), transparent 40%), linear-gradient(-90deg, rgba(214,46,10,0.35), transparent 20%)",
            }}
          />
        </Parallax>
        {/* brand-red glow + dark gradient so the white type stays legible */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(179,33,10,0.5),transparent_60%)]" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/65 via-black/35 to-black/10" />
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl lg:ml-[32%]">
            <p className="mb-6 pl-6 text-xs font-semibold uppercase tracking-[0.25em] text-white/70">SWAIRAX Blog</p>
            <h1 className="pl-6 text-5xl font-light leading-[1.03] tracking-tight text-white drop-shadow-sm sm:text-6xl lg:text-7xl">
              Insights on AI, Data Science, and <span className="italic">Technology in Africa.</span>
            </h1>
            <div className="relative mt-10 inline-flex">
              {/* passionlabs "button_outlines" — white lines emanate from the button edges */}
              <span className="pointer-events-none absolute top-1/2 right-full h-px w-screen -translate-y-1/2 bg-white/80" />
              <span className="pointer-events-none absolute top-1/2 left-full h-px w-screen -translate-y-1/2 bg-white/80" />
              <span className="pointer-events-none absolute bottom-full left-0 h-screen w-px bg-white/80" />
              <span className="pointer-events-none absolute top-full left-0 h-[200vh] w-px bg-white/80" />
              <button
                onClick={() => scrollToSection("articles")}
                className="group relative z-10 inline-flex items-center gap-3 py-3 pr-4 text-sm font-semibold uppercase tracking-[0.2em] text-white drop-shadow-sm"
              >
                <span className="h-3 w-3 rounded-full bg-[#eb0000] transition-transform duration-300 group-hover:scale-150" />
                Read articles
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <Section id="articles">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card
                key={post.slug}
                className="bg-card border-border hover:shadow-card transition-all duration-300 overflow-hidden cursor-pointer hover-scale"
                onClick={() => handlePostClick(post.slug)}
              >
                {post.imageUrl && (
                  <img
                    src={`/uploads/${post.imageUrl.replace(/^\/+/,'')}`}
                    alt={post.title}
                    className="w-full aspect-video object-cover"
                  />
                )}
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="secondary" className="text-xs">
                      {post.category}
                    </Badge>
                  </div>

                  <h3 className="text-xl font-bold mb-3 leading-tight">{post.title}</h3>

                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <User className="h-3 w-3" />
                      {post.author}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </div>
                  </div>

                  <Button
                    variant="ghost"
                    onClick={(e) => {
                      e.stopPropagation();
                      handlePostClick(post.slug);
                    }}
                    className="group inline-flex items-center gap-2 px-4 py-2 rounded-full border border-transparent text-primary hover:text-primary hover:border-primary/50 hover:bg-transparent active:bg-transparent transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                  >
                    Read More
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
      </Section>

      <Footer />
    </div>
  );
};

export default Blog;
