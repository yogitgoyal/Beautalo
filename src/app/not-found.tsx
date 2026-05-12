import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="min-h-[80vh] bg-beautalo-cream flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-8xl font-bold text-beautalo-border mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-beautalo-charcoal mb-2">Page not found</h2>
        <p className="text-beautalo-muted mb-8 max-w-md mx-auto">
          The page you are looking for doesn&apos;t exist or has been moved. Let&apos;s get you back to some great skincare.
        </p>
        <Link href="/shop">
          <Button className="bg-beautalo-charcoal hover:bg-beautalo-charcoal/90 text-white rounded-md px-8 py-3">
            Back to Shop
          </Button>
        </Link>
      </div>
    </div>
  )
}