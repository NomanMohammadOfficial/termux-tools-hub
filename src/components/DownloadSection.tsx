import { Download, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const DownloadSection = () => {
  return (
    <div className="bg-terminal-gray py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-mono font-bold text-terminal-light mb-6">
          Get Started with Termux
        </h2>
        
        <p className="text-lg text-terminal-light/80 max-w-2xl mx-auto mb-8">
          Download the latest version of Termux and start exploring powerful command-line tools on your Android device.
        </p>
        
        <Button
          size="lg"
          className="bg-terminal-green hover:bg-terminal-green/90 text-terminal-black font-mono"
        >
          <Download className="mr-2 h-5 w-5" />
          Download Termux APK
        </Button>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          <div className="p-6 bg-terminal-black rounded-lg">
            <div className="text-terminal-green text-2xl font-bold mb-2">1</div>
            <h3 className="text-terminal-light font-mono font-bold mb-2">Download APK</h3>
            <p className="text-terminal-light/80">
              Get the latest version of Termux from our official source
            </p>
          </div>
          
          <div className="p-6 bg-terminal-black rounded-lg">
            <div className="text-terminal-green text-2xl font-bold mb-2">2</div>
            <h3 className="text-terminal-light font-mono font-bold mb-2">Install App</h3>
            <p className="text-terminal-light/80">
              Enable installation from unknown sources and install the APK
            </p>
          </div>
          
          <div className="p-6 bg-terminal-black rounded-lg">
            <div className="text-terminal-green text-2xl font-bold mb-2">3</div>
            <h3 className="text-terminal-light font-mono font-bold mb-2">Start Using</h3>
            <p className="text-terminal-light/80">
              Open Termux and start exploring the command line
            </p>
          </div>
        </div>
        
        <Button
          variant="link"
          className="mt-8 text-terminal-green hover:text-terminal-green/90"
        >
          View Installation Guide
          <ChevronRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};