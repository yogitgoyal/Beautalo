"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ShoppingBag, Check } from "lucide-react"
import { useCart } from "@/store/CartContext"
import { Product } from "@/types/product"
import { toast } from "sonner"
import { motion, AnimatePresence } from "framer-motion"

export function AddToCartButton({ product }: { product: Product }) {
  const [isAdded, setIsAdded] = useState(false)
  const [showStickyBar, setShowStickyBar] = useState(false)
  const { addToCart } = useCart()

  // Show sticky bar when user scrolls past the main add to cart button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 600) {
        setShowStickyBar(true)
      } else {
        setShowStickyBar(false)
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleAdd = () => {
    addToCart(product)
    setIsAdded(true)
    toast.success(`${product.name} added to cart!`)
    
    setTimeout(() => {
      setIsAdded(false)
    }, 2000)
  }

  const ButtonUI = ({ className }: { className?: string }) => (
    <button 
      onClick={handleAdd} 
      className={`h-12 text-sm font-medium rounded-md flex items-center justify-center gap-2 transition-all duration-300 ${
        isAdded 
          ? "bg-beautalo-sage hover:bg-beautalo-sage text-white" 
          : "bg-beautalo-charcoal hover:bg-beautalo-charcoal/90 text-white"
      } ${className}`}
    >
      {isAdded ? (
        <>
          <Check className="h-4 w-4" />
          Added!
        </>
      ) : (
        <>
          <ShoppingBag className="h-4 w-4" />
          Add to Cart — ₹{product.price}
        </>
      )}
    </button>
  )

  return (
    <>
      {/* Main Button (shows at top) */}
      <ButtonUI className="w-full" />

      {/* Sticky Bottom Bar (shows on scroll) */}
      <AnimatePresence>
        {showStickyBar && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-lg border-t z-40 p-4 shadow-[0_-4px_20px_rgba(0,0,0,0.05)]"
          >
            <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
              <div className="hidden sm:block">
                <h4 className="text-sm font-medium text-beautalo-charcoal">{product.name}</h4>
                <p className="text-xs text-beautalo-sage">Costs ₹{product.costPrice} to make</p>
              </div>
              <ButtonUI className="w-full sm:w-auto sm:min-w-[250px]" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}