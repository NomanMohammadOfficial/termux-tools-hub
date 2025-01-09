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
        <meta 
          name="keywords" 
          content="termux commands, termux tutorial, termux guide, android terminal, linux on android, termux tools, termux packages, termux installation" 
        />
      </Helmet>
      
      <Header />
      <Hero />
      <Features />
      <InstallationGuide />
      <CommandOfTheDay />
      <CommandCategories />
      <UseCases />
      <PackageManagement />
      <AdvancedFeatures />
      <CommandGenerator />
      <FeaturedTools />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Index;