import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { CommandGenerator } from "@/components/CommandGenerator";
import { FeaturedTools } from "@/components/FeaturedTools";
import { DownloadSection } from "@/components/DownloadSection";
import { CommandAssistant } from "@/components/CommandAssistant";
import { Terminal, Book, Code, Users } from "lucide-react";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-terminal-black">
      <Header />
      <Hero />
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-mono font-bold text-terminal-light text-center mb-12">
            Generate Termux Commands
          </h2>
          <CommandGenerator />
        </div>
      </section>
      
      <section className="py-16 bg-terminal-gray">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-mono font-bold text-terminal-light text-center mb-12">
            AI Command Assistant
          </h2>
          <CommandAssistant />
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-mono font-bold text-terminal-light text-center mb-12">
            Why Choose Termux?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 bg-terminal-gray rounded-lg border border-terminal-green/20">
              <Terminal className="w-12 h-12 text-terminal-green mb-4" />
              <h3 className="text-xl font-mono font-bold text-terminal-light mb-2">
                Powerful Terminal
              </h3>
              <p className="text-terminal-light opacity-90">
                Experience a full-featured Linux terminal environment right on your Android device.
              </p>
            </div>
            
            <div className="p-6 bg-terminal-gray rounded-lg border border-terminal-green/20">
              <Code className="w-12 h-12 text-terminal-green mb-4" />
              <h3 className="text-xl font-mono font-bold text-terminal-light mb-2">
                Development Ready
              </h3>
              <p className="text-terminal-light opacity-90">
                Set up complete development environments with support for various programming languages.
              </p>
            </div>
            
            <div className="p-6 bg-terminal-gray rounded-lg border border-terminal-green/20">
              <Book className="w-12 h-12 text-terminal-green mb-4" />
              <h3 className="text-xl font-mono font-bold text-terminal-light mb-2">
                Extensive Documentation
              </h3>
              <p className="text-terminal-light opacity-90">
                Access comprehensive guides and documentation to help you master Termux.
              </p>
            </div>
            
            <div className="p-6 bg-terminal-gray rounded-lg border border-terminal-green/20">
              <Users className="w-12 h-12 text-terminal-green mb-4" />
              <h3 className="text-xl font-mono font-bold text-terminal-light mb-2">
                Active Community
              </h3>
              <p className="text-terminal-light opacity-90">
                Join a vibrant community of users and developers sharing knowledge and resources.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <FeaturedTools />
      <DownloadSection />
      <Footer />
    </div>
  );
};

export default Index;