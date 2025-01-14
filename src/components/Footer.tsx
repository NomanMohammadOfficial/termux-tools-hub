import { Facebook, Twitter, Instagram, Linkedin, Mail } from "lucide-react";
import { Button } from "./ui/button";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-terminal-black/80 backdrop-blur-md border-t border-terminal-gray mt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
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
                <a href="/blog" className="text-terminal-light/80 hover:text-terminal-green transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="/commands" className="text-terminal-light/80 hover:text-terminal-green transition-colors">
                  Commands
                </a>
              </li>
              <li>
                <a href="/about" className="text-terminal-light/80 hover:text-terminal-green transition-colors">
                  About
                </a>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-mono font-bold text-terminal-light">Legal</h4>
            <ul className="space-y-2">
              <li>
                <a href="/privacy-policy" className="text-terminal-light/80 hover:text-terminal-green transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms" className="text-terminal-light/80 hover:text-terminal-green transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="/disclaimer" className="text-terminal-light/80 hover:text-terminal-green transition-colors">
                  Disclaimer
                </a>
              </li>
              <li>
                <a href="/dmca" className="text-terminal-light/80 hover:text-terminal-green transition-colors">
                  DMCA
                </a>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-mono font-bold text-terminal-light">Connect</h4>
            <div className="flex flex-wrap gap-4">
              <a 
                href="https://www.facebook.com/profile.php?id=61561692724965"
                target="_blank"
                rel="noopener noreferrer"
                className="text-terminal-light hover:text-terminal-green transition-colors"
              >
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="text-terminal-light hover:text-terminal-green hover:bg-terminal-black/40"
                >
                  <Facebook className="h-5 w-5" />
                </Button>
              </a>
              <a 
                href="https://x.com/noman_webb"
                target="_blank"
                rel="noopener noreferrer"
                className="text-terminal-light hover:text-terminal-green transition-colors"
              >
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="text-terminal-light hover:text-terminal-green hover:bg-terminal-black/40"
                >
                  <Twitter className="h-5 w-5" />
                </Button>
              </a>
              <a 
                href="https://www.instagram.com/noman_mohammad_official/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-terminal-light hover:text-terminal-green transition-colors"
              >
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="text-terminal-light hover:text-terminal-green hover:bg-terminal-black/40"
                >
                  <Instagram className="h-5 w-5" />
                </Button>
              </a>
              <a 
                href="https://www.linkedin.com/in/nomanmohammadofficial/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-terminal-light hover:text-terminal-green transition-colors"
              >
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="text-terminal-light hover:text-terminal-green hover:bg-terminal-black/40"
                >
                  <Linkedin className="h-5 w-5" />
                </Button>
              </a>
              <a 
                href="mailto:hello@termuxapps.com"
                className="text-terminal-light hover:text-terminal-green transition-colors"
              >
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="text-terminal-light hover:text-terminal-green hover:bg-terminal-black/40"
                >
                  <Mail className="h-5 w-5" />
                </Button>
              </a>
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
