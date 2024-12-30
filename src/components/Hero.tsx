import { Button } from "@/components/ui/button";
import { ChevronRight, Terminal, Copy, Check } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

export const Hero = () => {
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();
  
  const handleCopy = () => {
    navigator.clipboard.writeText("pkg install termux-api");
    setCopied(true);
    toast({
      title: "Command copied!",
      description: "The installation command has been copied to your clipboard.",
    });
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-terminal-black pt-16">
      <div className="container mx-auto px-4 text-center">
        <div className="inline-flex items-center justify-center space-x-2 mb-8">
          <Terminal className="w-12 h-12 text-terminal-green" />
          <span className="text-4xl font-mono font-bold text-terminal-light">TermuxApps</span>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold text-terminal-light mb-6">
          Empower Your Termux Journey with
          <span className="text-terminal-green block mt-2">Powerful Tools and Apps</span>
        </h1>
        
        <p className="text-lg md:text-xl text-terminal-light/80 max-w-2xl mx-auto mb-12">
          Explore the best tools, guides, and commands to unlock the full potential of Termux on your device.
        </p>
        
        <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
          <Button
            size="lg"
            className="bg-terminal-green hover:bg-terminal-green/90 text-terminal-black font-mono w-full md:w-auto"
            onClick={() => window.location.href = '/commands'}
          >
            Explore Tools
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
          
          <Button
            variant="outline"
            size="lg"
            className="border-terminal-green hover:bg-terminal-green hover:text-terminal-black text-terminal-light font-mono w-full md:w-auto flex items-center gap-2"
            onClick={handleCopy}
          >
            {copied ? (
              <>
                <Check className="h-4 w-4" />
                Copied!
              </>
            ) : (
              <>
                <Copy className="h-4 w-4" />
                Copy Install Command
              </>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
};