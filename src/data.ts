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
    image: "https://raw.githubusercontent.com/amoduikimot-cloud/Agro-bal-images/660d7d26afc3921c5cee00e5fcf40bfbd97310f1/image%20(1b).jpg",
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
    image: "https://raw.githubusercontent.com/amoduikimot-cloud/Agro-bal-images/db527f5d15f1bb31425afbe75658e2da0db9e8b4/2148129884.jpg",
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
    title: "Broiler Chick",
    category: "Poultry & Livestock",
    description: "Premium day-old broiler chicks, fully vaccinated, highly active, and bred for excellent feed conversion ratios.",
    image: "https://raw.githubusercontent.com/amoduikimot-cloud/Agro-bal-images/4da601e5c8a91f0ff496ff67c5db8aabe4176554/2150741737.jpg",
    priceEstimate: "₦22,500 / Carton",
    details: ["Day-one vaccination completed", "Excellent breed survivability", "Gold-standard bio-secure hatcheries"],
    shopifyUrlPlaceholder: "https://shopify.com/placeholder-agrobal-broilers",
  },
  {
    id: "prod-2",
    title: "Premium Free-Range Eggs",
    category: "Poultry & Livestock",
    description: "Highly nutritious farm-fresh eggs with rich golden yolks, laid by happy pasture-roaming hens.",
    image: "https://images.unsplash.com/photo-1506976785307-8732e854ad03?auto=format&fit=crop&q=80&w=600",
    priceEstimate: "₦9,500 / Dozen",
    details: ["Rich in healthy Omega-3", "Packed within 6 hours of laying", "100% soy-free feed diet"],
    shopifyUrlPlaceholder: "https://shopify.com/placeholder-agrobal-eggs",
  },
  {
    id: "prod-3",
    title: "Vitamin",
    category: "Vitamin, Mineral & Supplies",
    description: "Premium high-potency biological vitamin supplements to support optimal growth and peak immune performance.",
    image: "https://raw.githubusercontent.com/amoduikimot-cloud/Agro-bal-images/4da601e5c8a91f0ff496ff67c5db8aabe4176554/Vitamin%201.jpeg",
    priceEstimate: "₦7,000 / 1",
    details: ["Optimizes biological vitality", "Enriched with crucial micro-elements", "Highly bio-available formula"],
    shopifyUrlPlaceholder: "https://shopify.com/placeholder-agrobal-salt",
  },
  {
    id: "prod-4",
    title: "Pet",
    category: "Pet & Veterinary Equipment",
    description: "Premium-quality essential care and wellness supplies tailored for the active comfort and vitality of your pets.",
    image: "https://raw.githubusercontent.com/amoduikimot-cloud/Agro-bal-images/478827d83040c124b52d7a5f6a5fd29c1dc2c2e4/pet.jpeg",
    priceEstimate: "₦4,500 / 1",
    details: ["Hypoallergenic and pet-safe materials", "Approved by leading animal experts", "Durable and reliable setup"],
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
    name: "Tunde Bakare",
    role: "Head Chef & Sourcing Director",
    company: "The Roots Garden Grill",
    quote: "Our restaurant is committed to pure organic sourcing. Agro-Bal is our primary agricultural partner. Their seasonal farm produce delivery times and premium, untouched crop quality are peerless.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150",
  },
  {
    id: "t2",
    name: "Amara Chikezie",
    role: "Operational Director",
    company: "GreenLife Organic Co.",
    quote: "Agro-Bal transformed how we procure organic raw materials. Their poultry and livestock conditions set standard benchmarks, and customer support goes far beyond mere dispatch logistics.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1589156280159-27698a70f29e?auto=format&fit=crop&q=80&w=150",
  },
  {
    id: "t3",
    name: "Kofi Mensah",
    role: "Co-Operative Coordinator",
    company: "Valley Farms Guild",
    quote: "Finding high-germination seed stocks with real resilience has been a multi-year challenge. Agro-Bal's custom nitrogen-fixing clover and farm supplies have raised our guild yield by 24% this season.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&q=80&w=150",
  },
];
