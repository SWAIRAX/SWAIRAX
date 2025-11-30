import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Calendar, Clock, User, ArrowRight } from "lucide-react";
import { blogPosts } from "@/data/blogPosts";
import { useNavigationWithScroll } from "@/utils/navigation";

const Blog = () => {
  const { navigateToTop } = useNavigationWithScroll();

  const handlePostClick = (postId: string) => {
    navigateToTop(`/blog/${postId}`);
  };

  const categories = ["All", "AI & Data", "AI Implementation", "Technical Deep Dive", "MLOps", "Computer Vision", "NLP"];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPosts = selectedCategory === "All"
    ? blogPosts
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-card">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Insights & <span className="text-primary">Innovations</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Explore the latest trends, research, and insights in AI, data science, and technology from our expert team.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-background border-b border-border">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className="transition-all duration-200"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <Card
                key={post.id}
                className="bg-card border-border hover:shadow-card transition-all duration-300 overflow-hidden cursor-pointer hover-scale"
                onClick={() => handlePostClick(post.id)}
              >
                {post.imageUrl && (
                  <img
                    src={`/uploads/${post.imageUrl.replace(/^\/+/,'')}`}
                    alt={post.title}
                    className="w-full aspect-video object-cover"
                  />
                )}
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="secondary" className="text-xs">
                      {post.category}
                    </Badge>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold mb-3 leading-tight">{post.title}</h3>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <User className="h-3 w-3" />
                      {post.author}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {post.date}
                    </div>
                  </div>

                  <Button
                    variant="ghost"
                    onClick={(e) => {
                      e.stopPropagation();
                      handlePostClick(post.id);
                    }}
                    className="text-foreground hover:text-primary p-0"
                  >
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
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

export default Blog;
