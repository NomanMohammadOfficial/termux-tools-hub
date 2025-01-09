import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

interface CommandSearchBarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export const CommandSearchBar = ({ searchQuery, setSearchQuery }: CommandSearchBarProps) => {
  return (
    <div className="relative mb-6">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-terminal-light opacity-70" />
      <Input
        type="search"
        placeholder="Search commands..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full pl-10 bg-terminal-gray border-terminal-green/20 text-terminal-light placeholder:text-terminal-light/70"
      />
    </div>
  );
};