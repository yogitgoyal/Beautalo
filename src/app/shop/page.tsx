import { Header } from "@/components/layout/Header"
import { prisma } from "@/lib/prisma"
import { ProductGrid } from "@/components/product/ProductGrid"

async function getProducts() {
  try {
    return await prisma.product.findMany({
      where: { status: "ACTIVE" },
      include: { images: true, costBreakdown: true },
    })
  } catch { return [] }
}

export default async function ShopPage() {
  const products = await getProducts()

  return (
    <>
      <Header />
      <main className="bg-beautalo-white min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-beautalo-charcoal mb-4">
              Honest Skincare
            </h1>
            <p className="text-lg text-beautalo-muted max-w-xl mx-auto">
              Formulated in the same labs as luxury brands. Without the luxury markup.
            </p>
          </div>

          {products.length === 0 ? (
            <div className="text-center py-20 border-2 border-dashed border-beautalo-border rounded-2xl">
              <h2 className="text-xl font-medium text-beautalo-charcoal mb-2">Products coming soon</h2>
              <p className="text-beautalo-muted mb-6">We are finalizing our first 3 hero SKUs.</p>
              <a href="/waitlist" className="text-sm font-medium text-beautalo-sage hover:underline">
                Join the waitlist to get notified →
              </a>
            </div>
          ) : (
            <ProductGrid products={products} />
          )}
        </div>
      </main>
    </>
  )
}