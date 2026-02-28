import { useState } from "react";
const advisorPhoto =
  "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=220&q=80";

interface IPhoneFrameProps {
  youtubeUrl: string;
  customerName?: string;
  businessType?: string;
  className?: string;
}

export function IPhoneFrame({ youtubeUrl, customerName, businessType, className = "" }: IPhoneFrameProps) {
  const [isLoading, setIsLoading] = useState(!!youtubeUrl);

  const getYouTubeEmbedUrl = (url: string) => {
    const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([^&?\s]+)/);
    return match ? `https://www.youtube.com/embed/${match[1]}` : url;
  };

  return (
    <div className={`relative flex flex-col items-center ${className}`}>
      {/* iPhone Frame */}
      <div className="relative">
        {/* Outer Frame - iPhone 17 style with slim bezels */}
        <div className="bg-zinc-900 rounded-[2.5rem] p-2 shadow-2xl">
          {/* Inner bezel with Dynamic Island */}
          <div className="relative bg-zinc-800 rounded-[2rem] overflow-hidden">
            {/* Dynamic Island */}
            <div className="absolute top-2 left-1/2 -translate-x-1/2 z-20">
              <div className="bg-black rounded-full w-24 h-6 flex items-center justify-center gap-2">
                <div className="w-2 h-2 rounded-full bg-zinc-700" />
                <div className="w-3 h-3 rounded-full bg-zinc-800 ring-1 ring-zinc-700" />
              </div>
            </div>
            
            {/* Screen Content - 16:9 aspect ratio */}
            <div className="aspect-[9/16] w-56 sm:w-64 md:w-72 bg-black relative">
              {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/50 z-10">
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-10 h-10 border-3 border-white/20 border-t-white rounded-full animate-spin" />
                    <span className="text-xs text-white/60">Loading...</span>
                  </div>
                </div>
              )}
              {youtubeUrl ? (
                <iframe
                  src={getYouTubeEmbedUrl(youtubeUrl)}
                  title={customerName ? `${customerName} Testimonial` : "Customer Testimonial"}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                  onLoad={() => setIsLoading(false)}
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent flex items-center justify-center">
                  <span className="text-muted-foreground text-sm">Video Coming Soon</span>
                </div>
              )}
            </div>
            
            {/* Home Indicator */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2">
              <div className="w-28 h-1 bg-white/30 rounded-full" />
            </div>
          </div>
        </div>
        
        {/* Side Buttons */}
        <div className="absolute left-0 top-24 -translate-x-0.5">
          <div className="w-0.5 h-6 bg-zinc-700 rounded-l-sm mb-2" />
          <div className="w-0.5 h-10 bg-zinc-700 rounded-l-sm mb-1" />
          <div className="w-0.5 h-10 bg-zinc-700 rounded-l-sm" />
        </div>
        <div className="absolute right-0 top-28 translate-x-0.5">
          <div className="w-0.5 h-14 bg-zinc-700 rounded-r-sm" />
        </div>
        
        {/* Consultant portrait */}
        <div className="absolute -bottom-4 -right-8 z-10">
          <img 
            src={advisorPhoto} 
            alt="Dcore Systems consultant" 
            className="w-20 h-20 rounded-2xl object-cover shadow-lg"
          />
        </div>
      </div>
      
      {/* Customer Info */}
      {(customerName || businessType) && (
        <div className="mt-6 text-center">
          {customerName && (
            <p className="font-semibold text-foreground">{customerName}</p>
          )}
          {businessType && (
            <p className="text-sm text-muted-foreground">{businessType}</p>
          )}
        </div>
      )}
    </div>
  );
}
