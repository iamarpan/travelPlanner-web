// Utility functions for TravelPartner app
import { format, parseISO, isToday, isTomorrow, isYesterday, differenceInDays } from 'date-fns';
import { TripStatus, Trip, Activity } from '@/types/travel';

// Date and time utilities
export const formatDate = (date: Date | string, formatStr: string = 'MMM dd, yyyy'): string => {
  const dateObj = typeof date === 'string' ? parseISO(date) : date;
  return format(dateObj, formatStr);
};

export const formatTime = (date: Date | string, use24Hour: boolean = false): string => {
  const dateObj = typeof date === 'string' ? parseISO(date) : date;
  return format(dateObj, use24Hour ? 'HH:mm' : 'h:mm a');
};

export const getRelativeDate = (date: Date | string): string => {
  const dateObj = typeof date === 'string' ? parseISO(date) : date;
  
  if (isToday(dateObj)) return 'Today';
  if (isTomorrow(dateObj)) return 'Tomorrow';
  if (isYesterday(dateObj)) return 'Yesterday';
  
  const daysAway = differenceInDays(dateObj, new Date());
  if (daysAway > 0 && daysAway <= 7) return `In ${daysAway} days`;
  if (daysAway < 0 && daysAway >= -7) return `${Math.abs(daysAway)} days ago`;
  
  return formatDate(dateObj);
};

// Trip status utilities
export const getTripStatus = (trip: Trip): TripStatus => {
  const now = new Date();
  const startDate = new Date(trip.startDate);
  const endDate = new Date(trip.endDate);
  
  if (trip.status === 'cancelled') return 'cancelled';
  if (now < startDate) return 'upcoming';
  if (now >= startDate && now <= endDate) return 'active';
  if (now > endDate) return 'completed';
  
  return 'planning';
};

export const getStatusColor = (status: TripStatus): string => {
  switch (status) {
    case 'planning': return 'text-blue-600 bg-blue-50';
    case 'upcoming': return 'text-green-600 bg-green-50';
    case 'active': return 'text-orange-600 bg-orange-50';
    case 'completed': return 'text-gray-600 bg-gray-50';
    case 'cancelled': return 'text-red-600 bg-red-50';
    default: return 'text-gray-600 bg-gray-50';
  }
};

export const getStatusText = (status: TripStatus): string => {
  switch (status) {
    case 'planning': return 'Planning';
    case 'upcoming': return 'Upcoming';
    case 'active': return 'Active';
    case 'completed': return 'Completed';
    case 'cancelled': return 'Cancelled';
    default: return 'Unknown';
  }
};

// ID generation
export const generateId = (): string => {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
};

// Currency formatting
export const formatCurrency = (amount: number, currency: string = 'USD'): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
  }).format(amount);
};

// Trip duration calculation
export const getTripDuration = (startDate: Date | string, endDate: Date | string): number => {
  const start = typeof startDate === 'string' ? parseISO(startDate) : startDate;
  const end = typeof endDate === 'string' ? parseISO(endDate) : endDate;
  return differenceInDays(end, start) + 1; // +1 to include both start and end days
};

// Activity category utilities
export const getCategoryIcon = (category: Activity['category']): string => {
  switch (category) {
    case 'accommodation': return '🏨';
    case 'transportation': return '✈️';
    case 'dining': return '🍽️';
    case 'sightseeing': return '👁️';
    case 'entertainment': return '🎭';
    default: return '📍';
  }
};

export const getCategoryColor = (category: Activity['category']): string => {
  switch (category) {
    case 'accommodation': return 'bg-blue-100 text-blue-800';
    case 'transportation': return 'bg-green-100 text-green-800';
    case 'dining': return 'bg-yellow-100 text-yellow-800';
    case 'sightseeing': return 'bg-purple-100 text-purple-800';
    case 'entertainment': return 'bg-pink-100 text-pink-800';
    default: return 'bg-gray-100 text-gray-800';
  }
};

// Search utilities
export const searchTrips = (trips: Trip[], query: string): Trip[] => {
  if (!query.trim()) return trips;
  
  const lowerQuery = query.toLowerCase();
  return trips.filter(trip => 
    trip.title.toLowerCase().includes(lowerQuery) ||
    trip.description?.toLowerCase().includes(lowerQuery) ||
    trip.destination.name.toLowerCase().includes(lowerQuery) ||
    trip.destination.city?.toLowerCase().includes(lowerQuery) ||
    trip.destination.country?.toLowerCase().includes(lowerQuery) ||
    trip.tags?.some(tag => tag.toLowerCase().includes(lowerQuery))
  );
};

// Validation utilities
export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validateTripDates = (startDate: Date, endDate: Date): { isValid: boolean; error?: string } => {
  if (startDate >= endDate) {
    return { isValid: false, error: 'End date must be after start date' };
  }
  
  if (startDate < new Date(new Date().setHours(0, 0, 0, 0))) {
    return { isValid: false, error: 'Start date cannot be in the past' };
  }
  
  return { isValid: true };
};

// File utilities
export const downloadAsJSON = (data: any, filename: string): void => {
  const jsonStr = JSON.stringify(data, null, 2);
  const blob = new Blob([jsonStr], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  
  URL.revokeObjectURL(url);
};

// Accessibility utilities
export const announceToScreenReader = (message: string): void => {
  const announcement = document.createElement('div');
  announcement.setAttribute('aria-live', 'polite');
  announcement.setAttribute('aria-atomic', 'true');
  announcement.className = 'sr-only';
  announcement.textContent = message;
  
  document.body.appendChild(announcement);
  
  setTimeout(() => {
    document.body.removeChild(announcement);
  }, 1000);
};

// Theme utilities
export const getTimeBasedGreeting = (): string => {
  const hour = new Date().getHours();
  
  if (hour < 12) return 'Good morning';
  if (hour < 17) return 'Good afternoon';
  return 'Good evening';
}; 