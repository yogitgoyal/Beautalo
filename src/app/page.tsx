import { Header } from "@/components/layout/Header"
import { HeroSection } from "@/components/home/HeroSection"
import { RoutineSection } from "@/components/home/RoutineSection" // ADD THIS
import { TransparencySection } from "@/components/home/TransparencySection"
import { ReviewsSection } from "@/components/home/ReviewsSection"
import { ComparisonSection } from "@/components/home/ComparisonSection"

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <RoutineSection /> {/* ADD THIS */}
        <TransparencySection />
        <ReviewsSection />
        <ComparisonSection />
        
        <section className="py-24 text-center bg-beautalo-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold tracking-tight text-beautalo-charcoal mb-6">
              Skincare backed by science, not hype.
            </h2>
            <p className="text-lg text-beautalo-muted max-w-2xl mx-auto mb-10">
              Every ingredient is chosen for a reason. No fillers, no fragrances, no bullshit.
            </p>
            <a href="/shop" className="btn-premium inline-flex items-center justify-center rounded-md bg-beautalo-charcoal px-8 py-4 text-sm font-medium text-white transition-all hover:bg-beautalo-charcoal/90">
              Explore Products
            </a>
          </div>
        </section>
      </main>
    </>
  )
}