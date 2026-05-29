import { Destination, TravelCategory, UpcomingLeisureTrip, PastGalleryItem } from './types';

export const SYSTEM_DESTINATIONS: Destination[] = [
  {
    id: 'TungaNath-Hemkund',
    title: 'TungaNath & Hemkund Sahib',
    subtitle: 'Sacred Alpine Trek & Spiritual Sojourn',
    duration: '4 Days / 3 Nights',
    difficulty: 'Moderate',
    price: 5500,
    distance: '120 km',
    date: 'July 2 - July 6, 2026',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=1000',
    Itnary_links: '/itnary/Tunganath.pdf',

    description: 'A soul-refreshing blend of nature and spirituality. Trek through rhododendron forests to the ancient TungaNath temple, then ascend to the serene Hemkund Sahib gurudwara nestled beside a glacial lake.',
    highlights: [
      'Trek through vibrant rhododendron blooms',
      'Visit the 1,000-year-old TungaNath temple',
      'Experience the tranquil Hemkund Sahib gurudwara',
      'Enjoy panoramic views of the Himalayan peaks'
    ]
  },
  {
    id: 'ValleyOfFlowers-Gangotri',
    title: 'Valley of Flowers & Gangotri',
    subtitle: 'Alpine Paradise & Sacred Ganga Origins',
    duration: '5 Days / 4 Nights',
    difficulty: 'Challenging',
    price: 7500,
    distance: '150 km',
    date: 'July 22 - July 27, 2026',
    image: 'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&q=80&w=1000',
    Itnary_links: '/itnary/valley-of-flowers.pdf',

    description: 'Discover the ethereal beauty of the Valley of Flowers, a UNESCO World Heritage site bursting with alpine blooms. Then trek to Gangotri, the sacred source of the Ganges, and witness the majestic glaciers that feed this holy river.',
    highlights: [
      'Explore the vibrant alpine flora of the Valley of Flowers',
      'Trek to the sacred Gangotri temple',
      'Witness the stunning Gaumukh glacier',
      'Experience the spiritual ambiance of the Himalayas'
    ]
    ,
  },

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

