import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Bot, Send, Copy, CheckCircle2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { cn } from "@/lib/utils";

export const CommandAssistant = () => {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [apiKey, setApiKey] = useState<string | null>(null);
  const [copiedSteps, setCopiedSteps] = useState<number[]>([]);
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

  const formatResponse = (text: string) => {
    const lines = text.split('\n');
    let formattedText = '';
    let inCodeBlock = false;
    let currentStep = 0;

    lines.forEach((line) => {
      // Handle step headers
      if (line.match(/^Step \d+:/i)) {
        currentStep++;
        formattedText += `<step-${currentStep}>${line.trim()}</step-${currentStep}>\n`;
      }
      // Handle code blocks
      else if (line.trim().startsWith('```')) {
        if (!inCodeBlock) {
          formattedText += `<code-block-${currentStep}>\n`;
          inCodeBlock = true;
        } else {
          formattedText += `</code-block-${currentStep}>\n`;
          inCodeBlock = false;
        }
      }
      // Handle notes
      else if (line.trim().startsWith('Note:') || line.trim().startsWith('Additional Notes:')) {
        formattedText += `<note>${line.trim()}</note>\n`;
      }
      // Handle regular text and code content
      else {
        if (inCodeBlock) {
          formattedText += `${line}\n`;
        } else {
          formattedText += `${line.trim()}\n`;
        }
      }
    });

    return formattedText.trim();
  };

  const handleCopyCode = (stepNumber: number, code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedSteps([...copiedSteps, stepNumber]);
    toast({
      title: "Copied!",
      description: "Command copied to clipboard",
    });
    setTimeout(() => {
      setCopiedSteps(copiedSteps.filter(step => step !== stepNumber));
    }, 2000);
  };

  const renderFormattedResponse = (text: string) => {
    const steps = text.split(/(?=<step-\d+>)/).filter(Boolean);
    
    return steps.map((step, index) => {
      const stepNumber = index + 1;
      const stepTitle = step.match(/<step-\d+>(.*?)<\/step-\d+>/)?.[1] || '';
      const codeBlock = step.match(new RegExp(`<code-block-${stepNumber}>(.*?)</code-block-${stepNumber}>`, 's'))?.[1]?.trim() || '';
      const notes = step.match(/<note>(.*?)<\/note>/)?.[1] || '';

      return (
        <div key={stepNumber} className="mb-8 last:mb-0">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-terminal-green/20 text-terminal-green font-mono">
              {stepNumber}
            </div>
            <h3 className="text-xl font-mono font-bold text-terminal-light">{stepTitle}</h3>
          </div>
          
          {codeBlock && (
            <div className="relative mt-2 mb-4">
              <pre className="bg-terminal-black/50 p-4 rounded-lg font-mono text-terminal-green overflow-x-auto">
                {codeBlock}
              </pre>
              <Button
                variant="ghost"
                size="sm"
                className={cn(
                  "absolute top-2 right-2 hover:bg-terminal-green/20",
                  copiedSteps.includes(stepNumber) && "text-terminal-green"
                )}
                onClick={() => handleCopyCode(stepNumber, codeBlock)}
              >
                {copiedSteps.includes(stepNumber) ? (
                  <CheckCircle2 className="w-4 h-4" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </Button>
            </div>
          )}
          
          {notes && (
            <div className="mt-4 p-4 bg-terminal-green/10 rounded-lg border border-terminal-green/20">
              <p className="text-terminal-light/80 font-mono text-sm">{notes}</p>
            </div>
          )}
        </div>
      );
    });
  };

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
                If this is a greeting or unclear request, respond with "Please provide a specific command or task you'd like help with in Termux."
                Otherwise, provide detailed steps and commands for completing this task.
                Format your response with numbered steps, code blocks using markdown triple backticks, and additional notes at the end. 
                Each step should be clearly labeled as "Step X:" and include a brief description followed by the relevant commands in a code block.
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
          <div className="space-y-6">
            {renderFormattedResponse(response)}
          </div>
        </div>
      )}
    </div>
  );
};
