import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { PlayCircle } from "lucide-react";

export function VideoSection() {
  return (
    <section id="video" className="bg-secondary py-20 md:py-32">
      <div className="container mx-auto max-w-4xl px-4 text-center md:px-6 lg:px-8">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            See Cabinetics in Action
          </h2>
          <p className="text-lg text-muted-foreground md:text-xl">
            Watch our quick onboarding video to see how Cabinetics can
            revolutionize your workflow in just a few minutes.
          </p>
        </div>
        <div className="mt-12">
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <div className="group relative aspect-video cursor-pointer">
                <Image
                  src="https://picsum.photos/1280/720"
                  alt="Video thumbnail"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  data-ai-hint="workspace desk"
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <PlayCircle className="h-20 w-20 text-white/80 transition-transform duration-300 group-hover:scale-110 group-hover:text-white" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
