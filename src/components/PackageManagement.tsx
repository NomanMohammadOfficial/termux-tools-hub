import { Package, RefreshCw } from "lucide-react";

export const PackageManagement = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-mono font-bold text-terminal-light text-center mb-12">
          Package Management
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-terminal-black p-6 rounded-lg border border-terminal-green/20">
            <Package className="w-12 h-12 text-terminal-green mb-4" />
            <h3 className="text-xl font-mono font-bold text-terminal-light mb-4">Essential Packages</h3>
            <ul className="text-terminal-light/80 space-y-3">
              <li>• Development tools:
                <pre className="bg-terminal-black/50 p-2 mt-2 rounded font-mono text-sm text-terminal-green">
                  pkg install build-essential cmake
                </pre>
              </li>
              <li>• Programming languages:
                <pre className="bg-terminal-black/50 p-2 mt-2 rounded font-mono text-sm text-terminal-green">
                  pkg install python nodejs ruby perl
                </pre>
              </li>
              <li>• System utilities:
                <pre className="bg-terminal-black/50 p-2 mt-2 rounded font-mono text-sm text-terminal-green">
                  pkg install htop neofetch tmux
                </pre>
              </li>
            </ul>
          </div>
          
          <div className="bg-terminal-black p-6 rounded-lg border border-terminal-green/20">
            <RefreshCw className="w-12 h-12 text-terminal-green mb-4" />
            <h3 className="text-xl font-mono font-bold text-terminal-light mb-4">Package Maintenance</h3>
            <ul className="text-terminal-light/80 space-y-3">
              <li>• Update package lists:
                <pre className="bg-terminal-black/50 p-2 mt-2 rounded font-mono text-sm text-terminal-green">
                  pkg update
                </pre>
              </li>
              <li>• Upgrade installed packages:
                <pre className="bg-terminal-black/50 p-2 mt-2 rounded font-mono text-sm text-terminal-green">
                  pkg upgrade
                </pre>
              </li>
              <li>• Clean package cache:
                <pre className="bg-terminal-black/50 p-2 mt-2 rounded font-mono text-sm text-terminal-green">
                  pkg clean
                </pre>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};