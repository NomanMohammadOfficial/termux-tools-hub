import { useParams } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Helmet } from "react-helmet";
import { blogPosts } from "@/data/blog-posts";

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts.find((post) => post.slug === slug);

  if (!post) {
    return (
      <Layout>
        <div className="text-center py-12">
          <h1 className="text-2xl text-terminal-light">Post not found</h1>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <Helmet>
        <title>{post.title} - TermuxApps</title>
        <meta name="description" content={post.meta_description} />
        <meta name="keywords" content={post.meta_keywords.join(", ")} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.meta_description} />
        <meta property="og:type" content="article" />
        <meta property="article:published_time" content={post.created_at} />
        <meta property="article:modified_time" content={post.updated_at} />
      </Helmet>

      <article className="max-w-3xl mx-auto mt-8 px-4">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-terminal-light mb-4">{post.title}</h1>
          <div className="flex items-center gap-4 text-terminal-light/60">
            <time dateTime={post.created_at}>
              {new Date(post.created_at).toLocaleDateString()}
            </time>
            <span>·</span>
            <span>{post.reading_time} min read</span>
          </div>
        </header>

        <div className="prose prose-invert max-w-none">
          {post.content.split('\n').map((paragraph, index) => (
            <p key={index} className="mb-4 text-terminal-light/80 leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
      </article>
    </Layout>
  );
};

export default BlogPost;