// Local storage management for offline functionality
import { Trip, Booking, UserPreferences } from '@/types/travel';

const STORAGE_KEYS = {
  TRIPS: 'travelpartner_trips',
  BOOKINGS: 'travelpartner_bookings',
  PREFERENCES: 'travelpartner_preferences',
  LAST_SYNC: 'travelpartner_last_sync',
} as const;

export class StorageManager {
  // Trip management
  static getTrips(): Trip[] {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.TRIPS);
      if (!data) return [];
      
      const trips = JSON.parse(data);
      // Convert date strings back to Date objects
      return trips.map((trip: any) => ({
        ...trip,
        startDate: new Date(trip.startDate),
        endDate: new Date(trip.endDate),
        createdAt: new Date(trip.createdAt),
        updatedAt: new Date(trip.updatedAt),
        itinerary: trip.itinerary.map((day: any) => ({
          ...day,
          date: new Date(day.date),
          activities: day.activities.map((activity: any) => ({
            ...activity,
            startTime: activity.startTime ? new Date(activity.startTime) : undefined,
            endTime: activity.endTime ? new Date(activity.endTime) : undefined,
          })),
        })),
      }));
    } catch (error) {
      console.error('Error loading trips from storage:', error);
      return [];
    }
  }

  static saveTrips(trips: Trip[]): void {
    try {
      localStorage.setItem(STORAGE_KEYS.TRIPS, JSON.stringify(trips));
      this.updateLastSync();
    } catch (error) {
      console.error('Error saving trips to storage:', error);
    }
  }

  static getTrip(id: string): Trip | null {
    const trips = this.getTrips();
    return trips.find(trip => trip.id === id) || null;
  }

  static saveTrip(trip: Trip): void {
    const trips = this.getTrips();
    const existingIndex = trips.findIndex(t => t.id === trip.id);
    
    if (existingIndex >= 0) {
      trips[existingIndex] = { ...trip, updatedAt: new Date() };
    } else {
      trips.push(trip);
    }
    
    this.saveTrips(trips);
  }

  static deleteTrip(id: string): void {
    const trips = this.getTrips().filter(trip => trip.id !== id);
    this.saveTrips(trips);
    
    // Also delete related bookings
    const bookings = this.getBookings().filter(booking => booking.tripId !== id);
    this.saveBookings(bookings);
  }

  // Booking management
  static getBookings(): Booking[] {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.BOOKINGS);
      if (!data) return [];
      
      const bookings = JSON.parse(data);
      return bookings.map((booking: any) => ({
        ...booking,
        startDate: new Date(booking.startDate),
        endDate: booking.endDate ? new Date(booking.endDate) : undefined,
        createdAt: new Date(booking.createdAt),
      }));
    } catch (error) {
      console.error('Error loading bookings from storage:', error);
      return [];
    }
  }

  static saveBookings(bookings: Booking[]): void {
    try {
      localStorage.setItem(STORAGE_KEYS.BOOKINGS, JSON.stringify(bookings));
      this.updateLastSync();
    } catch (error) {
      console.error('Error saving bookings to storage:', error);
    }
  }

  static getTripBookings(tripId: string): Booking[] {
    return this.getBookings().filter(booking => booking.tripId === tripId);
  }

  static saveBooking(booking: Booking): void {
    const bookings = this.getBookings();
    const existingIndex = bookings.findIndex(b => b.id === booking.id);
    
    if (existingIndex >= 0) {
      bookings[existingIndex] = booking;
    } else {
      bookings.push(booking);
    }
    
    this.saveBookings(bookings);
  }

  static deleteBooking(id: string): void {
    const bookings = this.getBookings().filter(booking => booking.id !== id);
    this.saveBookings(bookings);
  }

  // User preferences
  static getPreferences(): UserPreferences {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.PREFERENCES);
      if (!data) {
        return this.getDefaultPreferences();
      }
      return JSON.parse(data);
    } catch (error) {
      console.error('Error loading preferences from storage:', error);
      return this.getDefaultPreferences();
    }
  }

  static savePreferences(preferences: UserPreferences): void {
    try {
      localStorage.setItem(STORAGE_KEYS.PREFERENCES, JSON.stringify(preferences));
    } catch (error) {
      console.error('Error saving preferences to storage:', error);
    }
  }

  private static getDefaultPreferences(): UserPreferences {
    return {
      currency: 'USD',
      dateFormat: 'MM/dd/yyyy',
      timeFormat: '12h',
      units: 'imperial',
      notifications: {
        reminders: true,
        updates: true,
      },
      offline: {
        autoSync: true,
        downloadMaps: false,
      },
    };
  }

  // Sync management
  static getLastSync(): Date | null {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.LAST_SYNC);
      return data ? new Date(data) : null;
    } catch (error) {
      return null;
    }
  }

  private static updateLastSync(): void {
    try {
      localStorage.setItem(STORAGE_KEYS.LAST_SYNC, new Date().toISOString());
    } catch (error) {
      console.error('Error updating last sync time:', error);
    }
  }

  // Data export/import for backup
  static exportData(): string {
    const data = {
      trips: this.getTrips(),
      bookings: this.getBookings(),
      preferences: this.getPreferences(),
      exportDate: new Date().toISOString(),
    };
    return JSON.stringify(data, null, 2);
  }

  static importData(jsonData: string): boolean {
    try {
      const data = JSON.parse(jsonData);
      
      if (data.trips) {
        this.saveTrips(data.trips);
      }
      if (data.bookings) {
        this.saveBookings(data.bookings);
      }
      if (data.preferences) {
        this.savePreferences(data.preferences);
      }
      
      return true;
    } catch (error) {
      console.error('Error importing data:', error);
      return false;
    }
  }

  // Clear all data
  static clearAllData(): void {
    const keys = Object.keys(STORAGE_KEYS) as Array<keyof typeof STORAGE_KEYS>;
    keys.forEach(key => {
      localStorage.removeItem(STORAGE_KEYS[key]);
    });
  }
} 