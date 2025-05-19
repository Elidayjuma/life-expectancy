import React from "react";
import { FaAppleWhole, FaShoePrints, FaHeartCrack, FaBed, FaFaceLaugh, FaHospitalUser } from "react-icons/fa6";

const resources = [
    {
        title: "WHO: Healthy Diet",
        description: "Learn about balanced nutrition and how it impacts your long-term health.",
        url: "https://www.who.int/news-room/fact-sheets/detail/healthy-diet",
        icon: <FaAppleWhole className="text-green-600 w-8 h-8" />,
    },
    {
        title: "CDC: Benefits of Physical Activity",
        description: "Regular exercise can add years to your life. Discover tips and guidelines.",
        url: "https://www.cdc.gov/physicalactivity/basics/pa-health/index.htm",
        icon: <FaShoePrints className="text-blue-500 w-8 h-8" />,
    },
    {
        title: "WHO: Cardiovascular Health",
        description: "Understand how to keep your heart healthy and prevent disease.",
        url: "https://www.who.int/health-topics/cardiovascular-diseases",
        icon: <FaHeartCrack className="text-red-500 w-8 h-8" />,
    },
    {
        title: "Sleep Foundation: Healthy Sleep Tips",
        description: "Good sleep is vital for longevity. Explore science-backed sleep advice.",
        url: "https://www.sleepfoundation.org/sleep-hygiene/healthy-sleep-tips",
        icon: <FaBed className="text-purple-500 w-8 h-8" />,
    },
    {
        title: "APA: Managing Stress",
        description: "Chronic stress can shorten your life. Learn how to manage it effectively.",
        url: "https://www.apa.org/topics/stress",
        icon: <FaFaceLaugh className="text-yellow-500 w-8 h-8" />,
    },
    {
        title: "CDC: Regular Health Checkups",
        description: "Routine checkups help catch problems early and keep you healthy.",
        url: "https://www.cdc.gov/family/checkup/index.htm",
        icon: <FaHospitalUser className="text-teal-600 w-8 h-8" />,
    },
];

const ResourcesSection: React.FC = () => (
    <section className="py-12 px-4 bg-gradient-to-br from-blue-50 via-pink-50 to-yellow-50">
        <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8 text-blue-700">🌱 Resources for Good Health & Longevity</h2>
            <div className="grid md:grid-cols-2 gap-6">
                {resources.map((res, idx) => (
                    <a
                        key={res.title}
                        href={res.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-start gap-4 bg-white rounded-xl shadow-lg p-5 hover:scale-[1.03] transition-transform border-2 border-transparent hover:border-blue-200"
                    >
                        <div>{res.icon}</div>
                        <div>
                            <h3 className="text-lg font-semibold text-blue-800">{res.title}</h3>
                            <p className="text-gray-700">{res.description}</p>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    </section>
);

export default ResourcesSection;