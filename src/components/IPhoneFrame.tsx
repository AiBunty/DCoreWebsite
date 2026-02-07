import mascotImage from "@/assets/ai-bunty-mascot.png";

interface IPhoneFrameProps {
  youtubeUrl: string;
  customerName?: string;
  businessType?: string;
  className?: string;
}

export function IPhoneFrame({ youtubeUrl, customerName, businessType, className = "" }: IPhoneFrameProps) {
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
            <div className="aspect-[9/16] w-56 sm:w-64 md:w-72 bg-black">
              {youtubeUrl ? (
                <iframe
                  src={getYouTubeEmbedUrl(youtubeUrl)}
                  title={customerName ? `${customerName} Testimonial` : "Customer Testimonial"}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
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
        
        {/* Mascot - positioned at bottom right */}
        <div className="absolute -bottom-4 -right-8 z-10">
          <img 
            src={mascotImage} 
            alt="Dcore AI Automation Mascot - WhatsApp, CRM, Workflows" 
            className="w-20 h-auto drop-shadow-lg"
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
