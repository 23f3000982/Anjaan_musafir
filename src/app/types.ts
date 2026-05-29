export type BrandTheme = 'riders' | 'chaloyaar';

export interface Destination {
    id: string;
    title: string;
    subtitle: string;
    duration: string;
    difficulty: 'Easy' | 'Moderate' | 'Challenging' | 'Extreme';
    price: number;
    distance: string; // e.g. "1,200 km"
    date: string; // e.g. "June 15 - June 25, 2026"
    image: string;
    description: string;
    highlights: string[];
}

export interface TravelCategory {
    id: string;
    title: string;
    description: string;
    iconName: string; // Lucide icon identifier
    tagline: string;
    features: string[];
}

export interface BookingState {
    destinationId: string;
    name: string;
    email: string;
    phone: string;
    experienceLevel: 'Beginner' | 'Intermediate' | 'Expert' | 'Pro-Rider';
    licenseNumber: string;
    emergencyName: string;
    emergencyPhone: string;
    ownBike: boolean;
    bikeModel: string;
    termsAccepted: boolean;
}

export interface UpcomingLeisureTrip {
    id: string;
    title: string;
    subtitle: string;
    duration: string;
    price: number;
    date: string;
    image: string;
    description: string;
    highlights: string[];
    slotsLeft: number;
}

export interface PastGalleryItem {
    id: string;
    title: string;
    location: string;
    image: string;
    participantCount: number;
    memoryNote: string;
    heartCount: number;
}

