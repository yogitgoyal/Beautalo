"use client"

import { motion } from "framer-motion"
import { Check, X } from "lucide-react"

export function ComparisonSection() {
  return (
    <section className="bg-beautalo-cream py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-beautalo-sage mb-4">The Honest Truth</p>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold tracking-tight text-beautalo-charcoal">
            How We Compare
          </h2>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-beautalo-white rounded-2xl shadow-sm border border-beautalo-border overflow-hidden"
        >
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-beautalo-border">
                <th className="text-left p-6 font-medium text-beautalo-muted">Feature</th>
                <th className="p-6 font-bold text-beautalo-sage bg-beautalo-sage/5">Beautalo</th>
                <th className="p-6 font-medium text-beautalo-muted hidden sm:table-cell">Luxury Brands</th>
                <th className="p-6 font-medium text-beautalo-muted hidden md:table-cell">Minimalist/Sugar</th>
              </tr>
            </thead>
            <tbody>
              {[
                { feature: "Price Point", us: "₹299 - ₹399", them: "₹800 - ₹2,000+", them2: "₹400 - ₹900" },
                { feature: "Manufacturing Markup", us: "2-3x (Fair)", them: "10-15x (Hidden)", them2: "6-8x" },
                { feature: "Same Labs as Luxury?", us: true, them: true, them2: false },
                { feature: "Transparent Cost Breakdown", us: true, them: false, them2: false },
                { feature: "Celebrity Ad Costs Passed to You?", us: false, them: true, them2: true },
                { feature: "Retailer Middlemen Markup", us: false, them: true, them2: true },
              ].map((row, i) => (
                <tr key={i} className="border-b border-beautalo-border last:border-0">
                  <td className="p-5 text-beautalo-charcoal font-medium">{row.feature}</td>
                  <td className="p-5 text-center bg-beautalo-sage/5 text-beautalo-charcoal font-semibold">
                    {typeof row.us === "boolean" ? (
                      row.us ? <Check className="h-5 w-5 text-beautalo-sage mx-auto" /> : <X className="h-5 w-5 text-red-400 mx-auto" />
                    ) : (
                      row.us
                    )}
                  </td>
                  <td className="p-5 text-center text-beautalo-muted hidden sm:table-cell">
                    {typeof row.them === "boolean" ? (
                      row.them ? <X className="h-5 w-5 text-red-400 mx-auto" /> : <Check className="h-5 w-5 text-beautalo-sage mx-auto" />
                    ) : (
                      row.them
                    )}
                  </td>
                  <td className="p-5 text-center text-beautalo-muted hidden md:table-cell">
                    {typeof row.them2 === "boolean" ? (
                      row.them2 ? <Check className="h-5 w-5 text-beautalo-sage mx-auto" /> : <X className="h-5 w-5 text-red-400 mx-auto" />
                    ) : (
                      row.them2
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  )
}