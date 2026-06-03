import { CATEGORIES } from "../data";
import { ArrowUpRight, Check } from "lucide-react";

export default function Categories() {
  return (
    <section id="categories" className="py-24 bg-white relative">
      <div className="absolute top-0 right-0 left-0 h-24 bg-gradient-to-b from-brand-cream/80 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-mono tracking-[0.2em] text-[#2E7D32] uppercase font-bold block">
            OUR SPECIALTIES
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#7A4E2D] leading-tight flex items-center justify-center gap-3">
            <span className="w-1.5 h-8 bg-[#2E7D32] rounded-full shrink-0"></span>
            Agricultural Categories
          </h2>
          <div className="h-0.5 w-16 bg-[#F6D776] mx-auto" />
          <p className="text-stone-600 text-sm sm:text-base font-light">
            We source, formulate, and raise every category item according to the strict biological standards of traditional farming combined with modern supply-chain precision.
          </p>
        </div>

        {/* Categories Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {CATEGORIES.map((category) => (
            <div
              key={category.id}
              className="group bg-[#F5F1EA] rounded-3xl overflow-hidden border border-[#F6D776]/60 hover:border-[#2E7D32]/50 hover:bg-white shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer"
              id={`category-card-${category.id}`}
            >
              {/* Category Image Cover */}
              <div className="relative overflow-hidden aspect-4/3">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover transition-transform duration-500 scale-100 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#7A4E2D]/80 via-transparent to-transparent opacity-90" />
                
                {/* Visual Accent Badge */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                  <span className="font-display text-lg font-bold">
                    {category.title.split(" ").pop()}
                  </span>
                  <div className="bg-white/20 backdrop-blur-md rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ArrowUpRight className="h-4 w-4 text-[#F6D776]" />
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 space-y-6 flex-grow flex flex-col justify-between">
                <div className="space-y-3">
                  <h3 className="font-display font-bold text-lg text-[#7A4E2D] group-hover:text-[#2E7D32] transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-light">
                    {category.description}
                  </p>
                </div>

                {/* Bullets pointers */}
                <ul className="space-y-2 pt-4 border-t border-[#7A4E2D]/10">
                  {category.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-2 text-xs text-[#7A4E2D]/90 font-medium">
                      <span className="w-1.5 h-1.5 bg-[#F6D776] rounded-full mt-2 shrink-0"></span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner with redirection */}
        <div className="mt-16 bg-brand-yellow/10 border border-brand-yellow/20 rounded-3xl p-8 max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left space-y-1">
            <h4 className="font-display font-bold text-lg text-brand-brown">Looking for something specific?</h4>
            <p className="text-xs text-stone-600 font-light">We offer complete custom sourcing for agricultural co-operatives and culinary kitchens.</p>
          </div>
          <a
            href="#contact"
            className="whitespace-nowrap px-6 py-3 bg-brand-brown hover:bg-brand-green text-white font-semibold text-sm rounded-xl shadow-md transition-colors duration-200"
          >
            Inquire For Custom Orders
          </a>
        </div>

      </div>
    </section>
  );
}
