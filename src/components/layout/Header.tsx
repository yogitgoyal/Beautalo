"use client"

import { useState } from "react"
import Link from "next/link"
import { ShoppingCart, Menu, X } from "lucide-react"
import { useCart } from "@/store/CartContext"
import { CartDrawer } from "@/components/cart/CartDrawer"
import { motion, AnimatePresence } from "framer-motion"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false)
  const { totalItems } = useCart()

  const menuLinks = [
    { href: "/shop", label: "Shop" },
    { href: "/about", label: "Our Story" },
    { href: "/waitlist", label: "Learn" }
  ]

  return (
    <>
      {/* Scrolling Ticker */}
      <div className="bg-beautalo-sage text-white py-2 overflow-hidden">
        <div className="flex whitespace-nowrap">
          <div className="animate-marquee flex items-center space-x-8 text-xs font-medium tracking-widest uppercase">
            <span>Same labs as luxury brands</span><span>•</span><span>60-70% lower prices</span><span>•</span><span>No middlemen</span><span>•</span><span>No celebrity markup</span><span>•</span><span>Transparent pricing</span><span>•</span><span>Same labs as luxury brands</span><span>•</span><span>60-70% lower prices</span><span>•</span><span>No middlemen</span><span>•</span><span>No celebrity markup</span><span>•</span><span>Transparent pricing</span><span>•</span>
          </div>
          <div className="animate-marquee flex items-center space-x-8 text-xs font-medium tracking-widest uppercase" aria-hidden="true">
            <span>Same labs as luxury brands</span><span>•</span><span>60-70% lower prices</span><span>•</span><span>No middlemen</span><span>•</span><span>No celebrity markup</span><span>•</span><span>Transparent pricing</span><span>•</span><span>Same labs as luxury brands</span><span>•</span><span>60-70% lower prices</span><span>•</span><span>No middlemen</span><span>•</span><span>No celebrity markup</span><span>•</span><span>Transparent pricing</span><span>•</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-40 w-full border-b border-beautalo-border bg-beautalo-white/80 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
          <Link href="/" className="text-2xl font-bold tracking-tight text-beautalo-charcoal">Beautalo</Link>

          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
            {menuLinks.map(link => (
              <Link key={link.href} href={link.href} className="text-beautalo-muted hover:text-beautalo-charcoal transition-colors">{link.label}</Link>
            ))}
          </nav>

          <div className="flex items-center space-x-2">
            <button onClick={() => setIsCartOpen(true)} className="relative text-beautalo-charcoal p-2 hover:bg-beautalo-cream rounded-lg transition-colors">
              <ShoppingCart className="h-5 w-5" />
              {totalItems > 0 && (
                <span className="absolute -top-0.5 -right-0.5 h-5 w-5 rounded-full bg-beautalo-sage text-white flex items-center justify-center text-[10px] font-bold">{totalItems}</span>
              )}
            </button>
            <button className="md:hidden p-2" onClick={() => setIsMenuOpen(true)}>
              <Menu className="h-5 w-5 text-beautalo-charcoal" />
            </button>
          </div>
        </div>
      </header>

      {/* Full Screen Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-beautalo-white flex flex-col md:hidden"
          >
            <div className="flex items-center justify-between p-6">
              <span className="text-xl font-bold text-beautalo-charcoal">Menu</span>
              <button onClick={() => setIsMenuOpen(false)} className="p-2">
                <X className="h-6 w-6 text-beautalo-charcoal" />
              </button>
            </div>
            
            <div className="flex-1 flex flex-col justify-center px-8 space-y-8">
              {menuLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link 
                    href={link.href} 
                    onClick={() => setIsMenuOpen(false)}
                    className="font-[family-name:var(--font-playfair)] text-5xl font-bold text-beautalo-charcoal hover:text-beautalo-sage transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="p-8 border-t border-beautalo-border">
              <p className="text-xs text-beautalo-muted uppercase tracking-widest mb-4">Follow Us</p>
              <div className="flex space-x-6 text-sm text-beautalo-charcoal font-medium">
                <a href="#">Instagram</a>
                <a href="#">TikTok</a>
                <a href="#">Twitter</a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  )
}