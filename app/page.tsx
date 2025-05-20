import HeroSection from "@/components/hero-section"
import GallerySection from "@/components/gallery-section"
import AboutSection from "@/components/about-section"
import CounterSection from "@/components/counter-section"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      <GallerySection />
      <AboutSection />
      <CounterSection />
    </main>
  )
}
