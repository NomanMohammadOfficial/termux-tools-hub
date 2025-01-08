import { Layout } from "@/components/Layout";
import { Helmet } from "react-helmet";

const Terms = () => {
  return (
    <Layout>
      <Helmet>
        <title>Terms of Service - TermuxApps</title>
        <meta name="description" content="Terms of service and usage guidelines for TermuxApps - Your trusted resource for Termux tools and commands." />
        <link rel="canonical" href="https://termuxapps.com/terms" />
      </Helmet>
      <div className="max-w-4xl mx-auto prose prose-invert">
          <h1 className="text-3xl md:text-4xl font-mono font-bold text-terminal-light mb-8">Terms of Service</h1>
          
          <section className="mb-8">
            <h2 className="text-2xl font-mono font-bold text-terminal-light mb-4">Acceptance of Terms</h2>
            <p className="text-terminal-light/80">
              By accessing and using TermuxApps, you agree to be bound by these Terms of Service and all applicable laws and regulations.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-mono font-bold text-terminal-light mb-4">Use License</h2>
            <p className="text-terminal-light/80">
              Permission is granted to temporarily access TermuxApps for personal, non-commercial use. This license does not include:
            </p>
            <ul className="list-disc pl-6 text-terminal-light/80">
              <li>Modifying or copying materials</li>
              <li>Using materials for commercial purposes</li>
              <li>Attempting to reverse engineer any software</li>
              <li>Removing any copyright or proprietary notations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-mono font-bold text-terminal-light mb-4">Disclaimer</h2>
            <p className="text-terminal-light/80">
              The materials on TermuxApps are provided on an 'as is' basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-mono font-bold text-terminal-light mb-4">Limitations</h2>
            <p className="text-terminal-light/80">
              In no event shall TermuxApps or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on TermuxApps.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-mono font-bold text-terminal-light mb-4">Content Accuracy</h2>
            <p className="text-terminal-light/80">
              The materials appearing on TermuxApps could include technical, typographical, or photographic errors. We do not warrant that any of the materials on its website are accurate, complete, or current.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-mono font-bold text-terminal-light mb-4">Contact</h2>
            <p className="text-terminal-light/80">
              If you have any questions about these Terms, please contact us through our <a href="/contact" className="text-terminal-green hover:underline">contact page</a>.
            </p>
          </section>
      </div>
    </Layout>
  );
};

export default Terms;
