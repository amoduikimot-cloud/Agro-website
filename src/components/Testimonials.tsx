import { useState } from "react";
import { TESTIMONIALS } from "../data";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";

export default function Testimonials() {
  const [activeIdx, setActiveIdx] = useState(0);

  const handleNext = () => {
    setActiveIdx((activeIdx + 1) % TESTIMONIALS.length);
  };

  const handlePrev = () => {
    setActiveIdx((activeIdx - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  return (
    <section id="testimonials" className="py-24 bg-white relative overflow-hidden">
      {/* Curved decorative background */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#F6D776]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-mono tracking-[0.2em] text-[#2E7D32] uppercase font-bold block">
            PARTNER VOICE
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#7A4E2D] leading-tight flex items-center justify-center gap-3">
            <span className="w-1.5 h-8 bg-[#2E7D32] rounded-full shrink-0"></span>
            Agronomy Reviews
          </h2>
          <div className="h-0.5 w-16 bg-[#F6D776] mx-auto" />
          <p className="text-stone-600 text-sm sm:text-base font-light">
            We support food chains, gourmet tables, eco-organizations, and agricultural families. Here is what they have to say about Agro-Bal stewardship.
          </p>
        </div>

        {/* Testimonials Slider/Selector Content */}
        <div className="max-w-4xl mx-auto relative px-4" id="testimonials-carousel">
          
          {/* Main Slider Display Card */}
          <div className="bg-[#F5F1EA]/50 border border-[#7A4E2D]/10 rounded-3xl p-8 sm:p-12 shadow-md relative">
            <Quote className="absolute top-8 left-8 h-12 w-12 text-[#F6D776]/30 pointer-events-none" />
            
            <div className="space-y-8 relative z-10">
              
              {/* Star rating block */}
              <div className="flex space-x-1 justify-center sm:justify-start">
                {[...Array(TESTIMONIALS[activeIdx].rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-[#F6D776] fill-[#F6D776]" />
                ))}
              </div>

              {/* Quote feedback */}
              <p className="font-display text-lg sm:text-xl md:text-2xl text-[#7A4E2D]/95 font-medium italic leading-relaxed text-center sm:text-left">
                "{TESTIMONIALS[activeIdx].quote}"
              </p>

              {/* User identification */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-6 border-t border-[#7A4E2D]/10">
                <div className="flex items-center space-x-4">
                  <img
                    src={TESTIMONIALS[activeIdx].avatar}
                    alt={TESTIMONIALS[activeIdx].name}
                    className="h-14 w-14 rounded-full border-2 border-[#2E7D32] object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="text-center sm:text-left">
                    <h4 className="font-display font-bold text-base text-[#7A4E2D]">
                      {TESTIMONIALS[activeIdx].name}
                    </h4>
                    <p className="text-xs text-stone-500 font-light">
                      {TESTIMONIALS[activeIdx].role} at{" "}
                      <span className="text-[#2E7D32] font-semibold">
                        {TESTIMONIALS[activeIdx].company}
                      </span>
                    </p>
                  </div>
                </div>

                {/* Slider Controls Inside Card */}
                <div className="flex items-center space-x-2">
                  <button
                    onClick={handlePrev}
                    className="p-2.5 rounded-xl bg-white hover:bg-[#F6D776]/25 text-[#7A4E2D] border border-[#7A4E2D]/10 transition-colors shadow-sm cursor-pointer"
                    aria-label="Previous review"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    onClick={handleNext}
                    className="p-2.5 rounded-xl bg-[#2E7D32] hover:bg-[#7A4E2D] text-white transition-colors shadow-sm cursor-pointer"
                    aria-label="Next review"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>
              </div>

            </div>
          </div>

          {/* Bottom Pagination Dots */}
          <div className="flex items-center justify-center space-x-2 mt-6">
            {TESTIMONIALS.map((t, index) => (
              <button
                key={t.id}
                onClick={() => setActiveIdx(index)}
                className={`h-2 transition-all duration-300 rounded-full cursor-pointer ${
                  activeIdx === index ? "w-8 bg-[#2E7D32]" : "w-2 bg-[#F6D776]/50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
