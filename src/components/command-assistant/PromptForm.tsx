import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";

interface PromptFormProps {
  prompt: string;
  setPrompt: (prompt: string) => void;
  onSubmit: (e: React.FormEvent) => void;
  isLoading: boolean;
  placeholder?: string;
}

export const PromptForm = ({ prompt, setPrompt, onSubmit, isLoading, placeholder }: PromptFormProps) => {
  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <Textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder={placeholder || "What would you like to do in Termux? (e.g., 'How to set up Python development environment')"}
        className="bg-terminal-black border-terminal-green/20 text-terminal-light placeholder:text-terminal-light/70"
      />
      <Button 
        type="submit" 
        disabled={isLoading}
        className="bg-terminal-green hover:bg-terminal-green/90 text-terminal-black font-mono"
      >
        {isLoading ? (
          "Processing..."
        ) : (
          <>
            <Send className="w-4 h-4 mr-2" />
            {prompt ? "Generate" : "Get Commands"}
          </>
        )}
      </Button>
    </form>
  );
};