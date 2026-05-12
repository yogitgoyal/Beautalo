import { notFound } from "next/navigation"
import { prisma } from "@/lib/prisma"
import { Header } from "@/components/layout/Header"
import { ProductDetailsClient } from "@/components/product/ProductDetailsClient"

async function getProduct(slug: string) {
  try {
    return await prisma.product.findUnique({
      where: { slug },
      include: { images: true, costBreakdown: true },
    })
  } catch { return null }
}

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id: slug } = await params
  const product = await getProduct(slug)
  
  if (!product) notFound()

  return (
    <>
      <Header />
      <ProductDetailsClient product={product} />
    </>
  )
}