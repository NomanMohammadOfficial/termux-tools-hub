import { Network, Code2 } from "lucide-react";

export const AdvancedFeatures = () => {
  return (
    <section className="py-16 bg-terminal-gray">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-mono font-bold text-terminal-light text-center mb-12">
          Advanced Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-terminal-black p-6 rounded-lg border border-terminal-green/20">
            <Network className="w-12 h-12 text-terminal-green mb-4" />
            <h3 className="text-xl font-mono font-bold text-terminal-light mb-4">Network Tools</h3>
            <p className="text-terminal-light/80 mb-4">
              Access powerful networking tools for diagnostics and analysis:
            </p>
            <ul className="text-terminal-light/80 space-y-2">
              <li>• nmap for network scanning</li>
              <li>• wireshark for packet analysis</li>
              <li>• netcat for networking utilities</li>
              <li>• traceroute for network path tracing</li>
            </ul>
          </div>
          
          <div className="bg-terminal-black p-6 rounded-lg border border-terminal-green/20">
            <Code2 className="w-12 h-12 text-terminal-green mb-4" />
            <h3 className="text-xl font-mono font-bold text-terminal-light mb-4">Development Environment</h3>
            <p className="text-terminal-light/80 mb-4">
              Set up a complete development environment:
            </p>
            <ul className="text-terminal-light/80 space-y-2">
              <li>• Multiple programming languages</li>
              <li>• Version control systems</li>
              <li>• Package managers</li>
              <li>• Build tools and compilers</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};