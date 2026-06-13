import Image from "next/image";
import Link from "next/link";

const Banner = () => {
  return (
    <section className="relative w-full h-[90vh] overflow-hidden">

      {/* BACKGROUND IMAGE */}
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
  );
};

export default Banner;