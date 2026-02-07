import { ReactNode, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { PageShell } from "@/components/layout/PageShell";

interface LayoutProps {
  children: ReactNode;
}

// Scroll to top on route changes so comparison links land at page top
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);

  return null;
}

export function Layout({ children }: LayoutProps) {
  return (
    <PageShell>
      <ScrollToTop />
      {children}
    </PageShell>
  );
}
