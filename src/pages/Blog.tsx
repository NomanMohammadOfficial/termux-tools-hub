import { Layout } from "@/components/Layout";
import { BlogList } from "@/components/BlogList";
import { Helmet } from "react-helmet";

const Blog = () => {
  return (
    <Layout>
      <Helmet>
        <title>Termux Tutorials & Guides - TermuxApps Blog</title>
        <meta 
          name="description" 
          content="Explore in-depth Termux tutorials, guides, and best practices. Learn about custom banners, package installation, and advanced terminal usage on Android." 
        />
        <meta 
          name="keywords" 
          content="termux tutorials, termux guides, terminal customization, android terminal, linux on android" 
        />
        <meta property="og:title" content="Termux Tutorials & Guides - TermuxApps Blog" />
        <meta 
          property="og:description" 
          content="Explore in-depth Termux tutorials, guides, and best practices. Learn about custom banners, package installation, and advanced terminal usage on Android." 
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://termuxapps.com/blog" />
      </Helmet>

      <div className="mt-24">
        <h1 className="text-4xl font-bold text-terminal-light mb-4">
          Termux Tutorials & Guides
        </h1>
        <p className="text-terminal-light/80 mb-12 max-w-2xl">
          Discover comprehensive tutorials and guides to help you master Termux. From basic setup to advanced customization, we've got you covered.
        </p>
        <BlogList />
      </div>
    </Layout>
  );
};

export default Blog;