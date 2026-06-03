import { motion } from "motion/react";
import { Leaf, Eye, ShieldCheck, Milestone } from "lucide-react";

export default function About() {
  const stats = [
    { value: "15+", label: "Years of Heritage" },
    { value: "400+", label: "Acres Managed" },
    { value: "100%", label: "Organic Checked" },
    { value: "12k+", label: "Happy Partners" },
  ];

  const coreValues = [
    {
      title: "Our Mission",
      desc: "To empower farmers and nourish communities by deploying sound ecological farming systems, nurturing the finest pasture species, and offering pristine organic food options directly from soil to shelf.",
      icon: Leaf,
      bg: "bg-emerald-50 text-emerald-700 border-emerald-100",
    },
    {
      title: "Our Vision",
      desc: "To be the premier standard-bearer for regenerative climate-resilient farming, modeling a healthy bio-diverse agricultural network where technology and nature harmonize to feed future generations.",
      icon: Eye,
      bg: "bg-amber-50 text-amber-700 border-amber-100",
    },
  ];

  return (
    <section id="about" className="py-24 bg-brand-cream relative overflow-hidden border-t border-brand-yellow/20">
      {/* Decorative leafy vectors background */}
      <div className="absolute right-0 top-0 w-64 h-64 bg-brand-yellow/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute left-0 bottom-0 w-80 h-80 bg-brand-green/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Block: Image Collage & Heritage Stats */}
          <div className="lg:col-span-5 space-y-8" id="about-brand-collage">
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-tr from-brand-yellow to-brand-green opacity-10 blur-xl rounded-2xl" />
              {/* Premium image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-brand-yellow/30 bg-stone-100 aspect-4/3">
                <img
                  src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=800"
                  alt="Our Heritage Fields"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                
                {/* Embedded Floating Card */}
                <div className="absolute bottom-6 left-6 right-6 bg-brand-cream/95 backdrop-blur-md rounded-xl p-4 shadow-xl border border-brand-yellow/20 flex items-center space-x-3">
                  <div className="bg-brand-green/10 text-brand-green p-2 rounded-lg">
                    <ShieldCheck className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-brand-green">Safety Standard</h4>
                    <p className="text-xs text-brand-brown/90 font-medium">100% Traceable Bio-Sourced Ecology</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Micro Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-white/80 backdrop-blur-sm border border-brand-yellow/20 rounded-xl p-5 shadow-sm text-center transform hover:translate-y-[-2px] transition-transform duration-200"
                >
                  <p className="font-display font-bold text-3xl text-brand-green">{stat.value}</p>
                  <p className="text-xs font-mono uppercase tracking-wider text-brand-brown/75 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Block: Content narrative */}
          <div className="lg:col-span-7 space-y-8" id="about-brand-text">
            <div className="space-y-4">
              <span className="text-sm font-mono tracking-widest text-brand-green uppercase font-semibold block">
                Heritage & Stewardship
              </span>
              <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-brand-brown leading-tight">
                Crafting Ecological Agriculture Since 2011
              </h2>
              <div className="h-1 w-20 bg-brand-yellow rounded-full" />
            </div>

            <div className="text-stone-700 space-y-6 text-sm sm:text-base leading-relaxed">
              <p>
                Founded on the rolling foothills of the fertile river basin, Agro-Bal began with a humble commitment: returning nutritional and biological integrity directly to agricultural development. Today, we stand as a trusted brand, known for our rigorous focus on organic balance and ecological stewardship.
              </p>
              <p>
                We collaborate intensely with leading agronomists to grow healthy non-GMO species, rear livestock on rotational, pasture pastures, and distribute sustainable accessories. Rather than industrial rush, we favor patience, quality control, and scientific validation.
              </p>
            </div>

            {/* Trusted Avatar collection group */}
            <div className="flex items-center gap-3 bg-[#F5F1EA]/50 border border-[#7A4E2D]/10 rounded-2xl p-4 w-fit">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full border-2 border-[#F5F1EA] bg-[#F6D776] flex items-center justify-center text-[9px] font-bold text-[#7A4E2D]">AB</div>
                <div className="w-8 h-8 rounded-full border-2 border-[#F5F1EA] bg-[#7A4E2D] flex items-center justify-center text-[9px] font-bold text-white">QA</div>
                <div className="w-8 h-8 rounded-full border-2 border-[#F5F1EA] bg-[#2E7D32] flex items-center justify-center text-[9px] font-bold text-white">BIO</div>
              </div>
              <span className="text-[10px] font-bold text-[#7A4E2D] uppercase tracking-wider">Trusted by 5,000+ farmers & food providers</span>
            </div>

            {/* Mission & Vision Bento Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              {coreValues.map((val) => {
                const Icon = val.icon;
                return (
                  <div
                    key={val.title}
                    className="rounded-3xl p-6 bg-white/60 border border-[#7A4E2D]/10 shadow-sm flex flex-col justify-between space-y-4 hover:shadow-md transition-all duration-300"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-[#F5F1EA] text-[#2E7D32] rounded-xl shadow-sm border border-[#F6D776]/40">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="font-display font-bold text-lg text-[#7A4E2D]">{val.title}</h3>
                    </div>
                    <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-light">
                      {val.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
