import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

export const useGeminiApi = () => {
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

  const generateResponse = async (prompt: string) => {
    if (!apiKey) {
      throw new Error("Gemini API key is not configured");
    }

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
                text: `You are a Termux command expert. Provide a response in this exact format:

Step 1: [Brief description]
\`\`\`
[command]
\`\`\`

Step 2: [Brief description]
\`\`\`
[command]
\`\`\`

Note: [Add any relevant notes or warnings]

For this user request: "${prompt}"

If the request is unclear, respond only with the text: "Please provide a specific command or task you'd like help with in Termux."
Only provide Termux-related commands and information.`
              }]
            }]
          }),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error?.message || `API request failed with status ${response.status}`);
      }

      return response.json();
    } catch (error) {
      console.error('Error in generateResponse:', error);
      throw error;
    }
  };

  return { apiKey, generateResponse };
};