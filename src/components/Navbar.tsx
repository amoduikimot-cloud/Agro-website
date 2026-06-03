import React, { useState, useEffect } from "react";
import { Menu, X, Sprout, ShoppingBag, ChevronRight } from "lucide-react";

interface NavbarProps {
  onContactClick: () => void;
}

export default function Navbar({ onContactClick }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Smooth background shift on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Categories", href: "#categories" },
    { name: "Featured Products", href: "#products" },
    { name: "Why Us", href: "#why-choose-us" },
    { name: "Gallery", href: "#gallery" },
    { name: "Testimonials", href: "#testimonials" },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const offsetHeader = 88; // height of fixed navbar
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offsetHeader;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <nav
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-md border-b border-[#7A4E2D]/10 py-3"
          : "bg-white/40 backdrop-blur-sm border-b border-[#7A4E2D]/5 py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-12">
          {/* Logo Brand Title */}
          <a
            href="#"
            onClick={(e) => handleLinkClick(e, "#root")}
            className="flex items-center gap-2 group focus:outline-none animate-fade-in-up"
            id="nav-brand-logo"
          >
            <div className="w-9 h-9 bg-[#2E7D32] rounded-lg flex items-center justify-center text-[#F6D776] font-bold italic shadow-sm group-hover:bg-[#7A4E2D] transition-colors duration-300 shrink-0">
              <Sprout className="h-5 w-5 text-[#F6D776]" />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-extrabold text-lg tracking-tight text-[#2E7D32] group-hover:text-[#7A4E2D] transition-colors duration-200">
                AGRO-BAL
              </span>
              <span className="text-[9px] font-mono uppercase tracking-[0.15em] text-[#7A4E2D] font-bold opacity-80">
                STRENGTH & PURITY
              </span>
            </div>
          </a>

          {/* Desktop Navigation Link Items */}
          <div className="hidden md:flex items-center gap-6 text-[11px] font-bold uppercase tracking-[0.2em]">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-[#7A4E2D]/80 hover:text-[#2E7D32] transition-colors duration-200 relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#2E7D32] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Action Call-to-Actions */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={onContactClick}
              className="text-xs font-bold text-[#7A4E2D] hover:text-[#2E7D32] uppercase tracking-wider px-3 py-2 rounded-lg transition-colors duration-200"
              id="nav-contact-btn"
            >
              Contact Us
            </button>
            <a
              href="https://shopify.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#F6D776] hover:bg-[#ebcc6e] text-[#7A4E2D] px-6 py-2.5 rounded-full text-xs font-bold shadow-sm hover:shadow-md transition-all duration-300 scale-100 hover:scale-[1.03] flex items-center gap-2 uppercase tracking-wide"
              id="nav-shop-btn"
            >
              <ShoppingBag className="h-3.5 w-3.5 text-[#7A4E2D]" />
              <span>Visit Store</span>
            </a>
          </div>

          {/* Mobile hamburger menu button */}
          <div className="md:hidden flex items-center space-x-3">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-brand-brown hover:text-brand-green hover:bg-brand-yellow/20 focus:outline-none transition-colors"
              aria-label="Toggle Menu"
              id="nav-hamburger-btn"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown Backdrop Overlay */}
      {isOpen && (
        <div
          className="md:hidden fixed inset-0 top-[65px] bg-brand-brown/40 backdrop-blur-sm z-40 transition-opacity"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Menu Drawer Container */}
      <div
        className={`md:hidden fixed top-[65px] right-0 bottom-0 w-4/5 max-w-sm bg-brand-cream border-l border-brand-yellow/20 z-50 p-6 shadow-2xl transition-transform duration-300 ease-out flex flex-col justify-between ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        id="mobile-drawer-menu"
      >
        <div className="space-y-6">
          <div className="flex flex-col space-y-4">
            <span className="text-[11px] font-mono tracking-widest text-brand-green uppercase font-semibold border-b border-brand-yellow/30 pb-2">
              Navigation Menu
            </span>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="flex items-center justify-between text-base font-medium text-brand-brown hover:text-brand-green py-2 px-3 rounded-lg hover:bg-brand-yellow/10 transition-all duration-200"
              >
                <span>{link.name}</span>
                <ChevronRight className="h-4 w-4 text-brand-yellow" />
              </a>
            ))}
          </div>
        </div>

        <div className="space-y-4 border-t border-brand-yellow/30 pt-6">
          <button
            onClick={() => {
              setIsOpen(false);
              onContactClick();
            }}
            className="w-full text-center text-sm font-semibold text-brand-brown bg-brand-yellow/30 hover:bg-brand-yellow/50 py-3 rounded-xl transition-all"
            id="mobile-contact-btn"
          >
            Contact Agro-Bal
          </button>
          <a
            href="https://shopify.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center space-x-2 w-full bg-brand-green hover:bg-brand-brown text-white font-semibold text-sm py-3 px-4 rounded-xl shadow-lg transition-all duration-300"
            id="mobile-shop-btn"
          >
            <ShoppingBag className="h-4 w-4 text-brand-yellow" />
            <span>Visit Shopify Store</span>
          </a>
        </div>
      </div>
    </nav>
  );
}
