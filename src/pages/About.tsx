import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Terminal, Shield, Code } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-terminal-black">
      <Header />
      <main className="container mx-auto px-4 pt-24 pb-16">
        <div className="max-w-4xl mx-auto space-y-12">
          <section className="text-center space-y-4">
            <h1 className="text-3xl md:text-4xl font-mono font-bold text-terminal-light">
              About TermuxApps
            </h1>
            <p className="text-lg text-terminal-light/80">
              Your trusted resource for everything Termux
            </p>
          </section>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-terminal-gray p-6 rounded-lg text-center space-y-4">
              <Terminal className="w-12 h-12 text-terminal-green mx-auto" />
              <h3 className="text-xl font-mono font-bold text-terminal-light">Our Mission</h3>
              <p className="text-terminal-light/80">
                To make Termux accessible and useful for everyone, from beginners to experts
              </p>
            </div>

            <div className="bg-terminal-gray p-6 rounded-lg text-center space-y-4">
              <Shield className="w-12 h-12 text-terminal-green mx-auto" />
              <h3 className="text-xl font-mono font-bold text-terminal-light">Security First</h3>
              <p className="text-terminal-light/80">
                We prioritize safe and secure practices in all our guides and recommendations
              </p>
            </div>

            <div className="bg-terminal-gray p-6 rounded-lg text-center space-y-4">
              <Code className="w-12 h-12 text-terminal-green mx-auto" />
              <h3 className="text-xl font-mono font-bold text-terminal-light">Community Driven</h3>
              <p className="text-terminal-light/80">
                Built by the community, for the community
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;