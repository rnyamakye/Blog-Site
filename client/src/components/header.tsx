import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import AuthPopover from "./Authentication";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" }
];

const Header = () => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-b-gray-200  top-0 z-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-8 flex items-center justify-betwen h-16">
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
                  className={`text-lg font-medium relative px-1 transition-colors duration-200 ${
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
          {/* Hamburger Icon (mobile) */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="text-gray-700 "
              aria-label="Toggle navigation"
            >
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {mobileOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 8h16M4 16h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
        {/* Right: Sign in button */}
        <div className="flex-shrink-0">
          <AuthPopover>
            <button className="px-5 py-2 rounded bg-blue-600 text-white font-semibold hover:bg-blue-700 transition">
              Sign in
            </button>
          </AuthPopover>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/5 z-40 cursor-pointer"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
            />
            {/* Dropdown Panel */}
            <motion.div
              className="fixed top-16 left-0 right-0 mx-4 z-50 rounded-b-xl bg-white shadow-xl "
              initial={{ opacity: 0, y: -24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -24 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <div className="flex flex-col gap-2 py-4 px-6">
                {navLinks.map((link) => {
                  const isActive =
                    link.href === "/"
                      ? location.pathname === "/"
                      : location.pathname.startsWith(link.href);
                  return (
                    <Link
                      key={link.href}
                      to={link.href}
                      className={`py-2 text-lg font-medium relative transition-colors duration-200 ${
                        isActive
                          ? "text-black font-bold"
                          : "text-gray-600 hover:text-black"
                      }`}
                      onClick={() => setMobileOpen(false)}
                    >
                      {link.label}
                      <span
                        className={`block absolute left-0 -bottom-1 h-[1px] bg-gray-500 rounded transition-all duration-300 ${
                          isActive
                            ? "w-20 scale-100"
                            : "w-0 scale-0 group-hover:w-full group-hover:scale-100"
                        }`}
                      ></span>
                    </Link>
                  );
                })}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Header;
