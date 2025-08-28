import { Button } from "@/components/ui/button";
import { AnimatedBenefits } from "./animated-benefits";
import Link from "next/link";
import Image from "next/image";

export function Hero() {
  return (
    <section id="features" className="py-20 md:py-32">
      <div className="container mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 md:grid-cols-2 md:px-6 lg:px-8">
        <div className="space-y-6 text-center md:text-left">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
            Organize Your Workspace, Unleash Your Creativity
          </h1>
          <p className="max-w-2xl text-lg text-muted-foreground md:text-xl">
            Cabinetics is the ultimate SaaS solution for modern teams, offering{" "}
            <AnimatedBenefits />
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row md:justify-start">
            <Button asChild size="lg">
              <Link href="#">Get Started for Free</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="#video">Watch Demo</Link>
            </Button>
          </div>
        </div>
        <div className="flex justify-center">
          <Image
            src="https://picsum.photos/600/500"
            alt="Cabinetics application dashboard"
            width={600}
            height={500}
            className="rounded-xl shadow-2xl"
            data-ai-hint="application dashboard"
          />
        </div>
      </div>
    </section>
  );
}
