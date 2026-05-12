"use client"

import { useState } from "react"
import Link from "next/link"
import { Header } from "@/components/layout/Header"
import { useCart } from "@/store/CartContext"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowLeft, Lock, ShieldCheck } from "lucide-react"

export default function CheckoutPage() {
  const { items, subtotal } = useCart()
  const [isLoading, setIsLoading] = useState(false)

  const shipping = subtotal > 500 ? 0 : 50
  const total = subtotal + shipping

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // In a real app, this calls Stripe/Razorpay here
    setTimeout(() => {
      alert("Payment gateway integration is the next step! But the UI is perfect.")
      setIsLoading(false)
    }, 2000)
  }

  if (items.length === 0) {
    return (
      <>
        <Header />
        <div className="max-w-7xl mx-auto px-4 py-24 text-center">
          <p className="text-beautalo-charcoal/60 mb-4">Your cart is empty.</p>
          <Link href="/shop" className="text-sm font-medium text-beautalo-sage hover:underline">
            Continue Shopping
          </Link>
        </div>
      </>
    )
  }

  return (
    <>
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link href="/cart" className="inline-flex items-center gap-2 text-sm text-beautalo-charcoal/60 hover:text-beautalo-charcoal mb-8">
          <ArrowLeft className="h-4 w-4" />
          Back to Cart
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left: Form */}
          <div className="lg:col-span-7">
            <h1 className="text-2xl font-bold text-beautalo-charcoal mb-8">Checkout</h1>
            <form onSubmit={handleSubmit} className="space-y-8">

              {/* Contact Info */}
              <div>
                <h2 className="text-sm font-semibold text-beautalo-charcoal mb-4 uppercase tracking-wider">Contact Information</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="you@example.com" required className="h-11" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" type="tel" placeholder="+91 XXXXX XXXXX" required className="h-11" />
                  </div>
                </div>
              </div>

              {/* Shipping Address */}
              <div>
                <h2 className="text-sm font-semibold text-beautalo-charcoal mb-4 uppercase tracking-wider">Shipping Address</h2>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" required className="h-11" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" required className="h-11" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="address">Address</Label>
                    <Input id="address" placeholder="House number and street name" required className="h-11" />
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    <div className="space-y-2 col-span-2 sm:col-span-1">
                      <Label htmlFor="city">City</Label>
                      <Input id="city" required className="h-11" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="state">State</Label>
                      <Input id="state" required className="h-11" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="pincode">PIN Code</Label>
                      <Input id="pincode" required className="h-11" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Payment (UI Only for now) */}
              <div>
                <h2 className="text-sm font-semibold text-beautalo-charcoal mb-4 uppercase tracking-wider">Payment</h2>
                <div className="border rounded-lg p-6 bg-beautalo-cream/50 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-7 bg-beautalo-charcoal rounded flex items-center justify-center">
                      <span className="text-white text-[10px] font-bold">UPI</span>
                    </div>
                    <div className="w-10 h-7 bg-blue-600 rounded flex items-center justify-center">
                      <span className="text-white text-[10px] font-bold">VISA</span>
                    </div>
                    <div className="w-10 h-7 bg-red-500 rounded flex items-center justify-center">
                      <span className="text-white text-[10px] font-bold">MC</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="card">Card Number / UPI ID</Label>
                    <Input id="card" placeholder="4242 4242 4242 4242" required className="h-11 font-mono" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="expiry">Expiry</Label>
                      <Input id="expiry" placeholder="MM / YY" required className="h-11 font-mono" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="cvc">CVC</Label>
                      <Input id="cvc" placeholder="123" required className="h-11 font-mono" />
                    </div>
                  </div>
                </div>
              </div>

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-beautalo-charcoal hover:bg-beautalo-charcoal/90 text-white h-12 rounded-md text-base mt-4"
              >
                {isLoading ? "Processing..." : `Pay ₹${total.toFixed(0)}`}
              </Button>
            </form>
          </div>

          {/* Right: Order Summary Sidebar */}
          <div className="lg:col-span-5">
            <div className="bg-beautalo-cream p-6 rounded-lg sticky top-24">
              <h2 className="text-lg font-semibold text-beautalo-charcoal mb-6">Order Summary</h2>

              <div className="space-y-4 mb-6">
                {items.map((item) => (
                  <div key={item.product.id} className="flex gap-4">
                    <div className="relative w-16 h-16 bg-beautalo-cream rounded-md border border-beautalo-border flex-shrink-0 flex items-center justify-center p-1">
                      {item.product.images[0] && (
                        <img src={item.product.images[0].url} alt={item.product.name} className="max-w-full max-h-full object-contain" />
                      )}
                      <div className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-beautalo-charcoal text-white flex items-center justify-center text-[10px] font-bold">
                        {item.quantity}
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-medium text-beautalo-charcoal truncate">{item.product.name}</h4>
                      <p className="text-xs text-beautalo-sage">Costs ₹{item.product.costPrice} to make</p>
                    </div>
                    <p className="text-sm font-medium text-beautalo-charcoal">₹{(item.product.price * item.quantity).toFixed(0)}</p>
                  </div>
                ))}
              </div>

              <div className="space-y-3 text-sm border-t pt-4">
                <div className="flex justify-between text-beautalo-charcoal/70">
                  <span>Subtotal</span>
                  <span>₹{subtotal.toFixed(0)}</span>
                </div>
                <div className="flex justify-between text-beautalo-charcoal/70">
                  <span>Shipping</span>
                  <span>{shipping === 0 ? <span className="text-beautalo-sage font-medium">Free</span> : `₹${shipping}`}</span>
                </div>
                <div className="flex justify-between text-base font-bold text-beautalo-charcoal pt-3 border-t">
                  <span>Total</span>
                  <span>₹{total.toFixed(0)}</span>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t flex items-center gap-2 text-xs text-beautalo-charcoal/50">
                <Lock className="h-3.5 w-3.5" />
                <span>Encrypted and secure checkout</span>
              </div>
              <div className="mt-2 flex items-center gap-2 text-xs text-beautalo-charcoal/50">
                <ShieldCheck className="h-3.5 w-3.5" />
                <span>100% Money-back guarantee</span>
              </div>
            </div>
          </div>

        </div>
      </main>
    </>
  )
}