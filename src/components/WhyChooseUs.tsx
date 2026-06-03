import { WHY_CHOOSE_US_ITEMS } from "../data";
import { Award, Truck, Heart, Coins, ShieldCheck } from "lucide-react";

export default function WhyChooseUs() {
  // Map icons dynamically
  const getIcon = (name: string) => {
    switch (name) {
      case "Award":
        return <Award className="h-6 w-6" />;
      case "Truck":
        return <Truck className="h-6 w-6" />;
      case "Heart":
        return <Heart className="h-6 w-6" />;
      case "Coins":
        return <Coins className="h-6 w-6" />;
      default:
        return <ShieldCheck className="h-6 w-6" />;
    }
  };

  return (
    <section id="why-choose-us" className="py-24 bg-white relative overflow-hidden">
      {/* Absolute decorative backdrops */}
      <div className="absolute right-[-100px] bottom-[-100px] w-96 h-96 bg-brand-yellow/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute left-[-100px] top-[-100px] w-96 h-96 bg-brand-green/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Why Choose Us Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Block: Narrative */}
          <div className="lg:col-span-5 space-y-6" id="why-choose-text">
            <span className="text-xs font-mono tracking-[0.2em] text-[#2E7D32] uppercase font-bold block animate-fade-in-up">
              THE AGRO-BAL ADVANTAGE
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#7A4E2D] leading-tight flex items-center gap-3">
              <span className="w-1.5 h-8 bg-[#2E7D32] rounded-full shrink-0"></span>
              Strategic Partners
            </h2>
            <div className="h-0.5 w-16 bg-[#F6D776]" />
            <p className="text-stone-600 text-sm sm:text-base leading-relaxed font-light">
              We look beyond short-term high yields. By investing in the microbiological health of our soils and maintaining flawless support standards, we provide long-term continuity that farmers, culinary outlets, and retailers rely on.
            </p>

            {/* Quote Block */}
            <div className="bg-[#F5F1EA]/75 border-l-4 border-[#2E7D32] p-6 rounded-r-3xl shadow-xs space-y-2">
              <p className="text-xs italic text-[#7A4E2D] leading-relaxed font-serif font-medium">
                "Our pledge is honest, ecological husbandry. We do not compromise on seeds or animal welfare to cut margins, and it shows in every single organic crate."
              </p>
              <div className="flex items-center space-x-2">
                <div className="h-0.5 w-6 bg-[#F6D776] rounded-full" />
                <span className="text-[9px] font-mono uppercase tracking-[0.15em] text-[#2E7D32] font-extrabold">
                  Agro-Bal Executive Board
                </span>
              </div>
            </div>
          </div>

          {/* Right Block: Core Pillars Grid */}
          <div className="lg:col-span-7" id="why-choose-grid">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {WHY_CHOOSE_US_ITEMS.map((item) => (
                <div
                  key={item.id}
                  className="bg-[#F5F1EA] hover:bg-white border border-[#F6D776]/50 p-8 rounded-3xl shadow-xs hover:shadow-lg hover:translate-y-[-2px] transition-all duration-300 space-y-4"
                >
                  {/* Dynamic Custom Icon Wrapper */}
                  <div className="bg-white text-[#2E7D32] p-3.5 rounded-2xl w-fit shadow-xs border border-[#F6D776]/30">
                    {getIcon(item.iconName)}
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="font-display font-bold text-lg text-[#7A4E2D]">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-light">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
