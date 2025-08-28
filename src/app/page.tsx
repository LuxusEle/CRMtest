import { Header } from "@/components/landing/header";
import { Hero } from "@/components/landing/hero";
import { VideoSection } from "@/components/landing/video-section";
import { Footer } from "@/components/landing/footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <VideoSection />
      </main>
      <Footer />
    </div>
  );
}
