import { motion } from "motion/react";
import { ArrowDown, CornerRightDown, ShoppingCart } from "lucide-react";

interface HeroProps {
  onLearnMoreClick: () => void;
}

export default function Hero({ onLearnMoreClick }: HeroProps) {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Drone Farm Landscape Image with Dark Overlap */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://raw.githubusercontent.com/amoduikimot-cloud/Agro-bal-images/1f9cf9c5e1c6535902fd66443eecac91c614a38d/1154%20(1).jpg"
          alt="Premium Farm Background"
          className="w-full h-full object-cover scale-[1.02] filter brightness-[0.75]"
          referrerPolicy="no-referrer"
        />
        {/* Rich dark forest green & vignette overlay to prevent high-brightness eye strain */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#162F1B] via-transparent to-black/40 opacity-85" />
      </div>

      {/* Floating circular ambient background glows */}
      <div className="absolute right-10 top-1/4 w-96 h-96 bg-brand-yellow/10 rounded-full blur-[80px]" />
      <div className="absolute left-10 bottom-1/4 w-80 h-80 bg-brand-green/15 rounded-full blur-[70px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white mt-8">
        {/* Modern Badges */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center space-x-2 bg-[#F6D776]/20 backdrop-blur-md border border-[#F6D776]/30 px-5 py-2 rounded-full mb-6"
        >
          <span className="flex h-2 w-2 rounded-full bg-[#F6D776] animate-ping" />
          <span className="text-[10px] font-mono tracking-[0.2em] uppercase font-extrabold text-[#F6D776]">
            100% PURE BIOLOGICAL EXCELLENCE
          </span>
        </motion.div>

        {/* Elegant Display Headings */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight leading-[1.1] text-white max-w-5xl mx-auto drop-shadow-md"
        >
          Fresh Agricultural <br />
          <span className="text-[#F6D776] italic font-serif">Products You Can Trust</span>
        </motion.h1>

        {/* Dynamic Subheadings */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-6 text-sm sm:text-base md:text-lg text-stone-200 font-sans font-light max-w-2xl mx-auto leading-relaxed drop-shadow-sm opacity-90"
        >
          Agro-Bal provides pasture-raised poultry, organic crop farming, high-performance machinery, and premium fertilizers designed to grow sustainable futures. Excellence rooted in care.
        </motion.p>

        {/* Interactive Call-To-Action Operations */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-lg mx-auto"
        >
          {/* Internal Landing Route */}
          <button
            onClick={onLearnMoreClick}
            className="w-full sm:w-auto px-7 py-3.5 bg-white text-[#2E7D32] hover:bg-[#F6D776] hover:text-[#7A4E2D] text-xs font-bold uppercase tracking-wider rounded-full shadow-lg transition-all duration-300 flex items-center justify-center space-x-2 scale-100 hover:scale-[1.03]"
            id="hero-explore-btn"
          >
            <span>Explore Agro-Bal</span>
            <CornerRightDown className="h-4 w-4" />
          </button>

          {/* External Shopify Outpost */}
          <a
            href="https://shopify.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-7 py-3.5 border border-white/30 bg-white/10 hover:bg-white hover:text-[#7A4E2D] text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-lg transition-all duration-300 flex items-center justify-center space-x-2 scale-100 hover:scale-[1.03]"
            id="hero-store-btn"
          >
            <ShoppingCart className="h-4 w-4" />
            <span>Visit Store</span>
          </a>
        </motion.div>
      </div>

      {/* Floating Scroll Indicator anchor */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 hidden md:block">
        <p className="text-stone-300 font-mono text-[10px] tracking-widest uppercase mb-2 animate-pulse text-center">
          Scroll Down
        </p>
        <button
          onClick={onLearnMoreClick}
          className="flex items-center justify-center w-10 h-10 rounded-full border border-stone-400/40 text-stone-200 hover:text-white hover:border-brand-yellow transition-colors duration-300 mx-auto animate-bounce"
          aria-label="Scroll Down"
          id="hero-bounce-btn"
        >
          <ArrowDown className="h-4 w-4" />
        </button>
      </div>
    </section>
  );
}
