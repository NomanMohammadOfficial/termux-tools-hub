import { useParams } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Helmet } from "react-helmet";
import { blogPosts } from "@/data/blog-posts";
import { CodeBlock } from "@/components/CodeBlock";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { ChevronRight, Home } from "lucide-react";

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

  const breadcrumbItems = [
    { href: "/", label: "Home", icon: Home },
    { href: "/blog", label: "Blog" },
    { href: `/blog/${slug}`, label: post.title },
  ];

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
        <link rel="canonical" href={`https://termuxapps.com/blog/${slug}`} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": post.title,
            "description": post.meta_description,
            "keywords": post.meta_keywords.join(", "),
            "datePublished": post.created_at,
            "dateModified": post.updated_at,
            "author": {
              "@type": "Person",
              "name": "Noman Mohammad",
              "url": "https://termuxapps.com/about"
            },
            "publisher": {
              "@type": "Organization",
              "name": "TermuxApps",
              "logo": {
                "@type": "ImageObject",
                "url": "https://termuxapps.com/og-image.png"
              }
            },
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": `https://termuxapps.com/blog/${slug}`
            },
            "image": post.featured_image ? {
              "@type": "ImageObject",
              "url": post.featured_image
            } : undefined
          })}
        </script>
      </Helmet>

      <article className="max-w-3xl mx-auto mt-8 px-4">
        <nav className="mb-8">
          <Breadcrumb items={breadcrumbItems} separator={<ChevronRight className="h-4 w-4" />} />
        </nav>

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

        <div className="space-y-6">
          {processContent(post.content)}
        </div>
      </article>
    </Layout>
  );
};

const processContent = (content: string) => {
  const parts = content.split('```');
  return parts.map((part, index) => {
    if (index % 2 === 0) {
      return (
        <div key={index} className="prose prose-invert max-w-none">
          {part.split('\n').map((paragraph, pIndex) => {
            if (paragraph.startsWith('#')) {
              const level = paragraph.match(/^#+/)[0].length;
              const text = paragraph.replace(/^#+\s/, '');
              const Tag = `h${level}` as keyof JSX.IntrinsicElements;
              return (
                <Tag key={pIndex} className="text-terminal-light font-bold my-4">
                  {text}
                </Tag>
              );
            }
            return (
              <p key={pIndex} className="mb-4 text-terminal-light/80 leading-relaxed">
                {paragraph}
              </p>
            );
          })}
        </div>
      );
    } else {
      const [language, ...codeLines] = part.split('\n');
      const code = codeLines.join('\n').trim();
      return <CodeBlock key={index} code={code} language={language.trim()} />;
    }
  });
};

export default BlogPost;