import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'TravelPartner - Simple, Reliable Travel Planner',
  description: 'Transform chaotic travel planning into an organized, enjoyable experience with TravelPartner. Works offline and focuses on what travelers actually need.',
  keywords: 'travel, planner, itinerary, offline, mobile, trip, booking',
  authors: [{ name: 'TravelPartner Team' }],
  viewport: 'width=device-width, initial-scale=1.0',
  themeColor: '#0ea5e9',
  manifest: '/manifest.json',
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      </head>
      <body className={`${inter.className} h-full bg-gray-50 antialiased`}>
        <div id="root" className="min-h-full">
          {children}
        </div>
        <div id="modal-root" />
        <div id="toast-root" />
      </body>
    </html>
  );
} 