export interface Category {
  id: string;
  title: string;
  description: string;
  image: string;
  features: string[];
}

export interface Product {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  priceEstimate: string;
  details: string[];
  shopifyUrlPlaceholder: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company?: string;
  quote: string;
  rating: number;
  avatar: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  tag: string;
  src: string;
}

export interface WhyChooseUsItem {
  id: string;
  title: string;
  description: string;
  iconName: string; // Lucide icon name
}

export const CATEGORIES: Category[] = [
  {
    id: "produce",
    title: "Vitamin, Mineral & Supplies",
    description: "Premium biological vitamin supplements, mineral feed blocks, and essential farming nutrient supplies.",
    image: "/src/assets/images/agrobal_produce_1780501329487.png",
    features: ["High biological trace minerals", "Bio-certified immune boosters", "Premium forage fortifiers"],
  },
  {
    id: "livestock",
    title: "Poultry & Livestock",
    description: "Grass-fed cattle and range-reared poultry managed under gold-standard animal welfare practices.",
    image: "https://raw.githubusercontent.com/amoduikimot-cloud/Agro-bal-images/1f9cf9c5e1c6535902fd66443eecac91c614a38d/1154%20(1).jpg",
    features: ["Hormone and antibiotic-free", "Pasture-raised rotation", "Veterinary audited care"],
  },
  {
    id: "equipment",
    title: "Seeds, Agrochemical & Beekeeping",
    description: "Pure heirloom flower and crop seeds, eco-safe agrochemicals, and professional beekeeping suits & hives.",
    image: "https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?auto=format&fit=crop&q=80&w=800",
    features: ["Certified organic crop seeds", "Targeted organic pesticides", "Complete apiculture starter gear"],
  },
  {
    id: "supplies",
    title: "Pet & Veterinary Equipment",
    description: "Professional diagnostic equipment, safe pet grooming systems, and medical-grade livestock care tools.",
    image: "/src/assets/images/agrobal_supplies_1780501362380.png",
    features: ["Clinical-grade diagnostics", "Pro-level pet care supplies", "Veterinarian certified tools"],
  },
];

export const FEATURED_PRODUCTS: Product[] = [
  {
    id: "prod-1",
    title: "Raw Meadow Honey",
    category: "Seeds, Agrochemical & Beekeeping",
    description: "Cold-filtered polyfloral raw honey harvested from our protected organic wildflower meadows by our own apiculture crew.",
    image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&q=80&w=600",
    priceEstimate: "$14.99 / 500g",
    details: ["Rich in active anti-oxidants", "No added sugar or preservatives", "100% genuine beekeeping harvest"],
    shopifyUrlPlaceholder: "https://shopify.com/placeholder-agrobal-honey",
  },
  {
    id: "prod-2",
    title: "Premium Free-Range Eggs",
    category: "Poultry & Livestock",
    description: "Highly nutritious farm-fresh eggs with rich golden yolks, laid by happy pasture-roaming hens.",
    image: "https://images.unsplash.com/photo-1506976785307-8732e854ad03?auto=format&fit=crop&q=80&w=600",
    priceEstimate: "$6.50 / Dozen",
    details: ["Rich in healthy Omega-3", "Packed within 6 hours of laying", "100% soy-free feed diet"],
    shopifyUrlPlaceholder: "https://shopify.com/placeholder-agrobal-eggs",
  },
  {
    id: "prod-3",
    title: "Organic Salt Lick Block",
    category: "Vitamin, Mineral & Supplies",
    description: "Mineral-rich pure salt supplement block enriched with trace nutrients to support cattle digestion and overall vitality.",
    image: "https://images.unsplash.com/photo-1616611802111-a831e5f8f85d?auto=format&fit=crop&q=80&w=600",
    priceEstimate: "$18.50 / Block",
    details: ["100% unrefined rock salt", "Improves livestock health", "Weather-resistant block design"],
    shopifyUrlPlaceholder: "https://shopify.com/placeholder-agrobal-salt",
  },
  {
    id: "prod-4",
    title: "Ergonomic Veterinary Shear",
    category: "Pet & Veterinary Equipment",
    description: "Professional stainless steel high-precision shearing tool optimized for safe fleece grooming and small pet upkeep.",
    image: "https://images.unsplash.com/photo-1516733725897-1aa73b87c8e8?auto=format&fit=crop&q=80&w=600",
    priceEstimate: "$32.00 / Tool",
    details: ["Induction-hardened stainless steel", "Non-slip ergonomic safety grips", "Approved by field veterinarians"],
    shopifyUrlPlaceholder: "https://shopify.com/placeholder-agrobal-shears",
  },
];

export const WHY_CHOOSE_US_ITEMS: WhyChooseUsItem[] = [
  {
    id: "w1",
    title: "Trusted Quality",
    description: "Every item undergoes rigorous biological testing, certification checks, and meticulous grading to guarantee absolute purity.",
    iconName: "Award",
  },
  {
    id: "w2",
    title: "Reliable Supply",
    description: "With advanced temperature-controlled logistics networks, we ensure punctual, fresh-state crop and livestock fulfillment.",
    iconName: "Truck",
  },
  {
    id: "w3",
    title: "Customer Satisfaction",
    description: "Our dedicated support desk is available 24/7, providing transparent consultations, farm visits, and product assistance.",
    iconName: "Heart",
  },
  {
    id: "w4",
    title: "Affordable Pricing",
    description: "We optimize the entire supply chain from soil to shelf, removing intermediaries to pass direct cost savings directly to you.",
    iconName: "Coins",
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g1",
    title: "Morning Sunflowers",
    tag: "Produce",
    src: "https://images.unsplash.com/photo-1597848212624-a19eb35e2651?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "g2",
    title: "Eco Field Harvesting",
    tag: "Machinery",
    src: "https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "g3",
    title: "Organic Vine Tomatoes",
    tag: "Produce",
    src: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "g4",
    title: "Livestock Care Pastures",
    tag: "Livestock",
    src: "https://images.unsplash.com/photo-1484557985045-edd96d085249?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "g5",
    title: "Heirloom Seed Sowing",
    tag: "Supplies",
    src: "https://images.unsplash.com/photo-1530595467537-0b5996c41f2d?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "g6",
    title: "Eco-Friendly Barn",
    tag: "Farmhouse",
    src: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=800",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "Benjamin Harrison",
    role: "Head Chef",
    company: "The Roots Garden Grill",
    quote: "Our restaurant is committed to pure organic sourcing. Agro-Bal is our primary agricultural partner. Their seasonal farm produce delivery times and premium, untouched crop quality are peerless.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=150",
  },
  {
    id: "t2",
    name: "Elena Rostova",
    role: "Operational Director",
    company: "GreenLife Organic Co.",
    quote: "Agro-Bal transformed how we procure organic raw materials. Their poultry and livestock conditions set standard benchmarks, and customer support goes far beyond mere dispatch logistics.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150",
  },
  {
    id: "t3",
    name: "Marcus Vance",
    role: "Co-Operative Coordinator",
    company: "Valley Farms Guild",
    quote: "Finding high-germination seed stocks with real resilience has been a multi-year challenge. Agro-Bal's custom nitrogen-fixing clover and farm supplies have raised our guild yield by 24% this season.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=150",
  },
];
