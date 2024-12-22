import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const COMMANDS = [
  {
    command: "pkg upgrade && pkg update",
    description: "Update all packages to their latest versions",
    example: "Run this command regularly to keep your Termux installation up to date",
  },
  {
    command: "termux-setup-storage",
    description: "Set up storage access for Termux",
    example: "Grants Termux access to your device's storage",
  },
  {
    command: "pkg install git",
    description: "Install Git version control",
    example: "Essential for developers and project management",
  },
];

export const CommandOfTheDay = () => {
  const [command, setCommand] = useState(COMMANDS[0]);
  const { toast } = useToast();

  useEffect(() => {
    const dayOfYear = Math.floor((Date.now() - Date.UTC(new Date().getUTCFullYear(), 0, 0)) / 86400000);
    setCommand(COMMANDS[dayOfYear % COMMANDS.length]);
  }, []);

  const copyCommand = async () => {
    try {
      await navigator.clipboard.writeText(command.command);
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
    <Card className="bg-terminal-gray border-terminal-green/20">
      <CardHeader>
        <CardTitle className="text-xl font-mono text-terminal-light">Command of the Day</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="relative">
          <pre className="bg-terminal-black p-4 rounded font-mono text-terminal-green overflow-x-auto">
            <code>{command.command}</code>
          </pre>
          <Button
            size="sm"
            variant="ghost"
            className="absolute top-2 right-2 text-terminal-light hover:text-terminal-green"
            onClick={copyCommand}
          >
            <Copy className="h-4 w-4" />
          </Button>
        </div>
        <div className="space-y-2">
          <p className="font-medium text-terminal-light">{command.description}</p>
          <p className="text-sm text-terminal-light/70">{command.example}</p>
        </div>
      </CardContent>
    </Card>
  );
};