import { Button } from "@/components/ui/button";
import { ChevronRight, Terminal, Download } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const Hero = () => {
  const navigate = useNavigate();

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
            onClick={() => navigate('/commands')}
          >
            Explore Tools
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
          
          <Button
            variant="outline"
            size="lg"
            className="border-terminal-green hover:bg-terminal-green hover:text-terminal-black text-terminal-light font-mono w-full md:w-auto flex items-center gap-2"
            onClick={() => navigate('/download')}
          >
            <Download className="h-4 w-4" />
            Download Termux
          </Button>
        </div>
      </div>
    </div>
  );
};