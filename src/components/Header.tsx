import { Terminal, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export const Header = () => {
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-terminal-black/80 backdrop-blur-md border-b border-terminal-gray">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <Terminal className="w-6 h-6 text-terminal-green" />
          <span className="text-xl font-mono font-bold text-terminal-light">TermuxApps</span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-8">
          <Link 
            to="/" 
            className={`text-terminal-light hover:text-terminal-green transition-colors ${
              location.pathname === "/" ? "text-terminal-green" : ""
            }`}
          >
            Home
          </Link>
          <Link 
            to="/commands" 
            className={`text-terminal-light hover:text-terminal-green transition-colors ${
              location.pathname === "/commands" ? "text-terminal-green" : ""
            }`}
          >
            Commands
          </Link>
          <Link 
            to="/about" 
            className={`text-terminal-light hover:text-terminal-green transition-colors ${
              location.pathname === "/about" ? "text-terminal-green" : ""
            }`}
          >
            About
          </Link>
          <Link 
            to="/contact" 
            className={`text-terminal-light hover:text-terminal-green transition-colors ${
              location.pathname === "/contact" ? "text-terminal-green" : ""
            }`}
          >
            Contact
          </Link>
        </nav>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="w-6 h-6 text-terminal-light" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-terminal-black/95 border-terminal-gray">
              <nav className="flex flex-col space-y-4 mt-8">
                <Link 
                  to="/" 
                  className={`text-terminal-light hover:text-terminal-green transition-colors ${
                    location.pathname === "/" ? "text-terminal-green" : ""
                  }`}
                >
                  Home
                </Link>
                <Link 
                  to="/commands" 
                  className={`text-terminal-light hover:text-terminal-green transition-colors ${
                    location.pathname === "/commands" ? "text-terminal-green" : ""
                  }`}
                >
                  Commands
                </Link>
                <Link 
                  to="/about" 
                  className={`text-terminal-light hover:text-terminal-green transition-colors ${
                    location.pathname === "/about" ? "text-terminal-green" : ""
                  }`}
                >
                  About
                </Link>
                <Link 
                  to="/contact" 
                  className={`text-terminal-light hover:text-terminal-green transition-colors ${
                    location.pathname === "/contact" ? "text-terminal-green" : ""
                  }`}
                >
                  Contact
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};