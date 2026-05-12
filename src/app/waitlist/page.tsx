"use client"

import { useState } from "react"
import { Header } from "@/components/layout/Header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { toast } from "sonner"

export default function WaitlistPage() {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsLoading(true)
    
    const response = await fetch("/api/waitlist", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    })

    const data = await response.json()
    
    if (response.ok) {
      toast.success(data.message)
      setEmail("")
    } else {
      toast.error("Something went wrong. Try again.")
    }
    
    setIsLoading(false)
  }

  return (
    <>
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-[80vh] flex items-center justify-center">
        <div className="max-w-md w-full text-center py-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-veer-black mb-6">
            Join the Waitlist
          </h1>
          <p className="text-lg text-veer-black/70 mb-8">
            Be the first to know when we launch. Early subscribers get 15% off their first order.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input 
              type="email" 
              placeholder="Enter your email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 h-12"
            />
            <Button 
              type="submit" 
              disabled={isLoading}
              className="bg-veer-black hover:bg-veer-black/90 text-white h-12 px-6 rounded-md"
            >
              {isLoading ? "Joining..." : "Join Waitlist"}
            </Button>
          </form>
          
          <p className="mt-4 text-xs text-veer-black/40">
            No spam, ever. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </>
  )
}