import { Loader2 } from "lucide-react";

export const LoadingState = () => {
  return (
    <div className="flex items-center justify-center p-8">
      <Loader2 className="w-6 h-6 text-terminal-green animate-spin" />
      <span className="ml-2 text-terminal-light">Processing your request...</span>
    </div>
  );
};