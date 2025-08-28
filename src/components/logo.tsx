import Link from "next/link";
import { Archive } from "lucide-react";

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2" prefetch={false}>
      <Archive className="h-6 w-6 text-primary" />
      <span className="text-lg font-semibold tracking-tight">Cabinetics</span>
    </Link>
  );
}
