import { Layout } from "@/components/Layout";
import { CodeBlock } from "@/components/CodeBlock";
import { Helmet } from "react-helmet";

const TruecallerTermux = () => {
  return (
    <Layout>
      <Helmet>
        <title>How to Install Truecaller in Termux - Complete Guide</title>
        <meta 
          name="description" 
          content="Learn how to install and use Truecaller features in Termux. Get step-by-step instructions for phone number lookups and caller information directly from your terminal." 
        />
        <meta 
          name="keywords" 
          content="truecaller termux, phone lookup, caller id, terminal tools, python cli" 
        />
        <meta property="og:title" content="How to Install Truecaller in Termux - Complete Guide" />
        <meta 
          property="og:description" 
          content="Learn how to install and use Truecaller features in Termux. Access caller information from your terminal." 
        />
        <link rel="canonical" href="https://termuxapps.com/blog/install-truecaller-termux" />
      </Helmet>

      <article className="max-w-3xl mx-auto mt-8 px-4">
        <h1 className="text-4xl font-bold text-terminal-light mb-6">Install and Use Truecaller in Termux</h1>
        
        <div className="prose prose-invert max-w-none">
          <p className="text-lg text-terminal-light/80 mb-8">
            Truecaller functionality in Termux allows you to perform phone number lookups directly from your terminal. 
            This guide will show you how to set up and use Truecaller features safely and effectively.
          </p>

          <h2 className="text-2xl font-semibold text-terminal-light mt-8 mb-4">Prerequisites</h2>
          <p className="mb-4">Update your system first:</p>
          <CodeBlock code="pkg update && pkg upgrade" />
          
          <p className="mb-4">Install required packages:</p>
          <CodeBlock code="pkg install python" />
          <CodeBlock code="pkg install git" />

          <h2 className="text-2xl font-semibold text-terminal-light mt-8 mb-4">Installation Process</h2>
          
          <h3 className="text-xl font-semibold text-terminal-light mt-6 mb-3">Clone Repository</h3>
          <CodeBlock code="git clone https://github.com/TheSpeedX/TrueCaller-CLI.git" />

          <h3 className="text-xl font-semibold text-terminal-light mt-6 mb-3">Navigate to Directory</h3>
          <CodeBlock code="cd TrueCaller-CLI" />

          <h3 className="text-xl font-semibold text-terminal-light mt-6 mb-3">Install Dependencies</h3>
          <CodeBlock code="pip install -r requirements.txt" />

          <h2 className="text-2xl font-semibold text-terminal-light mt-8 mb-4">Basic Usage</h2>
          
          <h3 className="text-xl font-semibold text-terminal-light mt-6 mb-3">Run Script</h3>
          <CodeBlock code="python3 truecaller.py" />

          <h3 className="text-xl font-semibold text-terminal-light mt-6 mb-3">Login</h3>
          <CodeBlock code="python3 truecaller.py login" />

          <h3 className="text-xl font-semibold text-terminal-light mt-6 mb-3">Search Number</h3>
          <CodeBlock code="python3 truecaller.py -s <phone_number>" />

          <h2 className="text-2xl font-semibold text-terminal-light mt-8 mb-4">Advanced Features</h2>
          
          <h3 className="text-xl font-semibold text-terminal-light mt-6 mb-3">Bulk Search</h3>
          <CodeBlock code="python3 truecaller.py -f numbers.txt" />

          <h3 className="text-xl font-semibold text-terminal-light mt-6 mb-3">Save Results</h3>
          <CodeBlock code="python3 truecaller.py -s <number> -o result.txt" />

          <h2 className="text-2xl font-semibold text-terminal-light mt-8 mb-4">Troubleshooting</h2>
          
          <h3 className="text-xl font-semibold text-terminal-light mt-6 mb-3">Authentication Issues</h3>
          <CodeBlock code="python3 truecaller.py --force-login" />

          <h3 className="text-xl font-semibold text-terminal-light mt-6 mb-3">Rate Limits</h3>
          <CodeBlock code="python3 truecaller.py --delay 5" />

          <h2 className="text-2xl font-semibold text-terminal-light mt-8 mb-4">Ethical Considerations</h2>
          <ul className="list-disc pl-6 mb-6 text-terminal-light/80">
            <li>Always respect privacy laws and regulations</li>
            <li>Use the tool responsibly</li>
            <li>Follow terms of service</li>
            <li>Protect personal data</li>
            <li>Document your findings properly</li>
          </ul>
        </div>
      </article>
    </Layout>
  );
};

export default TruecallerTermux;