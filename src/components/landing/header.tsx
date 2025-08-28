import Link from "next/link";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-6">
          <Logo />
          <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
            <Link
              href="#features"
              className="text-foreground/60 transition-colors hover:text-foreground/80"
            >
              Features
            </Link>
            <Link
              href="#video"
              className="text-foreground/60 transition-colors hover:text-foreground/80"
            >
              Demo
            </Link>
            <Link
              href="#"
              className="text-foreground/60 transition-colors hover:text-foreground/80"
            >
              Pricing
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" asChild>
            <Link href="/login">Log In</Link>
          </Button>
          <Button asChild>
            <Link href="/signup">Sign Up</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
