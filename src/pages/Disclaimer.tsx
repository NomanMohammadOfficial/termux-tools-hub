import { Layout } from "@/components/Layout";
import { Helmet } from "react-helmet";

const Disclaimer = () => {
  return (
    <Layout>
      <Helmet>
        <title>Disclaimer - TermuxApps</title>
        <meta name="description" content="Legal disclaimer and terms of use for TermuxApps - Your trusted resource for Termux tools and commands." />
        <link rel="canonical" href="https://termuxapps.com/disclaimer" />
      </Helmet>
      <div className="max-w-4xl mx-auto prose prose-invert">
          <h1 className="text-3xl md:text-4xl font-mono font-bold text-terminal-light mb-8">Disclaimer</h1>
          
          <section className="mb-8">
            <h2 className="text-2xl font-mono font-bold text-terminal-light mb-4">Website Disclaimer</h2>
            <p className="text-terminal-light/80">
              The information provided on TermuxApps is for general informational purposes only. While we strive to keep the information up to date and accurate, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the information, products, services, or related graphics contained on the website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-mono font-bold text-terminal-light mb-4">No Liability</h2>
            <p className="text-terminal-light/80">
              In no event will we be liable for any loss or damage including without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits arising out of, or in connection with, the use of this website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-mono font-bold text-terminal-light mb-4">External Links</h2>
            <p className="text-terminal-light/80">
              Through this website, you may link to other websites which are not under our control. We have no control over the nature, content, and availability of those sites. The inclusion of any links does not necessarily imply a recommendation or endorse the views expressed within them.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-mono font-bold text-terminal-light mb-4">Use of Content</h2>
            <p className="text-terminal-light/80">
              Every effort is made to keep the website up and running smoothly. However, we take no responsibility for, and will not be liable for, the website being temporarily unavailable due to technical issues beyond our control.
            </p>
          </section>
      </div>
    </Layout>
  );
};

export default Disclaimer;
