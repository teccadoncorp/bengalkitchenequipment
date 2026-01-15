import type { Product } from '../types/product';

export const products: Product[] = [
  {
    id: 1,
    name: 'Professional Gas Stove - 4 Burner',
    category: 'gas-stoves',
    description: 'Heavy-duty commercial 4 burner gas stove perfect for restaurant kitchens and high-volume cooking.',
    image: 'https://images.unsplash.com/photo-1728976224749-f50c07a48603?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraXRjaGVuJTIwZ2FzJTIwc3RvdmV8ZW58MXx8fHwxNzY3NjIwMDU0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    features: [
      'High-efficiency burners',
      'Stainless steel construction',
      'Easy to clean surface',
      'Adjustable flame control',
      'Commercial grade quality'
    ],
    specifications: {
      'Material': 'Stainless Steel',
      'Number of Burners': '4',
      'Dimensions': '36" x 24" x 12"',
      'BTU Output': '120,000 BTU/hr',
      'Warranty': '2 Years'
    }
  },
  {
    id: 2,
    name: 'Premium Stainless Steel Cookware Set',
    category: 'cookware',
    description: 'Complete cookware set with premium stainless steel construction for professional and home use.',
    image: 'https://images.unsplash.com/photo-1765959990052-fab57c043979?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGFpbmxlc3MlMjBzdGVlbCUyMGNvb2t3YXJlfGVufDF8fHx8MTc2NzYyMDA1M3ww&ixlib=rb-4.1.0&q=80&w=1080',
    features: [
      '10-piece complete set',
      'Mirror-polished finish',
      'Heat-resistant handles',
      'Compatible with all cooktops',
      'Dishwasher safe'
    ],
    specifications: {
      'Material': '18/10 Stainless Steel',
      'Set Includes': '10 Pieces',
      'Base Type': 'Tri-ply',
      'Handle Material': 'Riveted Stainless Steel',
      'Warranty': '5 Years'
    }
  },
  {
    id: 3,
    name: 'Commercial Mixer Grinder - 1000W',
    category: 'mixers',
    description: 'Powerful 1000W mixer grinder for heavy-duty grinding and mixing tasks in commercial kitchens.',
    image: 'https://images.unsplash.com/photo-1672209962122-4e38cd353163?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraXRjaGVuJTIwbWl4ZXIlMjBncmluZGVyfGVufDF8fHx8MTc2NzYyMDA1NHww&ixlib=rb-4.1.0&q=80&w=1080',
    features: [
      '1000W powerful motor',
      'Multiple speed settings',
      '3 stainless steel jars',
      'Overload protection',
      'Anti-slip feet'
    ],
    specifications: {
      'Power': '1000 Watts',
      'Speed Settings': '3 Speed + Pulse',
      'Jar Capacity': '1.5L, 1L, 0.5L',
      'Voltage': '220-240V',
      'Warranty': '2 Years'
    }
  },
  {
    id: 4,
    name: 'Professional Kitchen Equipment Set',
    category: 'appliances',
    description: 'Complete professional kitchen equipment for commercial use with modern technology and efficiency.',
    image: 'https://images.unsplash.com/photo-1589109807644-924edf14ee09?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tZXJjaWFsJTIwa2l0Y2hlbiUyMGVxdWlwbWVudHxlbnwxfHx8fDE3Njc2MDc3MDR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    features: [
      'Energy efficient design',
      'Professional grade',
      'Easy maintenance',
      'Durable construction',
      'High capacity'
    ],
    specifications: {
      'Type': 'Multi-purpose',
      'Material': 'Stainless Steel',
      'Power Supply': 'Electric',
      'Capacity': 'Industrial',
      'Warranty': '3 Years'
    }
  },
  {
    id: 5,
    name: 'Premium Kitchen Utensils Set',
    category: 'utensils',
    description: 'Professional-grade kitchen utensils set with ergonomic design for comfort and efficiency.',
    image: 'https://images.unsplash.com/photo-1766340758652-8138040b0315?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBraXRjaGVuJTIwdXRlbnNpbHN8ZW58MXx8fHwxNzY3NjIwMDU0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    features: [
      'Heat-resistant materials',
      'Ergonomic handles',
      'Non-stick compatible',
      'Easy to clean',
      '15-piece set'
    ],
    specifications: {
      'Set Size': '15 Pieces',
      'Material': 'Stainless Steel & Silicone',
      'Temperature Resistance': 'Up to 480°F',
      'Dishwasher Safe': 'Yes',
      'Warranty': '1 Year'
    }
  },
  {
    id: 6,
    name: 'Modern Kitchen Appliance Collection',
    category: 'appliances',
    description: 'State-of-the-art kitchen appliances with smart features and sleek design for modern kitchens.',
    image: 'https://images.unsplash.com/photo-1642979427252-13d5fd18bb61?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBraXRjaGVuJTIwYXBwbGlhbmNlc3xlbnwxfHx8fDE3Njc1Mzc1NjB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    features: [
      'Smart temperature control',
      'Energy efficient',
      'Modern aesthetics',
      'Multiple functions',
      'Digital display'
    ],
    specifications: {
      'Technology': 'Smart',
      'Finish': 'Brushed Stainless Steel',
      'Control Type': 'Digital',
      'Energy Rating': '5 Star',
      'Warranty': '3 Years'
    }
  },
  {
    id: 7,
    name: 'Heavy Duty Pressure Cooker',
    category: 'cookware',
    description: 'Commercial-grade pressure cooker for fast and efficient cooking in busy kitchens.',
    image: 'https://images.unsplash.com/photo-1765959990052-fab57c043979?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGFpbmxlc3MlMjBzdGVlbCUyMGNvb2t3YXJlfGVufDF8fHx8MTc2NzYyMDA1M3ww&ixlib=rb-4.1.0&q=80&w=1080',
    features: [
      'Multiple safety features',
      'Large capacity',
      'Quick cooking',
      'Induction compatible',
      'Easy-lock lid'
    ],
    specifications: {
      'Capacity': '10 Liters',
      'Material': 'Aluminum with Steel Base',
      'Safety Features': '5 Safety Systems',
      'Compatibility': 'All Cooktops',
      'Warranty': '2 Years'
    }
  },
  {
    id: 8,
    name: 'Industrial Gas Range',
    category: 'gas-stoves',
    description: 'Industrial-strength gas range with multiple burners for high-volume cooking operations.',
    image: 'https://images.unsplash.com/photo-1728976224749-f50c07a48603?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraXRjaGVuJTIwZ2FzJTIwc3RvdmV8ZW58MXx8fHwxNzY3NjIwMDU0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    features: [
      '6 powerful burners',
      'Heavy-duty grates',
      'Precision temperature control',
      'Easy ignition system',
      'Professional grade'
    ],
    specifications: {
      'Burner Count': '6',
      'Total BTU': '180,000 BTU/hr',
      'Material': 'Stainless Steel',
      'Dimensions': '48" x 30" x 36"',
      'Warranty': '3 Years'
    }
  },
  {
    id: 9,
    name: 'Bulk Cooker',
    category: 'cooking-equipment',
    description: 'Heavy-duty bulk cooker designed for large-scale food preparation in commercial kitchens.',
    image: 'https://kolkatakitchen.com/content/images/product-1.jpg',
    features: [
      'High grade stainless steel',
      'Corrosion resistant',
      'High tensile strength',
      'Customizable sizes available'
    ],
    specifications: {
      'Material': 'Stainless Steel',
      'Usage': 'Commercial',
      'Finish': 'Premium',
      'Customization': 'Available'
    }
  },
  {
    id: 10,
    name: 'Tandoor',
    category: 'cooking-equipment',
    description: 'Professional commercial tandoor with excellent insulation and crack-resistant pot.',
    image: 'https://kolkatakitchen.com/content/images/product-2.jpg',
    features: [
      'Energy efficient insulation',
      'Crack resistant pot',
      'High heat retention',
      'Removable wheels'
    ],
    specifications: {
      'Fuel Type': 'Gas / Charcoal',
      'Body': 'Stainless Steel',
      'Mobility': 'Yes',
      'Usage': 'Restaurant'
    }
  },
  {
    id: 11,
    name: 'Single Burner Range',
    category: 'gas-stoves',
    description: 'Commercial single burner gas range with brass burner and fuel-efficient design.',
    image: 'https://kolkatakitchen.com/content/images/product-3.jpg',
    features: [
      'Brass burner',
      'Fuel efficient',
      'Rust resistant',
      'Easy to clean'
    ],
    specifications: {
      'Burners': '1',
      'Material': 'Stainless Steel',
      'Fuel': 'Gas',
      'Usage': 'Commercial'
    }
  },
  {
    id: 12,
    name: 'Static Baking Oven',
    category: 'bakery-equipment',
    description: 'Commercial baking oven suitable for bread, pastries, cookies and more.',
    image: 'https://kolkatakitchen.com/content/images/product-11.jpg',
    features: [
      'Multi-deck options',
      'Gas or electric operation',
      'Mineral wool insulation',
      'Independent heat control'
    ],
    specifications: {
      'Operation': 'Gas / Electric',
      'Decks': 'Single / Double / Triple',
      'Usage': 'Bakery',
      'Construction': 'MS Interior, SS Front'
    }
  },
  {
    id: 13,
    name: 'Planetary Mixer',
    category: 'mixers',
    description: 'High-performance planetary mixer with multiple speed settings for bakery and commercial kitchens.',
    image: 'https://kolkatakitchen.com/content/images/product-14.jpg',
    features: [
      'Removable stainless steel bowl',
      'Multiple speed control',
      'Low noise operation',
      'Corrosion resistant'
    ],
    specifications: {
      'Speeds': '3 + Neutral',
      'Bowl Material': 'Stainless Steel',
      'Usage': 'Bakery / Commercial',
      'Warranty': '1 Year'
    }
  },
  {
    id: 14,
    name: 'Cold Display Counter',
    category: 'display-counters',
    description: 'Cold display counter ideal for sweets, cakes, pastries, and snacks.',
    image: 'https://kolkatakitchen.com/content/images/product-19.jpg',
    features: [
      'Powerful cooling',
      'Glass shelves',
      'Granite / marble top',
      'Elegant display'
    ],
    specifications: {
      'Cooling Type': 'Refrigerated',
      'Shelves': '2–3',
      'Body': 'Stainless Steel',
      'Usage': 'Sweet Shop / Bakery'
    }
  },
  {
    id: 15,
    name: 'Four Door Refrigerator',
    category: 'refrigeration',
    description: 'Commercial four-door refrigerator with efficient cooling and digital temperature control.',
    image: 'https://kolkatakitchen.com/content/images/product-22.jpg',
    features: [
      'Imported compressor',
      'Digital temperature control',
      'Energy efficient',
      'SS 304 construction'
    ],
    specifications: {
      'Doors': '4',
      'Material': 'SS 304',
      'Defrost': 'Auto',
      'Usage': 'Commercial'
    }
  },
  {
    id: 16,
    name: 'Dish Washer',
    category: 'washing-equipment',
    description: 'Commercial dishwasher with hygienic self-cleaning cycle and electronic control.',
    image: 'https://kolkatakitchen.com/content/images/product-49.jpg',
    features: [
      'Self-cleaning cycle',
      'Electronic control panel',
      'Chemical dispenser',
      'High hygiene standards'
    ],
    specifications: {
      'Operation': 'Automatic',
      'Installation': 'Ready to install',
      'Usage': 'Hotel / Restaurant',
      'Body': 'Stainless Steel'
    }
  },
  {
    id: 17,
    name: 'Exhaust Hood with Filter',
    category: 'exhaust-system',
    description: 'Commercial exhaust hood with grease filters for effective smoke and vapor removal.',
    image: 'https://kolkatakitchen.com/content/images/product-60.jpg',
    features: [
      'High exhaust flow',
      'Grease baffle filters',
      'Insulated double wall',
      'Durable SS body'
    ],
    specifications: {
      'Installation': 'Wall / Island',
      'Filters': 'Grease Baffle',
      'Material': 'Stainless Steel',
      'Usage': 'Commercial Kitchen'
    }
  }
];

export const categories = [
  { id: 'all', name: 'All Products', icon: '/product/product-1.jpg' },
  // { id: 'cookware', name: 'Cooking Equipment', icon: '/product/product-1.jpg' },
  { id: 'display-counters', name: 'Display Counters', icon: '/category/display.jpg' },
  { id: 'cooking-equipment', name: 'Cooking Equipment', icon: '/category/cooking.png' },
  { id: 'bakery-equipment', name: 'Bakery Equipment', icon: '/category/BAKERY.jpg' },
  { id: 'refrigeration', name: 'Refrigeration', icon: '/product/product-22.jpg' },
  { id: 'pantry', name: 'Pantry Equipment', icon: '/product/product-28.jpg'},
  { id: 'foodprocess', name: 'Food Processing Equipment', icon: '/product/product-33.jpg' },
  { id: 'washingequipment', name: 'Washing Equipment', icon: '/product/product-44.jpg' },
  { id: 'exhaust-system', name: 'Exhaust System', icon: '/product/product-62.jpg' },
  { id: 'gas-stoves', name: 'Gas Bank', icon: '/category/gas_bank.png' },
  { id: 'appliances', name: 'Appliances', icon: '/product/product-55.jpg' },
  
  // { id: 'utensils', name: 'Utensils', icon: 'UtensilsCrossed' },
  // { id: 'mixers', name: 'Mixers & Grinders', icon: 'Package' },
  
  
  
  
  // { id: 'washing-equipment', name: 'Washing Equipment', icon: 'Droplets' },
  
];
