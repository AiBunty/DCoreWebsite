import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface FeatureCardCompactProps {
  icon: ReactNode;
  title: string;
  description: string;
  className?: string;
}

export function FeatureCardCompact({ icon, title, description, className }: FeatureCardCompactProps) {
  return (
    <div
      className={cn(
        "rounded-xl border border-muted/40 bg-card p-4 md:p-5 shadow-sm hover:shadow-md transition-shadow",
        className,
      )}
    >
      <div className="flex items-start gap-3">
        <div className="h-8 w-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
          {icon}
        </div>
        <div>
          <h3 className="text-base font-medium text-foreground">{title}</h3>
          <p className="text-sm text-muted-foreground leading-snug mt-1">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
