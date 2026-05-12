import { Header } from "@/components/layout/Header"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ShieldCheck, Factory, Heart, TrendingDown, Users, DollarSign } from "lucide-react"

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="bg-beautalo-white">
        
        {/* Hero */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-beautalo-sage mb-4">The Problem</p>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-beautalo-charcoal mb-6 max-w-4xl mx-auto leading-tight">
            The Beauty Industry is Broken
          </h1>
          <p className="text-xl text-beautalo-muted max-w-2xl mx-auto leading-relaxed">
            Consumers overpay for packaging and marketing, not quality. You&apos;re paying for celebrity endorsements and retail space—not better ingredients.
          </p>
        </div>

        {/* Competitor Stats */}
        <div className="bg-beautalo-cream py-16">
          <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-beautalo-white p-8 rounded-2xl shadow-sm border border-beautalo-border">
              <p className="text-4xl font-bold text-red-500 mb-2">10-15x</p>
              <p className="text-sm text-beautalo-muted">Traditional Luxury Markup</p>
            </div>
            <div className="bg-beautalo-white p-8 rounded-2xl shadow-sm border border-beautalo-border">
              <p className="text-4xl font-bold text-red-500 mb-2">30-40%</p>
              <p className="text-sm text-beautalo-muted">Spent on Celebrity Marketing</p>
            </div>
            <div className="bg-beautalo-white p-8 rounded-2xl shadow-sm border border-beautalo-border">
              <p className="text-4xl font-bold text-red-500 mb-2">50-100%</p>
              <p className="text-sm text-beautalo-muted">Retailer Markup</p>
            </div>
          </div>
        </div>

        {/* The Solution */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-beautalo-sage mb-4">Our Solution</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-beautalo-charcoal mb-6">
            Beauty Without The Bullshit
          </h2>
          <p className="text-lg text-beautalo-muted max-w-2xl mx-auto mb-16">
            How we deliver luxury quality at mass-market prices.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            {[
              { icon: Factory, title: "Same Luxury Labs", desc: "Switzerland, Korea, Japan — the same facilities that produce ₹2,000+ products." },
              { icon: DollarSign, title: "No Retailer Middlemen", desc: "0% markup — direct from lab to customer. You save the entire retailer margin." },
              { icon: Users, title: "No Celebrity Ads", desc: "Community marketing only. No 30-40% ad premium passed on to you." },
              { icon: ShieldCheck, title: "Transparent Pricing", desc: "This costs ₹50 to make, we sell at ₹149. Full cost breakdown on every label." },
              { icon: Heart, title: "Ethical Sourcing", desc: "Certified labs with GMP & ISO standards. Vegan & Cruelty-free formulations." },
              { icon: TrendingDown, title: "Customer Saves 60-70%", desc: "Premium quality at mass market prices. The savings stay in your pocket." }
            ].map((item) => (
              <div key={item.title} className="p-6 rounded-xl border border-beautalo-border hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-full bg-beautalo-sage/10 flex items-center justify-center mb-4">
                  <item.icon className="h-6 w-6 text-beautalo-sage" />
                </div>
                <h3 className="text-lg font-semibold text-beautalo-charcoal mb-2">{item.title}</h3>
                <p className="text-sm text-beautalo-muted leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-beautalo-charcoal py-20 text-center">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to see the difference?</h2>
            <p className="text-white/60 mb-8">Premium skincare shouldn&apos;t be a luxury. It should be a standard.</p>
            <Link href="/shop">
              <Button className="bg-beautalo-sage hover:bg-beautalo-sage-dark text-white rounded-md px-8 py-4 text-base transition-colors">
                Shop Products
              </Button>
            </Link>
          </div>
        </div>

      </main>
    </>
  )
}