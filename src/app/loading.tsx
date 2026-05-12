export default function Loading() {
  return (
    <div className="min-h-screen bg-beautalo-cream flex items-center justify-center">
      <div className="flex flex-col items-center space-y-4">
        {/* Minimal spinning circle */}
        <div className="w-8 h-8 border-2 border-beautalo-border border-t-beautalo-sage rounded-full animate-spin"></div>
        <p className="text-sm text-beautalo-muted font-medium tracking-wide uppercase">Loading...</p>
      </div>
    </div>
  )
}