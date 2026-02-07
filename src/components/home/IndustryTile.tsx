import { Link } from "react-router-dom";
import { ArrowRight, LucideIcon } from "lucide-react";

interface IndustryTileProps {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
}

export function IndustryTile({ title, description, icon: Icon, href }: IndustryTileProps) {
  return (
    <Link
      to={href}
      className="group block rounded-lg border border-muted/40 bg-background p-4 md:p-5 transition hover:border-muted/70 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
    >
      <div className="flex items-start gap-3">
        <div className="h-9 w-9 rounded-lg bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
          <Icon className="h-4 w-4" aria-hidden="true" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-sm font-semibold text-foreground">{title}</h3>
          <p className="mt-1 text-xs text-muted-foreground leading-snug line-clamp-1">
            {description}
          </p>
          <div className="mt-3 flex items-center gap-2 text-xs text-muted-foreground transition-colors group-hover:text-foreground">
            <span>Explore solution</span>
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </div>
        </div>
      </div>
    </Link>
  );
}
