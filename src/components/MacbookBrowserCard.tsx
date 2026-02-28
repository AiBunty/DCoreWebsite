import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface MacbookBrowserCardProps {
  title: string;
  icon: LucideIcon;
  children: React.ReactNode;
  className?: string;
  bodyClassName?: string;
  contentClassName?: string;
  iconClassName?: string;
}

export function MacbookBrowserCard({
  title,
  icon: Icon,
  children,
  className,
  bodyClassName,
  contentClassName,
  iconClassName,
}: MacbookBrowserCardProps) {
  return (
    <div
      className={cn(
        "rounded-[28px] border border-border/70 bg-card/90 shadow-soft overflow-hidden",
        className
      )}
    >
      <div className="h-12 bg-background/70 border-b border-border/60 flex items-center px-4 gap-3">
        <div className="flex gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
          <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
          <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
        </div>
        <span className="text-xs md:text-sm font-medium text-muted-foreground">
          dcore-solution.card
        </span>
      </div>

      <div className={cn("p-6 md:p-8 h-[380px] md:h-[430px] flex flex-col", bodyClassName)}>
        <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
          <Icon className={cn("w-7 h-7", iconClassName)} />
          {title}
        </h2>
        <div className={cn("flex-1 overflow-y-auto pr-1", contentClassName)}>
          {children}
        </div>
      </div>
    </div>
  );
}
