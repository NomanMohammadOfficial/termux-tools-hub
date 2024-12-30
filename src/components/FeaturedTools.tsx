import { Terminal, Box, Zap, Copy, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

const FEATURED_TOOLS = [
  {
    title: "Termux:API",
    description: "Access device hardware and Android system functionality",
    icon: Terminal,
    command: "pkg install termux-api",
  },
  {
    title: "Termux:Boot",
    description: "Run scripts automatically when your device starts",
    icon: Zap,
    command: "pkg install termux-boot",
  },
  {
    title: "Termux:Tasker",
    description: "Automate Termux tasks with Tasker integration",
    icon: Box,
    command: "pkg install termux-tasker",
  },
];

export const FeaturedTools = () => {
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
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-mono font-bold text-terminal-light text-center mb-12">
        Featured Tools
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {FEATURED_TOOLS.map((tool) => (
          <div
            key={tool.title}
            className="bg-terminal-gray p-6 rounded-lg border border-terminal-green/20 hover:border-terminal-green/40 transition-colors"
          >
            <tool.icon className="w-12 h-12 text-terminal-green mb-4" />
            <h3 className="text-xl font-mono font-bold text-terminal-light mb-2">
              {tool.title}
            </h3>
            <p className="text-terminal-light/80 mb-4">
              {tool.description}
            </p>
            <pre className="bg-terminal-black p-2 rounded font-mono text-sm text-terminal-green mb-4 overflow-x-auto">
              <code>{tool.command}</code>
            </pre>
            <Button
              variant="outline"
              className="w-full bg-terminal-gray border-terminal-green text-terminal-light hover:bg-terminal-green hover:text-terminal-black"
              onClick={() => handleCopyCommand(tool.command)}
            >
              {copiedCommand === tool.command ? (
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
    </div>
  );
};