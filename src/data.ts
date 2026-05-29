import { Destination, TravelCategory, UpcomingLeisureTrip, PastGalleryItem } from './types';

export const SYSTEM_DESTINATIONS: Destination[] = [
  {
    id: 'leh-ladakh',
    title: 'Leh-Ladakh Expedition',
    subtitle: 'Khardung La & Pangong Lake',
    duration: '10 Days / 9 Nights',
    difficulty: 'Extreme',
    price: 34500,
    distance: '1,450 km',
    date: 'June 18 - June 28, 2026',
    image: 'https://images.unsplash.com/photo-1594950195709-a14f66c242d7?auto=format&fit=crop&q=80&w=1000',
    description: 'Ride across the highest motorable passes on Earth, barren moon-like valleys, and dramatic cold deserts alongside an adrenaline-driven convoy.',
    highlights: [
      'Scale Khardung La at 17,582 feet',
      'Camp beside the mesmerizing Pangong Lake',
      'Navigate historic Gata Loops (21 hairpin curves)',
      'Bond over acoustic sessions by the riverside campfire'
    ]
  },
  {
    id: 'spiti-loop',
    title: 'Spiti Valley Loop',
    subtitle: 'Shimla to Manali Raw Trail',
    duration: '9 Days / 8 Nights',
    difficulty: 'Extreme',
    price: 29800,
    distance: '1,120 km',
    date: 'July 12 - July 20, 2026',
    image: 'https://images.unsplash.com/photo-1581404476143-df3137e25b45?auto=format&fit=crop&q=80&w=1000',
    description: 'Navigate pure river crossings, high monasteries, ancient vertical cliffs, and camp under the stars at pristine Chandratal Lake.',
    highlights: [
      'Ride through the world’s highest post office at Hikkim',
      'Cross the perilous Kunzum Pass (14,931 ft)',
      'Engage with native monks at centuries-old monasteries',
      'Stumble upon fossil fossils in Langza village'
    ]
  },
  {
    id: 'kerala-coast',
    title: 'Coastal Monsoon Cruise',
    subtitle: 'Vagamon Hills to Varkala Cliff',
    duration: '7 Days / 6 Nights',
    difficulty: 'Moderate',
    price: 22000,
    distance: '850 km',
    date: 'September 05 - September 11, 2026',
    image: 'https://images.unsplash.com/photo-1602213756913-eb02654d8512?auto=format&fit=crop&q=80&w=1000',
    description: 'Cruise winding tropical passes of Vagamon, glide through mist-shrouded spice estates, and end on the soaring cliffs of Varkala Beach.',
    highlights: [
      'Navigate the 12 Hairpin curves of Vagamon Pine Hills',
      'Inhale aromatic tea plantations in Munnar heights',
      'Sunset bonfires on untouched sandy beaches',
      'Indulge in authentic local Malabar delicacies'
    ]
  },
  {
    id: 'thar-desert',
    title: 'Thar Desert Sandstorm',
    subtitle: 'Jaipur - Jaisalmer - Jodhpur Runway',
    duration: '8 Days / 7 Nights',
    difficulty: 'Easy',
    price: 24500,
    distance: '980 km',
    date: 'November 14 - November 21, 2026',
    image: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&q=80&w=1000',
    description: 'Unleash your engine across empty golden sands, sleep under brilliant desert skies, and experience local folk music around campfire dunes.',
    highlights: [
      'Throttle through flat arrow-straight desert runways',
      'Sleep under the stars at Sam Sand Dunes Jaisalmer',
      'Dine in ancient Rajasthani heritage forts',
      'Camel safaris across the border territories'
    ]
  }
];

export const GENERAL_CATEGORIES: TravelCategory[] = [
  {
    id: 'strangers',
    title: 'Strangers Trip',
    tagline: 'STRANGERS ON DAY 1, FAMILY ON DAY 10',
    description: 'Join curated cohorts of solo travelers, creators, and adventurers from across India. Complete safety, zero awkwardness.',
    iconName: 'Users',
    features: ['Age-matched batches', 'Ice-breaker experts onboard', 'Candid photography included', 'Interactive group games']
  },
  {
    id: 'personalized',
    title: 'Personalized Tours',
    tagline: 'YOUR PACE, PRIVATE MOMENTS',
    description: 'Tailor-made itineraries where we handle everything—from luxury boutique stays to unique offbeat experiences.',
    iconName: 'Compass',
    features: ['Custom routes & dates', 'Dedicated remote tour concierge', 'VIP local entries/passes', 'Flexible transport alternatives']
  },
  {
    id: 'family',
    title: 'Family Trips',
    tagline: 'COMFORT FOR THREE GENERATIONS',
    description: 'Hassle-free holiday packages blending premium stays, child-friendly activities, and relaxed paces suitable for everyone.',
    iconName: 'Home',
    features: ['Premium stays with large lawns', 'No-rush custom sightseeing', 'Kids & Seniors support staff', 'All-around private transport']
  },
  {
    id: 'couple',
    title: 'Couple Getaways',
    tagline: 'ROMANCE AMIDST ENCHANTED LANDSCAPES',
    description: 'Atmospheric dining and stunning backdrops for travelers focusing on privacy, beautiful stays, and romance.',
    iconName: 'Heart',
    features: ['Candlelight dinings under skies', 'Boutique honeymoon cottage stays', 'Private couple spa session', 'Quiet offbeat sightseeing spots']
  },
  {
    id: 'student',
    title: 'Student Badshahs',
    tagline: 'HIGH ENERGY, MINIMAL BUDGET',
    description: 'Budget-friendly youth excursions loaded with stargazing nights, trekking, and adventures with fellow students.',
    iconName: 'GraduationCap',
    features: ['Friendly, certified trip hosts', 'Fun hostels & camping stays', 'Group discounts on college id', 'Adventure activities included']
  },
  {
    id: 'office',
    title: 'Office Retreats',
    tagline: 'OFFLINE TEAM BONDING AT SCALE',
    description: 'Immersive team outings blending physical wellness, strategy challenges, luxury villas, and genuine team bonding.',
    iconName: 'Briefcase',
    features: ['Professional corporate facilitators', 'Premium luxury resort buyouts', 'Fun custom themed team events', 'All-inclusive logistics/billing']
  }
];

export const UPCOMING_LEISURE_TRIPS: UpcomingLeisureTrip[] = [
  {
    id: 'l-1',
    title: 'Kasol & Tosh Alpine Escape',
    subtitle: 'Stargazing, Pine Treks & Hot Springs',
    duration: '6 Days / 5 Nights',
    price: 13500,
    date: 'June 12 - June 17, 2026',
    image: 'https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&q=80&w=1000',
    description: 'Immerse into northern mountain valleys. Trek dense pine networks, relax beside boiling Parvati hot springs, and capture shooting stars from rustic skyway wooden balconies.',
    highlights: [
      'Trek to the isolated high village of Tosh',
      'Bonfire circle under ancient Himalayan forests',
      'Sleep in hand-crafted riverside wooden cabins',
      'Local Himachali organic street food exploration'
    ],
    slotsLeft: 6
  },
  {
    id: 'l-2',
    title: 'Udaipur Heritage Odyssey',
    subtitle: 'Lakeside Palaces & Royal Caravans',
    duration: '5 Days / 4 Nights',
    price: 18200,
    date: 'August 14 - August 18, 2026',
    image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80&w=1000',
    description: 'A cozy premium journey across royal palaces, historic lake boat rides, and local craft workshops. Enjoy candlelit rooftop terrace dining looking over Lake Pichola sparkles.',
    highlights: [
      'Sunset boat cruise across Lake Pichola islands',
      'Guided royal gallery tour of the grand City Palace',
      'Traditional Mewari ceramic workshop with craftsmen',
      'Atmospheric poolside evening sitar performances'
    ],
    slotsLeft: 4
  },
  {
    id: 'l-3',
    title: 'Darjeeling Tea & Cloud Walk',
    subtitle: 'Pristine Estates & Toy Train Trails',
    duration: '5 Days / 4 Nights',
    price: 15400,
    date: 'October 10 - October 14, 2026',
    image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80&w=1000',
    description: 'Wander across lush green mountain slopes of organic tea estates. Wake up early for the magnificent Kanchenjunga peak sunrise and take the retro steam Toy Train ride.',
    highlights: [
      'Historic UNESCO Toy Train ride through cloud bridges',
      'Authentic organic tea-leaf handpicking experiment',
      'Breathtaking sunrise looking over Tiger Hill heights',
      'Curated authentic Tibetan kitchen dumplings and broth'
    ],
    slotsLeft: 8
  }
];

export const PAST_BIKE_GALLERY: PastGalleryItem[] = [
  {
    id: 'pb-1',
    title: 'Himalayan Ridge Conquer',
    location: 'Khardung La Pass (17,582 ft)',
    image: 'https://images.unsplash.com/photo-1594950195709-a14f66c242d7?auto=format&fit=crop&q=80&w=1000',
    participantCount: 18,
    memoryNote: 'Faced sudden mild snowfall at the ridge but conquered together. The tea at peak café was legendary!',
    heartCount: 142
  },
  {
    id: 'pb-2',
    title: 'Gata Loops Curve Slings',
    location: 'Manali-Leh Highway, Ladakh',
    image: 'https://images.unsplash.com/photo-1581404476143-df3137e25b45?auto=format&fit=crop&q=80&w=1000',
    participantCount: 15,
    memoryNote: '21 continuous sharp loops carved perfectly. Every riders coordination was spectacular.',
    heartCount: 98
  },
  {
    id: 'pb-3',
    title: 'Sunset Dune Formation',
    location: 'Sam Sand Dunes, Jaisalmer',
    image: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&q=80&w=1000',
    participantCount: 22,
    memoryNote: 'Parked our cruisers side by-side looking over golden dunes. Folk singers performed all night.',
    heartCount: 204
  }
];

export const PAST_LEISURE_GALLERY: PastGalleryItem[] = [
  {
    id: 'pl-1',
    title: 'Parvati Rapids Rafting',
    location: 'Kasol Valley, HP',
    image: 'https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&q=80&w=1000',
    participantCount: 14,
    memoryNote: 'Strangers on day 1, holding rowing paddles and laughing like brothers on day 3 across icy currents.',
    heartCount: 136
  },
  {
    id: 'pl-2',
    title: 'Hilltop Sitar Acoustic',
    location: 'Vagamon heights, Kerala',
    image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80&w=1000',
    participantCount: 12,
    memoryNote: 'An intimate candlelit campfire looking over tea gardens. Absolute quiet and beautiful connections.',
    heartCount: 119
  },
  {
    id: 'pl-3',
    title: 'Kanchenjunga Ascent High',
    location: 'Tiger Hill, Darjeeling',
    image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80&w=1000',
    participantCount: 16,
    memoryNote: 'Fought freezing early fog. The exact moment the sun struck the golden snow peak was divine.',
    heartCount: 185
  }
];

