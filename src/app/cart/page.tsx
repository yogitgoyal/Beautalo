"use client"

import Link from "next/link"
import { Header } from "@/components/layout/Header"
import { useCart } from "@/store/CartContext"
import { Button } from "@/components/ui/button"
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react"

export default function CartPage() {
  const { items, removeFromCart, updateQuantity, subtotal } = useCart()

  if (items.length === 0) {
    return (
      <>
        <Header />
        <div className="max-w-7xl mx-auto px-4 py-24 text-center">
          <ShoppingBag className="h-16 w-16 mx-auto mb-4 text-beautalo-charcoal/20" />
          <h1 className="text-2xl font-bold text-beautalo-charcoal mb-2">Your cart is empty</h1>
          <p className="text-beautalo-charcoal/60 mb-6">Looks like you haven't added anything yet.</p>
          <Link href="/shop">
            <Button className="bg-beautalo-charcoal hover:bg-beautalo-charcoal/90 text-white rounded-md px-6 py-3">
              Continue Shopping
            </Button>
          </Link>
        </div>
      </>
    )
  }

  const shipping = subtotal > 500 ? 0 : 50
  const total = subtotal + shipping

  return (
    <>
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-beautalo-charcoal mb-8">Your Cart</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Cart Items */}
          <div className="lg:col-span-2 divide-y">
            {items.map((item) => (
              <div key={item.product.id} className="flex gap-6 py-6">
                <div className="w-24 h-24 bg-beautalo-cream rounded-md overflow-hidden flex-shrink-0">
                  {item.product.images[0] && (
                    <img src={item.product.images[0].url} alt={item.product.name} className="w-full h-full object-cover" />
                  )}
                </div>
                
                <div className="flex-1">
                  <h3 className="font-medium text-beautalo-charcoal">{item.product.name}</h3>
                  <p className="text-sm text-beautalo-sage mt-1">Costs ₹{item.product.costPrice} to make</p>
                  
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center border rounded-md">
                      <button onClick={() => updateQuantity(item.product.id, item.quantity - 1)} className="p-2 hover:bg-beautalo-cream">
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="px-4 text-sm font-medium">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.product.id, item.quantity + 1)} className="p-2 hover:bg-beautalo-cream">
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <span className="font-semibold text-beautalo-charcoal">₹{(item.product.price * item.quantity).toFixed(0)}</span>
                      <button onClick={() => removeFromCart(item.product.id)} className="text-beautalo-charcoal/40 hover:text-red-500">
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="bg-beautalo-cream p-6 rounded-lg h-fit">
            <h2 className="text-lg font-semibold text-beautalo-charcoal mb-4">Order Summary</h2>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-beautalo-charcoal/70">Subtotal</span>
                <span className="font-medium text-beautalo-charcoal">₹{subtotal.toFixed(0)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-beautalo-charcoal/70">Shipping</span>
                <span className="font-medium text-beautalo-charcoal">{shipping === 0 ? "Free" : `₹${shipping}`}</span>
              </div>
              {shipping > 0 && (
                <p className="text-xs text-beautalo-sage">Add ₹{(500 - subtotal).toFixed(0)} more for free shipping!</p>
              )}
              <div className="pt-4 border-t mt-4 flex justify-between text-base font-bold text-beautalo-charcoal">
                <span>Total</span>
                <span>₹{total.toFixed(0)}</span>
              </div>
            </div>
            
            <Button className="w-full bg-beautalo-charcoal hover:bg-beautalo-charcoal/90 text-white mt-6 h-12 rounded-md">
              Proceed to Checkout
            </Button>
          </div>
        </div>
      </main>
    </>
  )
}