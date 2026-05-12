import type { Metadata } from "next"
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google" // ADDED PLAYFAIR
import { Toaster } from "@/components/ui/sonner"
import { CartProvider } from "@/store/CartContext"
import { Footer } from "@/components/layout/Footer"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

// Luxury Serif Font for Headlines
const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
})

export const metadata: Metadata = {
  title: "Beautalo | Luxury Beauty, Fair Prices",
  description: "Same labs. Same quality. 60% lower prices. No middlemen, no celebrity marketing, just honest skincare.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      {/* Added the playfair variable here */}
      <body className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} antialiased flex flex-col min-h-screen`}>
        <CartProvider>
          <div className="flex-1">
            <Toaster />
            {children}
          </div>
          <Footer />
        </CartProvider>
      </body>
    </html>
  )
}