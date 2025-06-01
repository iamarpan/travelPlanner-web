'use client';

import { useState, useEffect } from 'react';
import { 
  PlusIcon, 
  MagnifyingGlassIcon, 
  AdjustmentsHorizontalIcon,
  MapIcon,
  CalendarIcon,
  ListBulletIcon
} from '@heroicons/react/24/outline';
import { Trip } from '@/types/travel';
import { StorageManager } from '@/lib/storage';
import { getTripStatus, getStatusColor, formatDate, getTimeBasedGreeting } from '@/lib/utils';

export default function AppDashboard() {
  const [trips, setTrips] = useState<Trip[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'list' | 'grid'>('list');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Load trips from local storage
    const loadedTrips = StorageManager.getTrips();
    setTrips(loadedTrips);
    setIsLoading(false);
  }, []);

  const filteredTrips = trips.filter(trip =>
    trip.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    trip.destination.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const upcomingTrips = filteredTrips.filter(trip => getTripStatus(trip) === 'upcoming');
  const activeTrips = filteredTrips.filter(trip => getTripStatus(trip) === 'active');
  const recentTrips = filteredTrips.filter(trip => ['completed', 'planning'].includes(getTripStatus(trip)));

  const handleCreateTrip = () => {
    // Navigate to trip creation (will implement routing later)
    console.log('Create new trip');
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="spinner" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">T</span>
                </div>
                <span className="text-xl font-bold text-gray-900">TravelPartner</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg ${viewMode === 'list' ? 'bg-blue-100 text-blue-600' : 'text-gray-400 hover:text-gray-600'}`}
                >
                  <ListBulletIcon className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg ${viewMode === 'grid' ? 'bg-blue-100 text-blue-600' : 'text-gray-400 hover:text-gray-600'}`}
                >
                  <div className="w-5 h-5 grid grid-cols-2 gap-0.5">
                    <div className="bg-current rounded-sm"></div>
                    <div className="bg-current rounded-sm"></div>
                    <div className="bg-current rounded-sm"></div>
                    <div className="bg-current rounded-sm"></div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            {getTimeBasedGreeting()}! Ready for your next adventure?
          </h1>
          <p className="text-gray-600">
            Manage your trips, plan itineraries, and keep track of your travel memories.
          </p>
        </div>

        {/* Search and Actions */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="flex-1 relative">
            <MagnifyingGlassIcon className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search trips..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="input-field pl-10"
            />
          </div>
          <div className="flex gap-2">
            <button className="btn-secondary">
              <AdjustmentsHorizontalIcon className="w-4 h-4 mr-2" />
              Filters
            </button>
            <button 
              onClick={handleCreateTrip}
              className="btn-primary"
            >
              <PlusIcon className="w-4 h-4 mr-2" />
              New Trip
            </button>
          </div>
        </div>

        {/* Trips Content */}
        {trips.length === 0 ? (
          // Empty State
          <div className="text-center py-16">
            <div className="w-24 h-24 mx-auto mb-6 bg-blue-100 rounded-full flex items-center justify-center">
              <MapIcon className="w-12 h-12 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              No trips yet
            </h3>
            <p className="text-gray-600 mb-6 max-w-md mx-auto">
              Start planning your next adventure! Create your first trip and organize all your travel details in one place.
            </p>
            <button 
              onClick={handleCreateTrip}
              className="btn-primary"
            >
              <PlusIcon className="w-4 h-4 mr-2" />
              Create Your First Trip
            </button>
          </div>
        ) : (
          <div className="space-y-8">
            {/* Active Trips */}
            {activeTrips.length > 0 && (
              <section>
                <h2 className="text-lg font-semibold text-gray-900 mb-4">
                  Active Trips
                </h2>
                <TripGrid trips={activeTrips} viewMode={viewMode} />
              </section>
            )}

            {/* Upcoming Trips */}
            {upcomingTrips.length > 0 && (
              <section>
                <h2 className="text-lg font-semibold text-gray-900 mb-4">
                  Upcoming Trips
                </h2>
                <TripGrid trips={upcomingTrips} viewMode={viewMode} />
              </section>
            )}

            {/* Recent Trips */}
            {recentTrips.length > 0 && (
              <section>
                <h2 className="text-lg font-semibold text-gray-900 mb-4">
                  Recent Trips
                </h2>
                <TripGrid trips={recentTrips} viewMode={viewMode} />
              </section>
            )}
          </div>
        )}
      </main>
    </div>
  );
}

// Trip Grid Component
function TripGrid({ trips, viewMode }: { trips: Trip[]; viewMode: 'list' | 'grid' }) {
  const gridClass = viewMode === 'grid' 
    ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
    : 'space-y-4';

  return (
    <div className={gridClass}>
      {trips.map((trip) => (
        <TripCard key={trip.id} trip={trip} viewMode={viewMode} />
      ))}
    </div>
  );
}

// Trip Card Component
function TripCard({ trip, viewMode }: { trip: Trip; viewMode: 'list' | 'grid' }) {
  const status = getTripStatus(trip);
  const statusColorClass = getStatusColor(status);

  const handleTripClick = () => {
    // Navigate to trip details (will implement routing later)
    console.log('Navigate to trip:', trip.id);
  };

  if (viewMode === 'list') {
    return (
      <div 
        onClick={handleTripClick}
        className="bg-white rounded-lg shadow-card border border-gray-100 p-6 card-hover cursor-pointer"
      >
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <h3 className="text-lg font-semibold text-gray-900">{trip.title}</h3>
              <span className={`status-badge ${statusColorClass}`}>
                {status}
              </span>
            </div>
            <p className="text-gray-600 mb-2">{trip.destination.name}</p>
            <div className="flex items-center text-sm text-gray-500 space-x-4">
              <span className="flex items-center">
                <CalendarIcon className="w-4 h-4 mr-1" />
                {formatDate(trip.startDate)} - {formatDate(trip.endDate)}
              </span>
              <span>{trip.itinerary.length} days</span>
            </div>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-500 mb-1">
              {trip.itinerary.reduce((total, day) => total + day.activities.length, 0)} activities
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div 
      onClick={handleTripClick}
      className="bg-white rounded-lg shadow-card border border-gray-100 overflow-hidden card-hover cursor-pointer"
    >
      {/* Trip Image Placeholder */}
      <div className="h-48 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
        <MapIcon className="w-12 h-12 text-white/70" />
      </div>
      
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-semibold text-gray-900 truncate">{trip.title}</h3>
          <span className={`status-badge ${statusColorClass}`}>
            {status}
          </span>
        </div>
        
        <p className="text-gray-600 mb-3">{trip.destination.name}</p>
        
        <div className="text-sm text-gray-500 space-y-1">
          <div className="flex items-center">
            <CalendarIcon className="w-4 h-4 mr-2" />
            {formatDate(trip.startDate)} - {formatDate(trip.endDate)}
          </div>
          <div>
            {trip.itinerary.length} days • {trip.itinerary.reduce((total, day) => total + day.activities.length, 0)} activities
          </div>
        </div>
      </div>
    </div>
  );
} 