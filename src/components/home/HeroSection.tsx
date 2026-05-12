"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ShieldCheck, Leaf, Heart } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-beautalo-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-xs font-semibold uppercase tracking-[0.25em] text-beautalo-sage mb-6"
            >
              Direct-to-Consumer Beauty Brand
            </motion.p>
            
            {/* Changed to Playfair Serif font here */}
            <h1 className="font-[family-name:var(--font-playfair)] text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 text-beautalo-charcoal leading-[1.05]">
              Luxury Beauty,<br />
              <span className="text-beautalo-sage">Fair Prices.</span>
            </h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-lg text-beautalo-muted leading-relaxed mb-10 max-w-xl"
            >
              Same labs. Same quality. 60% lower prices. No middlemen, no celebrity marketing, just honest skincare.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link href="/shop">
                {/* Added btn-premium class here */}
                <Button className="btn-premium bg-beautalo-charcoal hover:bg-beautalo-charcoal/90 text-white rounded-md px-8 py-4 text-base">
                  Shop Products
                </Button>
              </Link>
              <Link href="/about">
                <Button variant="outline" className="btn-premium border-beautalo-charcoal text-beautalo-charcoal rounded-md px-8 py-4 text-base hover:bg-beautalo-cream">
                  Our Transparency Promise
                </Button>
              </Link>
            </motion.div>

            {/* Trust Badges Row */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-12 flex items-center gap-6 text-beautalo-muted"
            >
              <div className="flex items-center gap-2 text-xs font-medium">
                <ShieldCheck className="h-4 w-4 text-beautalo-sage" />
                Dermatologist Tested
              </div>
              <div className="flex items-center gap-2 text-xs font-medium">
                <Leaf className="h-4 w-4 text-beautalo-sage" />
                100% Vegan
              </div>
              <div className="flex items-center gap-2 text-xs font-medium">
                <Heart className="h-4 w-4 text-beautalo-sage" />
                Cruelty-Free
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side Image */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full h-[600px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?q=80&w=1200"
                alt="Luxury skincare products"
                fill
                className="object-cover"
                priority
              />
            </div>
            
            {/* Floating Badge - Added animate-float class */}
            <div className="animate-float absolute bottom-8 left-8 bg-beautalo-white/90 backdrop-blur-md p-5 rounded-2xl shadow-xl border border-beautalo-border">
              <p className="text-[10px] text-beautalo-muted uppercase tracking-widest">Starting at</p>
              <p className="text-3xl font-bold text-beautalo-charcoal font-[family-name:var(--font-playfair)]">₹299</p>
              <p className="text-xs text-beautalo-sage font-semibold mt-1">Costs ₹100 to make</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}