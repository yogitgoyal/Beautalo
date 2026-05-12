export interface Product {
  id: string
  name: string
  slug: string
  description: string
  shortDescription: string | null
  price: number
  compareAtPrice: number | null
  costPrice: number
  sku: string
  stock: number
  features: any
  ingredients: any
  howToUse: string | null
  status: string
  images: ProductImage[]
  costBreakdown: CostBreakdown | null
}

export interface ProductImage {
  id: string
  url: string
  altText: string | null
  isPrimary: boolean
}

export interface CostBreakdown {
  id: string
  rawMaterials: number
  manufacturing: number
  packaging: number
  testing: number
  logistics: number
  totalCost: number
}