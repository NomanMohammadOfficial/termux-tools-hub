import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { CommandGenerator } from "@/components/CommandGenerator";
import { FeaturedTools } from "@/components/FeaturedTools";
import { DownloadSection } from "@/components/DownloadSection";
import { CommandAssistant } from "@/components/CommandAssistant";
import { Newsletter } from "@/components/Newsletter";
import { Features } from "@/components/Features";
import { Footer } from "@/components/Footer";
import { Helmet } from "react-helmet";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CommandOfTheDay } from "@/components/CommandOfTheDay";
import { Shield, Book, Terminal } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-terminal-black">
      <Helmet>
        <title>TermuxApps - Best Tools and Commands for Termux Users</title>
        <meta
          name="description"
          content="Explore the ultimate collection of Termux tools, commands, and apps. Download Termux APK, generate commands, and unlock powerful features."
        />
        <link rel="canonical" href="https://termuxapps.com" />
      </Helmet>
      
      <Header />
      <Hero />
      <Features />
      
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
            Why Choose TermuxApps?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-terminal-black border-terminal-green/20">
              <CardHeader>
                <Shield className="w-12 h-12 text-terminal-green mb-4" />
                <CardTitle className="text-xl font-mono text-terminal-light">Trusted Resource</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-terminal-light/80">
                  Our platform is dedicated to providing reliable, secure, and up-to-date Termux tools and commands. Every resource is carefully vetted and tested.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-terminal-black border-terminal-green/20">
              <CardHeader>
                <Book className="w-12 h-12 text-terminal-green mb-4" />
                <CardTitle className="text-xl font-mono text-terminal-light">Comprehensive Guides</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-terminal-light/80">
                  From beginners to advanced users, our detailed guides and tutorials help you master Termux. Learn best practices and advanced techniques.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-terminal-black border-terminal-green/20">
              <CardHeader>
                <Terminal className="w-12 h-12 text-terminal-green mb-4" />
                <CardTitle className="text-xl font-mono text-terminal-light">Active Community</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-terminal-light/80">
                  Join our growing community of Termux enthusiasts. Share knowledge, get help, and collaborate on projects with like-minded developers.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-mono font-bold text-terminal-light text-center mb-12">
            Daily Command Spotlight
          </h2>
          <div className="max-w-2xl mx-auto">
            <CommandOfTheDay />
          </div>
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