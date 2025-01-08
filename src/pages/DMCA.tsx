import { Layout } from "@/components/Layout";
import { Helmet } from "react-helmet";

const DMCA = () => {
  return (
    <Layout>
      <Helmet>
        <title>DMCA Policy - TermuxApps</title>
        <meta name="description" content="DMCA takedown policy and copyright information for TermuxApps - Your trusted resource for Termux tools and commands." />
        <link rel="canonical" href="https://termuxapps.com/dmca" />
      </Helmet>
      <div className="max-w-4xl mx-auto prose prose-invert">
          <h1 className="text-3xl md:text-4xl font-mono font-bold text-terminal-light mb-8">DMCA Policy</h1>
          
          <section className="mb-8">
            <h2 className="text-2xl font-mono font-bold text-terminal-light mb-4">Copyright Notice</h2>
            <p className="text-terminal-light/80">
              We respect the intellectual property rights of others and expect our users to do the same. In accordance with the Digital Millennium Copyright Act (DMCA), we will respond expeditiously to claims of copyright infringement that are reported to our designated copyright agent.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-mono font-bold text-terminal-light mb-4">DMCA Takedown Procedure</h2>
            <p className="text-terminal-light/80">
              If you believe that content on our site infringes your copyright, please provide the following information:
            </p>
            <ul className="list-disc pl-6 text-terminal-light/80">
              <li>A physical or electronic signature of the copyright owner</li>
              <li>Identification of the copyrighted work claimed to have been infringed</li>
              <li>Identification of the material that is claimed to be infringing</li>
              <li>Contact information, including email address and phone number</li>
              <li>A statement that you have a good faith belief that use of the material is not authorized</li>
              <li>A statement that the information is accurate and that you are authorized to act on behalf of the copyright owner</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-mono font-bold text-terminal-light mb-4">Contact Information</h2>
            <p className="text-terminal-light/80">
              Please send your DMCA notices to our designated agent through our contact page or email at dmca@termuxapps.com
            </p>
          </section>
      </div>
    </Layout>
  );
};

export default DMCA;
