import React, { useState } from "react";
import { MessageSquare, Mail, Phone, CheckCircle, Send, Loader2, Info } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Retail Inquiry",
    phrase: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    // Validate simple parameters
    if (!formData.name.trim()) {
      setErrorMsg("Please provide your name.");
      return;
    }
    if (!formData.email.trim() || !formData.email.includes("@")) {
      setErrorMsg("Please provide a valid email address.");
      return;
    }
    if (!formData.phrase.trim()) {
      setErrorMsg("Please type in a detailed message.");
      return;
    }

    // Trigger simulation states
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSuccess(true);
      // Reset State
      setFormData({ name: "", email: "", subject: "Retail Inquiry", phrase: "" });
      // clear success state after delay
      setTimeout(() => setSuccess(false), 8000);
    }, 1800);
  };

  const contactMethods = [
    {
      title: "Immediate WhatsApp Chat",
      value: "Chat Live 24/7",
      href: "https://wa.me/15553217298",
      color: "bg-emerald-50 text-emerald-700 border-emerald-200 hover:bg-emerald-100/50",
      icon: MessageSquare,
      subtitle: "Answers within 10 minutes",
    },
    {
      title: "Write An Email",
      value: "info@agroballimited.com",
      href: "mailto:info@agroballimited.com",
      color: "bg-amber-50 text-amber-800 border-amber-200 hover:bg-amber-100/50",
      icon: Mail,
      subtitle: "Official communications desk",
    },
    {
      title: "Hotline Phone Link",
      value: "+1 (555) 321-7298",
      href: "tel:+15553217298",
      color: "bg-sky-50 text-sky-800 border-sky-200 hover:bg-sky-100/50",
      icon: Phone,
      subtitle: "Technical farm support desk",
    },
  ];

  return (
    <section id="contact" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-mono tracking-[0.2em] text-[#2E7D32] uppercase font-bold block">
            ESTABLISH CONNECTION
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#7A4E2D] leading-tight flex items-center justify-center gap-3">
            <span className="w-1.5 h-8 bg-[#2E7D32] rounded-full shrink-0"></span>
            Consult With Our Agronomists
          </h2>
          <div className="h-0.5 w-16 bg-[#F6D776] mx-auto" />
          <p className="text-stone-600 text-sm sm:text-base font-light">
            Have custom catalog questions, wholesale contracts, or farm visitation proposals? Connect with our Agro-Bal advisory crew directly.
          </p>
        </div>

        {/* Contact Layout Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Left Block: Communication Cards */}
          <div className="lg:col-span-5 space-y-8 flex flex-col justify-center">
            <div className="space-y-4">
              <h3 className="font-display font-bold text-2xl text-[#7A4E2D]">Direct Linkages</h3>
              <p className="text-stone-600 text-sm sm:text-base font-light leading-relaxed">
                Skip standard website forms if you are in active cargo operations or requiring immediate emergency crop guidance. Reach us on these dedicated lines:
              </p>
            </div>

            {/* Linkage buttons */}
            <div className="space-y-4">
              {contactMethods.map((method) => {
                const IconComponent = method.icon;
                return (
                  <a
                    key={method.title}
                    href={method.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 p-5 rounded-3xl bg-[#F5F1EA]/70 hover:bg-[#F5F1EA] border border-[#F6D776]/50 hover:border-[#2E7D32]/30 transition-all duration-300"
                    id={`contact-card-${method.title.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    <div className="bg-white p-3 rounded-xl shadow-xs border border-[#7A4E2D]/5 text-[#2E7D32]">
                      <IconComponent className="h-5 w-5" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-mono text-[9px] font-bold uppercase tracking-[0.15em] text-[#7A4E2D]/70">
                        {method.title}
                      </h4>
                      <p className="font-display font-bold text-base sm:text-lg text-[#7A4E2D]">{method.value}</p>
                      <p className="text-[11px] text-stone-500 font-light">{method.subtitle}</p>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Dynamic support warning banner */}
            <div className="bg-[#F5F1EA]/50 border border-[#F6D776]/40 rounded-3xl p-5 flex items-start space-x-3 text-[#7A4E2D] text-xs leading-relaxed font-light shadow-xs">
              <Info className="h-4 w-4 text-[#2E7D32] shrink-0 mt-0.5" />
              <span>We strictly honor physical safety protocols. Farm consultations inside research stations can only be conducted by visual scheduling.</span>
            </div>
          </div>

          {/* Right Block: Secure Message Form */}
          <div className="lg:col-span-7" id="contact-form-block">
            <div className="bg-white/60 border border-[#7A4E2D]/10 rounded-3xl p-8 sm:p-10 shadow-xs relative">
              
              <h3 className="font-display font-bold text-xl sm:text-2xl text-[#7A4E2D] mb-6">Dispatch A Message</h3>

              {success ? (
                <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center space-y-4" id="contact-success-state">
                  <div className="inline-flex bg-emerald-100 rounded-full p-4 text-[#2E7D32]">
                    <CheckCircle className="h-10 w-10 animate-bounce" />
                  </div>
                  <h4 className="font-display font-bold text-xl text-[#7A4E2D]">Message Transmitted!</h4>
                  <p className="text-xs sm:text-sm text-stone-600 max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out to Agro-Bal. An agricultural manager will analyze your inquiry and touch base within 12 working hours.
                  </p>
                  <button
                    onClick={() => setSuccess(false)}
                    className="mt-4 px-6 py-2.5 bg-[#2E7D32] hover:bg-[#7A4E2D] text-white text-xs font-bold uppercase tracking-wider rounded-full transition-colors shadow-xs"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-6">
                  
                  {/* Validation Error reporting block */}
                  {errorMsg && (
                    <div className="bg-rose-50 border border-rose-200 rounded-xl p-3 text-xs text-rose-700 font-medium">
                      {errorMsg}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* User name input */}
                    <div className="space-y-2">
                      <label className="text-[9px] font-mono font-bold uppercase tracking-[0.15em] text-[#7A4E2D]">
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        className="w-full bg-white border border-[#7A4E2D]/10 rounded-xl px-4 py-3 text-sm focus:ring-1 focus:ring-[#2E7D32] focus:border-[#2E7D32] outline-none transition-colors font-sans"
                        disabled={submitting}
                      />
                    </div>

                    {/* Return Email */}
                    <div className="space-y-2">
                      <label className="text-[9px] font-mono font-bold uppercase tracking-[0.15em] text-[#7A4E2D]">
                        Corporate Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="john@example.com"
                        className="w-full bg-white border border-[#7A4E2D]/10 rounded-xl px-4 py-3 text-sm focus:ring-1 focus:ring-[#2E7D32] focus:border-[#2E7D32] outline-none transition-colors font-sans"
                        disabled={submitting}
                      />
                    </div>
                  </div>

                  {/* Subject selector */}
                  <div className="space-y-2">
                    <label className="text-[9px] font-mono font-bold uppercase tracking-[0.15em] text-[#7A4E2D]">
                      Message Intent Subject
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full bg-white border border-[#7A4E2D]/10 rounded-xl px-4 py-3 text-sm focus:ring-1 focus:ring-[#2E7D32] focus:border-[#2E7D32] outline-none transition-colors font-sans"
                      disabled={submitting}
                    >
                      <option value="Retail Inquiry">Shopping / Shopify Retail Inquiry</option>
                      <option value="Wholesale Order">Wholesale / Culinary Sourcing Contracts</option>
                      <option value="Scientific Cooperation">Scientific Cooperation / Agronomy Advisory</option>
                      <option value="Farm Visitation">Farm Tour / Ecological Education Proposals</option>
                    </select>
                  </div>

                  {/* Body text box */}
                  <div className="space-y-2">
                    <label className="text-[9px] font-mono font-bold uppercase tracking-[0.15em] text-[#7A4E2D]">
                      Detailed Message Phrase
                    </label>
                    <textarea
                      name="phrase"
                      value={formData.phrase}
                      onChange={handleInputChange}
                      rows={4}
                      placeholder="Introduce your project details or questions..."
                      className="w-full bg-white border border-[#7A4E2D]/10 rounded-xl px-4 py-3 text-sm focus:ring-1 focus:ring-[#2E7D32] focus:border-[#2E7D32] outline-none transition-colors font-sans resize-none"
                      disabled={submitting}
                    />
                  </div>

                  {/* Form Submission Button */}
                  <button
                    type="submit"
                    className="w-full py-4 bg-[#2E7D32] hover:bg-[#1a5b1e] text-white hover:text-[#F6D776] font-bold text-xs uppercase tracking-widest rounded-full transition-all duration-300 shadow-xs flex items-center justify-center space-x-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={submitting}
                    id="submit-contact-btn"
                  >
                    {submitting ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin text-[#F6D776]" />
                        <span>Transmitting Data...</span>
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        <span>Transmit Message</span>
                      </>
                    )}
                  </button>

                </form>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
