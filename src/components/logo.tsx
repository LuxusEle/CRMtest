import Link from "next/link";

function LogoIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      className="h-8 w-8 text-primary"
      fill="currentColor"
    >
      <defs>
        <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: "#FF416C", stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: "#FF4B2B", stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      <path
        d="M85,15 L15,85 L25,95 L95,25 Z M15,15 L85,85 L75,95 L5,25 Z"
        fill="url(#grad)"
      />
    </svg>
  );
}

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2" prefetch={false}>
      <LogoIcon />
      <span className="text-lg font-semibold tracking-tight">Cabinetrics</span>
    </Link>
  );
}
