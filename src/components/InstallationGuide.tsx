import { Download, Settings } from "lucide-react";

export const InstallationGuide = () => {
  return (
    <section className="py-16 bg-terminal-gray">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-mono font-bold text-terminal-light text-center mb-12">
          Complete Installation Guide
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-terminal-black p-6 rounded-lg border border-terminal-green/20">
            <Download className="w-12 h-12 text-terminal-green mb-4" />
            <h3 className="text-xl font-mono font-bold text-terminal-light mb-4">Step-by-Step Installation</h3>
            <ol className="text-terminal-light/80 space-y-4 list-decimal list-inside">
              <li>Download Termux from F-Droid store</li>
              <li>Open Termux and wait for initial setup</li>
              <li>Run package updates:
                <pre className="bg-terminal-black/50 p-2 mt-2 rounded font-mono text-sm text-terminal-green">
                  pkg update && pkg upgrade
                </pre>
              </li>
              <li>Install essential packages:
                <pre className="bg-terminal-black/50 p-2 mt-2 rounded font-mono text-sm text-terminal-green">
                  pkg install wget curl git python
                </pre>
              </li>
            </ol>
          </div>
          
          <div className="bg-terminal-black p-6 rounded-lg border border-terminal-green/20">
            <Settings className="w-12 h-12 text-terminal-green mb-4" />
            <h3 className="text-xl font-mono font-bold text-terminal-light mb-4">Post-Installation Setup</h3>
            <ul className="text-terminal-light/80 space-y-4">
              <li>• Set up storage access:
                <pre className="bg-terminal-black/50 p-2 mt-2 rounded font-mono text-sm text-terminal-green">
                  termux-setup-storage
                </pre>
              </li>
              <li>• Configure text editor:
                <pre className="bg-terminal-black/50 p-2 mt-2 rounded font-mono text-sm text-terminal-green">
                  pkg install nano vim
                </pre>
              </li>
              <li>• Set up SSH access:
                <pre className="bg-terminal-black/50 p-2 mt-2 rounded font-mono text-sm text-terminal-green">
                  pkg install openssh
                </pre>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};