import { Layout } from "@/components/Layout";
import { Helmet } from "react-helmet";
import { Computer, Terminal, Shield, Download, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";

const TermuxPC = () => {
  return (
    <Layout>
      <Helmet>
        <title>Termux for PC - Run Android Terminal Emulator on Windows & Linux</title>
        <meta
          name="description"
          content="Learn how to install and run Termux for PC using Android emulators. Complete guide with step-by-step instructions for Windows, Linux & Mac users. Download Termux for desktop today!"
        />
        <meta name="keywords" content="termux for pc, termux windows, termux linux, termux desktop, termux emulator, termux installation guide, termux download pc" />
        <link rel="canonical" href="https://termuxapps.com/pc" />
        <meta property="og:title" content="Termux for PC - Complete Installation Guide" />
        <meta property="og:description" content="Learn how to install and run Termux for PC. Step-by-step guide for Windows, Linux & Mac users with optimization tips and troubleshooting." />
        <meta property="og:url" content="https://termuxapps.com/pc" />
        <meta property="og:type" content="article" />
      </Helmet>
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-6xl font-bold text-terminal-light text-center mb-8">
          Termux for PC
          <span className="block text-terminal-green text-2xl md:text-3xl mt-4">
            Complete Installation Guide for Windows, Linux & Mac
          </span>
        </h1>

        <section className="max-w-4xl mx-auto bg-terminal-gray rounded-lg p-8 mb-12">
          <div className="flex items-center gap-4 mb-6">
            <Computer className="w-8 h-8 text-terminal-green" />
            <h2 className="text-2xl font-bold text-terminal-light">System Requirements for Termux PC</h2>
          </div>
          <ul className="space-y-4 text-terminal-light/80">
            <li>• Windows 10/11 (64-bit) or Linux/MacOS</li>
            <li>• Minimum 4GB RAM (8GB recommended)</li>
            <li>• Android emulator (BlueStacks, LDPlayer, or Android Studio)</li>
            <li>• At least 10GB free storage space</li>
          </ul>
        </section>

        <section className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-terminal-gray rounded-lg p-8">
            <div className="flex items-center gap-4 mb-6">
              <Terminal className="w-8 h-8 text-terminal-green" />
              <h2 className="text-2xl font-bold text-terminal-light">How to Install Termux on PC</h2>
            </div>
            <ol className="space-y-4 text-terminal-light/80 list-decimal list-inside">
              <li>Download and install Android emulator</li>
              <li>Download Termux APK from F-Droid</li>
              <li>Install Termux on emulator</li>
              <li>Configure display settings</li>
              <li>Update package repositories</li>
            </ol>
          </div>

          <div className="bg-terminal-gray rounded-lg p-8">
            <div className="flex items-center gap-4 mb-6">
              <Settings className="w-8 h-8 text-terminal-green" />
              <h2 className="text-2xl font-bold text-terminal-light">Optimization Tips for Termux PC</h2>
            </div>
            <ul className="space-y-4 text-terminal-light/80">
              <li>• Allocate sufficient RAM to emulator</li>
              <li>• Enable virtualization in BIOS</li>
              <li>• Use keyboard shortcuts</li>
              <li>• Configure proper resolution</li>
            </ul>
          </div>
        </section>

        <section className="max-w-4xl mx-auto bg-terminal-gray rounded-lg p-8 mb-12">
          <div className="flex items-center gap-4 mb-6">
            <Shield className="w-8 h-8 text-terminal-green" />
            <h2 className="text-2xl font-bold text-terminal-light">Best Practices & Security for Termux PC</h2>
          </div>
          <div className="space-y-4 text-terminal-light/80">
            <p>When running Termux for PC through an emulator, follow these security practices:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Keep both emulator and Termux updated</li>
              <li>Use secure package sources</li>
              <li>Implement proper file permissions</li>
              <li>Be cautious with root access</li>
            </ul>
          </div>
        </section>

        <div className="text-center">
          <Button
            size="lg"
            className="bg-terminal-green hover:bg-terminal-green/90 text-terminal-black font-mono"
            onClick={() => window.open("https://f-droid.org/packages/com.termux/", "_blank")}
          >
            <Download className="mr-2 h-5 w-5" />
            Download Termux for PC
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default TermuxPC;