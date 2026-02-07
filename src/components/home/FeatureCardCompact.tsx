import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface FeatureCardCompactProps {
  icon: ReactNode;
  title: string;
  description: string;
  category: string;
  className?: string;
}

export function FeatureCardCompact({
  icon,
  title,
  description,
  category,
  className,
}: FeatureCardCompactProps) {
  return (
    <div
      className={cn(
        "rounded-lg border border-muted/40 bg-card p-4 md:p-5 shadow-sm",
        className,
      )}
    >
      <div className="flex items-start gap-3">
        <div className="h-8 w-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
          {icon}
        </div>
        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="text-sm font-medium text-foreground">{title}</h3>
            <span className="text-[10px] uppercase tracking-wide bg-muted text-muted-foreground rounded-full px-2 py-0.5">
              {category}
            </span>
          </div>
          <p className="text-xs text-muted-foreground leading-snug mt-1">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
