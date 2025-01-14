import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Skeleton } from "@/components/ui/skeleton";

export const BlogList = () => {
  const { data: posts, isLoading } = useQuery({
    queryKey: ["blog-posts"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("blog_posts")
        .select("*")
        .order("created_at", { ascending: false });
      
      if (error) throw error;
      return data;
    },
  });

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3].map((i) => (
          <Card key={i} className="bg-terminal-gray border-terminal-green/20">
            <CardHeader>
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-3 w-1/2" />
            </CardHeader>
            <CardContent>
              <Skeleton className="h-24 w-full" />
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts?.map((post) => (
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