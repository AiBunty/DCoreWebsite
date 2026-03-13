import { CalendarDays, LoaderCircle } from "lucide-react";

interface EmbeddedFormLoaderProps {
  label: string;
  className?: string;
}

export function EmbeddedFormLoader({ label, className = "" }: EmbeddedFormLoaderProps) {
  return (
    <div
      className={`absolute inset-0 z-10 flex items-center justify-center bg-white/92 px-6 backdrop-blur-sm ${className}`}
    >
      <div className="w-full max-w-sm rounded-[28px] border border-gray-200/80 bg-white/95 p-6 shadow-[0_24px_60px_-24px_rgba(15,23,42,0.28)]">
        <div className="flex items-center justify-between">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gray-900 text-white">
            <CalendarDays className="h-5 w-5" />
          </div>
          <LoaderCircle className="h-6 w-6 animate-spin text-gray-500" />
        </div>

        <p className="mt-5 text-base font-semibold tracking-tight text-gray-900">{label}</p>
        <p className="mt-1 text-sm leading-6 text-gray-600">
          Preparing the embedded form and syncing available slots.
        </p>

        <div className="mt-5 space-y-3">
          <div className="h-3 overflow-hidden rounded-full bg-gray-100">
            <div className="h-full w-1/2 animate-pulse rounded-full bg-gray-900" />
          </div>
          <div className="grid grid-cols-3 gap-2">
            <div className="h-10 animate-pulse rounded-xl bg-gray-100" />
            <div className="h-10 animate-pulse rounded-xl bg-gray-100 [animation-delay:120ms]" />
            <div className="h-10 animate-pulse rounded-xl bg-gray-100 [animation-delay:240ms]" />
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className="h-12 animate-pulse rounded-2xl bg-gray-100 [animation-delay:180ms]" />
            <div className="h-12 animate-pulse rounded-2xl bg-gray-100 [animation-delay:300ms]" />
          </div>
        </div>
      </div>
    </div>
  );
}
