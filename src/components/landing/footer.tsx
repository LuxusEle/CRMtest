import Link from "next/link";
import { Logo } from "@/components/logo";
import { Github, Twitter, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto flex flex-col items-center justify-between gap-6 px-4 py-8 sm:flex-row sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-2 sm:flex-row sm:gap-4">
          <Logo />
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Cabinetics. All rights reserved.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <Link href="#" aria-label="Cabinetics on Twitter">
            <Button variant="ghost" size="icon">
              <Twitter className="h-5 w-5" />
            </Button>
          </Link>
          <Link href="#" aria-label="Cabinetics on GitHub">
            <Button variant="ghost" size="icon">
              <Github className="h-5 w-5" />
            </Button>
          </Link>
          <Link href="#" aria-label="Cabinetics on LinkedIn">
            <Button variant="ghost" size="icon">
              <Linkedin className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </footer>
  );
}
