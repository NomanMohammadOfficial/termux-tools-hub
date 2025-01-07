import React from 'react';
import { Helmet } from "react-helmet";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { FeaturedTools } from "@/components/FeaturedTools";
import { Newsletter } from "@/components/Newsletter";
import { Footer } from "@/components/Footer";
import { Terminal, Book, Shield, Code2, Command, Settings, Download, Server, Database, Network, Lock } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-terminal-black">
      <Helmet>
        <title>TermuxApps - Best Tools and Commands for Termux Users</title>
        <meta
          name="description"
          content="Comprehensive guide to Termux: Learn essential commands, tools, and best practices. Get started with Linux environment on Android with our detailed tutorials and command references."
        />
        <link rel="canonical" href="https://termuxapps.com" />
        <meta name="keywords" content="termux commands, termux tutorial, termux guide, android terminal, linux on android, termux tools, termux packages, termux installation" />
      </Helmet>
      
      <Header />
      <Hero />
      <Features />
      
      {/* Installation Guide Section */}
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

      {/* Use Cases Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-mono font-bold text-terminal-light text-center mb-12">
            Popular Use Cases
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-terminal-gray p-6 rounded-lg">
              <Server className="w-12 h-12 text-terminal-green mb-4" />
              <h3 className="text-xl font-mono font-bold text-terminal-light mb-4">Web Development</h3>
              <ul className="text-terminal-light/80 space-y-2">
                <li>• Run Node.js applications</li>
                <li>• Python web servers</li>
                <li>• PHP development</li>
                <li>• Database management</li>
              </ul>
            </div>
            
            <div className="bg-terminal-gray p-6 rounded-lg">
              <Database className="w-12 h-12 text-terminal-green mb-4" />
              <h3 className="text-xl font-mono font-bold text-terminal-light mb-4">System Administration</h3>
              <ul className="text-terminal-light/80 space-y-2">
                <li>• Remote server management</li>
                <li>• Database administration</li>
                <li>• System monitoring</li>
                <li>• Task automation</li>
              </ul>
            </div>
            
            <div className="bg-terminal-gray p-6 rounded-lg">
              <Lock className="w-12 h-12 text-terminal-green mb-4" />
              <h3 className="text-xl font-mono font-bold text-terminal-light mb-4">Security Testing</h3>
              <ul className="text-terminal-light/80 space-y-2">
                <li>• Network analysis</li>
                <li>• Security assessments</li>
                <li>• Penetration testing</li>
                <li>• Vulnerability scanning</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Features Section */}
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

      <FeaturedTools />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Index;