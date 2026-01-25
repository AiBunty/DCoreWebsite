import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar, User } from "lucide-react";

const posts = [
  {
    id: 1,
    title: "How AI is Transforming Indian Businesses",
    excerpt: "Explore how artificial intelligence is revolutionizing the way Indian businesses operate and scale.",
    author: "Raj Kumar",
    date: "Jan 20, 2026",
    category: "AI"
  },
  {
    id: 2,
    title: "WhatsApp Automation: A Game Changer for Customer Communication",
    excerpt: "Learn how WhatsApp automation can help you reach customers where they already are.",
    author: "Priya Sharma",
    date: "Jan 18, 2026",
    category: "Marketing"
  },
  {
    id: 3,
    title: "The Future of CRM in 2026",
    excerpt: "Discover the latest trends in customer relationship management and what's coming next.",
    author: "Amit Patel",
    date: "Jan 15, 2026",
    category: "CRM"
  }
];

export default function Blog() {
  return (
    <Layout>
      <section className="py-16 md:py-24 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              D'CORE Blog
            </h1>
            <p className="text-xl text-muted-foreground">
              Latest insights on AI, automation, and business growth.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {posts.map((post) => (
                <div key={post.id} className="p-6 bg-card rounded-lg border border-border hover:border-primary transition">
                  <div className="flex gap-4 items-start justify-between mb-4">
                    <div>
                      <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">{post.title}</h3>
                  <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                  <div className="flex gap-6 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" /> {post.author}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" /> {post.date}
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    Read More
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}