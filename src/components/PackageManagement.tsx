import { Package, RefreshCw, Terminal, Code2 } from "lucide-react";

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
              <li>• Text editors:
                <pre className="bg-terminal-black/50 p-2 mt-2 rounded font-mono text-sm text-terminal-green">
                  pkg install vim nano emacs
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
              <li>• Search for packages:
                <pre className="bg-terminal-black/50 p-2 mt-2 rounded font-mono text-sm text-terminal-green">
                  pkg search package_name
                </pre>
              </li>
            </ul>
          </div>

          <div className="bg-terminal-black p-6 rounded-lg border border-terminal-green/20">
            <Terminal className="w-12 h-12 text-terminal-green mb-4" />
            <h3 className="text-xl font-mono font-bold text-terminal-light mb-4">Shell Configuration</h3>
            <ul className="text-terminal-light/80 space-y-3">
              <li>• Install ZSH:
                <pre className="bg-terminal-black/50 p-2 mt-2 rounded font-mono text-sm text-terminal-green">
                  pkg install zsh
                </pre>
              </li>
              <li>• Oh My ZSH setup:
                <pre className="bg-terminal-black/50 p-2 mt-2 rounded font-mono text-sm text-terminal-green">
                  sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
                </pre>
              </li>
              <li>• Configure aliases:
                <pre className="bg-terminal-black/50 p-2 mt-2 rounded font-mono text-sm text-terminal-green">
                  nano ~/.zshrc
                </pre>
              </li>
            </ul>
          </div>

          <div className="bg-terminal-black p-6 rounded-lg border border-terminal-green/20">
            <Code2 className="w-12 h-12 text-terminal-green mb-4" />
            <h3 className="text-xl font-mono font-bold text-terminal-light mb-4">Development Setup</h3>
            <ul className="text-terminal-light/80 space-y-3">
              <li>• Version control:
                <pre className="bg-terminal-black/50 p-2 mt-2 rounded font-mono text-sm text-terminal-green">
                  pkg install git
                </pre>
              </li>
              <li>• Python development:
                <pre className="bg-terminal-black/50 p-2 mt-2 rounded font-mono text-sm text-terminal-green">
                  pkg install python-dev clang
                </pre>
              </li>
              <li>• Web development:
                <pre className="bg-terminal-black/50 p-2 mt-2 rounded font-mono text-sm text-terminal-green">
                  pkg install php composer
                </pre>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};