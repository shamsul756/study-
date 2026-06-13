import React from "react";
import "animate.css";
import {
  FaBook,
  FaBookOpen,
  FaLaptop,
  FaUsers,
  FaSearch,
  FaClock,
} from "react-icons/fa";

const cards = [
  {
    icon: <FaBook />,
    title: "Book Collection",
    desc: "Explore thousands of physical and digital books.",
  },
  {
    icon: <FaBookOpen />,
    title: "Reading Zone",
    desc: "Quiet and comfortable reading spaces for focus.",
  },
  {
    icon: <FaLaptop />,
    title: "E-Library",
    desc: "Access online journals, PDFs, and eBooks anytime.",
  },
  {
    icon: <FaUsers />,
    title: "Group Study Rooms",
    desc: "Book rooms for team discussions and projects.",
  },
  {
    icon: <FaSearch />,
    title: "Search Catalog",
    desc: "Find books quickly using smart search system.",
  },
  {
    icon: <FaClock />,
    title: "Easy Booking",
    desc: "Reserve study rooms in just a few clicks.",
  },
];

const LibraryCards = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 py-16 px-4">
      {/* Title */}
      <h2 className="text-center text-3xl md:text-4xl font-bold text-slate-800 mb-12 animate__animated animate__fadeInDown">
        Library Services
      </h2>

      {/* Grid */}
      <div className="max-w-6xl mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((card, index) => (
          <div
            key={index}
            className="group relative bg-white rounded-2xl p-6 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate__animated animate__fadeInUp"
            style={{ animationDelay: `${index * 0.08}s` }}
          >
            {/* Icon */}
            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-indigo-100 text-indigo-600 text-xl mb-4 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
              {card.icon}
            </div>

            {/* Content */}
            <h3 className="text-lg font-semibold text-slate-800 mb-2">
              {card.title}
            </h3>
            <p className="text-sm text-slate-500 leading-relaxed">
              {card.desc}
            </p>

            {/* Hover glow effect */}
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-indigo-500/5 to-purple-500/5"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LibraryCards;