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
        <link rel="canonical" href="https://termuxapps.com/blog/termux-banner" />
      </Helmet>

      <article className="max-w-3xl mx-auto mt-8 px-4">
        <h1 className="text-4xl font-bold text-terminal-light mb-6">Create a Professional Custom Termux Banner</h1>
        
        <div className="prose prose-invert max-w-none">
          <p className="text-lg text-terminal-light/80 mb-8">
            A custom banner in Termux can transform your terminal experience from plain to professional and personalized. 
            In this comprehensive guide, we'll walk through creating an eye-catching banner that displays every time you launch Termux.
          </p>

          <h2 className="text-2xl font-semibold text-terminal-light mt-8 mb-4">Prerequisites</h2>
          <p className="mb-4">First, update your packages:</p>
          <CodeBlock code="pkg update && pkg upgrade" />
          
          <p className="mb-4">Install required tools:</p>
          <CodeBlock code="pkg install python" />
          <CodeBlock code="pkg install figlet" />
          <CodeBlock code="pkg install toilet" />

          <h2 className="text-2xl font-semibold text-terminal-light mt-8 mb-4">Creating Your Banner</h2>
          
          <h3 className="text-xl font-semibold text-terminal-light mt-6 mb-3">Step 1: Create Banner Directory</h3>
          <CodeBlock code="mkdir ~/.termux" />

          <h3 className="text-xl font-semibold text-terminal-light mt-6 mb-3">Step 2: Create Banner File</h3>
          <CodeBlock code="touch ~/.termux/banner.txt" />

          <h3 className="text-xl font-semibold text-terminal-light mt-6 mb-3">Step 3: Edit Banner Text</h3>
          <CodeBlock code="nano ~/.termux/banner.txt" />

          <h3 className="text-xl font-semibold text-terminal-light mt-6 mb-3">Step 4: Configure Bash</h3>
          <CodeBlock code='echo "clear" >> ~/.bashrc' />
          <CodeBlock code='echo "figlet -f small '\''Your Name'\''" >> ~/.bashrc' />
          <CodeBlock code='echo "toilet -f term -F border '\''Welcome'\''" >> ~/.bashrc' />

          <h2 className="text-2xl font-semibold text-terminal-light mt-8 mb-4">Customization Options</h2>
          
          <h3 className="text-xl font-semibold text-terminal-light mt-6 mb-3">Different Fonts</h3>
          <p className="mb-4">View available fonts:</p>
          <CodeBlock code="showfigfonts" />

          <h3 className="text-xl font-semibold text-terminal-light mt-6 mb-3">Color Options</h3>
          <p className="mb-4">Add colors using toilet:</p>
          <CodeBlock code="toilet -f mono12 -F metal 'Your Text'" />

          <h2 className="text-2xl font-semibold text-terminal-light mt-8 mb-4">Troubleshooting</h2>
          
          <h3 className="text-xl font-semibold text-terminal-light mt-6 mb-3">Banner Not Appearing</h3>
          <CodeBlock code="source ~/.bashrc" />

          <h3 className="text-xl font-semibold text-terminal-light mt-6 mb-3">Font Issues</h3>
          <CodeBlock code="pkg reinstall figlet toilet" />

          <h2 className="text-2xl font-semibold text-terminal-light mt-8 mb-4">Best Practices</h2>
          <ul className="list-disc pl-6 mb-6 text-terminal-light/80">
            <li>Keep your banner text concise and readable</li>
            <li>Use appropriate colors that don't strain the eyes</li>
            <li>Include useful information in your banner</li>
            <li>Regularly update your configuration</li>
          </ul>
        </div>
      </article>
    </Layout>
  );
};

export default TermuxBanner;