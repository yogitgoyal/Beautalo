interface CostBreakdownProps {
  rawMaterials: number
  manufacturing: number
  packaging: number
  testing: number
  logistics: number
  totalCost: number
  sellingPrice: number
}

export function CostBreakdown({ rawMaterials, manufacturing, packaging, testing, logistics, totalCost, sellingPrice }: CostBreakdownProps) {
  const savings = sellingPrice - totalCost
  const savingsPercentage = Math.round((savings / sellingPrice) * 100)
  
  return (
    <div className="border rounded-lg p-6 bg-white">
      <h3 className="text-lg font-semibold text-beautalo-charcoal mb-1">Transparent Cost Breakdown</h3>
      <p className="text-sm text-beautalo-charcoal/50 mb-6">We show you exactly what goes into making this product.</p>
      
      <div className="space-y-4">
        <div className="flex justify-between items-center text-sm">
          <span className="text-beautalo-charcoal/70">Raw Materials</span>
          <span className="font-medium text-beautalo-charcoal">₹{rawMaterials}</span>
        </div>
        <div className="flex justify-between items-center text-sm">
          <span className="text-beautalo-charcoal/70">Manufacturing</span>
          <span className="font-medium text-beautalo-charcoal">₹{manufacturing}</span>
        </div>
        <div className="flex justify-between items-center text-sm">
          <span className="text-beautalo-charcoal/70">Packaging</span>
          <span className="font-medium text-beautalo-charcoal">₹{packaging}</span>
        </div>
        <div className="flex justify-between items-center text-sm">
          <span className="text-beautalo-charcoal/70">Quality Testing</span>
          <span className="font-medium text-beautalo-charcoal">₹{testing}</span>
        </div>
        <div className="flex justify-between items-center text-sm">
          <span className="text-beautalo-charcoal/70">Logistics</span>
          <span className="font-medium text-beautalo-charcoal">₹{logistics}</span>
        </div>
        
        <div className="pt-4 border-t">
          <div className="flex justify-between items-center">
            <span className="text-sm font-semibold text-beautalo-charcoal">Total Cost to Make</span>
            <span className="text-sm font-bold text-beautalo-charcoal">₹{totalCost}</span>
          </div>
        </div>
        
        <div className="pt-3 border-t">
          <div className="flex justify-between items-center">
            <span className="text-sm font-semibold text-beautalo-charcoal">Our Price to You</span>
            <span className="text-sm font-bold text-beautalo-charcoal">₹{sellingPrice}</span>
          </div>
        </div>
        
        <div className="mt-2 p-3 bg-beautalo-sage/10 rounded-md border border-beautalo-sage/30">
          <div className="flex justify-between items-center">
            <span className="text-sm font-semibold text-beautalo-sage">You Save vs Luxury</span>
            <span className="text-sm font-bold text-beautalo-sage">
              ₹{savings} ({savingsPercentage}%)
            </span>
          </div>
        </div>
      </div>
      
      <p className="mt-6 text-xs text-beautalo-charcoal/40 leading-relaxed">
        Luxury brands typically mark up products 10-15x their manufacturing cost to cover celebrity endorsements and retail markups. We charge only 2-3x to cover our operations and ensure sustainability.
      </p>
    </div>
  )
}