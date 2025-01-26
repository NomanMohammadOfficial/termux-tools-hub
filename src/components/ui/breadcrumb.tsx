import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface BreadcrumbItem {
  href: string;
  label: string;
  icon?: LucideIcon;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  separator?: React.ReactNode;
  className?: string;
}

export function Breadcrumb({ items, separator = "/", className }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className={cn("flex items-center space-x-2 text-sm", className)}>
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        const Icon = item.icon;

        return (
          <div key={item.href} className="flex items-center">
            <Link
              to={item.href}
              className={cn(
                "flex items-center hover:text-terminal-green transition-colors",
                isLast ? "text-terminal-light/60 pointer-events-none" : "text-terminal-light"
              )}
              aria-current={isLast ? "page" : undefined}
            >
              {Icon && <Icon className="w-4 h-4 mr-1" />}
              {item.label}
            </Link>
            {!isLast && (
              <span className="mx-2 text-terminal-light/40">{separator}</span>
            )}
          </div>
        );
      })}
    </nav>
  );
}