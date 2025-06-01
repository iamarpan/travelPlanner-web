// Core travel app types based on TravelPartner specification

export type TripStatus = 'planning' | 'upcoming' | 'active' | 'completed' | 'cancelled';

export interface Location {
  id: string;
  name: string;
  address?: string;
  coordinates?: {
    lat: number;
    lng: number;
  };
  city?: string;
  country?: string;
}

export interface Activity {
  id: string;
  title: string;
  description?: string;
  location?: Location;
  startTime?: Date;
  endTime?: Date;
  category?: 'accommodation' | 'transportation' | 'dining' | 'sightseeing' | 'entertainment' | 'other';
  bookingReference?: string;
  confirmationNumber?: string;
  cost?: number;
  currency?: string;
  notes?: string;
  photos?: string[];
  status?: 'booked' | 'confirmed' | 'pending' | 'cancelled';
}

export interface DayItinerary {
  date: Date;
  activities: Activity[];
  notes?: string;
}

export interface Trip {
  id: string;
  title: string;
  description?: string;
  destination: Location;
  startDate: Date;
  endDate: Date;
  status: TripStatus;
  itinerary: DayItinerary[];
  travelers?: number;
  budget?: {
    total?: number;
    spent?: number;
    currency: string;
  };
  photos?: string[];
  createdAt: Date;
  updatedAt: Date;
  tags?: string[];
}

export interface Booking {
  id: string;
  tripId: string;
  activityId?: string;
  type: 'flight' | 'hotel' | 'rental' | 'restaurant' | 'tour' | 'other';
  title: string;
  provider: string;
  confirmationNumber: string;
  bookingReference?: string;
  status: 'confirmed' | 'pending' | 'cancelled';
  startDate: Date;
  endDate?: Date;
  location?: Location;
  cost?: number;
  currency?: string;
  documents?: string[];
  notes?: string;
  createdAt: Date;
}

export interface SearchFilters {
  destination?: string;
  dateRange?: {
    start: Date;
    end: Date;
  };
  status?: TripStatus[];
  tags?: string[];
}

export interface UserPreferences {
  currency: string;
  dateFormat: string;
  timeFormat: string;
  units: 'metric' | 'imperial';
  notifications: {
    reminders: boolean;
    updates: boolean;
  };
  offline: {
    autoSync: boolean;
    downloadMaps: boolean;
  };
}

// UI/UX related types
export interface ViewMode {
  current: 'list' | 'timeline' | 'map' | 'grid';
}

export interface DragDropItem {
  id: string;
  type: 'activity' | 'booking';
  index: number;
  dayIndex?: number;
} 