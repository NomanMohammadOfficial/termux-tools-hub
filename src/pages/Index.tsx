import React from 'react';
import { Helmet } from "react-helmet";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { FeaturedTools } from "@/components/FeaturedTools";
import { Newsletter } from "@/components/Newsletter";
import { Footer } from "@/components/Footer";
import { Terminal, Book, Shield, Code2, Command, Settings } from "lucide-react";

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
      
      {/* New Content Sections */}
      <section className="py-16 bg-terminal-gray">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-mono font-bold text-terminal-light text-center mb-12">
            Getting Started with Termux
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-terminal-black p-6 rounded-lg border border-terminal-green/20">
              <Terminal className="w-12 h-12 text-terminal-green mb-4" />
              <h3 className="text-xl font-mono font-bold text-terminal-light mb-4">Basic Installation</h3>
              <p className="text-terminal-light/80 mb-4">
                Termux is a powerful terminal emulator for Android that brings the Linux command line to your mobile device. Start by downloading Termux from F-Droid for the most up-to-date version.
              </p>
              <pre className="bg-terminal-black/50 p-4 rounded font-mono text-sm text-terminal-green">
                pkg update && pkg upgrade
              </pre>
            </div>
            
            <div className="bg-terminal-black p-6 rounded-lg border border-terminal-green/20">
              <Book className="w-12 h-12 text-terminal-green mb-4" />
              <h3 className="text-xl font-mono font-bold text-terminal-light mb-4">Essential Packages</h3>
              <p className="text-terminal-light/80 mb-4">
                After installation, enhance your Termux environment with essential development tools and utilities for a complete command-line experience.
              </p>
              <pre className="bg-terminal-black/50 p-4 rounded font-mono text-sm text-terminal-green">
                pkg install git python nodejs
              </pre>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-mono font-bold text-terminal-light text-center mb-12">
            Popular Use Cases
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-terminal-gray p-6 rounded-lg">
              <Code2 className="w-12 h-12 text-terminal-green mb-4" />
              <h3 className="text-xl font-mono font-bold text-terminal-light mb-4">Web Development</h3>
              <p className="text-terminal-light/80">
                Set up a complete web development environment with Node.js, Python, and various frameworks directly on your Android device.
              </p>
            </div>
            
            <div className="bg-terminal-gray p-6 rounded-lg">
              <Shield className="w-12 h-12 text-terminal-green mb-4" />
              <h3 className="text-xl font-mono font-bold text-terminal-light mb-4">Security Testing</h3>
              <p className="text-terminal-light/80">
                Learn and practice cybersecurity concepts with various security tools and penetration testing utilities available through Termux.
              </p>
            </div>
            
            <div className="bg-terminal-gray p-6 rounded-lg">
              <Settings className="w-12 h-12 text-terminal-green mb-4" />
              <h3 className="text-xl font-mono font-bold text-terminal-light mb-4">System Administration</h3>
              <p className="text-terminal-light/80">
                Perform system administration tasks, automate processes, and manage servers directly from your Android device.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-terminal-gray">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-mono font-bold text-terminal-light text-center mb-12">
            Quick Command Reference
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { cmd: "pkg", desc: "Package management utility for installing and updating software" },
              { cmd: "apt", desc: "Advanced package tool for handling package installations" },
              { cmd: "termux-setup-storage", desc: "Set up access to device storage" },
              { cmd: "nano", desc: "Simple text editor for command line" },
              { cmd: "wget", desc: "Tool for retrieving files using HTTP/HTTPS" },
              { cmd: "ssh", desc: "Secure shell client for remote system access" }
            ].map((item, index) => (
              <div key={index} className="bg-terminal-black p-4 rounded-lg border border-terminal-green/20">
                <Command className="w-6 h-6 text-terminal-green mb-2" />
                <code className="text-terminal-green font-mono block mb-2">{item.cmd}</code>
                <p className="text-terminal-light/80 text-sm">{item.desc}</p>
              </div>
            ))}
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