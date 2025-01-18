import { Layout } from "@/components/Layout";
import { CodeBlock } from "@/components/CodeBlock";
import { Helmet } from "react-helmet";

const TermuxBanner = () => {
  return (
    <Layout>
      <Helmet>
        <title>How to Create a Custom Termux Banner - Complete Guide</title>
        <meta 
          name="description" 
          content="Learn how to create and customize your Termux banner with step-by-step instructions. Make your terminal more personalized and informative with custom banners, fonts, and colors." 
        />
        <meta 
          name="keywords" 
          content="termux banner, terminal customization, figlet, toilet, bash configuration, linux banner" 
        />
        <meta property="og:title" content="How to Create a Custom Termux Banner - Complete Guide" />
        <meta 
          property="og:description" 
          content="Learn how to create and customize your Termux banner with step-by-step instructions. Make your terminal more personalized and informative." 
        />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="https://muxrifhrxglvamegpyhb.supabase.co/storage/v1/object/public/blog_images/termux-banner.jpg" />
        <meta property="article:published_time" content="2024-03-10T00:00:00Z" />
        <meta property="article:modified_time" content="2024-03-10T00:00:00Z" />
        <meta property="article:section" content="Tutorial" />
        <meta property="article:tag" content="Termux" />
        <meta property="article:tag" content="Terminal" />
        <meta property="article:tag" content="Customization" />
        <link rel="canonical" href="https://termuxapps.com/blog/termux-banner" />
        
        {/* Schema.org markup for Google */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TechArticle",
            "headline": "How to Create a Custom Termux Banner - Complete Guide",
            "image": "https://muxrifhrxglvamegpyhb.supabase.co/storage/v1/object/public/blog_images/termux-banner.jpg",
            "datePublished": "2024-03-10T00:00:00Z",
            "dateModified": "2024-03-10T00:00:00Z",
            "author": {
              "@type": "Organization",
              "name": "TermuxApps"
            },
            "publisher": {
              "@type": "Organization",
              "name": "TermuxApps",
              "logo": {
                "@type": "ImageObject",
                "url": "https://termuxapps.com/og-image.png"
              }
            },
            "description": "Learn how to create and customize your Termux banner with step-by-step instructions. Make your terminal more personalized and informative.",
            "articleBody": "A custom banner in Termux can transform your terminal experience from plain to professional and personalized...",
            "keywords": "termux banner, terminal customization, figlet, toilet, bash configuration",
            "tutorial": {
              "@type": "HowTo",
              "name": "How to Create a Custom Termux Banner",
              "step": [
                {
                  "@type": "HowToStep",
                  "name": "Update Packages",
                  "text": "First update your Termux packages using pkg update && pkg upgrade"
                },
                {
                  "@type": "HowToStep",
                  "name": "Install Required Tools",
                  "text": "Install necessary tools like python, figlet, and toilet"
                },
                {
                  "@type": "HowToStep",
                  "name": "Create Banner",
                  "text": "Create and configure your custom banner"
                }
              ]
            }
          })}
        </script>
      </Helmet>

      <article className="max-w-3xl mx-auto mt-8 px-4" itemScope itemType="https://schema.org/TechArticle">
        {/* Feature Image */}
        <div className="relative w-full h-[400px] mb-8 rounded-lg overflow-hidden">
          <img 
            src="https://muxrifhrxglvamegpyhb.supabase.co/storage/v1/object/public/blog_images/termux-banner.jpg"
            alt="Custom Termux Banner Example"
            className="w-full h-full object-cover"
            itemProp="image"
          />
        </div>

        <h1 className="text-4xl font-bold text-terminal-light mb-6" itemProp="headline">
          Create a Professional Custom Termux Banner
        </h1>
        
        <div className="prose prose-invert max-w-none" itemProp="articleBody">
          <p className="text-lg text-terminal-light/80 mb-8">
            A custom banner in Termux can transform your terminal experience from plain to professional and personalized. 
            In this comprehensive guide, we&apos;ll walk through creating an eye-catching banner that displays every time you launch Termux.
          </p>

          <h2 className="text-2xl font-semibold text-terminal-light mt-8 mb-4">Prerequisites</h2>
          <p className="mb-4">First, update your packages:</p>
          <CodeBlock code="pkg update && pkg upgrade" language="bash" />
          
          <p className="mb-4">Install required tools:</p>
          <CodeBlock code="pkg install python" language="bash" />
          <CodeBlock code="pkg install figlet" language="bash" />
          <CodeBlock code="pkg install toilet" language="bash" />

          <h2 className="text-2xl font-semibold text-terminal-light mt-8 mb-4">Creating Your Banner</h2>
          
          <h3 className="text-xl font-semibold text-terminal-light mt-6 mb-3">Step 1: Create Banner Directory</h3>
          <CodeBlock code="mkdir ~/.termux" language="bash" />

          <h3 className="text-xl font-semibold text-terminal-light mt-6 mb-3">Step 2: Create Banner File</h3>
          <CodeBlock code="touch ~/.termux/banner.txt" language="bash" />

          <h3 className="text-xl font-semibold text-terminal-light mt-6 mb-3">Step 3: Edit Banner Text</h3>
          <CodeBlock code="nano ~/.termux/banner.txt" language="bash" />

          <h3 className="text-xl font-semibold text-terminal-light mt-6 mb-3">Step 4: Configure Bash</h3>
          <CodeBlock code={'echo "clear" >> ~/.bashrc'} language="bash" />
          <CodeBlock code={'echo "figlet -f small \'Your Name\'" >> ~/.bashrc'} language="bash" />
          <CodeBlock code={'echo "toilet -f term -F border \'Welcome\'" >> ~/.bashrc'} language="bash" />

          <h2 className="text-2xl font-semibold text-terminal-light mt-8 mb-4">Customization Options</h2>
          
          <h3 className="text-xl font-semibold text-terminal-light mt-6 mb-3">Different Fonts</h3>
          <p className="mb-4">View available fonts:</p>
          <CodeBlock code="showfigfonts" language="bash" />

          <h3 className="text-xl font-semibold text-terminal-light mt-6 mb-3">Color Options</h3>
          <p className="mb-4">Add colors using toilet:</p>
          <CodeBlock code="toilet -f mono12 -F metal 'Your Text'" language="bash" />

          <h2 className="text-2xl font-semibold text-terminal-light mt-8 mb-4">Troubleshooting</h2>
          
          <h3 className="text-xl font-semibold text-terminal-light mt-6 mb-3">Banner Not Appearing</h3>
          <CodeBlock code="source ~/.bashrc" language="bash" />

          <h3 className="text-xl font-semibold text-terminal-light mt-6 mb-3">Font Issues</h3>
          <CodeBlock code="pkg reinstall figlet toilet" language="bash" />

          <h2 className="text-2xl font-semibold text-terminal-light mt-8 mb-4">Best Practices</h2>
          <ul className="list-disc pl-6 mb-6 text-terminal-light/80">
            <li>Keep your banner text concise and readable</li>
            <li>Use appropriate colors that don&apos;t strain the eyes</li>
            <li>Include useful information in your banner</li>
            <li>Regularly update your configuration</li>
          </ul>
        </div>
      </article>
    </Layout>
  );
};

export default TermuxBanner;