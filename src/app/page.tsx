'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
// Removed unused heroicons imports
import { motion } from 'framer-motion';
import { FaLongArrowAltRight } from "react-icons/fa";

export default function HomePage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const texts = [" Simple, Reliable", " Travel Planning", "Everything you need for stress-free travel", "Transform chaotic travel planning into an organized, enjoyable experience. TravelPartner works offline and focuses on what travelers actually need. Built specifically for modern travelers who value simplicity, reliability, and privacy.", "Built specifically for modern travelers who value simplicity, reliability, and privacy.", "How TravelPartner Works", "Create comprehensive itineraries in minutes, not hours"];
  const [step1, setStep01] = useState(true);
  const [step2, setStep02] = useState(false);
  const [step3, setStep03] = useState(false)
  const [images, setImages] = useState([
    {
      title:"Tokyo Spring Adventure",
      desc:"Explore cherry blossoms, traditional temples, and modern Tokyo culture during the beautiful Spring Season.",
      src:"/Tokyo.avif",
      showDesc:false
    },
    {
      title: "Vrindavan",
      desc: "Experience the spiritual heart of India with temples, ghats, and vibrant culture.",
      src: "/Vrindavan.jpg",
      showDesc:false
    },
    {
      title: "Kerala",
      desc: "Discover the serene backwaters, lush landscapes, and rich traditions of Kerala.",
      src: "/Kerela.jpg",
      showDesc:false
    },
    {
      title: "Varanasi",
      desc: "Witness ancient rituals on the ghats of the Ganges in India’s spiritual capital.",
      src: "/Varanasi.jpg",
      showDesc:false
    },
    {
      title: "Goa",
      desc: "Relax on beautiful beaches, enjoy vibrant nightlife, and explore Portuguese heritage.",
      src: "/Goa.jpg",
      showDesc:false
    },
    {
      title: "Agra",
      desc: "Visit the iconic Taj Mahal and discover Mughal history and architecture.",
      src: "/Agra.jpg",
      showDesc:false
    },
    {
      title: "Leh-Ladakh",
      desc: "Marvel at dramatic landscapes, monasteries, and high-altitude adventure in the Himalayas.",
      src: "/LehLadakh.avif",
      showDesc:false
    },
    {
      title: "Andaman Islands",
      desc: "Unwind on pristine beaches, dive in crystal-clear waters, and explore tropical paradise.",
      src: "/Andaman.png",
      showDesc:false
    },
    {
      title: "Manali",
      desc: "Enjoy breathtaking mountain views, adventure sports, and tranquil valleys in the Himalayas.",
      src: "/Manali.jpg",
      showDesc:false
    },
    {
      title: "Jaipur",
      desc: "Explore the Pink City’s majestic forts, palaces, and vibrant bazaars.",
      src: "/Jaipur.jpg",
      showDesc:false
    },
  ]);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const features = [
    {
      icon: "https://img.icons8.com/office/40/iphone-x.png",
      title: 'Mobile-First Design',
      description: 'Built specifically for mobile devices with intuitive touch interfaces and responsive design.',
    },
    {
      icon: "https://img.icons8.com/?size=100&id=49SuahuhQGRQ&format=png&color=000000",
      title: 'Works Offline',
      description: 'Access your complete itinerary without internet connection. Perfect for international travel.',
    },
    {
      icon: "/icons/googleMap.svg",
      title: 'Visual Planning',
      description: 'See your trip on interactive maps and timelines for better organization and planning.',
    },
    {
      icon: "https://img.icons8.com/?size=100&id=12776&format=png&color=000000",
      title: 'Simple Itineraries',
      description: 'Create comprehensive day-by-day itineraries with drag-and-drop simplicity.',
    },
    {
      icon: "https://img.icons8.com/?size=100&id=63262&format=png&color=000000",
      title: 'Booking Management',
      description: 'Store all your confirmations and booking details in one secure, organized place.',
    },
    {
      icon: "https://img.icons8.com/?size=100&id=37960&format=png&color=000000",
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

  // Suggested text color schemes for each hero image (ensure good contrast)
  // hero-5.jpg: likely dark, so use white or light blue
  // hero-4.jpg: check if light/dark, adjust accordingly
  // hero-3.jpg: check if light/dark, adjust accordingly
  // hero-2.jpg: check if light/dark, adjust accordingly
  // hero-1.jpg: likely light, so use dark blue or black

  const heroImages = [
    "/hero-5.jpg",
    "/hero-4.jpg",
    "/hero-3.jpg",
    "/hero-2.jpg",
    "/hero-1.jpg"
  ];

  // Example color schemes for text on top of each hero image
  
  const [index, setIndex] = useState(0);
  const colorSchemes=[
    {
      text1:"#1d4ed8",
      text2:"white",
    },
    {
      text1:"white",
      text2:"white",
    },
    {
      text1:"black",
      text2:"white",
    },
    {
      text1:"white",
      text2:"black",
    },
    {
      text1:"#1e3a8a",
      text2:"white",
    }
  ]

  useEffect(()=>{
    setInterval(()=>{
      setIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    },5000)
  },[])

  return (
    <div className={`min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 ${isLoaded ? 'animate-fade-in' : 'opacity-0'}`}>
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200/50 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-700 to-blue-900 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">T</span>
              </div>
              <span className="text-xl font-bold text-green-950">TravelPartner</span>
            </div>
            <motion.button whileHover={{ scale: 0.85 }}>
              <Link
                href="/app"
                className="btn-primary"
              >
                Get Started
              </Link></motion.button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section
        className="min-h-[85vh] py-24 sm:py-32 bg-no-repeat bg-cover flex items-center relative overflow-hidden"
      >
        {/* Animated background image */}
        <div className="absolute inset-0 w-full h-full">
          <motion.div
        key={index}
        initial={{ opacity: 0, scale: 1.05, x: 50 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        exit={{ opacity: 0, scale: 0.95, x: -50 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: `url(${heroImages[index]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: 0,
        }}
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <div className="text-center">
        <h1
          className={`text-4xl sm:text-6xl font-extrabold text-black-950 `}
          style={{color:`${colorSchemes[index].text1}`}}>
          {texts[0].split(" ").map((el, i) => (
            <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1,
            delay: 1 + i / 10,
          }}
          key={i}
            >
          {el}{" "}
            </motion.span>
          ))}
        </h1>
        <h1 className="block text-4xl sm:text-6xl bg-clip-text text-slate-100 font-bold"
        style={{color:`${colorSchemes[index].text2}`,marginTop:"1rem"}}>
          {texts[1].split(" ").map((el, i) => (
            <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1,
            delay: 2 + i / 10,
          }}
          key={i}
            >
          {el}{" "}
            </motion.span>
          ))}
        </h1>
        <br />
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-4">
          <motion.button whileHover={{ scale: 0.85 }}>
            <Link
          href="/app"
          className="btn-primary text-lg px-8 py-3"
            >
          Start Planning Free
            </Link></motion.button>
          <motion.button whileHover={{ scale: 0.85 }}>
            <Link
          href="/demo"
          className="btn-secondary text-lg px-8 py-3"
            >
          View Demo
            </Link></motion.button>
        </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              {texts[2].split(" ").map((el, i) => (
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 1,
                    delay: 3 + i / 10,
                  }}
                  key={i}
                >
                  {el}{" "}
                </motion.span>
              ))}
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              {texts[3].split(" ").map((el, i) => (
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 1,
                    delay: 4 + i / 10,
                  }}
                  key={i}
                >
                  {el}{" "}
                </motion.span>
              ))}
            </p>

            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {texts[4].split(" ").map((el, i) => (
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 1,
                    delay: 6 + i / 10,
                  }}
                  key={i}
                >
                  {el}{" "}
                </motion.span>
              ))}
            </p>
          </div>

          {/*Destinations Section*/}
          <h1 className='text-center mt-32   text-3xl font-bold'>Trending Destinations</h1>
          <div className='mt-10 overflow-x-auto whitespace-nowrap mb-40 scrollbar-hide'>
            {images.map((image, i) =>
                <div key={i} className="bg-gray-100 inline-block mr-6 align-top w-80 border-2 border-slate-100">
                <Link href={`/explore/${i}`}>
                <img src={image.src} className="w-80 h-64 rounded-lg shadow-md" alt={image.title} />
                </Link>
                <div className='flex row justify-between'>
                   <p className="font-semibold mt-2">{image.title}</p>
                   {image.showDesc?
                   <div 
                   className='bg-gradient-to-l from-red-400 to-red-500 rounded-full mt-1 w-6 h-6 flex  justify-center'
                   onClick={() => {
                     setImages(prevImages =>
                       prevImages.map((img, idx) =>
                         idx === i ? { ...img, showDesc: false } : img
                       )
                     );
                   }}
                   >
                    X</div>
                   :
                   <img 
                   src="https://img.icons8.com/?size=100&id=81027&format=png&color=000000" 
                   className='w-7 mt-1'
                   onClick={() => {
                     setImages(prevImages =>
                       prevImages.map((img, idx) =>
                         idx === i ? { ...img, showDesc: true } : img
                       )
                     );
                   }}
                   ></img>}
                </div>
                {image.showDesc &&<p className="text-gray-600 text-sm text-wrap mt-2">{image.desc}</p>}
                </div>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className={`bg-blue-100 border-b-blue-500 p-6 rounded-xl shadow-card border border-gray-100 card-hover transition-transform duration-300 transform hover:scale-105  ${isLoaded ? 'animate-slide-up' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12  rounded-lg flex items-center justify-center mb-4">
                  <img src={`${feature.icon}`} alt="" />
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
      <section className="py-16 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {texts[5].split(" ").map((el, i) => (
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 1,
                    delay: 6 + i / 10,
                  }}
                  key={i}
                >
                  {el}{" "}
                </motion.span>
              ))}
            </h2>
            <p className="text-lg text-gray-600">
              {texts[6].split(" ").map((el, i) => (
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 1,
                    delay: 6 + i / 10,
                  }}
                  key={i}
                >
                  {el}{" "}
                </motion.span>
              ))}
            </p>
          </div>

          <div className='bg-gray-300 w-96  pb-5 pt-8 justify-self-center h-72'>
            <div className="flex flex-row  ">
              {/* Step 1 */}
              <motion.div
                className="text-center   w-80  flex-row mt-2"
                initial={true}
                animate={
                  step1 ?
                    { position: "absolute", left: "50%", translateX: "-50%", opacity: 1, zIndex: 30 }
                    :
                    { opacity: 0 }
                }
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                style={{ justifySelf: "center" }}
              >
                <div className='flex-col'>
                  <div

                    className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-self-center text-xl font-bold justify-center mb-4 cursor-pointer"
                  >
                    01
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Create Your Trip
                  </h3>
                  <p className="text-gray-600">
                    Add destination, dates, and basic details in seconds
                  </p>
                </div>

              </motion.div>

              {/* Step 2 */}
              <motion.div
                className="text-center   w-80  flex-row"
                initial={false}
                animate={
                  step2
                    ? { position: "absolute", left: "50%", translateX: "-50%", opacity: 1, zIndex: 30 }
                    : { opacity: 0 }
                }
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                style={{ justifySelf: "center" }}
              >
                <div className='flex-col'>
                  <div
                    className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center justify-self-center text-xl font-bold  mb-4 cursor-pointer"
                  >
                    02
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Build Your Itinerary
                  </h3>
                  <p className="text-gray-600 ">
                    Add activities and bookings with simple drag-and-drop
                  </p>
                  <p></p>
                </div>
              </motion.div>

              {/* Step 3 */}
              <motion.div
                className="text-center  w-80 flex-row"
                initial={false}
                animate={
                  step3
                    ? { position: "absolute", left: "50%", translateX: "-50%", opacity: 1, zIndex: 30 }
                    : { opacity: 0 }
                }
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                style={{ justifySelf: "center" }}
              >
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex justify-center items-center justify-self-center text-xl font-bold  mb-4">
                  03
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Travel With Confidence
                </h3>
                <p className="text-gray-600">
                  Access everything offline during your trip
                </p>
              </motion.div>
            </div>
            <FaLongArrowAltRight
              className='justify-self-center '
              size={50}
              fill="#1e3a8a"
              onClick={() => {
                if (step1) {
                  setStep01(false);
                  setStep02(true);
                }
                else if (step2) {
                  setStep02(false);
                  setStep03(true);
                }
                else if (step3) {
                  setStep03(false);
                  setStep01(true);
                }
              }}
            >
            </FaLongArrowAltRight></div>
          {/*<div className='flex row justify-center mt-4'>
                <GoDotFill fill='grey'/>
                {step2?<GoDotFill fill='grey'/>:<>{step1?<GoDot/>:<GoDotFill fill='grey'/>}</>}
                {step3?<GoDotFill fill='grey'/>:<GoDot/>}
               </div>*/}
        </div>
      </section>
      <video src="/icons8-arrow.gif" autoPlay style={{ width: "4rem", height: "4rem" }}></video>
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
                className="bg-gradient-to-l from-slate-200 to-blue-100 p-6 rounded-xl card-hover hover:scale-105"
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
      <section className="py-16 bg-gradient-to-r from-blue-500 to-indigo-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to simplify your travel planning?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of travelers who trust TravelPartner for their adventures.
          </p>
          <Link
            href="/app"
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-lg font-medium rounded-lg text-blue-600 bg-white hover:bg-gray-300 transition-colors duration-200 hover:scale-95"
          >
            Start Your First Trip
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
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