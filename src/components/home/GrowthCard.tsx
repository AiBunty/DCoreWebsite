import { MiniChart, MiniChartType } from "@/components/charts/MiniChart";

interface GrowthCardProps {
  ownerName: string;
  role: string;
  industry: string;
  metric: string;
  timeframe: string;
  used: string;
  chartType: MiniChartType;
  values: number[];
  avatar: string;
}

export function GrowthCard({
  ownerName,
  role,
  industry,
  metric,
  timeframe,
  used,
  chartType,
  values,
  avatar,
}: GrowthCardProps) {
  return (
    <div className="relative rounded-xl border border-muted/40 bg-card p-4 md:p-5 shadow-sm">
      <div className="flex items-center gap-3">
        <div className="relative">
          <img
            src={avatar}
            alt="Representative profile"
            className="h-9 w-9 rounded-full object-cover"
            title="Representative profile"
          />
        </div>
        <div>
          <div className="text-sm font-medium text-foreground">{ownerName}</div>
          <div className="text-xs text-muted-foreground">
            {role} • {industry}
          </div>
          <div className="text-[10px] text-muted-foreground">Representative profile</div>
        </div>
      </div>
      <div className="mt-4">
        <div className="text-xl font-semibold text-foreground">{metric}</div>
        <div className="text-xs text-muted-foreground">{timeframe}</div>
      </div>
      <div className="mt-4 flex items-center justify-between gap-4">
        <p className="text-xs text-muted-foreground leading-snug">
          Used: {used}
        </p>
        <MiniChart values={values} type={chartType} className="h-10 w-28 text-primary" />
      </div>
    </div>
  );
}
