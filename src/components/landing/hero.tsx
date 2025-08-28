import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { AnimatedBenefits } from "./animated-benefits";

export function Hero() {
  return (
    <section id="features" className="py-20 md:py-32">
      <div className="container mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 md:grid-cols-2 md:px-6 lg:px-8">
        <div className="space-y-6 text-center md:text-left">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
            The all-in-one platform for
            <br />
            <AnimatedBenefits />
          </h1>
          <div className="space-y-4 text-lg text-muted-foreground md:text-xl">
            <p>
              Stop Guessing. Start Growing. Cabinetrics Puts Profit in Every
              Project and a Bigger Bank Account!
            </p>
          </div>
          <div className="flex flex-col justify-center gap-4 sm:flex-row md:justify-start">
            <Button asChild size="lg">
              <Link href="/signup">
                Start for Free. No Charge Until Your First Active Job.
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="#video">Watch a Quick Demo</Link>
            </Button>
          </div>
        </div>
        <div className="flex justify-center">
          <Image
            src="https://picsum.photos/600/500"
            alt="Cabinetrics application dashboard"
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
