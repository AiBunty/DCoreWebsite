interface MascotTipProps {
  message: string;
  className?: string;
}

const advisorPhoto =
  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=240&q=80";

export function MascotTip({ message, className = "" }: MascotTipProps) {
  return (
    <div className={`flex items-start gap-4 bg-accent rounded-2xl p-6 ${className}`}>
      <img
        src={advisorPhoto}
        alt="Dcore Systems advisor"
        className="w-16 h-16 rounded-full object-cover flex-shrink-0 shadow-lg"
      />
      <div className="flex-1">
        <p className="text-white font-medium italic">"{message}"</p>
        <p className="text-primary text-sm font-semibold mt-2">- Dcore Systems Team</p>
      </div>
    </div>
  );
}
