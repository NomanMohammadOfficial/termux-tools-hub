import { Package, RefreshCw, Terminal, Code2 } from "lucide-react";

export const PackageManagement = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-mono font-bold text-terminal-light text-center mb-12">
          Package Management
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-terminal-black p-6 rounded-lg border border-terminal-green/20 overflow-hidden">
            <Package className="w-12 h-12 text-terminal-green mb-4" />
            <h3 className="text-xl font-mono font-bold text-terminal-light mb-4">Essential Packages</h3>
            <ul className="text-terminal-light/80 space-y-3">
              <li className="break-words">• Development tools:
                <pre className="bg-terminal-black/50 p-2 mt-2 rounded font-mono text-sm text-terminal-green overflow-x-auto whitespace-pre-wrap">
                  pkg install build-essential cmake
                </pre>
              </li>
              <li className="break-words">• Programming languages:
                <pre className="bg-terminal-black/50 p-2 mt-2 rounded font-mono text-sm text-terminal-green overflow-x-auto whitespace-pre-wrap">
                  pkg install python nodejs ruby perl
                </pre>
              </li>
              <li className="break-words">• System utilities:
                <pre className="bg-terminal-black/50 p-2 mt-2 rounded font-mono text-sm text-terminal-green overflow-x-auto whitespace-pre-wrap">
                  pkg install htop neofetch tmux
                </pre>
              </li>
              <li className="break-words">• Text editors:
                <pre className="bg-terminal-black/50 p-2 mt-2 rounded font-mono text-sm text-terminal-green overflow-x-auto whitespace-pre-wrap">
                  pkg install vim nano emacs
                </pre>
              </li>
            </ul>
          </div>
          
          <div className="bg-terminal-black p-6 rounded-lg border border-terminal-green/20 overflow-hidden">
            <RefreshCw className="w-12 h-12 text-terminal-green mb-4" />
            <h3 className="text-xl font-mono font-bold text-terminal-light mb-4">Package Maintenance</h3>
            <ul className="text-terminal-light/80 space-y-3">
              <li className="break-words">• Update package lists:
                <pre className="bg-terminal-black/50 p-2 mt-2 rounded font-mono text-sm text-terminal-green overflow-x-auto whitespace-pre-wrap">
                  pkg update
                </pre>
              </li>
              <li className="break-words">• Upgrade installed packages:
                <pre className="bg-terminal-black/50 p-2 mt-2 rounded font-mono text-sm text-terminal-green overflow-x-auto whitespace-pre-wrap">
                  pkg upgrade
                </pre>
              </li>
              <li className="break-words">• Clean package cache:
                <pre className="bg-terminal-black/50 p-2 mt-2 rounded font-mono text-sm text-terminal-green overflow-x-auto whitespace-pre-wrap">
                  pkg clean
                </pre>
              </li>
              <li className="break-words">• Search for packages:
                <pre className="bg-terminal-black/50 p-2 mt-2 rounded font-mono text-sm text-terminal-green overflow-x-auto whitespace-pre-wrap">
                  pkg search package_name
                </pre>
              </li>
            </ul>
          </div>

          <div className="bg-terminal-black p-6 rounded-lg border border-terminal-green/20 overflow-hidden">
            <Terminal className="w-12 h-12 text-terminal-green mb-4" />
            <h3 className="text-xl font-mono font-bold text-terminal-light mb-4">Shell Configuration</h3>
            <ul className="text-terminal-light/80 space-y-3">
              <li className="break-words">• Install ZSH:
                <pre className="bg-terminal-black/50 p-2 mt-2 rounded font-mono text-sm text-terminal-green overflow-x-auto whitespace-pre-wrap">
                  pkg install zsh
                </pre>
              </li>
              <li className="break-words">• Oh My ZSH setup:
                <pre className="bg-terminal-black/50 p-2 mt-2 rounded font-mono text-sm text-terminal-green overflow-x-auto whitespace-pre-wrap">
                  sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
                </pre>
              </li>
              <li className="break-words">• Configure aliases:
                <pre className="bg-terminal-black/50 p-2 mt-2 rounded font-mono text-sm text-terminal-green overflow-x-auto whitespace-pre-wrap">
                  nano ~/.zshrc
                </pre>
              </li>
            </ul>
          </div>

          <div className="bg-terminal-black p-6 rounded-lg border border-terminal-green/20 overflow-hidden">
            <Code2 className="w-12 h-12 text-terminal-green mb-4" />
            <h3 className="text-xl font-mono font-bold text-terminal-light mb-4">Development Setup</h3>
            <ul className="text-terminal-light/80 space-y-3">
              <li className="break-words">• Version control:
                <pre className="bg-terminal-black/50 p-2 mt-2 rounded font-mono text-sm text-terminal-green overflow-x-auto whitespace-pre-wrap">
                  pkg install git
                </pre>
              </li>
              <li className="break-words">• Python development:
                <pre className="bg-terminal-black/50 p-2 mt-2 rounded font-mono text-sm text-terminal-green overflow-x-auto whitespace-pre-wrap">
                  pkg install python-dev clang
                </pre>
              </li>
              <li className="break-words">• Web development:
                <pre className="bg-terminal-black/50 p-2 mt-2 rounded font-mono text-sm text-terminal-green overflow-x-auto whitespace-pre-wrap">
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