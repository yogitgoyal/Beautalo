"use client"

import { motion } from "framer-motion"
import { ShieldCheck, Factory, Users } from "lucide-react"

export function TransparencySection() {
  return (
    <section className="bg-beautalo-cream py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold tracking-tight text-beautalo-charcoal mb-6">
            Beauty Without The BS
          </h2>
          <p className="text-lg text-beautalo-muted max-w-2xl mx-auto">
            We show you exactly what you&apos;re paying for. No hidden costs, no celebrity premiums.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {[
            { icon: Factory, title: "Same Luxury Labs", desc: "Switzerland, Korea, Japan — the same facilities that produce ₹2,000+ products." },
            { icon: ShieldCheck, title: "No Middlemen", desc: "0% markup — direct from lab to customer. You save the entire retailer margin." },
            { icon: Users, title: "No Celebrity Ads", desc: "Community marketing only. We don't pass on 30-40% celebrity endorsement costs to you." }
          ].map((item, index) => (
            <motion.div 
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-beautalo-white p-8 rounded-2xl shadow-sm border border-beautalo-border text-center"
            >
              <div className="w-14 h-14 rounded-full bg-beautalo-sage/10 flex items-center justify-center mx-auto mb-5">
                <item.icon className="h-7 w-7 text-beautalo-sage" />
              </div>
              <h3 className="text-xl font-semibold text-beautalo-charcoal mb-3">{item.title}</h3>
              <p className="text-beautalo-muted leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Cost Comparison from Pitch Deck */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto bg-beautalo-white p-8 md:p-10 rounded-2xl shadow-lg border border-beautalo-border"
        >
          <h3 className="text-center text-2xl font-bold text-beautalo-charcoal mb-8">The Real Cost Breakdown</h3>
          <div className="space-y-6">
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="font-medium text-beautalo-charcoal">Traditional Luxury Brand</span>
                <span className="font-bold text-red-500">₹2,000+ Retail</span>
              </div>
              <div className="w-full bg-red-50 rounded-full h-3 border border-red-100">
                <div className="bg-red-400 h-3 rounded-full" style={{width: '15%'}}></div>
              </div>
              <p className="text-xs text-red-400 mt-1 text-right">10-20% goes to ingredients</p>
            </div>

            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="font-medium text-beautalo-charcoal">Beautalo</span>
                <span className="font-bold text-beautalo-sage">₹299 - ₹399 Retail</span>
              </div>
              <div className="w-full bg-green-50 rounded-full h-3 border border-green-100">
                <div className="bg-beautalo-sage h-3 rounded-full" style={{width: '45%'}}></div>
              </div>
              <p className="text-xs text-beautalo-sage mt-1 text-right">40-50% goes to premium ingredients</p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}