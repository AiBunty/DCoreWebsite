import { Link } from "react-router-dom";
import { ArrowRight, LucideIcon } from "lucide-react";
import { TiltWrapper } from "../ui/TiltWrapper";

interface IndustryTileProps {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
}

export function IndustryTile({ title, description, icon: Icon, href }: IndustryTileProps) {
  return (
    <TiltWrapper>
      <Link
        to={href}
        className="industry-tile group block rounded-[24px] border border-zinc-800 bg-zinc-950 p-5 md:p-6 transition-all duration-500 hover:-translate-y-1 hover:bg-black hover:border-zinc-700 hover:shadow-[0_20px_55px_-18px_rgba(0,0,0,0.8)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400/40 relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.14),transparent_52%)] pointer-events-none" />

        <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/5 blur-[50px] group-hover:bg-white/10 transition-colors duration-500 pointer-events-none" />

        <div className="flex items-start gap-4 relative z-10">
          <div className="h-12 w-12 rounded-2xl bg-white/10 text-white flex items-center justify-center flex-shrink-0 ring-1 ring-white/15 transition-all duration-500 group-hover:bg-white/15 group-hover:ring-white/25">
            <Icon className="h-5 w-5" aria-hidden="true" />
          </div>
          <div className="flex-1 min-w-0 pt-0.5">
            <h3 className="text-[17px] font-semibold tracking-tight text-white">{title}</h3>
            <p className="mt-1.5 text-[15px] text-white/75 leading-relaxed line-clamp-2">{description}</p>
            <div className="mt-4 flex items-center gap-2 text-sm font-medium text-white/85 transition-colors duration-500 group-hover:text-white">
              <span>Explore solution</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </div>
          </div>
        </div>
      </Link>
    </TiltWrapper>
  );
}
