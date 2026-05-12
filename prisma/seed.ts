import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function main() {
  console.log("🌱 Seeding database with Beautalo products...")

  const cleanser = await prisma.product.create({
    data: {
      name: "Beautalo Gentle Cleanser",
      slug: "gentle-cleanser",
      description: "A micro-foaming gel cleanser that melts away makeup, oil, and impurities without stripping your skin's natural moisture barrier. Formulated with soothing Aloe Vera and Glycerin to leave skin feeling soft, balanced, and never tight.",
      shortDescription: "Daily essential, all skin types. No tight feeling.",
      price: 299,
      compareAtPrice: 750,
      costPrice: 100,
      sku: "B-CLEAN-001",
      stock: 500,
      features: "Dermatologist tested, Safe for sensitive skin, Sulfate-free formula, Vegan & Cruelty-free",
      ingredients: "Aloe Barbadensis Leaf Juice, Glycerin, Coco-Glucoside, Sodium Cocoyl Isethionate, Panthenol (Vitamin B5)",
      howToUse: "Massage onto damp skin in circular motions. Rinse thoroughly with lukewarm water. Use morning and night.",
      status: "ACTIVE",
      images: {
        create: [
          { url: "/images/products/cleanser.png", altText: "Beautalo Gentle Cleanser", isPrimary: true },
          { url: "/images/products/cleanser.png", altText: "Beautalo Gentle Cleanser Back" }
        ]
      },
      costBreakdown: { create: { rawMaterials: 45, manufacturing: 25, packaging: 18, testing: 7, logistics: 5, totalCost: 100 } }
    }
  })

  const serum = await prisma.product.create({
    data: {
      name: "Beautalo Hydrating Serum",
      slug: "hydrating-serum",
      description: "A lightweight, fast-absorbing power serum combining 2% Hyaluronic Acid to pull moisture deep into the skin, and 5% Niacinamide to minimize pores and even out skin tone. Plumps fine lines instantly.",
      shortDescription: "Hyaluronic Acid + Niacinamide. Plumps and smooths.",
      price: 399,
      compareAtPrice: 1200,
      costPrice: 130,
      sku: "B-SERUM-002",
      stock: 500,
      features: "Clinically proven ingredients, Lightweight non-sticky texture, Fragrance-free, Paraben-free",
      ingredients: "Aqua, 2% Sodium Hyaluronate, 5% Niacinamide, Pentylene Glycol, Xanthan Gum, Allantoin",
      howToUse: "Apply 3-4 drops to clean, slightly damp skin. Gently pat into face and neck. Follow with moisturizer. Use morning and night.",
      status: "ACTIVE",
      images: {
        create: [
          { url: "/images/products/serum.png", altText: "Beautalo Hydrating Serum", isPrimary: true },
          { url: "/images/products/serum.png", altText: "Beautalo Hydrating Serum Dropper" }
        ]
      },
      costBreakdown: { create: { rawMaterials: 60, manufacturing: 35, packaging: 22, testing: 8, logistics: 5, totalCost: 130 } }
    }
  })

  const moisturizer = await prisma.product.create({
    data: {
      name: "Beautalo Moisturizer SPF 30",
      slug: "moisturizer-spf-30",
      description: "A hydrating, lightweight cream that delivers deep moisture while providing broad-spectrum SPF 30 protection. Acts as your moisturizer and sunscreen in one step, leaving a perfect matte finish with no white cast.",
      shortDescription: "Hydration + SPF 30 in one. Zero white cast, matte finish.",
      price: 349,
      compareAtPrice: 900,
      costPrice: 110,
      sku: "B-MOIST-003",
      stock: 500,
      features: "Broad Spectrum SPF 30, Zero white cast, Lightweight matte finish, Non-comedogenic",
      ingredients: "Aqua, Zinc Oxide (5%), Octinoxate (3%), Caprylic/Capric Triglyceride, Niacinamide, Squalane",
      howToUse: "Apply generously as the last step of your morning skincare routine, 15 minutes before sun exposure. Reapply every 2 hours.",
      status: "ACTIVE",
      images: {
        create: [
          { url: "/images/products/moisturizer.png", altText: "Beautalo SPF Moisturizer", isPrimary: true },
          { url: "/images/products/moisturizer.png", altText: "Beautalo SPF Moisturizer Texture" }
        ]
      },
      costBreakdown: { create: { rawMaterials: 50, manufacturing: 30, packaging: 20, testing: 6, logistics: 4, totalCost: 110 } }
    }
  })

  console.log("✅ Successfully seeded Beautalo products!")
}

main().catch((e) => { console.error(e); process.exit(1) }).finally(async () => { await prisma.$disconnect() })