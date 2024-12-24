import { Github, Twitter } from "lucide-react";
import { Button } from "./ui/button";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-terminal-black/80 backdrop-blur-md border-t border-terminal-gray mt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-mono font-bold text-terminal-light">TermuxApps</h3>
            <p className="text-terminal-light/80">
              Your ultimate resource for Termux tools, commands, and tutorials.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-mono font-bold text-terminal-light">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="/commands" className="text-terminal-light/80 hover:text-terminal-green transition-colors">
                  Commands
                </a>
              </li>
              <li>
                <a href="#guides" className="text-terminal-light/80 hover:text-terminal-green transition-colors">
                  Guides
                </a>
              </li>
              <li>
                <a href="#about" className="text-terminal-light/80 hover:text-terminal-green transition-colors">
                  About
                </a>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-mono font-bold text-terminal-light">Connect</h4>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="hover:text-terminal-green">
                <Github className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-terminal-green">
                <Twitter className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-terminal-gray/20">
          <p className="text-center text-terminal-light/60 text-sm">
            © {currentYear} TermuxApps. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};