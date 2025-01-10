import { useState, useEffect } from "react";
import { Bot } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { PromptForm } from "./command-assistant/PromptForm";
import { FormattedResponse } from "./command-assistant/FormattedResponse";
import { formatResponse } from "./command-assistant/utils";

export const CommandAssistant = () => {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [apiKey, setApiKey] = useState<string | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    const fetchApiKey = async () => {
      try {
        const { data, error } = await supabase.functions.invoke('getGeminiKey');
        
        if (error) {
          console.error('Error fetching API key:', error);
          toast({
            title: "Configuration Error",
            description: "Failed to fetch API key. Please check your configuration.",
            variant: "destructive",
          });
          return;
        }

        if (data?.key) {
          setApiKey(data.key);
        } else {
          toast({
            title: "Configuration Error",
            description: "API key not found in configuration.",
            variant: "destructive",
          });
        }
      } catch (error) {
        console.error('Error:', error);
        toast({
          title: "Error",
          description: "Failed to fetch API key. Please try again.",
          variant: "destructive",
        });
      }
    };

    fetchApiKey();
  }, [toast]);

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

    if (!apiKey) {
      toast({
        title: "Configuration Error",
        description: "Gemini API key is not configured. Please check your configuration.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    try {
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
                text: `You are a Termux command expert. The user has requested: "${trimmedPrompt}". 
                Format your response with clear numbered steps and code blocks.
                Each step should start with "Step X:" followed by a brief description.
                Put commands in code blocks using triple backticks.
                Add relevant notes at the end if needed.
                Only provide Termux-related commands and information.
                If the request is unclear or just a greeting, respond with "Please provide a specific command or task you'd like help with in Termux."`
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
        const formattedResponse = formatResponse(data.candidates[0].content.parts[0].text);
        setResponse(formattedResponse);
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

      <PromptForm
        prompt={prompt}
        setPrompt={setPrompt}
        onSubmit={handleSubmit}
        isLoading={isLoading}
      />

      {response && <FormattedResponse text={response} />}
    </div>
  );
};