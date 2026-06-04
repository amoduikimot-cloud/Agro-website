import { useState } from "react";
import { FEATURED_PRODUCTS } from "../data";
import { ShoppingBag, Star, HelpCircle, CheckCircle } from "lucide-react";

export default function ProductsPreview() {
  const [activeTab, setActiveTab] = useState("All");

  const categories = ["All", "Vitamin, Mineral & Supplies", "Poultry & Livestock", "Seeds, Agrochemical & Beekeeping", "Pet & Veterinary Equipment"];

  const filteredProducts = activeTab === "All"
    ? FEATURED_PRODUCTS
    : FEATURED_PRODUCTS.filter(p => p.category === activeTab);

  return (
    <section id="products" className="py-24 bg-brand-cream relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-mono tracking-[0.2em] text-[#2E7D32] uppercase font-bold block">
            THE AGRO-BAL HARVEST
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#7A4E2D] leading-tight flex items-center justify-center gap-3">
            <span className="w-1.5 h-8 bg-[#2E7D32] rounded-full shrink-0"></span>
            Featured Products
          </h2>
          <div className="h-0.5 w-16 bg-[#F6D776] mx-auto" />
          <p className="text-stone-600 text-sm sm:text-base font-light font-sans">
            A handpicked selection of our seasonal favorites. Click any item to explore pricing and complete your secure order on our external Shopify store.
          </p>
        </div>

        {/* Dynamic Category Filtering Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold tracking-wide transition-all duration-300 cursor-pointer ${
                activeTab === cat
                  ? "bg-[#2E7D32] text-white shadow-md scale-[1.03]"
                  : "bg-white/50 text-[#7A4E2D]/80 hover:bg-[#F6D776]/20 hover:text-[#7A4E2D] border border-[#7A4E2D]/10 hover:border-[#7A4E2D]/20"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map((p) => (
            <div
              key={p.id}
              className="bg-white rounded-3xl overflow-hidden border border-[#7A4E2D]/10 shadow-sm hover:shadow-xl hover:translate-y-[-4px] transition-all duration-300 flex flex-col justify-between group"
              id={`product-card-${p.id}`}
            >
              {/* Product Cover image */}
              <div className="relative aspect-square overflow-hidden bg-[#F5F1EA]/50">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  referrerPolicy="no-referrer"
                />
                
                {/* Category tag */}
                <div className="absolute top-4 left-4">
                  <span className="bg-white/95 backdrop-blur-md text-[#7A4E2D] border border-[#7A4E2D]/10 text-[9px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-xs">
                    {p.category.split(" ").pop()}
                  </span>
                </div>

                {/* Stars */}
                <div className="absolute top-4 right-4 flex bg-[#2E7D32] text-[#F6D776] space-x-0.5 px-2 py-1 rounded-full text-[10px] font-bold shadow-xs items-center">
                  <Star className="h-3 w-3 fill-[#F6D776] text-[#F6D776]" />
                  <span>5.0</span>
                </div>
              </div>

              {/* Product Content Details */}
              <div className="p-6 space-y-5 flex-grow flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex justify-between items-start gap-2">
                    <h3 className="font-display font-bold text-base text-[#7A4E2D] leading-tight h-10 flex items-center">
                      {p.title}
                    </h3>
                    <p className="font-mono text-xs font-bold text-[#2E7D32] bg-[#2E7D32]/5 px-2 py-1 rounded-md shrink-0">
                      {p.priceEstimate}
                    </p>
                  </div>
                  <p className="text-xs text-stone-600 font-light leading-relaxed">
                    {p.description}
                  </p>
                </div>

                {/* Sub features Bullet lists */}
                <ul className="space-y-1.5 py-4 border-y border-[#7A4E2D]/10 text-[11px] text-stone-700">
                  {p.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center space-x-1.5">
                      <span className="text-[#2E7D32] h-1.5 w-1.5 bg-[#2E7D32] rounded-full shrink-0" />
                      <span className="truncate">{detail}</span>
                    </li>
                  ))}
                </ul>

                {/* Shopify Redirection Button */}
                <a
                  href={p.shopifyUrlPlaceholder}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 bg-[#2E7D32] hover:bg-[#1f5c22] text-white hover:text-[#F6D776] font-bold text-xs uppercase tracking-wider rounded-full shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <ShoppingBag className="h-3.5 w-3.5" />
                  <span>Buy on Shopify</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Informative Disclaimer */}
        <div className="mt-12 flex items-center justify-center space-x-2 text-stone-500 max-w-md mx-auto bg-white/60 rounded-full py-3 px-6 border border-[#7A4E2D]/10 text-[11px] text-center shadow-xs">
          <CheckCircle className="h-3.5 w-3.5 text-[#2E7D32] shrink-0" />
          <span className="font-medium">Direct secure checklist processing will run on our official Shopify storefront.</span>
        </div>

      </div>
    </section>
  );
}
