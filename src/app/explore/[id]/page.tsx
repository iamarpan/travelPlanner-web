'use client';

import { useParams } from "next/navigation";
import { useState } from "react";
export default function explorePage() {
    let { id } = useParams()
    const [images, setImages] = useState([
        {
            title: "Tokyo Spring Adventure",
            desc: "Explore cherry blossoms, traditional temples, and modern Tokyo culture during the beautiful Spring Season.",
            src: "/Tokyo.avif",
            showDesc: false,
            duration: "7 days in Spring",
            activities: [
                {
                    activity: "Visit Senso-ji Temple",
                    time: "9 a.m. to 11 a.m.",
                    location: "Asakusa",
                    desc: "Tokyo's Oldest Buddhist Temple"
                },
                {
                    activity: "Mount Fuji day Trip",
                    time: "7 a.m. to 6 p.m.",
                    location: "Fuji Area",
                    desc: "Explore Japan's iconic volcano"
                },
                {
                    activity: "Shibuya Crossing",
                    time: "5 p.m. to 8 p.m.",
                    location: "Shibuya",
                    desc: "Dive into Tokyo's vibrant night"
                }
            ],
        },
        {
            title: "Vrindavan",
            desc: "Experience the spiritual heart of India with temples, ghats, and vibrant culture.",
            src: "/Vrindavan.jpg",
            showDesc: false
        },
        {
            title: "Kerala",
            desc: "Discover the serene backwaters, lush landscapes, and rich traditions of Kerala.",
            src: "/Kerela.jpg",
            showDesc: false
        },
        {
            title: "Varanasi",
            desc: "Witness ancient rituals on the ghats of the Ganges in India’s spiritual capital.",
            src: "/Varanasi.jpg",
            showDesc: false
        },
        {
            title: "Goa",
            desc: "Relax on beautiful beaches, enjoy vibrant nightlife, and explore Portuguese heritage.",
            src: "/Goa.jpg",
            showDesc: false
        },
        {
            title: "Agra",
            desc: "Visit the iconic Taj Mahal and discover Mughal history and architecture.",
            src: "/Agra.jpg",
            showDesc: false
        },
        {
            title: "Leh-Ladakh",
            desc: "Marvel at dramatic landscapes, monasteries, and high-altitude adventure in the Himalayas.",
            src: "/LehLadakh.avif",
            showDesc: false
        },
        {
            title: "Andaman Islands",
            desc: "Unwind on pristine beaches, dive in crystal-clear waters, and explore tropical paradise.",
            src: "/Andaman.png",
            showDesc: false
        },
        {
            title: "Manali",
            desc: "Enjoy breathtaking mountain views, adventure sports, and tranquil valleys in the Himalayas.",
            src: "/Manali.jpg",
            showDesc: false
        },
        {
            title: "Jaipur",
            desc: "Explore the Pink City’s majestic forts, palaces, and vibrant bazaars.",
            src: "/Jaipur.jpg",
            showDesc: false
        },
    ]);
    const image = images[parseInt(id)];
    const toDo = [
        "Choose Destination", "Select dates and duration", "Book transportation", "Book accomodations",
        "Add activities", "Apply for Visa", "Handle Essentials", "Pack bags and prepare"
    ]

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="flex flex-col items-center absolute left-1/2 -translate-x-1/2 gap-6 w-full px-2 sm:px-4 md:px-8">
                <h1 className="mt-24 font-serif text-3xl sm:text-4xl font-bold text-center text-gray-800">{image.title}</h1>
                <p className="mt-2 text-base sm:text-lg text-gray-600 text-center max-w-xl">{image.desc}</p>
                <img
                    src={image.src}
                    className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-48 sm:h-56 object-cover rounded-lg shadow-lg mt-4"
                    alt={image.title}
                />
                <h1 className="mt-16 sm:mt-24 font-bold text-xl sm:text-2xl">Activities</h1>
                <div className="flex flex-col sm:flex-row sm:flex-wrap sm:justify-center gap-4 mt-4 w-full">
                    {image.activities?.map((data, idx) => (
                        <div
                            key={idx}
                            className="bg-white rounded-lg shadow-md p-4 w-full sm:w-72 max-w-md border border-gray-200 card-hover transition-transform duration-300 transform hover:scale-105"
                        >
                            <p className="text-base sm:text-lg font-semibold text-indigo-800 mb-1">{data.activity}</p>
                            <p className="text-gray-600 mb-2">{data.desc}</p>
                            <div className="flex flex-col sm:flex-row justify-between text-sm text-gray-500">
                                <span>
                                    <span className="font-medium">Time:</span> {data.time}
                                </span>
                                <span>
                                    <span className="font-medium">Location:</span> {data.location}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="bg-white mt-16 sm:mt-24 pt-8 sm:pt-10 pb-8 sm:pb-10 px-4 sm:px-10 md:px-20 flex flex-col gap-4 justify-items-center rounded-lg shadow-md border border-gray-200 w-full max-w-md">
                    <h2 className="text-lg sm:text-xl font-semibold mb-4 text-center">Your Travel Checklist</h2>
                    {toDo.map((t, idx) => (
                        <div key={idx} className="flex flex-col items-center w-full">
                            <div className="flex items-center gap-2 w-full">
                                <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="text-wrap text-center flex-1 font-medium text-gray-700 bg-green-50 rounded px-2 py-1 shadow-sm">{t}</span>
                            </div>
                            {idx !== toDo.length - 1 && (
                                <hr className="w-full border-t border-green-300 my-2" />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}