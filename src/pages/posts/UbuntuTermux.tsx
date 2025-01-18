import { Layout } from "@/components/Layout";
import { CodeBlock } from "@/components/CodeBlock";
import { Helmet } from "react-helmet";

const UbuntuTermux = () => {
  return (
    <Layout>
      <Helmet>
        <title>How to Install Ubuntu in Termux - Complete Guide</title>
        <meta 
          name="description" 
          content="Learn how to install and set up Ubuntu in Termux with our comprehensive guide. Get access to the full Ubuntu package ecosystem on your Android device." 
        />
        <meta 
          name="keywords" 
          content="ubuntu termux, linux on android, proot-distro, terminal emulator, development environment" 
        />
        <meta property="og:title" content="How to Install Ubuntu in Termux - Complete Guide" />
        <meta 
          property="og:description" 
          content="Learn how to install and set up Ubuntu in Termux. Access the full Ubuntu ecosystem on your Android device." 
        />
        <link rel="canonical" href="https://termuxapps.com/blog/install-ubuntu-termux" />
      </Helmet>

      <article className="max-w-3xl mx-auto mt-8 px-4">
        <h1 className="text-4xl font-bold text-terminal-light mb-6">How to Install Ubuntu in Termux</h1>
        
        <div className="prose prose-invert max-w-none">
          <p className="text-lg text-terminal-light/80 mb-8">
            Running Ubuntu in Termux opens up a world of possibilities for your Android device. 
            This comprehensive guide will walk you through the installation process and help you get started with Ubuntu.
          </p>

          <h2 className="text-2xl font-semibold text-terminal-light mt-8 mb-4">Prerequisites</h2>
          <ul className="list-disc pl-6 mb-6 text-terminal-light/80">
            <li>At least 2GB of free storage</li>
            <li>Android 7.0 or higher</li>
            <li>Latest version of Termux</li>
          </ul>

          <h3 className="text-xl font-semibold text-terminal-light mt-6 mb-3">Update Termux</h3>
          <CodeBlock code="pkg update && pkg upgrade" />

          <h3 className="text-xl font-semibold text-terminal-light mt-6 mb-3">Install Required Package</h3>
          <CodeBlock code="pkg install proot-distro" />

          <h2 className="text-2xl font-semibold text-terminal-light mt-8 mb-4">Installation Steps</h2>
          
          <h3 className="text-xl font-semibold text-terminal-light mt-6 mb-3">Step 1: Install Ubuntu</h3>
          <CodeBlock code="proot-distro install ubuntu" />

          <h3 className="text-xl font-semibold text-terminal-light mt-6 mb-3">Step 2: Launch Ubuntu</h3>
          <CodeBlock code="proot-distro login ubuntu" />

          <h2 className="text-2xl font-semibold text-terminal-light mt-8 mb-4">Post-Installation Setup</h2>
          
          <h3 className="text-xl font-semibold text-terminal-light mt-6 mb-3">Update Packages</h3>
          <CodeBlock code="apt update" />
          <CodeBlock code="apt upgrade" />

          <h3 className="text-xl font-semibold text-terminal-light mt-6 mb-3">Install Essential Tools</h3>
          <CodeBlock code="apt install build-essential" />
          <CodeBlock code="apt install python3 python3-pip" />
          <CodeBlock code="apt install git wget curl" />

          <h2 className="text-2xl font-semibold text-terminal-light mt-8 mb-4">User Setup</h2>
          
          <h3 className="text-xl font-semibold text-terminal-light mt-6 mb-3">Create New User</h3>
          <CodeBlock code="adduser yourusername" />

          <h3 className="text-xl font-semibold text-terminal-light mt-6 mb-3">Install ZSH (Optional)</h3>
          <CodeBlock code="apt install zsh" />

          <h2 className="text-2xl font-semibold text-terminal-light mt-8 mb-4">Troubleshooting</h2>
          
          <h3 className="text-xl font-semibold text-terminal-light mt-6 mb-3">Storage Issues</h3>
          <CodeBlock code="apt clean" />

          <h3 className="text-xl font-semibold text-terminal-light mt-6 mb-3">Performance</h3>
          <CodeBlock code="nice -n 19 command_name" />

          <h2 className="text-2xl font-semibold text-terminal-light mt-8 mb-4">Best Practices</h2>
          <ul className="list-disc pl-6 mb-6 text-terminal-light/80">
            <li>Regularly update both Termux and Ubuntu</li>
            <li>Clean package caches periodically</li>
            <li>Monitor storage usage</li>
            <li>Back up important files</li>
            <li>Document custom configurations</li>
          </ul>
        </div>
      </article>
    </Layout>
  );
};

export default UbuntuTermux;