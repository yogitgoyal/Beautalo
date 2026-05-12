"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { CostBreakdown } from "@/components/product/CostBreakdown"
import { AddToCartButton } from "@/components/product/AddToCartButton"
import { Check } from "lucide-react"
import { Product } from "@/types/product"

export function ProductDetailsClient({ product }: { product: Product }) {
  const [selectedImage, setSelectedImage] = useState(product.images[0]?.url || "")

  return (
    <main className="bg-beautalo-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <Link href="/shop" className="text-sm text-beautalo-muted hover:text-beautalo-charcoal mb-8 inline-block">
          ← Back to Shop
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image Gallery Section */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="aspect-square bg-beautalo-cream rounded-2xl overflow-hidden relative flex items-center justify-center p-8">
              <Image
                src={selectedImage}
                alt={product.name}
                fill
                className="object-contain drop-shadow-lg"
                priority
              />
            </div>
            {/* Thumbnails */}
            {product.images.length > 1 && (
              <div className="flex gap-3">
                {product.images.map((img) => (
                  <button
                    key={img.id}
                    onClick={() => setSelectedImage(img.url)}
                    className={`w-20 h-20 rounded-lg bg-beautalo-cream border-2 transition-all flex items-center justify-center p-1 ${
                      selectedImage === img.url ? 'border-beautalo-sage' : 'border-transparent opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={img.url} alt={img.altText || ""} className="max-w-full max-h-full object-contain" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info Section */}
          <div className="space-y-6 lg:py-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-beautalo-sage mb-3">Beautalo</p>
              <h1 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold text-beautalo-charcoal mb-3">{product.name}</h1>
              <p className="text-beautalo-muted leading-relaxed">{product.shortDescription}</p>
            </div>

            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-bold text-beautalo-charcoal">₹{product.price}</span>
              {product.compareAtPrice && (
                <span className="text-lg text-beautalo-muted/40 line-through">₹{product.compareAtPrice}</span>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {product.features.split(", ").map((feature) => (
                <div key={feature} className="flex items-center gap-2 text-sm text-beautalo-muted">
                  <Check className="h-4 w-4 text-beautalo-sage flex-shrink-0" />
                  {feature}
                </div>
              ))}
            </div>

            <AddToCartButton product={product} />

            <div className="pt-6 border-t border-beautalo-border">
              <h3 className="text-sm font-semibold text-beautalo-charcoal mb-3">Key Ingredients</h3>
              <div className="flex flex-wrap gap-2">
                {product.ingredients.split(", ").map((ingredient) => (
                  <span key={ingredient} className="ingredient-pill">{ingredient}</span>
                ))}
              </div>
            </div>

            {product.howToUse && (
              <div className="pt-6 border-t border-beautalo-border">
                <h3 className="text-sm font-semibold text-beautalo-charcoal mb-3">How to Use</h3>
                <p className="text-sm text-beautalo-muted leading-relaxed">{product.howToUse}</p>
              </div>
            )}
          </div>
        </div>

        {/* Cost Breakdown */}
        <div className="mt-16 max-w-2xl mx-auto">
          {product.costBreakdown && (
            <CostBreakdown 
              rawMaterials={product.costBreakdown.rawMaterials}
              manufacturing={product.costBreakdown.manufacturing}
              packaging={product.costBreakdown.packaging}
              testing={product.costBreakdown.testing}
              logistics={product.costBreakdown.logistics}
              totalCost={product.costBreakdown.totalCost}
              sellingPrice={product.price}
            />
          )}
        </div>
      </div>
    </main>
  )
}