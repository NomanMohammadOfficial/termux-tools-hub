import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Bot, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const CommandAssistant = () => {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim()) return;

    setIsLoading(true);
    try {
      const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
      
      if (!apiKey) {
        throw new Error("Gemini API key is not configured");
      }

      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${apiKey}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            contents: [{
              parts: [{
                text: `You are a Termux command expert. Please provide detailed steps and commands for the following request: ${prompt}. Format your response clearly with step-by-step instructions and necessary commands.`
              }]
            }]
          }),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error?.message || `API request failed with status ${response.status}`);
      }

      const data = await response.json();
      if (data.candidates && data.candidates[0]?.content?.parts?.[0]?.text) {
        setResponse(data.candidates[0].content.parts[0].text);
      } else {
        throw new Error("Invalid response format");
      }
    } catch (error) {
      console.error('Error:', error);
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to get response. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto p-6 bg-terminal-gray rounded-lg border border-terminal-green/20">
      <div className="flex items-center gap-2 mb-6">
        <Bot className="w-6 h-6 text-terminal-green" />
        <h2 className="text-2xl font-mono font-bold text-terminal-light">Command Assistant</h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <Textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="What would you like to do in Termux? (e.g., 'How to set up Python development environment')"
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
              Get Commands
            </>
          )}
        </Button>
      </form>

      {response && (
        <div className="mt-6">
          <div className="bg-terminal-black p-4 rounded-lg">
            <pre className="whitespace-pre-wrap font-mono text-terminal-light">
              {response}
            </pre>
          </div>
        </div>
      )}
    </div>
  );
};