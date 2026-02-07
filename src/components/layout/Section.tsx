import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  children: ReactNode;
  className?: string;
  muted?: boolean;
  hero?: boolean;
}

export function Section({ children, className, muted = false, hero = false }: SectionProps) {
  return (
    <section
      className={cn(
        hero ? "py-16 md:py-24" : "py-12 md:py-16",
        muted ? "bg-muted/50" : "bg-transparent",
        className,
      )}
    >
      {children}
    </section>
  );
}
