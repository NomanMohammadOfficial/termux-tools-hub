import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { CommandGenerator } from "@/components/CommandGenerator";
import { FeaturedTools } from "@/components/FeaturedTools";
import { DownloadSection } from "@/components/DownloadSection";
import { CommandAssistant } from "@/components/CommandAssistant";
import { Newsletter } from "@/components/Newsletter";
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
      
      <Newsletter />
      
      <section className="py-16 bg-terminal-gray">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-mono font-bold text-terminal-light text-center mb-12">
            AI Command Assistant
          </h2>
          <CommandAssistant />
        </div>
      </section>

      <FeaturedTools />
      <DownloadSection />
      <Footer />
    </div>
  );
};

export default Index;