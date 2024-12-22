import { Terminal, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-terminal-black/80 backdrop-blur-md border-b border-terminal-gray">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Terminal className="w-6 h-6 text-terminal-green" />
          <span className="text-xl font-mono font-bold text-terminal-light">TermuxApps</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-terminal-light hover:text-terminal-green transition-colors">Home</a>
          <a href="#tools" className="text-terminal-light hover:text-terminal-green transition-colors">Tools</a>
          <a href="#guides" className="text-terminal-light hover:text-terminal-green transition-colors">Guides</a>
          <a href="#about" className="text-terminal-light hover:text-terminal-green transition-colors">About</a>
          <a href="#contact" className="text-terminal-light hover:text-terminal-green transition-colors">Contact</a>
        </nav>

        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="w-6 h-6 text-terminal-light" />
        </Button>
      </div>
    </header>
  );
};