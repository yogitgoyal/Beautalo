import Link from "next/link"
import Image from "next/image"
import { Product } from "@/types/product"

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const primaryImage = product.images.find(img => img.isPrimary) || product.images[0]
  
  return (
    <Link href={`/product/${product.slug}`} className="group block card-hover rounded-xl">
      {/* Changed aspect-square to aspect-[3/4] (Tall rectangle) and reduced padding */}
      <div className="relative overflow-hidden rounded-xl bg-beautalo-cream aspect-[3/4] mb-4 flex items-center justify-center p-4">
        {primaryImage ? (
          <Image
            src={primaryImage.url}
            alt={primaryImage.altText || product.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-contain transition-transform duration-700 ease-out group-hover:scale-105"
          />
        ) : (
          <div className="flex items-center justify-center h-full text-beautalo-muted text-sm">
            Product Image
          </div>
        )}
        
        {/* Quick View Hover Overlay */}
        <div className="absolute inset-0 bg-beautalo-charcoal/0 group-hover:bg-beautalo-charcoal/20 transition-all duration-500 flex items-center justify-center pointer-events-none">
          <span className="text-white text-sm font-medium tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-beautalo-charcoal/60 backdrop-blur-sm px-4 py-2 rounded-full">
            View Details
          </span>
        </div>

        {product.compareAtPrice && (
          <div className="absolute top-3 left-3 bg-beautalo-white/90 backdrop-blur-sm text-beautalo-charcoal text-xs font-semibold px-2.5 py-1 rounded-full z-10">
            Save {Math.round((1 - product.price / product.compareAtPrice) * 100)}%
          </div>
        )}
      </div>
      
      <div className="space-y-1.5">
        <h3 className="font-medium text-sm text-beautalo-charcoal group-hover:underline underline-offset-4 decoration-beautalo-charcoal/30">{product.name}</h3>
        <p className="text-xs text-beautalo-muted leading-relaxed line-clamp-2">{product.shortDescription}</p>
        <div className="flex items-center gap-2 pt-1">
          <span className="text-sm font-semibold text-beautalo-charcoal">₹{product.price}</span>
          {product.compareAtPrice && (
            <span className="text-xs text-beautalo-muted/30 line-through">₹{product.compareAtPrice}</span>
          )}
        </div>
        <p className="text-[11px] text-beautalo-sage font-medium tracking-wide uppercase">
          Costs ₹{product.costPrice} to make
        </p>
      </div>
    </Link>
  )
}