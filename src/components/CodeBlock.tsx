import React, { useState } from 'react';
import { Check, Copy } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CodeBlockProps {
  code: string;
  language?: string;
}

export const CodeBlock = ({ code, language = 'bash' }: CodeBlockProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative my-4 rounded-lg bg-terminal-black">
      <div className="flex items-center justify-between px-4 py-2 bg-terminal-gray/50 rounded-t-lg">
        <span className="text-sm text-terminal-light/70">{language}</span>
        <button
          onClick={handleCopy}
          className={cn(
            "p-2 rounded-md transition-colors",
            copied ? "text-terminal-green" : "text-terminal-light/70 hover:text-terminal-light"
          )}
        >
          {copied ? <Check size={16} /> : <Copy size={16} />}
        </button>
      </div>
      <pre className="p-4 overflow-x-auto">
        <code className="text-terminal-green">{code}</code>
      </pre>
    </div>
  );
};