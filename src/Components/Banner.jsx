"use client";

import Image from "next/image";
import Link from "next/link";
import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide} from 'swiper/react';
import { Search, PlusCircle, ArrowRight, GraduationCap, BookOpen, Users } from 'lucide-react';
import { BookmarkCheck, Sparkles } from 'lucide-react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';
// all okay

const Banner = () => {
  return (
    <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
      
      {/* SLIDE 1 */}
      <SwiperSlide>
        <section className="relative w-full h-[90vh] overflow-hidden">
          <Image
            src="/banner.png"
            alt="Study Room Banner"
            fill
            priority
            className="object-cover"
          />

          {/* DARK OVERLAY */}
          <div className="absolute inset-0 bg-black/40"></div>

          {/* TEXT CONTENT */}
          <div className="relative z-10 flex items-center justify-center h-full">
            <div className="text-center text-white max-w-3xl px-6">
              
              {/* TITLE ANIMATION */}
              <h1 className="text-4xl md:text-6xl font-bold leading-tight animate__animated animate__fadeInDown">
                Find Your Perfect <br />
                <span className="text-blue-300">Study Room</span>
              </h1>

              {/* PARAGRAPH ANIMATION */}
              <p className="mt-6 text-lg text-gray-200 animate__animated animate__fadeInUp animate__delay-1s">
                Browse and book quiet, private study rooms in your library.
                List your own room and earn money while helping others study better.
              </p>

              {/* BUTTONS ANIMATION */}
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center animate__animated animate__zoomIn animate__delay-2s">
                <Link
                  href="/allroom"
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-xl shadow-lg transition"
                >
                  Explore Rooms →
                </Link>

                <Link
                  href="/my-listing"
                  className="px-6 py-3 border border-white text-white hover:bg-white hover:text-black rounded-xl transition"
                >
                  List Your Room
                </Link>
              </div>

            </div>
          </div>
        </section>
      </SwiperSlide>

      {/* SLIDE 2 */}
      <SwiperSlide>
       <div className="relative h-[85vh] min-h-[600px] overflow-hidden rounded-3xl shadow-2xl">

  {/* Background */}
  <Image
    src="/lib.png"
    alt="Study Room"
    fill
    priority
    className="object-cover scale-110"
  />

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/60" />

  {/* Gradient Glow */}
  <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/30 blur-[120px] rounded-full" />
  <div className="absolute bottom-20 right-20 w-72 h-72 bg-indigo-500/30 blur-[120px] rounded-full" />

  {/* Floating Cards */}
  <div className="absolute top-24 right-16 hidden lg:block animate-bounce">
    <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-4">
      <BookOpen className="w-8 h-8 text-blue-400" />
      <p className="text-white mt-2 font-semibold">
        500+ Study Rooms
      </p>
    </div>
  </div>

  <div className="absolute bottom-24 right-32 hidden lg:block animate-pulse">
    <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-4">
      <Users className="w-8 h-8 text-green-400" />
      <p className="text-white mt-2 font-semibold">
        2K+ Students
      </p>
    </div>
  </div>

  {/* Content */}
  <div className="relative z-10 flex items-center h-full max-w-7xl mx-auto px-6">

    <div className="max-w-3xl">

      {/* Badge */}
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-blue-300 mb-6">
        <GraduationCap size={18} />
        Academic Sanctuary
      </div>

      {/* Heading */}
      <h1 className="text-5xl md:text-7xl font-black text-white leading-tight">
        Discover Your
        <span className="block bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-400 bg-clip-text text-transparent">
          Perfect Study Space
        </span>
      </h1>

      {/* Description */}
      <p className="mt-6 text-lg text-gray-300 max-w-xl">
        Find peaceful, productive, and affordable study rooms
        near your university. Book instantly and focus on
        what matters most.
      </p>

      {/* Buttons */}
      <div className="flex flex-wrap gap-4 mt-8">

        <Link
          href="/allroom"
          className="group px-8 py-4 bg-blue-600 hover:bg-blue-500 rounded-2xl font-semibold flex items-center gap-2 transition"
        >
          Explore Rooms
          <ArrowRight className="group-hover:translate-x-1 transition" />
        </Link>

        <Link
          href="/my-listing"
          className="px-8 py-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl text-white hover:bg-white/20 transition"
        >
          List Your Room
        </Link>

      </div>

      {/* Stats */}
      <div className="flex gap-8 mt-12">

        <div>
          <h3 className="text-3xl font-bold text-white">500+</h3>
          <p className="text-gray-400">Rooms</p>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-white">2K+</h3>
          <p className="text-gray-400">Students</p>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-white">98%</h3>
          <p className="text-gray-400">Satisfaction</p>
        </div>

      </div>

    </div>

  </div>

</div>
      </SwiperSlide>

      {/* SLIDE 3 */}
      <SwiperSlide>
     <section className="relative min-h-screen overflow-hidden bg-slate-950">

  {/* Background Image */}
  <div className="absolute inset-0">
    <Image
      src="/li3.png"
      alt="Study Space"
      fill
      priority
      className="object-cover"
    />

    {/* Overlay */}
    <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-slate-950/50" />
  </div>

  {/* Animated Glow */}
  <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/20 blur-[120px] rounded-full" />
  <div className="absolute bottom-10 right-20 w-96 h-96 bg-indigo-500/20 blur-[140px] rounded-full" />

  <div className="relative z-10 max-w-7xl mx-auto px-6 h-screen flex items-center">

    <div className="max-w-3xl">

      {/* Badge */}
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl text-blue-300 text-sm mb-6">
        <Sparkles className="w-4 h-4" />
        Trusted by 10,000+ Students
      </div>

      {/* Heading */}
      <h1 className="text-5xl md:text-7xl font-black text-white leading-tight">
        Find Your Perfect
        <span className="block bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-400 bg-clip-text text-transparent">
          Study Space
        </span>
      </h1>

      {/* Description */}
      <p className="mt-6 text-lg text-slate-300 max-w-xl">
        Reserve quiet rooms, collaborate with classmates,
        or earn money by sharing unused study spaces
        across your campus.
      </p>

      {/* Search Card */}
      <div className="mt-10 bg-white/10 backdrop-blur-2xl border border-white/10 rounded-3xl p-4 shadow-2xl">

        <div className="grid md:grid-cols-3 gap-3">

          <input
            placeholder="Search campus..."
            className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white outline-none"
          />

          <input
            placeholder="Date"
            className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white outline-none"
          />

          <button className="bg-blue-600 hover:bg-blue-500 rounded-xl font-semibold text-white transition">
            Find Room
          </button>

        </div>

      </div>

      {/* Stats */}
      <div className="flex flex-wrap gap-10 mt-10">

        <div>
          <h3 className="text-3xl font-bold text-white">1200+</h3>
          <p className="text-slate-400 text-sm">Available Spaces</p>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-white">98%</h3>
          <p className="text-slate-400 text-sm">Quiet Rating</p>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-white">50+</h3>
          <p className="text-slate-400 text-sm">Campuses</p>
        </div>

      </div>

    </div>

  </div>

</section>
      </SwiperSlide>

    </Swiper>
  );
};

export default Banner;