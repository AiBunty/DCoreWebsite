import { Link } from "react-router-dom";
import { Container } from "@/components/layout/Container";

export function TrustStrip() {
  return (
    <div className="border-t border-muted/40">
      <Container>
        <div className="py-3 md:py-4 text-xs md:text-sm text-muted-foreground flex flex-wrap items-center justify-center gap-2">
          <span>Operated by DCORE SYSTEMS LLP</span>
          <span aria-hidden="true">•</span>
          <span>LLPIN: ACT-9625</span>
          <span aria-hidden="true">•</span>
          <span>Pune, Maharashtra, India</span>
          <span aria-hidden="true">•</span>
          <Link to="/legal/company" className="underline underline-offset-4 hover:text-foreground">
            Company details
          </Link>
        </div>
      </Container>
    </div>
  );
}
