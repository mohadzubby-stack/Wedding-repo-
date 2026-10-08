export type ScreenId = 
  | 'invitation'
  | 'itinerary'
  | 'rsvp'
  | 'estate'
  | 'bridal-party'
  | 'registry'
  | 'guest-pass';

export interface ItineraryItem {
  id: string;
  day: string;
  date: string;
  time: string;
  title: string;
  subtitle: string;
  location: string;
  venueDetails: string;
  dressCode: string;
  dressDescription: string;
  music: string;
  transportNote: string;
  mapCoordinates: string;
}

export interface RSVPData {
  invitationCode: string;
  primaryGuestName: string;
  email: string;
  attending: 'accepted' | 'declined' | null;
  guestCount: number;
  guestNames: string[];
  diningCourse: string;
  dietaryNotes: string;
  shuttleRequired: boolean;
  shuttleLocation: string;
  songDedication: string;
  personalBlessing: string;
  tableAssignment?: string;
  seatNumber?: string;
  submittedAt?: string;
}

export interface GuestbookMessage {
  id: string;
  author: string;
  titleOrLocation: string;
  message: string;
  date: string;
  sealColor?: string;
}

export interface RegistryItem {
  id: string;
  title: string;
  category: 'honeymoon' | 'endowment' | 'heirloom';
  description: string;
  goalAmount: number;
  contributedAmount: number;
  currency: string;
  iconName: string;
}

export interface EstateFeature {
  id: string;
  name: string;
  role: string;
  description: string;
  historicalNote: string;
  imagePromptDescription: string;
}
