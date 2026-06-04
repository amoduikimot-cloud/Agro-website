import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Categories from "./components/Categories";
import ProductsPreview from "./components/ProductsPreview";
import WhyChooseUs from "./components/WhyChooseUs";
import Testimonials from "./components/Testimonials";
import CtaBanner from "./components/CtaBanner";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  // Smooth scroll helper routines
  const scrollToSelection = (selector: string) => {
    const targetElement = document.querySelector(selector);
    if (targetElement) {
      const offsetHeader = 88; // accounts for fixed navigation height
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offsetHeader;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-brand-cream/10 selection:bg-brand-yellow font-sans text-stone-900 antialiased overflow-x-hidden">
      {/* 1. Header Navigation */}
      <Navbar onContactClick={() => scrollToSelection("#contact")} />

      {/* 2. Visual Masthead */}
      <Hero onLearnMoreClick={() => scrollToSelection("#about")} />

      {/* Layout Spacer Content */}
      <main className="flex-grow">
        {/* 3. Story Legacy */}
        <About />

        {/* 4. Categorized Portals */}
        <Categories />

        {/* 5. Highlighted Catalog Showcase */}
        <ProductsPreview />

        {/* 6. Professional Advantages */}
        <WhyChooseUs />

        {/* 8. Credentials Carousels */}
        <Testimonials />

        {/* 9. Standalone Shopify Invitation */}
        <CtaBanner />

        {/* 10. Direct Support Lines & Feedback forms */}
        <Contact />
      </main>

      {/* 11. Footer Map Signature */}
      <Footer />
    </div>
  );
}
