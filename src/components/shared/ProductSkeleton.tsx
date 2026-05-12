export function ProductSkeleton() {
  return (
    <div className="group block">
      <div className="aspect-square bg-beautalo-border rounded-lg mb-4 animate-pulse" />
      <div className="space-y-2">
        <div className="h-4 bg-beautalo-border rounded w-3/4 animate-pulse" />
        <div className="h-3 bg-beautalo-border rounded w-full animate-pulse" />
        <div className="h-3 bg-beautalo-border rounded w-1/2 animate-pulse" />
        <div className="flex gap-2 pt-1">
          <div className="h-4 bg-beautalo-border rounded w-16 animate-pulse" />
          <div className="h-4 bg-beautalo-border rounded w-12 animate-pulse" />
        </div>
      </div>
    </div>
  )
}