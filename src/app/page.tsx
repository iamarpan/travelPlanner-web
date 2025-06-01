'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  MapPinIcon, 
  CalendarDaysIcon, 
  CheckCircleIcon, 
  DevicePhoneMobileIcon,
  ClockIcon,
  ShieldCheckIcon 
} from '@heroicons/react/24/outline';

export default function HomePage() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const features = [
    {
      icon: DevicePhoneMobileIcon,
      title: 'Mobile-First Design',
      description: 'Built specifically for mobile devices with intuitive touch interfaces and responsive design.',
    },
    {
      icon: ClockIcon,
      title: 'Works Offline',
      description: 'Access your complete itinerary without internet connection. Perfect for international travel.',
    },
    {
      icon: MapPinIcon,
      title: 'Visual Planning',
      description: 'See your trip on interactive maps and timelines for better organization and planning.',
    },
    {
      icon: CalendarDaysIcon,
      title: 'Simple Itineraries',
      description: 'Create comprehensive day-by-day itineraries with drag-and-drop simplicity.',
    },
    {
      icon: CheckCircleIcon,
      title: 'Booking Management',
      description: 'Store all your confirmations and booking details in one secure, organized place.',
    },
    {
      icon: ShieldCheckIcon,
      title: 'Privacy Focused',
      description: 'Your travel data stays on your device. No cloud dependency, complete privacy control.',
    },
  ];

  const testimonials = [
    {
      quote: "Finally, a travel app that actually works offline! Perfect for my international business trips.",
      author: "Mike Johnson",
      role: "Business Traveler",
    },
    {
      quote: "I love how simple it is to organize my family trips. No more scattered emails and lost confirmations.",
      author: "Sarah Chen",
      role: "Family Traveler",
    },
    {
      quote: "The visual timeline makes it so easy to see my entire trip at a glance. Game changer!",
      author: "Alex Rivera",
      role: "Adventure Traveler",
    },
  ];

  return (
    <div className={`min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 ${isLoaded ? 'animate-fade-in' : 'opacity-0'}`}>
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200/50 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">T</span>
              </div>
              <span className="text-xl font-bold text-gray-900">TravelPartner</span>
            </div>
            <Link
              href="/app"
              className="btn-primary"
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-6">
              Simple, Reliable
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                Travel Planning
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Transform chaotic travel planning into an organized, enjoyable experience. 
              TravelPartner works offline and focuses on what travelers actually need.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/app"
                className="btn-primary text-lg px-8 py-3"
              >
                Start Planning Free
              </Link>
              <Link
                href="/demo"
                className="btn-secondary text-lg px-8 py-3"
              >
                View Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Everything you need for stress-free travel
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Built specifically for modern travelers who value simplicity, reliability, and privacy.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={feature.title}
                className={`bg-white p-6 rounded-xl shadow-card border border-gray-100 card-hover ${isLoaded ? 'animate-slide-up' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              How TravelPartner Works
            </h2>
            <p className="text-lg text-gray-600">
              Create comprehensive itineraries in minutes, not hours
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Create Your Trip',
                description: 'Add destination, dates, and basic details in seconds',
              },
              {
                step: '02',
                title: 'Build Your Itinerary',
                description: 'Add activities and bookings with simple drag-and-drop',
              },
              {
                step: '03',
                title: 'Travel With Confidence',
                description: 'Access everything offline during your trip',
              },
            ].map((step, index) => (
              <div key={step.step} className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Loved by travelers worldwide
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-gray-50 p-6 rounded-xl"
              >
                <p className="text-gray-700 mb-4 italic">
                  "{testimonial.quote}"
                </p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to simplify your travel planning?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of travelers who trust TravelPartner for their adventures.
          </p>
          <Link
            href="/app"
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-lg font-medium rounded-lg text-blue-600 bg-white hover:bg-gray-50 transition-colors duration-200"
          >
            Start Your First Trip
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">T</span>
                </div>
                <span className="text-xl font-bold">TravelPartner</span>
              </div>
              <p className="text-gray-400 mb-4">
                Simple, reliable travel planning that works everywhere.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/features" className="hover:text-white transition-colors">Features</Link></li>
                <li><Link href="/demo" className="hover:text-white transition-colors">Demo</Link></li>
                <li><Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/help" className="hover:text-white transition-colors">Help Center</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 TravelPartner. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
} 