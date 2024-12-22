import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const TOC_ITEMS = [
  { id: "basics", label: "Basic Commands" },
  { id: "files", label: "File Management" },
  { id: "network", label: "Networking Commands" },
  { id: "packages", label: "Package Management" },
  { id: "dev", label: "Development Tools" },
  { id: "system", label: "System Commands" },
];

export const TableOfContents = () => {
  return (
    <Collapsible>
      <CollapsibleTrigger asChild>
        <Button
          variant="ghost"
          className="flex items-center justify-between w-full bg-terminal-gray hover:bg-terminal-gray/80 border border-terminal-green/20"
        >
          <span>Table of Contents</span>
          <ChevronDown className="h-4 w-4" />
        </Button>
      </CollapsibleTrigger>
      <CollapsibleContent className="mt-2 space-y-1">
        {TOC_ITEMS.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className="block px-4 py-2 text-terminal-light hover:text-terminal-green hover:bg-terminal-gray rounded transition-colors"
          >
            {item.label}
          </a>
        ))}
      </CollapsibleContent>
    </Collapsible>
  );
};