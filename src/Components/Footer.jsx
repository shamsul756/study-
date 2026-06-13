import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-black to-gray-950 text-gray-400 px-6 md:px-16 py-16 relative overflow-hidden">

      {/* subtle glow background */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-blue-500 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-indigo-500 rounded-full blur-3xl opacity-20"></div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* BRAND SECTION */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
            study<span className="text-blue-500">Nook</span>
          </h1>

          <p className="mt-4 max-w-xl text-gray-400">
            A peaceful platform to discover, book, and share quiet study rooms.
            Create your perfect learning environment anytime, anywhere.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* NEWSLETTER */}
          <div>
            <h3 className="text-white mb-3 tracking-wide font-semibold">
              Stay Updated
            </h3>

            <p className="mb-4 text-sm text-gray-500">
              Get new study rooms & learning spaces delivered to your inbox.
            </p>

            <div className="flex items-center bg-gray-800/60 backdrop-blur px-4 py-3 rounded-lg border border-gray-700">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-transparent outline-none flex-1 text-sm text-white"
              />
              <span className="text-blue-400 text-lg cursor-pointer">
                →
              </span>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-white mb-3 tracking-wide font-semibold">
              Quick Links
            </h3>

            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-white transition">
                  Home
                </Link>
              </li>

              <li>
                <Link href="/allrooms" className="hover:text-white transition">
                  All Study Rooms
                </Link>
              </li>

              <li>
                <Link href="/my-booking" className="hover:text-white transition">
                  My Bookings
                </Link>
              </li>

              <li>
                <Link href="/add-room" className="hover:text-white transition">
                  List a Room
                </Link>
              </li>
            </ul>
          </div>

          {/* SUPPORT */}
          <div>
            <h3 className="text-white mb-3 tracking-wide font-semibold">
              Support
            </h3>

            <ul className="space-y-2 text-sm">
              <li className="hover:text-white cursor-pointer transition">
                Help Center
              </li>
              <li className="hover:text-white cursor-pointer transition">
                Booking Guide
              </li>
              <li className="hover:text-white cursor-pointer transition">
                Privacy Policy
              </li>
              <li className="hover:text-white cursor-pointer transition">
                Terms of Use
              </li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-white mb-3 tracking-wide font-semibold">
              Contact
            </h3>

            <ul className="space-y-2 text-sm">
              <li>📞 786 901 1622</li>
              <li>📧 info@studynook.com</li>
              <li>📍 Open 24/7 Study Network</li>
            </ul>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-gray-800 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">

          <p className="text-sm text-gray-500">
            © 2026 <span className="text-white">studyNook</span>. All rights reserved.
          </p>

          <div className="flex gap-6 mt-4 md:mt-0 text-sm text-gray-400">
            <span className="hover:text-white cursor-pointer transition">Twitter</span>
            <span className="hover:text-white cursor-pointer transition">LinkedIn</span>
            <span className="hover:text-white cursor-pointer transition">Instagram</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;