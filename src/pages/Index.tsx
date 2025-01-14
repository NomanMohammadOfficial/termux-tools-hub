import React from 'react';
import { Helmet } from "react-helmet";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { InstallationGuide } from "@/components/InstallationGuide";
import { UseCases } from "@/components/UseCases";
import { AdvancedFeatures } from "@/components/AdvancedFeatures";
import { PackageManagement } from "@/components/PackageManagement";
import { FeaturedTools } from "@/components/FeaturedTools";
import { Newsletter } from "@/components/Newsletter";
import { Footer } from "@/components/Footer";
import { CommandCategories } from "@/components/CommandCategories";
import { CommandGenerator } from "@/components/CommandGenerator";
import { CommandOfTheDay } from "@/components/CommandOfTheDay";
import { TermuxAICommands } from "@/components/TermuxAICommands";
import { BlogList } from "@/components/BlogList";
import { Terminal, Bot, Cpu, BookOpen } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-terminal-black">
      <Helmet>
        <title>TermuxApps - AI-Powered Terminal Commands & Linux Tools</title>
        <meta
          name="description"
          content="Experience the power of AI in your terminal with TermuxApps. Generate Linux commands, get smart terminal suggestions, and master Termux with our AI-powered tools. Perfect for both beginners and advanced users."
        />
        <link rel="canonical" href="https://termuxapps.com" />
        <meta 
          name="keywords" 
          content="terminal gpt, ai termux, linux ai terminal, termux ai assistant, terminal command generator, ai linux commands, smart terminal, termux commands, termux tutorial, termux guide, android terminal, linux on android, termux tools, termux packages, termux installation" 
        />
        {/* OpenGraph tags for better social sharing */}
        <meta property="og:title" content="TermuxApps - AI-Powered Terminal Commands & Linux Tools" />
        <meta property="og:description" content="Experience the power of AI in your terminal. Generate Linux commands, get smart suggestions, and master Termux with our AI tools." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://termuxapps.com" />
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="TermuxApps - AI-Powered Terminal Commands & Linux Tools" />
        <meta name="twitter:description" content="Experience the power of AI in your terminal. Generate Linux commands and master Termux with AI assistance." />
      </Helmet>
      
      <Header />
      <Hero />
      <Features />

      {/* AI Command Assistant Featured Section */}
      <section className="py-16 bg-terminal-black border-y border-terminal-green/20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-3 mb-8">
            <Bot className="w-8 h-8 text-terminal-green" />
            <h2 className="text-3xl font-mono font-bold text-terminal-light text-center">
              Termux AI Command Assistant
            </h2>
          </div>
          <p className="text-center text-terminal-light/80 max-w-2xl mx-auto mb-12">
            Get instant, AI-powered help with Termux commands. Our Gemini-powered assistant provides clear, concise explanations and ready-to-use commands for any task you need to accomplish.
          </p>
          <TermuxAICommands />
        </div>
      </section>

      {/* Command Generator Section */}
      <section className="py-16 bg-terminal-gray">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-3 mb-8">
            <Terminal className="w-8 h-8 text-terminal-green" />
            <h2 className="text-3xl font-mono font-bold text-terminal-light text-center">
              Quick Command Generator
            </h2>
          </div>
          <p className="text-center text-terminal-light/80 max-w-2xl mx-auto mb-12">
            Access commonly used Termux commands instantly with our command generator. Perfect for both beginners and experienced users.
          </p>
          <CommandGenerator />
        </div>
      </section>

      <InstallationGuide />
      
      {/* Blog Section */}
      <section className="py-16 bg-terminal-black border-y border-terminal-green/20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-3 mb-8">
            <BookOpen className="w-8 h-8 text-terminal-green" />
            <h2 className="text-3xl font-mono font-bold text-terminal-light text-center">
              Latest Tutorials & Guides
            </h2>
          </div>
          <p className="text-center text-terminal-light/80 max-w-2xl mx-auto mb-12">
            Explore our comprehensive collection of Termux tutorials, guides, and best practices to enhance your terminal skills.
          </p>
          <BlogList />
        </div>
      </section>

      {/* Daily Command Learning Section */}
      <section className="py-16 bg-terminal-gray">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-3 mb-8">
            <Terminal className="w-8 h-8 text-terminal-green" />
            <h2 className="text-3xl font-mono font-bold text-terminal-light text-center">
              Master Terminal Commands Daily
            </h2>
          </div>
          <p className="text-center text-terminal-light/80 max-w-2xl mx-auto mb-12">
            Enhance your terminal skills with our curated command of the day and comprehensive command categories.
          </p>
          <div className="grid grid-cols-1 gap-8">
            <CommandOfTheDay />
            <CommandCategories />
          </div>
        </div>
      </section>

      <UseCases />
      
      {/* Advanced Terminal Mastery Section */}
      <section className="py-16 bg-terminal-black border-y border-terminal-green/20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-3 mb-8">
            <Cpu className="w-8 h-8 text-terminal-green" />
            <h2 className="text-3xl font-mono font-bold text-terminal-light text-center">
              Advanced Terminal Mastery
            </h2>
          </div>
          <p className="text-center text-terminal-light/80 max-w-2xl mx-auto mb-12">
            Take your terminal skills to the next level with our advanced features and package management guides.
          </p>
          <div className="space-y-16">
            <PackageManagement />
            <AdvancedFeatures />
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
