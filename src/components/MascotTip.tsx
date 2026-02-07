import mascotImage from "@/assets/ai-bunty-mascot.png";

interface MascotTipProps {
  message: string;
  className?: string;
}

export function MascotTip({ message, className = "" }: MascotTipProps) {
  return (
    <div className={`flex items-start gap-4 bg-accent rounded-2xl p-6 ${className}`}>
      <img 
        src={mascotImage} 
        alt="Dcore AI Automation Mascot - WhatsApp, CRM, Workflows" 
        className="w-16 h-16 object-contain flex-shrink-0 drop-shadow-lg"
      />
      <div className="flex-1">
        <p className="text-white font-medium italic">"{message}"</p>
        <p className="text-primary text-sm font-semibold mt-2">— Ai Bunty</p>
      </div>
    </div>
  );
}
