import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const Guides = () => {
  return (
    <div className="min-h-screen bg-terminal-black">
      <Header />
      <main className="container mx-auto px-4 pt-24 pb-16">
        <div className="max-w-4xl mx-auto space-y-8">
          <section className="text-center space-y-4">
            <h1 className="text-3xl md:text-4xl font-mono font-bold text-terminal-light">
              Termux Guides & Tutorials
            </h1>
            <p className="text-lg text-terminal-light/80">
              Learn how to make the most of Termux with our comprehensive guides
            </p>
          </section>
          
          {/* Placeholder content - to be implemented */}
          <div className="text-terminal-light text-center py-12">
            Coming soon! We're working on creating detailed guides for you.
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Guides;