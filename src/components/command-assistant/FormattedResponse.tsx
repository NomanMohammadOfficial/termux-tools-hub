import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Copy, CheckCircle2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

interface FormattedResponseProps {
  text: string;
}

export const FormattedResponse = ({ text }: FormattedResponseProps) => {
  const [copiedSteps, setCopiedSteps] = useState<number[]>([]);
  const { toast } = useToast();

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

  return (
    <div className="mt-6">
      <div className="space-y-6">
        {renderFormattedResponse(text)}
      </div>
    </div>
  );
};