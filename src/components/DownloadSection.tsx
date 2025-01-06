import { Copy, CheckCircle, ChevronRight, Terminal, Package, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

const INSTALLATION_COMMANDS = [
  {
    category: "System Setup",
    icon: Terminal,
    description: "Update package lists and install essential tools",
    command: "pkg update && pkg upgrade && pkg install wget",
  },
  {
    category: "Development",
    icon: Package,
    description: "Install Python for development and scripting",
    command: "pkg install python",
  },
  {
    category: "Version Control",
    icon: Shield,
    description: "Install Git for code version control",
    command: "pkg install git",
  },
];

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
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-mono font-bold text-terminal-light mb-4">
            Essential Termux Commands
          </h2>
          <p className="text-lg text-terminal-light/80 max-w-2xl mx-auto">
            Get started with these fundamental commands to set up your Termux environment
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
          {INSTALLATION_COMMANDS.map((item, index) => (
            <Card key={index} className="bg-terminal-black border-terminal-green/20 hover:border-terminal-green/40 transition-colors">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-terminal-gray rounded-lg">
                    <item.icon className="w-6 h-6 text-terminal-green" />
                  </div>
                  <CardTitle className="text-xl font-mono text-terminal-light">
                    {item.category}
                  </CardTitle>
                </div>
                <p className="text-terminal-light/80 text-sm">
                  {item.description}
                </p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <pre className="bg-terminal-gray p-3 rounded font-mono text-sm text-terminal-green overflow-x-auto">
                    <code>{item.command}</code>
                  </pre>
                  <Button
                    variant="outline"
                    className="w-full bg-terminal-black border-terminal-green text-terminal-light hover:bg-terminal-green hover:text-terminal-black transition-colors"
                    onClick={() => handleCopyCommand(item.command)}
                  >
                    {copiedCommand === item.command ? (
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
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button
            variant="link"
            className="text-terminal-green hover:text-terminal-green/90 font-mono"
          >
            View Complete Command Guide
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};