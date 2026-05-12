"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function RoutineSection() {
  return (
    <section className="bg-beautalo-cream py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-lg"
          >
            <Image
              src="https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=1200"
              alt="Skincare routine flat lay"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Text Side */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-beautalo-sage">The Essentials</p>
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold tracking-tight text-beautalo-charcoal">
              Your 3-Step Honest Routine
            </h2>
            <p className="text-beautalo-muted leading-relaxed max-w-lg">
              You don&apos;t need a 10-step routine. You need 3 products formulated in the same labs as luxury brands, without the markup. Cleanse, Treat, Protect.
            </p>
            
            <div className="space-y-4 pt-4">
              <div className="flex items-center gap-4">
                <span className="w-8 h-8 rounded-full bg-beautalo-sage/10 text-beautalo-sage flex items-center justify-center text-sm font-bold">1</span>
                <div>
                  <p className="font-medium text-beautalo-charcoal">Gentle Cleanser</p>
                  <p className="text-sm text-beautalo-muted">Prep & clean</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="w-8 h-8 rounded-full bg-beautalo-sage/10 text-beautalo-sage flex items-center justify-center text-sm font-bold">2</span>
                <div>
                  <p className="font-medium text-beautalo-charcoal">Hydrating Serum</p>
                  <p className="text-sm text-beautalo-muted">Treat & plump</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="w-8 h-8 rounded-full bg-beautalo-sage/10 text-beautalo-sage flex items-center justify-center text-sm font-bold">3</span>
                <div>
                  <p className="font-medium text-beautalo-charcoal">SPF Moisturizer</p>
                  <p className="text-sm text-beautalo-muted">Hydrate & protect</p>
                </div>
              </div>
            </div>

            <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Link href="/shop">
                <Button className="btn-premium bg-beautalo-charcoal hover:bg-beautalo-charcoal/90 text-white rounded-md px-8 py-4 text-base flex items-center gap-2">
                  Shop Routine for ₹1,047
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <p className="text-xs text-beautalo-muted">*Costs ₹340 total to make</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}