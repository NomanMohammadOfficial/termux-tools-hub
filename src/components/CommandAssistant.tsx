import { useState } from "react";
import { Bot } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { PromptForm } from "./command-assistant/PromptForm";
import { FormattedResponse } from "./command-assistant/FormattedResponse";
import { LoadingState } from "./command-assistant/LoadingState";
import { formatResponse } from "./command-assistant/utils";
import { useGeminiApi } from "@/hooks/useGeminiApi";

export const CommandAssistant = () => {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { generateResponse } = useGeminiApi();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedPrompt = prompt.trim();
    
    if (!trimmedPrompt) {
      toast({
        title: "Invalid Input",
        description: "Please enter a specific command or task you'd like help with.",
        variant: "destructive",
      });
      return;
    }

    if (trimmedPrompt.length < 5) {
      toast({
        title: "Input Too Short",
        description: "Please provide more details about what you'd like to do in Termux.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    try {
      const data = await generateResponse(trimmedPrompt);
      
      if (!data.candidates?.[0]?.content?.parts?.[0]?.text) {
        throw new Error("Invalid API response structure");
      }

      const responseText = data.candidates[0].content.parts[0].text;
      
      if (responseText.length < 10 || !responseText.includes('Step')) {
        setResponse(`<note>Please provide a specific command or task you'd like help with in Termux.</note>`);
      } else {
        const formattedResponse = formatResponse(responseText);
        setResponse(formattedResponse);
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
        <h2 className="text-2xl font-mono font-bold text-terminal-light">Termux AI Command Assistant</h2>
      </div>

      <PromptForm
        prompt={prompt}
        setPrompt={setPrompt}
        onSubmit={handleSubmit}
        isLoading={isLoading}
        placeholder="What would you like to do in Termux? (e.g., 'How to set up Python development environment')"
      />

      {isLoading ? (
        <LoadingState />
      ) : (
        response && <FormattedResponse text={response} />
      )}
    </div>
  );
};