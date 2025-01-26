import { blogPosts } from "@/data/blog-posts";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

export const BlogList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {blogPosts.map((post) => (
        <Link to={`/blog/${post.slug}`} key={post.id}>
          <Card className="bg-terminal-gray border-terminal-green/20 hover:border-terminal-green transition-colors">
            <CardHeader>
              <CardTitle className="text-terminal-light">{post.title}</CardTitle>
              <CardDescription className="text-terminal-light/60">
                {post.meta_description.slice(0, 100)}...
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between text-sm text-terminal-light/60">
                <span>{new Date(post.created_at).toLocaleDateString()}</span>
                <span>{post.reading_time} min read</span>
              </div>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
};