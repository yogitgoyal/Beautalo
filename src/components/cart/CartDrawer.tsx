"use client"

import { useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { X, Minus, Plus, Trash2 } from "lucide-react"
import { useCart } from "@/store/CartContext"
import { Button } from "@/components/ui/button"

interface CartDrawerProps {
  isOpen: boolean
  onClose: () => void
}

export function CartDrawer({ isOpen, onClose }: CartDrawerProps) {
  const { items, removeFromCart, updateQuantity, subtotal } = useCart()

  // Prevent body scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  const shipping = subtotal > 500 ? 0 : 50
  const total = subtotal + shipping

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 z-50"
          />

          {/* Drawer Panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl z-50 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-beautalo-border">
              <h2 className="text-lg font-semibold text-beautalo-charcoal">Your Cart</h2>
              <button onClick={onClose} className="text-beautalo-muted hover:text-beautalo-charcoal transition-colors">
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Items */}
            {items.length === 0 ? (
              <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
                <p className="text-beautalo-muted mb-4">Your cart is empty</p>
                <button onClick={onClose} className="text-sm font-medium text-beautalo-sage underline">
                  Continue Shopping
                </button>
              </div>
            ) : (
              <>
                <div className="flex-1 overflow-y-auto p-6 space-y-6">
                  {items.map((item) => (
                    <motion.div
                      key={item.product.id}
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, x: -100 }}
                      className="flex gap-4"
                    >
                      <div className="w-20 h-20 bg-beautalo-cream rounded-md flex-shrink-0 flex items-center justify-center p-1.5">
                        {item.product.images[0] && (
                          <img src={item.product.images[0].url} alt={item.product.name} className="max-w-full max-h-full object-contain" />
                        )}
                      </div>

                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm font-medium text-beautalo-charcoal truncate">{item.product.name}</h3>
                        <p className="text-xs text-beautalo-sage mt-0.5">Costs ₹{item.product.costPrice} to make</p>

                        <div className="flex items-center justify-between mt-3">
                          <div className="flex items-center border border-beautalo-border rounded">
                            <button onClick={() => updateQuantity(item.product.id, item.quantity - 1)} className="p-1.5 hover:bg-beautalo-cream transition-colors">
                              <Minus className="h-3 w-3 text-beautalo-charcoal" />
                            </button>
                            <span className="px-3 text-xs font-medium text-beautalo-charcoal">{item.quantity}</span>
                            <button onClick={() => updateQuantity(item.product.id, item.quantity + 1)} className="p-1.5 hover:bg-beautalo-cream transition-colors">
                              <Plus className="h-3 w-3 text-beautalo-charcoal" />
                            </button>
                          </div>

                          <div className="flex items-center gap-3">
                            <span className="text-sm font-semibold text-beautalo-charcoal">₹{(item.product.price * item.quantity).toFixed(0)}</span>
                            <button onClick={() => removeFromCart(item.product.id)} className="text-beautalo-muted/40 hover:text-red-500 transition-colors">
                              <Trash2 className="h-3.5 w-3.5" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Footer */}
                <div className="border-t border-beautalo-border p-6 bg-beautalo-cream/50 space-y-4">

                  {/* FREE SHIPPING PROGRESS BAR */}
                  {subtotal < 500 ? (
                    <div className="bg-beautalo-white p-3 rounded-lg border border-beautalo-border">
                      <p className="text-xs text-beautalo-muted mb-2 text-center">
                        Add <span className="font-bold text-beautalo-charcoal">₹{(500 - subtotal).toFixed(0)}</span> more for free shipping!
                      </p>
                      <div className="w-full bg-beautalo-border rounded-full h-1.5">
                        <div
                          className="bg-beautalo-sage h-1.5 rounded-full transition-all duration-500"
                          style={{ width: `${Math.min((subtotal / 500) * 100, 100)}%` }}
                        ></div>
                      </div>
                    </div>
                  ) : (
                    <div className="bg-beautalo-sage/10 p-3 rounded-lg border border-beautalo-sage/30 text-center">
                      <p className="text-xs font-semibold text-beautalo-sage">🎉 You&apos;ve unlocked FREE shipping!</p>
                    </div>
                  )}

                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between text-beautalo-muted">
                      <span>Subtotal</span>
                      <span className="font-medium text-beautalo-charcoal">₹{subtotal.toFixed(0)}</span>
                    </div>
                    <div className="flex justify-between text-beautalo-muted">
                      <span>Shipping</span>
                      <span className="font-medium text-beautalo-charcoal">{shipping === 0 ? <span className="text-beautalo-sage">Free</span> : `₹${shipping}`}</span>
                    </div>
                    <div className="flex justify-between text-base font-bold text-beautalo-charcoal pt-2 border-t border-beautalo-border">
                      <span>Total</span>
                      <span>₹{total.toFixed(0)}</span>
                    </div>
                  </div>

                  <Link href="/checkout" onClick={onClose}>
                    <Button className="w-full bg-beautalo-charcoal hover:bg-beautalo-charcoal/90 text-white h-12 rounded-md">
                      Proceed to Checkout
                    </Button>
                  </Link>
                </div>
              </>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}