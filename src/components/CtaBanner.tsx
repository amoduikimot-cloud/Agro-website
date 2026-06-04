import { ShoppingCart, HeartHandshake } from "lucide-react";

export default function CtaBanner() {
  return (
    <section id="cta-banner" className="py-20 relative overflow-hidden bg-brand-brown text-white">
      {/* Absolute background visual details */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://raw.githubusercontent.com/amoduikimot-cloud/Agro-bal-images/1f9cf9c5e1c6535902fd66443eecac91c614a38d/1154%20(1).jpg"
          alt="Scenic farmland landscape"
          className="w-full h-full object-cover opacity-15 filter grayscale contrast-125"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-brown/100 via-brand-brown/85 to-brand-brown/70" />
      </div>

      {/* Glow rings */}
      <div className="absolute left-[-150px] top-[-150px] w-96 h-96 border border-brand-yellow/10 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute right-[-150px] bottom-[-150px] w-96 h-96 border border-brand-yellow/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="inline-flex bg-[#F6D776]/20 border border-[#F6D776]/30 rounded-full p-2.5 text-[#F6D776] mb-2 animate-bounce">
            <HeartHandshake className="h-6 w-6" />
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl tracking-tight leading-tight text-white drop-shadow-md">
            Ready To Explore Quality <br className="hidden sm:inline" />
            Agricultural Products?
          </h2>

          <p className="text-stone-200 font-sans font-light text-sm sm:text-base leading-relaxed max-w-xl mx-auto opacity-95">
            Browse our fresh organic produce catalog, premium bio-growers, and high-efficiency farming tools on our secure shopping hub on Shopify.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://shopify.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-[#F6D776] hover:bg-[#ebcc6e] text-[#7A4E2D] font-bold text-xs uppercase tracking-wider rounded-full shadow-lg transition-all duration-300 flex items-center justify-center space-x-2.5 scale-100 hover:scale-[1.03]"
              id="cta-shopify-link"
            >
              <ShoppingCart className="h-4 w-4" />
              <span>Visit Our Shopify Store</span>
            </a>
            
            <a
              href="#contact"
              className="w-full sm:w-auto px-8 py-4 border border-white/30 bg-white/10 hover:bg-white hover:text-[#7A4E2D] text-white font-bold text-xs uppercase tracking-wider rounded-full transition-all duration-300 block"
            >
              Consult an Expert
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
