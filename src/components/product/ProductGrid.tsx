"use client"

import { motion } from "framer-motion"
import { Product } from "@/types/product"
import { ProductCard } from "./ProductCard"
import { ProductSkeleton } from "@/components/shared/ProductSkeleton"

interface ProductGridProps {
  products: Product[]
  isLoading?: boolean
}

export function ProductGrid({ products, isLoading }: ProductGridProps) {
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {[...Array(3)].map((_, i) => (
          <ProductSkeleton key={i} />
        ))}
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {products.map((product, index) => (
        <motion.div
          key={product.id}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: index * 0.15, // Stagger delay!
            ease: [0.22, 1, 0.36, 1]
          }}
        >
          <ProductCard product={product} />
        </motion.div>
      ))}
    </div>
  )
}