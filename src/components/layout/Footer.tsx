"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { toast } from "sonner"

export function Footer() {
  const [email, setEmail] = useState("")

  const handleFooterSignup = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    // Simulating API call for now
    toast.success("Welcome to the Beautalo family!")
    setEmail("")
  }

  return (
    <footer className="bg-beautalo-charcoal text-white">
      
      {/* Lead Capture Section */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="text-2xl font-bold font-[family-name:var(--font-playfair)]">Join the Transparency Movement.</h3>
            <p className="text-white/50 mt-2 text-sm">Get early access to new drops and ingredient breakdowns. No spam.</p>
          </div>
          <form onSubmit={handleFooterSignup} className="flex w-full md:w-auto gap-3">
            <Input 
              type="email" 
              placeholder="Enter your email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-white/10 border-white/10 text-white placeholder:text-white/40 h-11 w-full md:w-64 focus-visible:ring-beautalo-sage"
            />
            <Button type="submit" className="bg-beautalo-sage hover:bg-beautalo-sage-dark text-white h-11 px-6 rounded-md shrink-0">
              Subscribe
            </Button>
          </form>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          
          <div className="md:col-span-1">
            <Link href="/" className="text-2xl font-bold tracking-tight">Beautalo</Link>
            <p className="mt-4 text-sm text-white/50 leading-relaxed">
              Luxury-quality skincare at fair prices. No middlemen, no markups, just honest products.
            </p>
          </div>
          
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest mb-6 text-white/80">Shop</h3>
            <ul className="space-y-3">
              <li><Link href="/product/gentle-cleanser" className="text-sm text-white/40 hover:text-white transition-colors">Gentle Cleanser</Link></li>
              <li><Link href="/product/hydrating-serum" className="text-sm text-white/40 hover:text-white transition-colors">Hydrating Serum</Link></li>
              <li><Link href="/product/moisturizer-spf-30" className="text-sm text-white/40 hover:text-white transition-colors">SPF Moisturizer</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest mb-6 text-white/80">Company</h3>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-sm text-white/40 hover:text-white transition-colors">Our Story</Link></li>
              <li><Link href="/waitlist" className="text-sm text-white/40 hover:text-white transition-colors">Ingredient Science</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest mb-6 text-white/80">Support</h3>
            <ul className="space-y-3">
              <li><Link href="/checkout" className="text-sm text-white/40 hover:text-white transition-colors">Shipping & Returns</Link></li>
              <li><Link href="/waitlist" className="text-sm text-white/40 hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link href="/waitlist" className="text-sm text-white/40 hover:text-white transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-white/30">
            © 2026 Beautalo. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-xs text-white/30 hover:text-white transition-colors">Instagram</a>
            <a href="#" className="text-xs text-white/30 hover:text-white transition-colors">Twitter</a>
            <a href="#" className="text-xs text-white/30 hover:text-white transition-colors">TikTok</a>
          </div>
        </div>
      </div>
    </footer>
  )
}