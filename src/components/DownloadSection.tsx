import { Copy, CheckCircle, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

const INSTALLATION_COMMANDS = {
  basic: "pkg update && pkg upgrade && pkg install wget",
  python: "pkg install python",
  git: "pkg install git",
};

export const DownloadSection = () => {
  const [copiedCommand, setCopiedCommand] = useState<string | null>(null);
  const { toast } = useToast();

  const handleCopyCommand = async (command: string) => {
    try {
      await navigator.clipboard.writeText(command);
      setCopiedCommand(command);
      toast({
        title: "Command copied!",
        description: "The command has been copied to your clipboard.",
      });
      setTimeout(() => setCopiedCommand(null), 2000);
    } catch (err) {
      toast({
        title: "Failed to copy",
        description: "Please try copying manually.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="bg-terminal-gray py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-mono font-bold text-terminal-light mb-6">
          Essential Termux Commands
        </h2>
        
        <p className="text-lg text-terminal-light/80 max-w-2xl mx-auto mb-8">
          Copy these essential commands to get started with Termux on your Android device.
        </p>
        
        <div className="max-w-2xl mx-auto mb-8">
          {Object.entries(INSTALLATION_COMMANDS).map(([key, command]) => (
            <div key={key} className="mb-4 bg-terminal-black p-4 rounded-lg">
              <pre className="text-left mb-2 font-mono text-sm text-terminal-green overflow-x-auto">
                <code>{command}</code>
              </pre>
              <Button
                variant="outline"
                className="bg-terminal-gray border-terminal-green text-terminal-light hover:bg-terminal-green hover:text-terminal-black"
                onClick={() => handleCopyCommand(command)}
              >
                {copiedCommand === command ? (
                  <>
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 mr-2" />
                    Copy Command
                  </>
                )}
              </Button>
            </div>
          ))}
        </div>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          <div className="p-6 bg-terminal-black rounded-lg">
            <div className="text-terminal-green text-2xl font-bold mb-2">1</div>
            <h3 className="text-terminal-light font-mono font-bold mb-2">Update Packages</h3>
            <p className="text-terminal-light/80">
              Start by updating your package lists and upgrading existing packages
            </p>
          </div>
          
          <div className="p-6 bg-terminal-black rounded-lg">
            <div className="text-terminal-green text-2xl font-bold mb-2">2</div>
            <h3 className="text-terminal-light font-mono font-bold mb-2">Install Python</h3>
            <p className="text-terminal-light/80">
              Get Python installed to run scripts and develop applications
            </p>
          </div>
          
          <div className="p-6 bg-terminal-black rounded-lg">
            <div className="text-terminal-green text-2xl font-bold mb-2">3</div>
            <h3 className="text-terminal-light font-mono font-bold mb-2">Setup Git</h3>
            <p className="text-terminal-light/80">
              Install Git to manage your code and collaborate with others
            </p>
          </div>
        </div>
        
        <Button
          variant="link"
          className="mt-8 text-terminal-green hover:text-terminal-green/90"
        >
          View Full Installation Guide
          <ChevronRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};