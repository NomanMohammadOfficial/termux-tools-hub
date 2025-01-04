import { Code2, Terminal, Shield, Zap, Book, Share2 } from "lucide-react";

export const Features = () => {
  const features = [
    {
      icon: Terminal,
      title: "Powerful Terminal",
      description: "Full-featured Linux environment right on your Android device"
    },
    {
      icon: Code2,
      title: "Development Ready",
      description: "Perfect for coding, testing, and running scripts on the go"
    },
    {
      icon: Shield,
      title: "Secure Environment",
      description: "Isolated environment for safe command execution"
    },
    {
      icon: Zap,
      title: "Fast Performance",
      description: "Optimized for speed and efficiency on mobile devices"
    },
    {
      icon: Book,
      title: "Extensive Documentation",
      description: "Comprehensive guides and tutorials for all skill levels"
    },
    {
      icon: Share2,
      title: "Active Community",
      description: "Join thousands of users sharing knowledge and resources"
    }
  ];

  return (
    <section className="py-16 bg-terminal-gray">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-mono font-bold text-terminal-light text-center mb-12">
          Why Choose Termux?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-terminal-black rounded-lg border border-terminal-green/20 hover:border-terminal-green/40 transition-all duration-300"
            >
              <feature.icon className="w-12 h-12 text-terminal-green mb-4" />
              <h3 className="text-xl font-mono font-bold text-terminal-light mb-2">
                {feature.title}
              </h3>
              <p className="text-terminal-light/80">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};