import type { Product } from '../types/product';

export const products: Product[] = [

    {
      id: 1,
      name: 'Bulk Cooker',
      category: 'cooking-equipment',
      description: 'Heavy-duty bulk cooker designed for commercial kitchens, suitable for high-volume cooking.',
      image: '/product/product-1.jpg',
      features: [
        'High grade stainless steel durable parts',
        'Excellent finish',
        'High tensile strength',
        'Corrosion resistance',
        'Customizable specifications'
      ],
      specifications: {
        Material: 'Stainless Steel',
        Usage: 'Commercial',
        Finish: 'Premium',
        Customization: 'Available'
      }
    },
    {
      id: 2,
      name: 'Tandoor',
      category: 'cooking-equipment',
      description: 'Professional-grade commercial tandoor with superior insulation and crack-resistant pot.',
      image: '/product/product-2.jpg',
      features: [
        'Crack resistant pot',
        'Energy efficient insulation',
        'Removable wheels',
        'Commercial grade quality'
      ],
      specifications: {
        Material: 'Stainless Steel',
        Insulation: 'High efficiency',
        Mobility: 'Removable wheels',
        Usage: 'Commercial'
      }
    },
    {
      id: 3,
      name: 'Single Burner Range',
      category: 'cooking-equipment',
      description: 'Commercial single burner gas range with brass burner and fuel-efficient design.',
      image: '/product/product-3.jpg',
      features: [
        'High quality brass burner',
        'Fuel efficient',
        'Safe and easy operation',
        'Rust resistant',
        'Easy to clean design'
      ],
      specifications: {
        Material: 'Stainless Steel',
        Burners: '1',
        BurnerType: 'Brass',
        Usage: 'Commercial'
      }
    },
    {
      id: 4,
      name: 'Two Burner Range',
      category: 'cooking-equipment',
      description: 'Durable two burner commercial gas range ideal for restaurants and hotels.',
      image: '/product/product-4.jpg',
      features: [
        'High quality brass burners',
        'Fuel efficient performance',
        'Rust resistant body',
        'Easy cleaning surface'
      ],
      specifications: {
        Material: 'Stainless Steel',
        Burners: '2',
        BurnerType: 'Brass',
        Usage: 'Commercial'
      }
    },
    {
      id: 5,
      name: 'Three Burner Range',
      category: 'cooking-equipment',
      description: 'Three burner commercial gas stove designed for high-output professional kitchens.',
      image: '/product/product-5.jpg',
      features: [
        'High quality brass burners',
        'Fuel efficient',
        'Safe operation',
        'Rust resistant',
        'Easy maintenance'
      ],
      specifications: {
        Material: 'Stainless Steel',
        Burners: '3',
        BurnerType: 'Brass',
        Usage: 'Commercial'
      }
    },
    {
      id: 6,
      name: 'Dosa Plate',
      category: 'cooking-equipment',
      description: 'Commercial dosa plate with high-grade steel construction for long service life.',
      image: '/product/product-6.jpg',
      features: [
        'High grade steel',
        'Long service life',
        'Fuel efficient',
        'Available in multiple sizes'
      ],
      specifications: {
        Material: 'Steel',
        Usage: 'Commercial',
        Finish: 'Smooth',
        Customization: 'Available'
      }
    },
    {
      id: 7,
      name: 'Chapati Plate',
      category: 'cooking-equipment',
      description: 'Heavy-duty chapati plate with puffer and stainless steel structure.',
      image: '/product/product-7.jpg',
      features: [
        'Hot plate with puffer',
        'RV burner',
        'Stainless steel structure',
        'Heavy duty MS plate'
      ],
      specifications: {
        Material: 'Stainless Steel & MS',
        BurnerType: 'RV Burner',
        Usage: 'Commercial'
      }
    },
    {
      id: 8,
      name: 'Cooking Range & Oven',
      category: 'cooking-equipment',
      description: 'Four burner commercial cooking range with integrated oven for professional kitchens.',
      image: '/product/product-8.jpg',
      features: [
        '4 burner range with oven',
        'High grade raw materials',
        'Advanced manufacturing technology',
        'Quality tested'
      ],
      specifications: {
        Material: 'Stainless Steel',
        Burners: '4',
        Oven: 'Included',
        Usage: 'Commercial'
      }
    },
    {
      id: 9,
      name: 'Chinese Cooking Range',
      category: 'cooking-equipment',
      description: 'Three burner Chinese cooking range designed for fast and high-heat cooking.',
      image: '/product/product-9.jpg',
      features: [
        'Three burner configuration',
        'Excellent finish',
        'High heat efficiency',
        'Ideal for Chinese cuisine'
      ],
      specifications: {
        Material: 'Stainless Steel',
        Burners: '3',
        CuisineType: 'Chinese',
        Usage: 'Commercial'
      }
    },
    {
      id: 10,
      name: 'Idli Steamer',
      category: 'cooking-equipment',
      description: 'Commercial idli steamer made from SS 304 with excellent corrosion resistance.',
      image: '/product/product-10.jpg',
      features: [
        'SS 304 contact parts',
        'Corrosion resistant',
        'Easy to clean',
        'Gas operated',
        'Portable design'
      ],
      specifications: {
        Material: 'Stainless Steel 304',
        Operation: 'Gas',
        Portability: 'Movable',
        Usage: 'Commercial'
      }
    },


  {
    id: 11,
    name: 'Static Baking Oven',
    category: 'bakery-equipment',
    description: 'Commercial static baking oven suitable for bread, pastries, cookies and other bakery products.',
    image: '/product/product-11.jpg',
    features: [
      'Single / Double / Triple deck options',
      'Suitable for all kinds of baking',
      'Gas or electric operated',
      'Heavy MS interior with SS front',
      'Mineral wool insulation',
      'Independent top & bottom heating control'
    ],
    specifications: {
      Material: 'MS Interior & SS Front',
      DeckType: 'Single / Double / Triple',
      Operation: 'Gas / Electric',
      Insulation: 'Mineral Wool',
      Usage: 'Commercial Bakery'
    }
  },
  {
    id: 12,
    name: 'Rotary Baking Oven',
    category: 'bakery-equipment',
    description: 'High-performance rotary baking oven with uniform heat distribution and advanced temperature control.',
    image: '/product/product-12.jpg',
    features: [
      'Stainless steel body & baking chamber',
      'Heat resistant glass door',
      'Complete door sealing gasket',
      'Top loading fan assembly',
      'Low fuel consumption heat exchanger',
      'Digital temperature controller',
      'Built-in steam generator',
      'Excellent air circulation system'
    ],
    specifications: {
      Material: 'Stainless Steel',
      HeatingType: 'Indirect Heating',
      TemperatureControl: 'Digital',
      SteamGenerator: 'Included',
      Usage: 'Commercial Bakery'
    }
  },
  {
    id: 13,
    name: 'Spiral Mixer',
    category: 'bakery-equipment',
    description: 'Professional spiral mixer designed for consistent and high-quality dough preparation.',
    image: '/product/product-13.jpg',
    features: [
      'Ideal for bakeries and pizzerias',
      'Available in multiple sizes',
      'Improves dough consistency',
      'Reduces oxidation',
      'Programmable timer & speed control',
      'Operates only with safety cover closed'
    ],
    specifications: {
      Material: 'Heavy Duty Metal',
      SpeedControl: 'Variable',
      SafetyFeature: 'Protective wire cover',
      Capacity: 'Multiple sizes available',
      Usage: 'Commercial Bakery'
    }
  },
  {
    id: 14,
    name: 'Planetary Mixer',
    category: 'bakery-equipment',
    description: 'High-efficiency planetary mixer with noiseless operation and corrosion-resistant body.',
    image: '/product/product-14.jpg',
    features: [
      'High-grade raw material construction',
      'SS removable bowl',
      'SS blade with 3 variable speeds',
      'Smooth and noiseless operation',
      'Corrosion resistant',
      'High efficiency mixing'
    ],
    specifications: {
      Material: 'Stainless Steel',
      Speeds: '3 + Neutral',
      BowlType: 'Removable SS Bowl',
      Operation: 'Electric',
      Usage: 'Commercial Bakery'
    }
  },
  {
    id: 15,
    name: 'Dough Sheeter',
    category: 'bakery-equipment',
    description: 'Precision dough sheeter designed for uniform thickness and consistent bakery output.',
    image: '/product/product-15.jpg',
    features: [
      'Well designed heavy-duty machine',
      'Adjustable thickness control',
      'Consistent performance',
      'Maintenance free operation',
      'High safety and durability',
      'Easy to use'
    ],
    specifications: {
      Material: 'Stainless Steel',
      ThicknessControl: 'Adjustable',
      Operation: 'Manual / Electric',
      Maintenance: 'Low',
      Usage: 'Commercial Bakery'
    }
  },
  {
    id: 16,
    name: 'Bread Slicer',
    category: 'bakery-equipment',
    description: 'Efficient bread slicer machine designed for clean and uniform slicing with low noise.',
    image: '/product/product-16.jpg',
    features: [
      'High quality construction',
      'Reliable and efficient operation',
      'Ideal for bread and cake slicing',
      'User safety protective cover',
      'Low noise operation'
    ],
    specifications: {
      Material: 'Stainless Steel',
      Operation: 'Electric',
      NoiseLevel: 'Low',
      SafetyFeature: 'Protective cover',
      Usage: 'Commercial Bakery'
    }
  },
  {
    id: 17,
    name: 'Pizza Conveyor Oven',
    category: 'bakery-equipment',
    description: 'High-efficiency pizza conveyor oven with precise temperature control and low fuel consumption.',
    image: '/product/product-17.jpg',
    features: [
      'High grade stainless steel body',
      'LCD temperature controller',
      'Micro-computer ignition system',
      'Flame monitoring system',
      'High thermal efficiency',
      'Low gas or electricity consumption'
    ],
    specifications: {
      Material: 'Stainless Steel',
      TemperatureControl: 'LCD Digital',
      IgnitionSystem: 'Micro-computer based',
      FuelType: 'Gas / Electric',
      Usage: 'Commercial Bakery'
    }
  },
  {
    id: 18,
    name: 'Straight Glass Display Counter',
    category: 'display-counters',
    description: 'Beautiful counter to display a variety of snacks, sweets, cakes or pastries.',
    image: '/product/product-72.jpg',
    features: [
      'Display snacks, sweets, cakes, pastries',
      '2–3 glass shelves',
      'Stainless steel construction',
      'Granite or marble top with matching front panel',
      'Powerful efficient cooling'
    ],
    specifications: {
      BodyMaterial: 'Stainless Steel',
      Shelves: '2–3 Glass',
      TopMaterial: 'Granite / Marble',
      Cooling: 'Yes'
    }
  },
  {
    id: 19,
    name: 'Curved Dome Glass Display Counter',
    category: 'display-counters',
    description: 'Beautiful curved dome glass counter for displaying snacks, sweets, cakes or pastries.',
    image: '/product/product-73.jpg',
    features: [
      'Display snacks, sweets, cakes, pastries',
      '2–3 glass shelves',
      'Stainless steel construction',
      'Granite or marble top',
      'Powerful cooling'
    ],
    specifications: {
      GlassType: 'Curved Dome',
      BodyMaterial: 'Stainless Steel',
      Shelves: '2–3 Glass',
      Cooling: 'Yes'
    }
  },
  {
    id: 20,
    name: 'Curved Dome Glass Display Counter',
    category: 'display-counters',
    description: 'Beautiful curved dome glass counter for displaying snacks, sweets, cakes or pastries.',
    image: '/product/product-78.jpg',
    features: [
      'Display snacks, sweets, cakes, pastries',
      '2–3 glass shelves',
      'Stainless steel construction',
      'Granite or marble top',
      'Powerful cooling'
    ],
    specifications: {
      GlassType: 'Curved Dome',
      BodyMaterial: 'Stainless Steel',
      Shelves: '2–3 Glass',
      Cooling: 'Yes'
    }
  },
  {
    id: 21,
    name: 'Straight Dome Glass Display Counter',
    category: 'display-counters',
    description: 'Beautiful straight dome glass counter for displaying food items.',
    image: '/product/product-84.jpg',
    features: [
      'Display snacks, sweets, cakes, pastries',
      '2–3 glass shelves',
      'Stainless steel construction',
      'Granite / marble top',
      'Powerful cooling'
    ],
    specifications: {
      GlassType: 'Straight Dome',
      BodyMaterial: 'Stainless Steel',
      Shelves: '2–3 Glass',
      Cooling: 'Yes'
    }
  },
  {
    id: 22,
    name: 'L Shaped Glass Display Counter',
    category: 'display-counters',
    description: 'L shaped glass display counter to showcase a variety of food items.',
    image: '/product/product-76.jpg',
    features: [
      'Display snacks, sweets, cakes, pastries',
      '2–3 glass shelves',
      'Stainless steel construction',
      'Granite or marble top',
      'Powerful cooling'
    ],
    specifications: {
      Shape: 'L Shaped',
      BodyMaterial: 'Stainless Steel',
      Shelves: '2–3 Glass',
      Cooling: 'Yes'
    }
  },
  {
    id: 23,
    name: 'L Shaped Glass Display Counter',
    category: 'display-counters',
    description: 'L shaped glass display counter to showcase a variety of food items.',
    image: '/product/product-83.jpg',
    features: [
      'Display snacks, sweets, cakes, pastries',
      '2–3 glass shelves',
      'Stainless steel construction',
      'Granite or marble top',
      'Powerful cooling'
    ],
    specifications: {
      Shape: 'L Shaped',
      BodyMaterial: 'Stainless Steel',
      Shelves: '2–3 Glass',
      Cooling: 'Yes'
    }
  },
  {
    id: 24,
    name: 'Straight Glass Display Counter',
    category: 'display-counters',
    description: 'Beautiful straight glass display counter for variety of items.',
    image: '/product/product-80.jpg',
    features: [
      'Display snacks, sweets, cakes, pastries',
      '2–3 glass shelves',
      'Stainless steel construction',
      'Granite or marble top',
      'Powerful cooling'
    ],
    specifications: {
      BodyMaterial: 'Stainless Steel',
      Shelves: '2–3 Glass',
      TopMaterial: 'Granite / Marble',
      Cooling: 'Yes'
    }
  },
  {
    id: 25,
    name: 'Diamond Shaped Glass Display Counter',
    category: 'display-counters',
    description: 'Diamond shaped glass display counter for premium presentation.',
    image: '/product/product-81.jpg',
    features: [
      'Display snacks, sweets, cakes, pastries',
      '2–3 glass shelves',
      'Stainless steel construction',
      'Granite or marble top',
      'Powerful cooling'
    ],
    specifications: {
      Shape: 'Diamond',
      BodyMaterial: 'Stainless Steel',
      Shelves: '2–3 Glass',
      Cooling: 'Yes'
    }
  },
  {
    id: 26,
    name: 'Bend Glass Display Counter',
    category: 'display-counters',
    description: 'Bend glass display counter with elegant curved design.',
    image: '/product/product-79.jpg',
    features: [
      'Display snacks, sweets, cakes, pastries',
      '2–3 glass shelves',
      'Stainless steel construction',
      'Granite or marble top',
      'Powerful cooling'
    ],
    specifications: {
      GlassType: 'Bend',
      BodyMaterial: 'Stainless Steel',
      Shelves: '2–3 Glass',
      Cooling: 'Yes'
    }
  },
  {
    id: 27,
    name: 'Bend Glass Display Counter',
    category: 'display-counters',
    description: 'Bend glass display counter with elegant curved design.',
    image: '/product/product-65.jpg',
    features: [
      'Display snacks, sweets, cakes, pastries',
      '2–3 glass shelves',
      'Stainless steel construction',
      'Granite or marble top'
    ],
    specifications: {
      GlassType: 'Bend',
      BodyMaterial: 'Stainless Steel',
      Shelves: '2–3 Glass'
    }
  },
  {
    id: 28,
    name: 'Straight Glass Display Counter',
    category: 'display-counters',
    description: 'Beautiful straight glass display counter for showcasing items.',
    image: '/product/product-66.jpg',
    features: [
      'Display snacks, sweets, cakes, pastries',
      '2–3 glass shelves',
      'Stainless steel construction',
      'Granite or marble top'
    ],
    specifications: {
      BodyMaterial: 'Stainless Steel',
      Shelves: '2–3 Glass',
      TopMaterial: 'Granite / Marble'
    }
  },
  {
    id: 29,
    name: 'Bend Glass Display Counter',
    category: 'display-counters',
    description: 'Bend glass display counter with elegant curved design.',
    image: '/product/product-67.jpg',
    features: [
      'Display snacks, sweets, cakes, pastries',
      '2–3 glass shelves',
      'Stainless steel construction',
      'Granite or marble top'
    ],
    specifications: {
      GlassType: 'Bend',
      BodyMaterial: 'Stainless Steel',
      Shelves: '2–3 Glass'
    }
  },
  {
    id: 30,
    name: 'Bend Glass Display Counter',
    category: 'display-counters',
    description: 'Bend glass display counter with elegant curved design.',
    image: '/product/product-68.jpg',
    features: [
      'Display snacks, sweets, cakes, pastries',
      '2–3 glass shelves',
      'Stainless steel construction',
      'Granite or marble top'
    ],
    specifications: {
      GlassType: 'Bend',
      BodyMaterial: 'Stainless Steel',
      Shelves: '2–3 Glass'
    }
  },
  {
    id: 31,
    name: 'Bend Glass Display Counter',
    category: 'display-counters',
    description: 'Bend glass display counter with elegant curved design.',
    image: '/product/product-69.jpg',
    features: [
      'Display snacks, sweets, cakes, pastries',
      '2–3 glass shelves',
      'Stainless steel construction',
      'Granite or marble top'
    ],
    specifications: {
      GlassType: 'Bend',
      BodyMaterial: 'Stainless Steel',
      Shelves: '2–3 Glass'
    }
  },
  {
    id: 32,
    name: 'Bend Glass Display Counter',
    category: 'display-counters',
    description: 'Bend glass display counter with elegant curved design.',
    image: '/product/product-70.jpg',
    features: [
      'Display snacks, sweets, cakes, pastries',
      '2–3 glass shelves',
      'Stainless steel construction',
      'Granite or marble top'
    ],
    specifications: {
      GlassType: 'Bend',
      BodyMaterial: 'Stainless Steel',
      Shelves: '2–3 Glass'
    }
  },
  {
    id: 33,
    name: 'Diamond Shape Display Counter',
    category: 'display-counters',
    description: 'Diamond shape display counter for showcasing food items.',
    image: '/product/product-71.jpg',
    features: [
      'Display snacks, sweets, cakes, pastries',
      '2–3 glass shelves',
      'Stainless steel construction',
      'Granite or marble top'
    ],
    specifications: {
      Shape: 'Diamond',
      BodyMaterial: 'Stainless Steel',
      Shelves: '2–3 Glass'
    }
  },
  {
    id: 34,
    name: 'General Display Counter',
    category: 'display-counters',
    description: 'General display counter suitable for a variety of foods.',
    image: '/product/product-18.jpg',
    features: [
      'Display snacks, sweets, cakes, pastries',
      '2–3 glass shelves',
      'Stainless steel construction',
      'Granite or marble top'
    ],
    specifications: {
      BodyMaterial: 'Stainless Steel',
      Shelves: '2–3 Glass',
      TopMaterial: 'Granite / Marble'
    }
  },
  {
    id: 35,
    name: 'Cold Display Counter',
    category: 'display-counters',
    description: 'Cold display counter with efficient cooling for chilled foods.',
    image: '/product/product-19.jpg',
    features: [
      'Display snacks, sweets, cakes, pastries',
      '2–3 glass shelves',
      'Powerful efficient cooling',
      'Stainless steel construction',
      'Granite or marble top'
    ],
    specifications: {
      Cooling: 'Cold / Refrigerated',
      BodyMaterial: 'Stainless Steel',
      Shelves: '2–3 Glass'
    }
  },
  {
    id: 36,
    name: 'Hot Display Counter',
    category: 'display-counters',
    description: 'Hot display counter designed to keep temperature & humidity even.',
    image: '/product/product-20.jpg',
    features: [
      'Modern hot counter design',
      'Even temperature & humidity',
      'Good show performance',
      'Adjustable racks'
    ],
    specifications: {
      Heating: 'Yes',
      Racks: 'Adjustable'
    }
  },
  {
    id: 37,
    name: 'Food Warmer',
    category: 'display-counters',
    description: 'Food warmer counter with adjustable shelves and warm display performance.',
    image: '/product/product-21.jpg',
    features: [
      'Modern design hot counter',
      'Even warmth & humidity',
      'Good show performance',
      'Adjustable racks'
    ],
    specifications: {
      Heating: 'Yes',
      Racks: 'Adjustable'
    }
  },


  {
    id: 38,
    name: 'Four Door Refrigerator',
    category: 'refrigeration',
    description: 'Heavy-duty four door commercial refrigerator with uniform cooling and energy efficient performance.',
    image: '/product/product-22.jpg',
    features: [
      'Imported international famous compressor',
      'Self defrost system',
      'Digital temperature display & controller',
      'High cooling efficiency and energy saving',
      'Even temperature distribution',
      'Entire SS 304 construction'
    ],
    specifications: {
      Doors: '4',
      Compressor: 'Imported',
      DefrostSystem: 'Self Defrost',
      TemperatureControl: 'Digital',
      Material: 'Stainless Steel 304',
      Usage: 'Commercial Refrigeration'
    }
  },
  {
    id: 39,
    name: 'Two Door Refrigerator',
    category: 'refrigeration',
    description: 'Commercial two door refrigerator with reliable cooling and hygienic SS 304 construction.',
    image: '/product/product-23.jpg',
    features: [
      'Imported international famous compressor',
      'Self defrost system',
      'Digital temperature display & controller',
      'High cooling efficiency and energy saving',
      'Uniform internal temperature',
      'Entire SS 304 construction'
    ],
    specifications: {
      Doors: '2',
      Compressor: 'Imported',
      DefrostSystem: 'Self Defrost',
      TemperatureControl: 'Digital',
      Material: 'Stainless Steel 304',
      Usage: 'Commercial Refrigeration'
    }
  },
  {
    id: 40,
    name: 'Undercounter Refrigerator',
    category: 'refrigeration',
    description: 'Compact undercounter refrigerator with working top and efficient cooling system.',
    image: '/product/product-24.jpg',
    features: [
      'Cold storage with working top',
      'Sturdy puff insulation',
      'Digital temperature display & controller',
      'High cooling efficiency',
      'Hermetically sealed compressor',
      'Entire SS 304 construction'
    ],
    specifications: {
      Type: 'Undercounter',
      Compressor: 'Hermetically Sealed',
      TemperatureControl: 'Digital',
      Insulation: 'PUF',
      Material: 'Stainless Steel 304',
      Usage: 'Commercial Refrigeration'
    }
  },
  {
    id: 41,
    name: 'Ice Cube Machine',
    category: 'refrigeration',
    description: 'Commercial ice cube machine producing compact diced ice with high cooling efficiency.',
    image: '/product/product-25.jpg',
    features: [
      'Stainless steel body',
      'Cut cone shaped diced ice',
      'High staying power ice cubes',
      'Sturdy puff insulation',
      'Energy efficient cooling',
      'Hygienic and easy maintenance'
    ],
    specifications: {
      IceType: 'Diced / Cone Shaped',
      BodyMaterial: 'Stainless Steel',
      Insulation: 'PUF',
      CoolingEfficiency: 'High',
      Maintenance: 'Easy',
      Usage: 'Commercial Ice Making'
    }
  },
  {
    id: 42,
    name: 'Water Cooler',
    category: 'refrigeration',
    description: 'Commercial water cooler providing fast cooling and pure drinking water.',
    image: '/product/product-26.jpg',
    features: [
      'Imported international famous compressor',
      'Sturdy puff insulation',
      'Faster cooling performance',
      'Provides pure drinking water',
      'Entire SS 304 construction'
    ],
    specifications: {
      Compressor: 'Imported',
      CoolingSpeed: 'Fast',
      Insulation: 'PUF',
      Material: 'Stainless Steel 304',
      Usage: 'Commercial Water Cooling'
    }
  },
  {
    id: 43,
    name: 'Cold Bain Marie Under Counter with O.H.S.',
    category: 'refrigeration',
    description: 'Cold bain marie undercounter unit designed to keep food chilled for hotel and catering use.',
    image: '/product/product-27.jpg',
    features: [
      'Efficient cooling system',
      'Keeps stored food cold',
      'Ideal for hotel and catering applications',
      'Spacious internal storage',
      'Easy to handle and durable',
      'Entire SS 304 construction'
    ],
    specifications: {
      Type: 'Cold Bain Marie',
      Mounting: 'Under Counter with O.H.S.',
      Cooling: 'Refrigerated',
      Material: 'Stainless Steel 304',
      Usage: 'Hotel & Catering'
    }
  },

  {
    id: 44,
    name: 'Pantry Fridge',
    category: 'pantry',
    description: 'Commercial pantry fridge with working top, efficient cooling, and organized storage for pantry operations.',
    image: '/product/product-28.jpg',
    features: [
      'Cold storage facility with working top',
      'Sturdy puff insulation',
      'Digital temperature display & controller',
      'High cooling efficiency and energy saving',
      'Imported international compressor',
      'Self defrost system',
      'Well segregated storage counters',
      'Entire SS 304 construction'
    ],
    specifications: {
      Type: 'Pantry Refrigerator',
      Compressor: 'Imported',
      DefrostSystem: 'Self Defrost',
      TemperatureControl: 'Digital',
      Insulation: 'PUF',
      Material: 'Stainless Steel 304',
      Usage: 'Commercial Pantry'
    }
  },
  {
    id: 45,
    name: 'Electric Salamander',
    category: 'pantry',
    description: 'Electric salamander grill designed for fast grilling, browning, and finishing of dishes in commercial kitchens.',
    image: '/product/product-29.jpg',
    features: [
      'Stainless steel construction',
      'Dual energy regulator control',
      'Easy-clean crumb tray and reflector',
      'Long life stainless steel heating elements',
      'Advanced control safety systems'
    ],
    specifications: {
      Type: 'Electric Salamander Grill',
      Control: 'Dual Energy Regulator',
      HeatingElement: 'Stainless Steel',
      Cleaning: 'Easy Clean Crumb Tray',
      Safety: 'Advanced Safety Controls',
      Usage: 'Commercial Pantry'
    }
  },
  {
    id: 46,
    name: 'Electric Fryer',
    category: 'pantry',
    description: 'Heavy-duty electric fryer with stainless steel construction for safe and efficient frying operations.',
    image: '/product/product-30.jpg',
    features: [
      'Stainless steel frying basket',
      'Front control panel with indicating lamps',
      'Pipe legs with adjustable bullet feet',
      'Lift-up heater mechanism for easy cleaning',
      'Stainless steel oil chambers',
      'Safe to use and easy to maintain'
    ],
    specifications: {
      Type: 'Electric Fryer',
      ControlPanel: 'Stainless Steel with Indicator Lamps',
      OilChamber: 'Stainless Steel',
      Legs: 'Adjustable Bullet Feet',
      Operation: 'Electric',
      Maintenance: 'Easy',
      Usage: 'Commercial Pantry'
    }
  },
  {
    id: 47,
    name: 'Sandwich Griller',
    category: 'pantry',
    description: 'Commercial sandwich griller with cast iron plates for quick and uniform grilling.',
    image: '/product/product-31.jpg',
    features: [
      'High quality heating elements',
      'Nylon heat-proof handle for better grip',
      'Cast iron grilling plates',
      'Spring counter-balanced top',
      'Quick temperature rise for versatile grilling'
    ],
    specifications: {
      Type: 'Sandwich Griller',
      PlateMaterial: 'Cast Iron',
      Handle: 'Heat & Shock Proof Nylon',
      HeatingElement: 'Armoured',
      TemperatureRise: 'Fast',
      Usage: 'Commercial Pantry'
    }
  },
  {
    id: 48,
    name: 'Toaster',
    category: 'pantry',
    description: 'High-performance conveyor toaster designed for continuous toasting in commercial kitchens.',
    image: '/product/product-32.jpg',
    features: [
      'High output conveyor toaster',
      'Independent single or double-sided toasting control',
      'Removable crumb tray for easy cleaning',
      'High production capacity',
      'Durable steel construction for long service life'
    ],
    specifications: {
      Type: 'Conveyor Toaster',
      OutputCapacity: '300–350 slices/hour',
      Controls: 'Independent Sided Controls',
      CrumbTray: 'Removable',
      Construction: 'Painted & Aluminized Steel',
      Usage: 'Commercial Pantry'
    }
  },
  {
    id: 49,
    name: 'Wet Grinder',
    category: 'foodprocess',
    description: 'High-performance wet grinder designed for efficient grinding, mixing, and nutrient retention in commercial kitchens.',
    image: '/product/product-33.jpg',
    features: [
      'High quality and well-designed construction',
      'Hard black export-quality grinding stones',
      'Simultaneous crushing, mixing, pounding and grinding',
      'Innovative attachments for kneading, mixing and pulping',
      'Optimized stone rotation to prevent overheating and retain nutrients'
    ],
    specifications: {
      Type: 'Wet Grinder',
      StoneMaterial: 'Hard Black Stone',
      Attachments: 'Kneading, Mixing, Pulping',
      Operation: 'Electric',
      NoiseLevel: 'Low',
      Usage: 'Commercial Food Processing'
    }
  },
  {
    id: 50,
    name: 'Meat Mincer',
    category: 'foodprocess',
    description: 'Commercial meat mincer with powerful motor and stainless steel construction for effortless meat processing.',
    image: '/product/product-34.jpg',
    features: [
      'High-grade stainless steel body',
      'Powerful motor with metal feeding screw',
      'Sharp and durable cutting system',
      'Easy to clean and maintain'
    ],
    specifications: {
      Type: 'Meat Mincer',
      BodyMaterial: 'Stainless Steel',
      FeedingSystem: 'Metal Screw',
      Motor: 'Heavy Duty',
      Cleaning: 'Easy',
      Usage: 'Commercial Food Processing'
    }
  },
  {
    id: 51,
    name: 'Meat Slicer',
    category: 'foodprocess',
    description: 'Commercial-grade meat slicer with quiet operation and easy-clean design for professional kitchens.',
    image: '/product/product-35.jpg',
    features: [
      'Commercial-grade construction',
      'Heavy-duty powerful motor',
      'Extremely quiet operation',
      'Removable parts for easy washing'
    ],
    specifications: {
      Type: 'Meat Slicer',
      Motor: 'Heavy Duty',
      Operation: 'Low Noise',
      Cleaning: 'Easy Clean, Removable Parts',
      BuildQuality: 'Commercial Grade',
      Usage: 'Commercial Food Processing'
    }
  },
  {
    id: 52,
    name: 'Vegetable Cutter',
    category: 'foodprocess',
    description: 'Heavy-duty vegetable cutter with interchangeable blades for fast and uniform cutting.',
    image: '/product/product-36.jpg',
    features: [
      'High quality stainless steel construction',
      'Precision aluminum die-cast blade housing',
      'Multiple blade options for different cuts',
      'Easy blade change system',
      'Highly durable and safe to use'
    ],
    specifications: {
      Type: 'Vegetable Cutter',
      Material: 'Stainless Steel',
      BladeMaterial: 'Stainless Steel',
      BladeChange: 'Easy',
      Safety: 'High',
      Usage: 'Commercial Food Processing'
    }
  },
  {
    id: 53,
    name: 'Potato Peeler',
    category: 'foodprocess',
    description: 'Efficient potato peeler with automatic unloading and low power consumption for bulk food preparation.',
    image: '/product/product-37.jpg',
    features: [
      'Heavy-duty stainless steel construction',
      'Self-tensioning poli-V belt drive',
      'High efficiency ventilated motor',
      'Automatic unloading system',
      'Removable bowl for easy cleaning',
      'Low power consumption'
    ],
    specifications: {
      Type: 'Potato Peeler',
      BodyMaterial: 'Stainless Steel',
      DriveSystem: 'Poli-V Belt',
      Motor: 'Ventilated High Efficiency',
      Unloading: 'Automatic',
      PowerConsumption: 'Low',
      Usage: 'Commercial Food Processing'
    }
  },
  {
    id: 54,
    name: 'Tilting Grinder',
    category: 'foodprocess',
    description: 'Electric tilting grinder designed for easy handling, low noise operation, and efficient grinding.',
    image: '/product/product-38.jpg',
    features: [
      'Stainless steel body',
      'Electric motor operated',
      'Low noise operation',
      'Low maintenance design',
      'Low electric power consumption'
    ],
    specifications: {
      Type: 'Tilting Grinder',
      Material: 'Stainless Steel',
      Operation: 'Electric',
      NoiseLevel: 'Low',
      Maintenance: 'Easy',
      PowerConsumption: 'Low',
      Usage: 'Commercial Food Processing'
    }
  },
  {
    id: 55,
    name: 'Pulveriser',
    category: 'foodprocess',
    description: 'Compact pulveriser machine offering fine grinding for gravies and spices in commercial kitchens.',
    image: '/product/product-39.jpg',
    features: [
      'Compact design with minimal space requirement',
      'Stainless steel construction',
      'High torque motor for fine grinding',
      'Easy to maintain',
      'Ideal for gravies and spice grinding',
      'Grinding capacity varies by material'
    ],
    specifications: {
      Type: 'Pulveriser',
      Design: 'Compact',
      Material: 'Stainless Steel',
      MotorTorque: 'High',
      GrindingCapacity: 'Material Dependent',
      Maintenance: 'Easy',
      Usage: 'Commercial Food Processing'
    }
  },

  {
    id: 56,
    name: 'Dish Landing Table',
    category: 'washingequipment',
    description: 'Heavy-duty dish landing table designed for efficient dish handling and corrosion resistance in commercial kitchens.',
    image: '/product/product-40.jpg',
    features: [
      'Strong construction',
      'Durable design',
      'Accurate dimensions',
      'Corrosion resistant'
    ],
    specifications: {
      Type: 'Dish Landing Table',
      Construction: 'Heavy Duty',
      Durability: 'High',
      CorrosionResistance: 'Yes',
      Usage: 'Commercial Kitchen'
    }
  },
  {
    id: 57,
    name: 'Dish Landing Table with OHS',
    category: 'washingequipment',
    description: 'Dish landing table with overhead shelf providing additional storage and efficient workflow.',
    image: '/product/product-41.jpg',
    features: [
      'Strong construction',
      'Durable design',
      'Accurate dimensions',
      'Corrosion resistant',
      'Overhead shelf for storage'
    ],
    specifications: {
      Type: 'Dish Landing Table with OHS',
      Construction: 'Heavy Duty',
      Shelf: 'Overhead Shelf',
      Durability: 'High',
      CorrosionResistance: 'Yes',
      Usage: 'Commercial Kitchen'
    }
  },
  {
    id: 58,
    name: 'Single Sink Unit',
    category: 'washingequipment',
    description: 'Compact single sink unit built for durability and reliable washing performance.',
    image: '/product/product-42.jpg',
    features: [
      'Excellent quality raw material',
      'High durability',
      'Reliable performance'
    ],
    specifications: {
      Type: 'Single Sink Unit',
      Material: 'Stainless Steel',
      BowlCount: '1',
      Durability: 'High',
      Usage: 'Commercial Kitchen'
    }
  },
  {
    id: 59,
    name: 'Two Sink Unit',
    category: 'washingequipment',
    description: 'Stainless steel two bowl sink unit with frame and shelf, supplied fully assembled.',
    image: '/product/product-43.jpg',
    features: [
      'Double bowl sink unit',
      'Frame and shelf included',
      'Tap hole and waste fitting provided',
      'Supplied fully assembled',
      'Custom sizes available'
    ],
    specifications: {
      Type: 'Two Sink Unit',
      Material: 'Stainless Steel',
      BowlCount: '2',
      Assembly: 'Fully Assembled',
      WasteFitting: '1½ inch Combined Waste & Overflow',
      CustomSize: 'Available',
      Usage: 'Commercial Kitchen'
    }
  },
  {
    id: 60,
    name: 'Three Sink Unit',
    category: 'washingequipment',
    description: 'Three bowl stainless steel sink unit designed for high-volume washing operations.',
    image: '/product/product-44.jpg',
    features: [
      'Multiple bowl sink unit',
      'Frame and shelf included',
      'Tap hole and waste fitting provided',
      'Supplied fully assembled',
      'Custom sizes available'
    ],
    specifications: {
      Type: 'Three Sink Unit',
      Material: 'Stainless Steel',
      BowlCount: '3',
      Assembly: 'Fully Assembled',
      WasteFitting: '1½ inch Combined Waste & Overflow',
      CustomSize: 'Available',
      Usage: 'Commercial Kitchen'
    }
  },
  {
    id: 61,
    name: 'Work Table with Sink',
    category: 'washingequipment',
    description: 'Stainless steel work table with integrated sink and splash back for food preparation and washing.',
    image: '/product/product-45.jpg',
    features: [
      'Stainless steel work bench',
      'Integrated bowl sink',
      'Splash back design',
      'High durability'
    ],
    specifications: {
      Type: 'Work Table with Sink',
      Material: 'Stainless Steel',
      SinkIncluded: 'Yes',
      SplashBack: 'Yes',
      Durability: 'High',
      Usage: 'Commercial Kitchen'
    }
  },
  {
    id: 62,
    name: 'Pot Rack',
    category: 'washingequipment',
    description: 'Durable pot rack for organized storage of kitchen utensils and cookware.',
    image: '/product/product-46.jpg',
    features: [
      'Excellent quality raw material',
      'High durability',
      'Reliable performance'
    ],
    specifications: {
      Type: 'Pot Rack',
      Material: 'Stainless Steel',
      Durability: 'High',
      StoragePurpose: 'Utensils & Cookware',
      Usage: 'Commercial Kitchen'
    }
  },
  {
    id: 63,
    name: 'Clean Dish Rack',
    category: 'washingequipment',
    description: 'Clean dish rack designed for hygienic storage of washed dishes.',
    image: '/product/product-47.jpg',
    features: [
      'Excellent quality raw material',
      'High durability',
      'Reliable performance'
    ],
    specifications: {
      Type: 'Clean Dish Rack',
      Material: 'Stainless Steel',
      Durability: 'High',
      Hygiene: 'High',
      Usage: 'Commercial Kitchen'
    }
  },
  {
    id: 64,
    name: 'Bussing Trolley',
    category: 'washingequipment',
    description: 'Heavy-duty bussing trolley for efficient dish collection and transport.',
    image: '/product/product-48.jpg',
    features: [
      'Excellent quality raw material',
      'High durability',
      'Reliable performance'
    ],
    specifications: {
      Type: 'Bussing Trolley',
      Material: 'Stainless Steel',
      Mobility: 'Easy Movement',
      Durability: 'High',
      Usage: 'Commercial Kitchen'
    }
  },
  {
    id: 65,
    name: 'Dish Washer',
    category: 'washingequipment',
    description: 'Fully equipped commercial dishwasher with advanced hygiene and electronic controls.',
    image: '/product/product-49.jpg',
    features: [
      'Ready to install with all accessories',
      'Integrated rinse pressure pump and drain pump',
      'Chemical dispenser included',
      'Self-cleaning cycle with rounded tank edges',
      'Fully enclosed hood design',
      'Electronic control with color-coded status display'
    ],
    specifications: {
      Type: 'Dish Washer',
      Installation: 'Ready to Install',
      ControlSystem: 'Electronic',
      HygieneSystem: 'Self Cleaning Cycle',
      HoodDesign: 'Closed on All Sides',
      Accessories: 'Pump, Drain, Chemical Dispenser',
      Usage: 'Commercial Kitchen'
    }
  },
  {
    id: 66,
    name: 'Exhaust Hood with Filter',
    category: 'exhaust-system',
    description: 'High-performance stainless steel exhaust hood designed for superior capture and removal of cooking vapors in commercial kitchens.',
    image: '/product/product-60.jpg',
    features: [
      'Superior exhaust flow rates',
      'Exceptional capture and containment of cooking vapors',
      'Wall or back-to-back island configurations',
      'Front design directs air into filters',
      'Double wall insulated front',
      'Heavy-duty grease baffle filters',
      'Integrated grease drain system'
    ],
    specifications: {
      Type: 'Exhaust Hood with Filter',
      Material: 'Stainless Steel',
      FilterType: 'Grease Baffle Filter',
      Insulation: 'Double Wall Insulated Front',
      Installation: 'Wall / Island',
      GreaseDrain: 'Yes',
      Usage: 'Commercial Kitchen'
    }
  },
  {
    id: 67,
    name: 'Hot / Fresh Air Duct',
    category: 'exhaust-system',
    description: 'Durable sheet metal ducting system designed for efficient transport of hot or fresh air in commercial and industrial environments.',
    image: '/product/product-61.jpg',
    features: [
      'Excellent quality raw material',
      'Highly durable sheet metal construction',
      'Efficient transport of hot and fresh air',
      'Environment-friendly airflow management'
    ],
    specifications: {
      Type: 'Hot / Fresh Air Duct',
      Material: 'Sheet Metal',
      Durability: 'High',
      AirFlowType: 'Hot & Fresh Air',
      Application: 'Ventilation & Air Transport',
      Usage: 'Commercial & Industrial'
    }
  },
  {
    id: 68,
    name: 'Centrifugal Blower',
    category: 'exhaust-system',
    description: 'High-efficiency centrifugal blower engineered for low-noise and reliable ventilation in large buildings and factories.',
    image: '/product/product-62.jpg',
    features: [
      'Excellent quality raw material',
      'Low noise operation',
      'High efficiency airflow',
      'Lightweight and reliable performance'
    ],
    specifications: {
      Type: 'Centrifugal Blower',
      Material: 'Industrial Grade Metal',
      NoiseLevel: 'Low',
      Efficiency: 'High',
      Application: 'General Ventilation',
      Usage: 'High Buildings & Factories'
    }
  },
  {
    id: 69,
    name: 'Axial Blower Fan',
    category: 'exhaust-system',
    description: 'Axial blower fan designed to deliver optimal airflow with efficient power consumption for ventilation systems.',
    image: '/product/product-63.jpg',
    features: [
      'Wide range of air capacity and pressure',
      'Optimized air quantity and power consumption ratio',
      'Aluminium cast aerofoil impeller blades',
      'Available in direct drive or V-belt drive',
      'Excellent performance'
    ],
    specifications: {
      Type: 'Axial Blower Fan',
      Casing: 'Mild Steel / Stainless Steel',
      Impeller: 'Aluminium Cast Aerofoil Blades',
      DriveType: 'Direct / V-Belt',
      AirCapacity: 'Wide Range',
      Efficiency: 'High',
      Usage: 'Commercial & Industrial Ventilation'
    }
  },

  {
    id: 70,
    name: 'LPG Pipe Line & Manifold',
    category: 'gas-stoves',
    description: 'A safe and efficient LPG pipe line and manifold system designed for centralized gas supply in commercial kitchens with multi-stage pressure regulation.',
    image: '/category/gas_bank.png',
    features: [
      'Centralized LPG cylinder bank storage at ground level',
      'Advanced sensor-based governing system',
      'Minimal voltage fluctuation for stable output',
      'Multiple safety-protected devices installed',
      'Low maintenance cost',
      'Multi-stage pressure regulation for enhanced safety',
      'Reliable and excellent performance'
    ],
    specifications: {
      SystemType: 'LPG Pipe Line & Manifold',
      CylinderStorage: 'Ground Level Gas Bank',
      PressureRegulation: 'Multi-Stage Regulation',
      SafetySystem: 'Sensor-Based Safety Protection',
      Maintenance: 'Low Maintenance',
      OutputPressure: 'Low Pressure Supply',
      Application: 'Commercial Kitchen Gas Supply'
    }
  },
    {
    id: 71,
    name: 'Work Table',
    category: 'appliances',
    description: 'Heavy-duty stainless steel work table designed for efficient food preparation in commercial kitchens.',
    image: '/product/product-50.jpg',
    features: [
      'Stainless steel work bench with splash back',
      'High durability',
      'Reliable performance',
      'Adjustable legs for uneven floors'
    ],
    specifications: {
      Material: 'Stainless Steel',
      Design: 'Work Table with Splash Back',
      Legs: 'Adjustable',
      Durability: 'High',
      Usage: 'Commercial Kitchen'
    }
  },
  {
    id: 72,
    name: 'Platform Trolley',
    category: 'appliances',
    description: 'Robust platform trolley built for smooth and efficient material handling in commercial environments.',
    image: '/product/product-51.jpg',
    features: [
      'Excellent quality raw material',
      'High durability',
      'Reliable performance'
    ],
    specifications: {
      Material: 'Heavy Duty Metal',
      Mobility: 'High',
      Durability: 'High',
      Usage: 'Commercial & Industrial'
    }
  },
  {
    id: 73,
    name: 'Onion / Potato Bin',
    category: 'appliances',
    description: 'Durable storage bin specially designed for hygienic storage of onions and potatoes.',
    image: '/product/product-52.jpg',
    features: [
      'Superior storage design',
      'Fabricated using premium raw materials',
      'High durability'
    ],
    specifications: {
      Material: 'Metal',
      StorageType: 'Vegetable Storage',
      ItemsStored: 'Onion & Potato',
      Durability: 'High'
    }
  },
  {
    id: 74,
    name: 'Store Rack',
    category: 'appliances',
    description: 'Strong and reliable store rack suitable for organized storage in kitchens and storerooms.',
    image: '/product/product-53.jpg',
    features: [
      'Excellent quality raw material',
      'Reliable performance',
      'High durability'
    ],
    specifications: {
      Material: 'Metal',
      StorageType: 'Rack System',
      Durability: 'High',
      Usage: 'Kitchen & Store Room'
    }
  },
  {
    id: 75,
    name: 'Hot Food Trolley',
    category: 'appliances',
    description: 'Mobile hot food trolley designed to keep food warm while ensuring smooth transport and safety.',
    image: '/product/product-54.jpg',
    features: [
      'High mobility with tough metal construction',
      'Heavy duty armored heating elements',
      'Precision bearings for easy manoeuvring',
      'Electrical isolation protection',
      'High temperature thermostat'
    ],
    specifications: {
      Material: 'Metal',
      HeatingType: 'Electric',
      TemperatureControl: 'Thermostat Controlled',
      Mobility: 'High',
      Usage: 'Food Service'
    }
  },
  {
    id: 76,
    name: 'Electric Plate Warmer',
    category: 'appliances',
    description: 'Energy-efficient electric plate warmer designed to maintain plate temperature before serving.',
    image: '/product/product-55.jpg',
    features: [
      'All stainless steel body',
      'Holds approximately 75–100 plates',
      'Large capacity with low energy consumption',
      'Safe and easy transportation'
    ],
    specifications: {
      Material: 'Stainless Steel',
      Capacity: '75–100 Plates',
      EnergyConsumption: 'Low',
      Operation: 'Electric',
      Usage: 'Commercial Kitchen'
    }
  },
  {
    id: 77,
    name: 'Bain Marie',
    category: 'appliances',
    description: 'Table-top Bain Marie designed to keep food hot while maintaining consistent serving temperatures.',
    image: '/product/product-56.jpg',
    features: [
      'Table-top design',
      'Maintains food temperature',
      '2 to 6 separate vessels',
      'Temperature control knob',
      'Easy to clean stainless steel construction'
    ],
    specifications: {
      Material: 'Stainless Steel',
      Vessels: '2–6',
      TemperatureControl: 'Manual Knob',
      Design: 'Table Top',
      Usage: 'Food Holding & Serving'
    }
  },
  {
    id: 78,
    name: 'Home Service Trolley',
    category: 'appliances',
    description: 'Reliable service trolley designed for efficient food and utility transport.',
    image: '/product/product-57.jpg',
    features: [
      'Excellent quality raw material',
      'High durability',
      'Reliable performance'
    ],
    specifications: {
      Material: 'Metal',
      Mobility: 'High',
      Durability: 'High',
      Usage: 'Service & Utility'
    }
  },
  {
    id: 79,
    name: 'Luggage Trolley',
    category: 'appliances',
    description: 'Strong luggage trolley suitable for hotels and commercial premises.',
    image: '/product/product-58.jpg',
    features: [
      'Excellent quality raw material',
      'High durability',
      'Reliable performance'
    ],
    specifications: {
      Material: 'Metal',
      LoadCapacity: 'Heavy Duty',
      Mobility: 'Smooth Rolling',
      Usage: 'Hotel & Commercial'
    }
  },
  {
    id: 80,
    name: 'Utility Trolley',
    category: 'appliances',
    description: 'Multi-purpose utility trolley designed for smooth transport and long-term durability.',
    image: '/product/product-59.jpg',
    features: [
      'Excellent quality raw material',
      'High durability',
      'Reliable performance'
    ],
    specifications: {
      Material: 'Metal',
      Mobility: 'High',
      Durability: 'High',
      Usage: 'Kitchen & Utility Operations'
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
  { id: 'appliances', name: 'General Equipments', icon: '/product/product-55.jpg' },
  
  // { id: 'utensils', name: 'Utensils', icon: 'UtensilsCrossed' },
  // { id: 'mixers', name: 'Mixers & Grinders', icon: 'Package' },
  
  
  
  
  // { id: 'washing-equipment', name: 'Washing Equipment', icon: 'Droplets' },
  
];
