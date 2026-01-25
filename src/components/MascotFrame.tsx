import mascotImage from "@/assets/ai-bunty-mascot.png";

interface MascotFrameProps {
  imageSrc?: string;
  youtubeUrl?: string;
  children?: React.ReactNode;
  className?: string;
}

export function MascotFrame({ imageSrc, youtubeUrl, children, className = "" }: MascotFrameProps) {
  const getYouTubeEmbedUrl = (url: string) => {
    const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([^&?\s]+)/);
    return match ? `https://www.youtube.com/embed/${match[1]}` : url;
  };

  return (
    <div className={`relative flex items-end gap-0 ${className}`}>
      {/* Screen/Monitor Frame */}
      <div className="relative flex-1">
        <div className="bg-card rounded-2xl border-4 border-foreground/10 shadow-hover overflow-hidden">
          {/* Screen bezel */}
          <div className="bg-foreground/5 p-1">
            <div className="flex gap-1.5 mb-2 px-2 pt-1">
              <div className="w-2.5 h-2.5 rounded-full bg-destructive/60" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
            </div>
            {/* Content Area */}
            <div className="bg-background rounded-lg overflow-hidden aspect-video">
              {youtubeUrl ? (
                <iframe
                  src={getYouTubeEmbedUrl(youtubeUrl)}
                  title="Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              ) : imageSrc ? (
                <img 
                  src={imageSrc} 
                  alt="Dashboard Preview" 
                  className="w-full h-full object-contain bg-card"
                />
              ) : children ? (
                <div className="w-full h-full">{children}</div>
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-primary/10 to-accent flex items-center justify-center">
                  <span className="text-muted-foreground">Content Preview</span>
                </div>
              )}
            </div>
          </div>
        </div>
        {/* Monitor Stand */}
        <div className="flex justify-center">
          <div className="w-16 h-4 bg-foreground/10 rounded-b-lg" />
        </div>
        <div className="flex justify-center -mt-1">
          <div className="w-24 h-2 bg-foreground/10 rounded-full" />
        </div>
      </div>

      {/* Mascot */}
      <div className="hidden md:block -ml-8 z-10">
        <img 
          src={mascotImage} 
          alt="Ai Bunty Mascot" 
          className="w-32 lg:w-40 h-auto drop-shadow-lg"
        />
      </div>
    </div>
  );
}
