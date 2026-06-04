import React, { useState } from "react";
import { Sprout, Facebook, Twitter, Instagram, Linkedin, Heart, HelpCircle, FileText, Shield, ArrowUp } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const footerLinksMain = [
    { name: "About Story", href: "#about" },
    { name: "Categories", href: "#categories" },
    { name: "Featured Feed", href: "#products" },
  ];

  const footerLinksExtra = [
    { name: "Consultations", href: "#contact" },
    { name: "Partner Voices", href: "#testimonials" },
    { name: "Shopify Storefront", href: "https://shopify.com" },
  ];

  const socials = [
    { name: "Facebook", icon: Facebook, href: "#" },
    { name: "Twitter", icon: Twitter, href: "#" },
    { name: "Instagram", icon: Instagram, href: "#" },
    { name: "LinkedIn", icon: Linkedin, href: "#" },
  ];

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <footer id="footer" className="bg-[#7A4E2D] text-stone-100 border-t border-[#F6D776]/15 pt-16 pb-8 relative z-10">
      
      {/* Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16">
          
          {/* Col 1: Brand Signature */}
          <div className="lg:col-span-4 space-y-4" id="footer-col-signature">
            <div className="flex items-center space-x-2.5">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center overflow-hidden border border-[#2E7D32]/10 shadow-xs shrink-0">
                <img
                  src="https://raw.githubusercontent.com/amoduikimot-cloud/Agro-bal-images/478827d83040c124b52d7a5f6a5fd29c1dc2c2e4/logo%20.jpg"
                  alt="Agro-Bal Logo"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            
            <p className="text-stone-300 font-sans font-light text-xs sm:text-sm leading-relaxed max-w-sm">
              Sustaining communities with premium quality, pasture-raised cattle, daily-harvested organic vegetables, durable tools, and custom soil solutions. Rooted in integrity.
            </p>

            {/* Social media icons */}
            <div className="flex space-x-3 pt-4">
              {socials.map((soc) => {
                const Icon = soc.icon;
                return (
                  <a
                    key={soc.name}
                    href={soc.href}
                    className="p-2.5 rounded-xl bg-white/5 hover:bg-[#F6D776] hover:text-[#7A4E2D] text-white transition-colors duration-200"
                    aria-label={`Follow Agro-Bal on ${soc.name}`}
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Col 2: Navigation Map */}
          <div className="lg:col-span-2 space-y-4" id="footer-col-nav">
            <h4 className="font-mono text-[9px] font-bold uppercase tracking-[0.15em] text-[#F6D776]">Explore Links</h4>
            <ul className="space-y-2">
              {footerLinksMain.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-stone-300 hover:text-white text-xs sm:text-sm transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Resources Map */}
          <div className="lg:col-span-3 space-y-4" id="footer-col-resources">
            <h4 className="font-mono text-[9px] font-bold uppercase tracking-[0.15em] text-[#F6D776]">Partner Resources</h4>
            <ul className="space-y-2">
              {footerLinksExtra.map((link) => (
                <li key={link.name}>
                  {link.href.startsWith("http") ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-stone-300 hover:text-white text-xs sm:text-sm transition-colors"
                    >
                      {link.name}
                    </a>
                  ) : (
                    <a
                      href={link.href}
                      className="text-stone-300 hover:text-white text-xs sm:text-sm transition-colors"
                    >
                      {link.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Bio updates input subscription */}
          <div className="lg:col-span-3 space-y-4" id="footer-col-news">
            <h4 className="font-mono text-[9px] font-bold uppercase tracking-[0.15em] text-[#F6D776]">Eco Bulletins</h4>
            <p className="text-stone-300 text-xs font-light leading-relaxed">
              Subscribe to track monthly catalog updates, seed arrivals, and agronomy advice.
            </p>
            
            {/* Simple local subscription bar */}
            {subscribed ? (
              <div className="bg-[#2E7D32]/20 border border-[#2E7D32]/30 text-[#F6D776] text-xs font-medium p-3 rounded-xl animate-fade-in">
                ✓ Joined Eco Bulletins successfully!
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex space-x-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="info@yourcompany.com"
                  className="bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-xs w-full text-white outline-none focus:border-[#F6D776] select-none"
                  required
                />
                <button
                  type="submit"
                  className="bg-[#2E7D32] hover:bg-[#F6D776] text-white hover:text-[#7A4E2D] px-4 py-2 rounded-xl text-xs font-semibold uppercase transition-colors"
                >
                  Join
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Footer Base bar containing Copyright info & Back to Top action link */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-300 font-light gap-4">
          <div className="flex flex-col sm:flex-row items-center sm:space-x-4 gap-2 text-center sm:text-left">
            <span>&copy; {currentYear} Agro-Bal Limited. All Rights Reserved.</span>
            <div className="hidden sm:block text-stone-300">|</div>
            <div className="flex space-x-3">
              <span className="hover:text-white cursor-pointer hover:underline">Privacy Charter</span>
              <span>•</span>
              <span className="hover:text-white cursor-pointer hover:underline">Farming Certifications</span>
            </div>
          </div>

          <button
            onClick={handleScrollToTop}
            className="flex items-center space-x-1.5 bg-white/5 hover:bg-white/10 text-white rounded-lg px-3.5 py-2 transition-colors duration-200 border border-white/10 text-[11px] font-semibold tracking-wider uppercase cursor-pointer"
            aria-label="Back to Top"
            id="back-to-top-btn"
          >
            <span>Top</span>
            <ArrowUp className="h-3 w-3" />
          </button>
        </div>

      </div>
    </footer>
  );
}
