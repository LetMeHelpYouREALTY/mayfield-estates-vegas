interface NeighborhoodInfo {
  name: string;
  path: string;
  overview: string;
  medianPrice: number;
  priceChange: number;
  daysOnMarket: number;
  pricePerSqFt: number;
  inventory: number;
  schoolRating: number;
  recentTransactions: number;
  expertQuote: string;
  pricePoint: string;
  propertyTypes: string[];
  lifestyles: string[];
  subCommunities?: string[];
  keyPoints: string[];
  challenges: string[];
}

export const neighborhoodData: Record<string, NeighborhoodInfo> = {
  summerlin: {
    name: "Summerlin",
    path: "M100,100 L300,100 C350,150 350,250 300,300 L100,300 C50,250 50,150 100,100 Z",
    overview: "Premier master-planned community offering luxury living with world-class amenities",
    medianPrice: 850000,
    priceChange: 12.5,
    daysOnMarket: 15,
    pricePerSqFt: 325,
    inventory: 145,
    schoolRating: 4.8,
    recentTransactions: 37,
    expertQuote: "Summerlin isn't just a neighborhood—it's a lifestyle statement. I've closed 37 transactions here in the past 18 months alone, and I can tell you which sub-communities are appreciating fastest and which HOAs actually deliver on their amenity promises.",
    pricePoint: "luxury",
    propertyTypes: ["single", "luxury", "townhome"],
    lifestyles: ["luxury", "family"],
    subCommunities: ["The Ridges", "The Cliffs", "Summerlin Centre"],
    keyPoints: [
      "Master-planned excellence",
      "World-class amenities",
      "Nearby public schools"
    ],
    challenges: [
      "HOA restrictions",
      "Premium pricing",
      "High competition for prime properties"
    ]
  },
  
  charlestonHeights: {
    name: "Charleston Heights",
    path: "M400,100 L600,100 L600,300 L400,300 Z",
    overview: "Older neighborhood offering character homes with no HOA restrictions",
    medianPrice: 475000,
    priceChange: 8.5,
    daysOnMarket: 12,
    pricePerSqFt: 225,
    inventory: 28,
    schoolRating: 4.2,
    recentTransactions: 24,
    expertQuote: "Charleston Heights offers what many Vegas buyers crave: established homes with character, reasonable prices, and often—the holy grail—no HOA restrictions. I've helped dozens of clients discover the hidden gems on those quiet cul-de-sacs.",
    pricePoint: "mid",
    propertyTypes: ["single"],
    lifestyles: ["family", "investment"],
    keyPoints: [
      "No HOA restrictions",
      "Central location",
      "Older neighborhood"
    ],
    challenges: [
      "Older inventory",
      "Variable property conditions",
      "Renovation considerations"
    ]
  },

  greenValley: {
    name: "Green Valley",
    path: "M100,400 L300,400 L300,550 C200,600 100,550 100,400 Z",
    overview: "Established master-planned community known for its schools and amenities",
    medianPrice: 650000,
    priceChange: 10.2,
    daysOnMarket: 18,
    pricePerSqFt: 275,
    inventory: 85,
    schoolRating: 4.6,
    recentTransactions: 29,
    expertQuote: "Green Valley represents the sweet spot of Vegas living—established enough to have mature landscaping and proven value, yet constantly reinventing itself with new amenities and improvements.",
    pricePoint: "mid",
    propertyTypes: ["single", "townhome"],
    lifestyles: ["family", "luxury"],
    subCommunities: ["Green Valley Ranch", "Green Valley South"],
    keyPoints: [
      "Older community",
      "Nearby public schools",
      "Strong amenities"
    ],
    challenges: [
      "Aging inventory in some sections",
      "Variable HOA restrictions",
      "High demand affects availability"
    ]
  },

  theStrip: {
    name: "The Strip",
    path: "M400,400 L600,400 L500,600 L400,400 Z",
    overview: "The heart of Las Vegas luxury high-rise living and entertainment",
    medianPrice: 1200000,
    priceChange: 15.3,
    daysOnMarket: 45,
    pricePerSqFt: 650,
    inventory: 92,
    schoolRating: 4.0,
    recentTransactions: 18,
    expertQuote: "The Strip isn't just about casinos—it's about living in the epicenter of luxury and entertainment. The high-rise market here offers some of the most spectacular views and amenities in the entire valley.",
    pricePoint: "ultra",
    propertyTypes: ["condo", "luxury"],
    lifestyles: ["luxury"],
    keyPoints: [
      "World-class entertainment",
      "Luxury amenities",
      "Investment potential"
    ],
    challenges: [
      "Premium pricing",
      "Tourist traffic",
      "Limited family appeal"
    ]
  }
}; 