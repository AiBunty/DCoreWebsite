import { Check, X } from "lucide-react";

interface ComparisonRow {
  useCase: string;
  aiBunty: string;
  competitor: string;
  aiBuntyHas: boolean;
  competitorHas: boolean;
}

interface ComparisonTableProps {
  competitorName: string;
  rows: ComparisonRow[];
}

export function ComparisonTable({ competitorName, rows }: ComparisonTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-border">
            <th className="text-left py-4 px-4 font-semibold text-foreground">Use Case</th>
            <th className="text-left py-4 px-4 font-semibold text-primary">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-primary-foreground text-xs">🐢</span>
                </div>
                Ai Bunty
              </div>
            </th>
            <th className="text-left py-4 px-4 font-semibold text-muted-foreground">{competitorName}</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index} className="border-b border-border hover:bg-accent/50 transition-colors">
              <td className="py-4 px-4 font-medium text-foreground">{row.useCase}</td>
              <td className="py-4 px-4">
                <div className="flex items-start gap-2">
                  {row.aiBuntyHas ? (
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  ) : (
                    <X className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                  )}
                  <span className="text-foreground text-sm">{row.aiBunty}</span>
                </div>
              </td>
              <td className="py-4 px-4">
                <div className="flex items-start gap-2">
                  {row.competitorHas ? (
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  ) : (
                    <X className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                  )}
                  <span className="text-muted-foreground text-sm">{row.competitor}</span>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
