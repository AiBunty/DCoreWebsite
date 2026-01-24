import { useLocation, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const solutions = [
  { path: "/solutions/coaches", label: "Coaches" },
  { path: "/solutions/real-estate", label: "Real Estate" },
  { path: "/solutions/fitness", label: "Fitness" },
  { path: "/solutions/consultants", label: "Consultants" },
  { path: "/solutions/events", label: "Events" },
  { path: "/solutions/agencies", label: "Agencies" },
  { path: "/solutions/financial-advisors", label: "Financial Advisors" },
  { path: "/solutions/health-clinics", label: "Health Clinics" },
  { path: "/solutions/freelancers", label: "Freelancers" },
];

export function SolutionNav() {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className="flex flex-wrap gap-2 justify-center mb-8 p-4 bg-muted rounded-lg">
      {solutions.map((solution) => (
        <Link key={solution.path} to={solution.path}>
          <Button
            variant={currentPath === solution.path ? "default" : "outline"}
            size="sm"
            className={currentPath === solution.path ? "shadow-soft" : ""}
          >
            {solution.label}
          </Button>
        </Link>
      ))}
    </div>
  );
}
