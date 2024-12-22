import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Copy } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const COMMAND_CATEGORIES = {
  basic: [
    { name: "Update Packages", command: "pkg update && pkg upgrade" },
    { name: "Install Python", command: "pkg install python" },
    { name: "Install Git", command: "pkg install git" },
  ],
  network: [
    { name: "Install Nmap", command: "pkg install nmap" },
    { name: "Install wget", command: "pkg install wget" },
  ],
  development: [
    { name: "Install Node.js", command: "pkg install nodejs" },
    { name: "Install Vim", command: "pkg install vim" },
  ],
};

export const CommandGenerator = () => {
  const [category, setCategory] = useState("basic");
  const [selectedCommand, setSelectedCommand] = useState(COMMAND_CATEGORIES.basic[0].command);
  const { toast } = useToast();

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(selectedCommand);
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
    <div className="w-full max-w-3xl mx-auto p-6 bg-terminal-gray rounded-lg border border-terminal-green/20">
      <h2 className="text-2xl font-mono font-bold text-terminal-light mb-6">Command Generator</h2>
      
      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Select
            value={category}
            onValueChange={(value) => {
              setCategory(value);
              setSelectedCommand(COMMAND_CATEGORIES[value as keyof typeof COMMAND_CATEGORIES][0].command);
            }}
          >
            <SelectTrigger className="bg-terminal-black border-terminal-green/20">
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="basic">Basic Commands</SelectItem>
              <SelectItem value="network">Networking Tools</SelectItem>
              <SelectItem value="development">Development Tools</SelectItem>
            </SelectContent>
          </Select>

          <Select
            value={selectedCommand}
            onValueChange={setSelectedCommand}
          >
            <SelectTrigger className="bg-terminal-black border-terminal-green/20">
              <SelectValue placeholder="Select command" />
            </SelectTrigger>
            <SelectContent>
              {COMMAND_CATEGORIES[category as keyof typeof COMMAND_CATEGORIES].map((cmd) => (
                <SelectItem key={cmd.name} value={cmd.command}>
                  {cmd.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="relative">
          <pre className="bg-terminal-black p-4 rounded font-mono text-terminal-green overflow-x-auto">
            <code>{selectedCommand}</code>
          </pre>
          <Button
            size="sm"
            variant="ghost"
            className="absolute top-2 right-2 text-terminal-light hover:text-terminal-green"
            onClick={copyToClipboard}
          >
            <Copy className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};