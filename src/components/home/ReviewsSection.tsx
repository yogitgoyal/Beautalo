"use client"

import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"

const reviews = [
  {
    name: "Priya S.",
    location: "Mumbai",
    rating: 5,
    text: "I used to spend ₹2,000 on a serum. Beautalo's hydrating serum has the EXACT same texture and ingredients for ₹399. I'm never going back.",
    product: "Hydrating Serum"
  },
  {
    name: "Ananya R.",
    location: "Delhi",
    rating: 5,
    text: "The transparency is what got me. Seeing exactly what it costs to make made me trust them instantly. The SPF moisturizer is now my daily holy grail.",
    product: "SPF Moisturizer"
  },
  {
    name: "Kavya M.",
    location: "Bangalore",
    rating: 5,
    text: "No breakouts, no greasy feeling, and it actually removes makeup. This cleanser is better than my ₹800 luxury brand. Packaging is minimal and cute.",
    product: "Gentle Cleanser"
  }
]

export function ReviewsSection() {
  return (
    <section className="bg-beautalo-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-beautalo-sage mb-4">Real Results</p>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold tracking-tight text-beautalo-charcoal">
            Loved by Real People
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div 
              key={review.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-beautalo-cream p-8 rounded-2xl relative flex flex-col"
            >
              <Quote className="h-8 w-8 text-beautalo-sage/20 mb-4" />
              
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-beautalo-sage text-beautalo-sage" />
                ))}
              </div>
              
              <p className="text-beautalo-charcoal text-sm leading-relaxed flex-1 mb-6">
                &quot;{review.text}&quot;
              </p>
              
              <div className="border-t border-beautalo-border pt-4 flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-beautalo-charcoal">{review.name}</p>
                  <p className="text-xs text-beautalo-muted">{review.location}</p>
                </div>
                <span className="text-[10px] font-medium uppercase tracking-wider text-beautalo-sage bg-beautalo-sage/10 px-2 py-1 rounded-full">
                  {review.product}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}