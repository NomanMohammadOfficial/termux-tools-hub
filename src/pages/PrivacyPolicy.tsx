import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Helmet } from "react-helmet";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-terminal-black">
      <Helmet>
        <title>Privacy Policy - TermuxApps</title>
        <meta name="description" content="Privacy policy and data handling practices for TermuxApps - Your trusted resource for Termux tools and commands." />
        <link rel="canonical" href="https://termuxapps.com/privacy-policy" />
      </Helmet>

      <Header />
      <main className="container mx-auto px-4 pt-24 pb-16">
        <div className="max-w-4xl mx-auto prose prose-invert">
          <h1 className="text-3xl md:text-4xl font-mono font-bold text-terminal-light mb-8">Privacy Policy</h1>
          
          <section className="mb-8">
            <h2 className="text-2xl font-mono font-bold text-terminal-light mb-4">Information We Collect</h2>
            <p className="text-terminal-light/80">
              We collect minimal information necessary to provide our services, including:
            </p>
            <ul className="list-disc pl-6 text-terminal-light/80">
              <li>Email addresses for newsletter subscriptions</li>
              <li>Usage data to improve our services</li>
              <li>Technical information for website functionality</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-mono font-bold text-terminal-light mb-4">How We Use Your Information</h2>
            <p className="text-terminal-light/80">
              We use collected information to:
            </p>
            <ul className="list-disc pl-6 text-terminal-light/80">
              <li>Send newsletters and updates</li>
              <li>Improve our website and services</li>
              <li>Respond to your inquiries</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-mono font-bold text-terminal-light mb-4">Data Security</h2>
            <p className="text-terminal-light/80">
              We implement appropriate security measures to protect your information. Your data is stored securely and accessed only when necessary.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-mono font-bold text-terminal-light mb-4">Third-Party Services</h2>
            <p className="text-terminal-light/80">
              We use trusted third-party services for:
            </p>
            <ul className="list-disc pl-6 text-terminal-light/80">
              <li>Analytics (to understand website usage)</li>
              <li>Newsletter delivery</li>
              <li>Hosting and infrastructure</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-mono font-bold text-terminal-light mb-4">Your Rights</h2>
            <p className="text-terminal-light/80">
              You have the right to:
            </p>
            <ul className="list-disc pl-6 text-terminal-light/80">
              <li>Access your personal data</li>
              <li>Request data deletion</li>
              <li>Opt-out of communications</li>
              <li>Update your information</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-mono font-bold text-terminal-light mb-4">Contact Us</h2>
            <p className="text-terminal-light/80">
              For privacy-related inquiries, please contact us through our <a href="/contact" className="text-terminal-green hover:underline">contact page</a>.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;