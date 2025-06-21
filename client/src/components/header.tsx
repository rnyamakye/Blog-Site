import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import AuthPopover from "./Authentication";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface NavLink {
  label: string;
  href: string;
}
interface Highlights {
  name: string;
  href: string;
}

const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" }
];

const sections: string[] = [
  "U.S. News",
  "Politics",
  "World",
  "Business",
  "Sports",
  "Investigations",
  "Culture & Trends",
  "Health",
  "Science",
  "Tech",
  "Weather",
  "Video Features",
  "Photos",
  "NBC Select",
  "NBC Asian America",
  "NBC BLK",
  "NBC Latino",
  "NBC Out"
];

const highlights: Highlights[] = [
  { name: "TECH", href: "/" },
  { name: "SPORTS", href: "/" },
  { name: "ECONOMICS", href: "/" }
];

const Header = () => {
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    if (sidebarOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    // Clean up in case component unmounts while open
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [sidebarOpen]);

  return (
    <nav className="bg-white border-b border-b-gray-200 top-0 z-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-8 flex items-center justify-between h-16">
        <div>
          <img src="/BuzzLenz-Logo.png" alt="logo" className="w-[120px]" />
        </div>
        {/* Left: Navigation Links (desktop) */}
        <div className="flex-1 flex items-center">
          <div className="hidden md:flex gap-8">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? location.pathname === "/"
                  : location.pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`relative font-semibold after:block after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full after:bg-black after:rounded after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100 ${
                    isActive
                      ? "text-black font-bold"
                      : "text-gray-500 hover:text-black"
                  } group`}
                >
                  {link.label}
                  <span
                    className={`block absolute left-0 -bottom-1 h-0.5 bg-black rounded transition-all duration-300 ${
                      isActive
                        ? "w-full scale-100"
                        : "w-0 scale-0 group-hover:w-full group-hover:scale-100"
                    }`}
                  ></span>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Right: Hamburger Icon (mobile) */}
        <div className="md:hidden flex items-center gap-4 justify-between">
          <AuthPopover />
          <button
            onClick={() => setSidebarOpen(true)}
            aria-label="Open menu"
            className="relative w-8 h-8 flex flex-col justify-center items-center gap-1.5 focus:outline-none"
          >
            {/* Top bar */}
            <span className="block w-6 h-0.5 bg-gray-700 rounded"></span>
            {/* Middle bar */}
            <span className="block w-6 h-0.5 bg-gray-700 rounded"></span>
            {/* Bottom bar */}
            <span className="block w-6 h-0.5 bg-gray-700 rounded"></span>
          </button>
        </div>

        {/* Desktop Sign in button */}
        <div className="hidden md:flex flex-shrink-0">
          <AuthPopover />
        </div>
      </div>
      <header className="bg-[#0033A0] text-white shadow-sm uppercase">
        <div className="max-w-5xl mx-auto flex items-center px-4 py-3">
          {/* Navigation */}
          <nav className="flex gap-6 py-2">
            {highlights.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="relative font-semibold after:block after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full after:bg-white after:rounded after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100"
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      {/* Sidebar + Backdrop */}
      <AnimatePresence>
        {sidebarOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/40 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSidebarOpen(false)}
            />

            {/* Sidebar Panel */}
            <motion.aside
              className="fixed top-0 right-0 bottom-0 w-full max-w-md bg-white shadow-lg z-50 flex flex-col overflow-y-auto"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {/* Close Button */}
              <div className="flex justify-end p-4 border-b border-gray-200">
                <button
                  onClick={() => setSidebarOpen(false)}
                  aria-label="Close menu"
                  className="text-gray-700 hover:text-black text-3xl font-bold"
                >
                  <X className="w-7 h-7" />
                </button>
              </div>

              {/* Search Bar */}
              <div className="p-6 pb-2 border-b border-gray-200">
                <form
                  className="relative"
                  onSubmit={(e) => {
                    e.preventDefault(); /* handle search here */
                  }}
                >
                  <input
                    type="text"
                    placeholder="Search NBC News"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                  <svg
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                    width="20"
                    height="20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                  </svg>
                </form>
              </div>

              {/* Profile Buttons */}
              <div className="p-6 flex flex-col gap-3 border-b border-gray-200">
                <div className="flex gap-3">
                  <AuthPopover />
                </div>
              </div>

              {/* Sections */}
              <div className="p-6 border-b border-gray-200">
                <div className="text-xs font-semibold text-gray-600 mb-2 tracking-widest">
                  SECTIONS
                </div>
                <div className="grid grid-cols-2 gap-y-2 gap-x-8">
                  {sections.map((label) => (
                    <Link
                      key={label}
                      to={`/${label.toLowerCase().replace(/[^a-z]+/g, "-")}`}
                      className="block font-semibold text-sm text-gray-800 hover:text-blue-700 transition"
                      onClick={() => setSidebarOpen(false)}
                    >
                      {label}
                    </Link>
                  ))}
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Header;
