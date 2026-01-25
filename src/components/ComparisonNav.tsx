import { useLocation, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const comparisons = [
  { path: "/compare/flexifunnels", label: "vs Flexifunnels" },
  { path: "/compare/tagmango", label: "vs TagMango" },
  { path: "/compare/graphy", label: "vs Graphy" },
  { path: "/compare/gohighlevel", label: "vs GoHighLevel" },
  { path: "/compare/kajabi", label: "vs Kajabi" },
  { path: "/compare/aisensy", label: "vs AiSensy" },
  { path: "/compare/skool", label: "vs Skool" },
];

export function ComparisonNav() {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className="flex flex-wrap gap-2 justify-center mb-8 p-4 bg-muted rounded-lg">
      {comparisons.map((comparison) => (
        <Link key={comparison.path} to={comparison.path}>
          <Button
            variant={currentPath === comparison.path ? "default" : "outline"}
            size="sm"
            className={currentPath === comparison.path ? "shadow-soft" : ""}
          >
            {comparison.label}
          </Button>
        </Link>
      ))}
    </div>
  );
}
