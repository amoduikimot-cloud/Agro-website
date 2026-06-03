import { useState } from "react";
import { GALLERY_ITEMS } from "../data";
import { Eye, X, ChevronLeft, ChevronRight, Check } from "lucide-react";

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImageIdx, setSelectedImageIdx] = useState<number | null>(null);

  const tags = ["All", "Produce", "Machinery", "Livestock", "Supplies", "Farmhouse"];

  const filteredItems = activeCategory === "All"
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.tag === activeCategory);

  const handleNext = () => {
    if (selectedImageIdx !== null) {
      setSelectedImageIdx((selectedImageIdx + 1) % filteredItems.length);
    }
  };

  const handlePrev = () => {
    if (selectedImageIdx !== null) {
      setSelectedImageIdx((selectedImageIdx - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  return (
    <section id="gallery" className="py-24 bg-brand-cream relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-mono tracking-[0.2em] text-[#2E7D32] uppercase font-bold block">
            VISUAL HARMONY
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#7A4E2D] leading-tight flex items-center justify-center gap-3">
            <span className="w-1.5 h-8 bg-[#2E7D32] rounded-full shrink-0"></span>
            Farm & Fields Gallery
          </h2>
          <div className="h-0.5 w-16 bg-[#F6D776] mx-auto" />
          <p className="text-stone-600 text-sm sm:text-base font-light">
            Take a sensory journey across our active farming operations, certified wildflower meadows, livestock care pastures, and storage cells.
          </p>
        </div>

        {/* Gallery Tag Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {tags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveCategory(tag)}
              className={`px-4 py-2 rounded-full text-xs font-bold tracking-wide transition-all duration-300 cursor-pointer ${
                activeCategory === tag
                  ? "bg-[#7A4E2D] text-white shadow"
                  : "bg-white/50 text-[#7A4E2D]/80 hover:bg-[#F6D776]/15 hover:text-[#7A4E2D] border border-[#7A4E2D]/10"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Interactive Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" id="gallery-grid">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => {
                // Find index of this item in the filtered list
                setSelectedImageIdx(index);
              }}
              className="group relative rounded-3xl overflow-hidden shadow-sm hover:shadow-xl aspect-16/10 cursor-pointer bg-stone-200 border border-brand-yellow/10"
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 scale-100 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              
              {/* Overlay with details */}
              <div className="absolute inset-0 bg-brand-brown/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6 text-white" />
              
              {/* Content overlaid at bottom in hover */}
              <div className="absolute inset-0 flex flex-col justify-between p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 text-white">
                <span className="bg-white/20 backdrop-blur-md self-start border border-white/30 text-[9px] font-mono font-bold uppercase tracking-widest px-2.5 py-1 rounded-full">
                  {item.tag}
                </span>
                
                <div className="space-y-1">
                  <h3 className="font-display font-semibold text-lg">{item.title}</h3>
                  <div className="flex items-center space-x-1.5 text-xs text-brand-yellow">
                    <Eye className="h-3.5 w-3.5" />
                    <span className="font-mono text-[10px] uppercase tracking-wide">View Full-Screen</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Interactive Modal */}
        {selectedImageIdx !== null && (
          <div className="fixed inset-0 z-50 bg-stone-950/95 backdrop-blur-md flex items-center justify-center p-4">
            
            {/* Close Backdrop buttons */}
            <button
              onClick={() => setSelectedImageIdx(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer z-55"
              aria-label="Close Gallery"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Previous controls */}
            <button
              onClick={handlePrev}
              className="absolute left-4 p-3 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors cursor-pointer z-55 hidden sm:block"
              aria-label="Prev image"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            {/* Next controls */}
            <button
              onClick={handleNext}
              className="absolute right-4 p-3 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors cursor-pointer z-55 hidden sm:block"
              aria-label="Next image"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Center Content Box */}
            <div className="max-w-4xl max-h-[80vh] flex flex-col items-center justify-center space-y-4">
              <img
                src={filteredItems[selectedImageIdx].src}
                alt={filteredItems[selectedImageIdx].title}
                className="max-w-full max-h-[70vh] rounded-2xl object-contain shadow-2xl border border-white/10"
                referrerPolicy="no-referrer"
              />
              <div className="text-center text-white space-y-1">
                <span className="text-[10px] font-mono uppercase tracking-widest text-brand-yellow bg-brand-yellow/15 border border-brand-yellow/30 px-3 py-1 rounded-full">
                  {filteredItems[selectedImageIdx].tag}
                </span>
                <p className="font-display text-lg font-bold pt-1">{filteredItems[selectedImageIdx].title}</p>
                <p className="text-stone-400 text-xs font-light">Image {selectedImageIdx + 1} of {filteredItems.length}</p>
              </div>
            </div>

            {/* Mobile swipe info */}
            <div className="absolute bottom-6 left-6 right-6 flex justify-between text-white text-xs font-mono opacity-50 block sm:hidden">
              <button onClick={handlePrev}>← Previous</button>
              <button onClick={handleNext}>Next →</button>
            </div>
            
          </div>
        )}

      </div>
    </section>
  );
}
