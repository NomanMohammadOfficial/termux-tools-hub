import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Copy, Terminal, File, Network, Package, Code, Settings } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const CATEGORIES = {
  basics: {
    icon: Terminal,
    title: "Basic Commands",
    commands: [
      { name: "pwd", description: "Print working directory", command: "pwd" },
      { name: "ls", description: "List directory contents", command: "ls" },
      { name: "cd", description: "Change directory", command: "cd [directory]" },
    ],
  },
  files: {
    icon: File,
    title: "File Management",
    commands: [
      { name: "cp", description: "Copy files/directories", command: "cp [source] [destination]" },
      { name: "mv", description: "Move/rename files", command: "mv [source] [destination]" },
      { name: "rm", description: "Remove files", command: "rm [file]" },
    ],
  },
  network: {
    icon: Network,
    title: "Networking Commands",
    commands: [
      { name: "ping", description: "Test connectivity", command: "ping [host]" },
      { name: "curl", description: "Transfer data", command: "curl [URL]" },
      { name: "wget", description: "Download files", command: "wget [URL]" },
    ],
  },
  packages: {
    icon: Package,
    title: "Package Management",
    commands: [
      { name: "Search", description: "Search for packages", command: "pkg search [name]" },
      { name: "Install", description: "Install a package", command: "pkg install [package]" },
      { name: "Update", description: "Update packages", command: "pkg update" },
    ],
  },
  dev: {
    icon: Code,
    title: "Development Tools",
    commands: [
      { name: "Git Clone", description: "Clone repository", command: "git clone [repository]" },
      { name: "Python", description: "Run Python script", command: "python script.py" },
      { name: "Node", description: "Run Node.js", command: "node script.js" },
    ],
  },
  system: {
    icon: Settings,
    title: "System Commands",
    commands: [
      { name: "System Info", description: "Show system information", command: "uname -a" },
      { name: "Processes", description: "Show running processes", command: "ps aux" },
      { name: "Memory", description: "Show memory usage", command: "free -h" },
    ],
  },
};

export const CommandCategories = () => {
  const [activeCategory, setActiveCategory] = useState("basics");
  const { toast } = useToast();

  const copyCommand = async (command: string) => {
    try {
      await navigator.clipboard.writeText(command);
      toast({
        title: "Command copied!",
        description: "The command has been copied to your clipboard.",
      });
    } catch (err) {
      toast({
        title: "Failed to copy",
        description: "Please try copying manually.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-2">
        {Object.entries(CATEGORIES).map(([key, { icon: Icon, title }]) => (
          <Button
            key={key}
            variant={activeCategory === key ? "default" : "outline"}
            className={`gap-2 ${
              activeCategory === key
                ? "bg-terminal-green text-terminal-black hover:bg-terminal-green/90"
                : "border-terminal-green/20 text-terminal-light hover:text-terminal-green"
            }`}
            onClick={() => setActiveCategory(key)}
          >
            <Icon className="h-4 w-4" />
            {title}
          </Button>
        ))}
      </div>

      <Card className="bg-terminal-gray border-terminal-green/20">
        <CardHeader>
          <CardTitle className="text-xl font-mono text-terminal-light flex items-center gap-2">
            {CATEGORIES[activeCategory as keyof typeof CATEGORIES].icon({
              className: "h-5 w-5",
            })}
            {CATEGORIES[activeCategory as keyof typeof CATEGORIES].title}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {CATEGORIES[activeCategory as keyof typeof CATEGORIES].commands.map((cmd, index) => (
            <div key={index} className="space-y-2">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-mono font-medium text-terminal-light">{cmd.name}</h3>
                  <p className="text-sm text-terminal-light/70">{cmd.description}</p>
                </div>
                <Button
                  size="sm"
                  variant="ghost"
                  className="text-terminal-light hover:text-terminal-green shrink-0"
                  onClick={() => copyCommand(cmd.command)}
                >
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
              <pre className="bg-terminal-black p-3 rounded font-mono text-terminal-green overflow-x-auto">
                <code>{cmd.command}</code>
              </pre>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};