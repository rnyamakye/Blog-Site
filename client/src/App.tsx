import React from "react";
import { motion } from "framer-motion";

// Dummy data for posts
const posts = [
  {
    category: "TECH",
    title: "The Future of AI: What’s Next for Artificial Intelligence",
    author: "John Doe",
    date: "April 24, 2024",
    image: "/ai.jpg",
    featured: true
  },
  {
    category: "SPORTS",
    title: "How Technology Is Changing the Sports Industry",
    author: "Jane Smith",
    date: "April 24, 2024",
    image: "/basketball.jpg"
  },
  {
    category: "ECONOMICS",
    title: "Understanding Inflation: Causes and Effects",
    author: "David Johnson",
    date: "April 24, 2024",
    image: "/chart.jpg"
  },
  {
    category: "TECH",
    title: "Top Programming Languages to Learn in 2024",
    author: "Emily White",
    date: "April 24, 2024",
    image: "/2024.jpg"
  }
];

const navLinks = [
  { label: "TECH", href: "#" },
  { label: "SPORTS", href: "#" },
  { label: "ECONOMICS", href: "#" }
];

const App: React.FC = () => {
  return (
    <div className=" min-h-screen mb-16">
      {/* Top Navbar */}
      <header className="bg-[#0033A0] text-white shadow-sm">
        <div className="max-w-5xl mx-auto flex items-center px-4 py-3">
          {/* Navigation */}
          <nav className="flex gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-semibold hover:underline"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-2xl mx-auto px-4">
        {/* Featured Post */}
        <motion.div
          className="bg-white rounded-2xl shadow-md mt-6 mb-6 overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative">
            <img
              src={posts[0].image}
              alt={posts[0].title}
              className="w-full h-56 object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
              <div className="text-xs uppercase tracking-widest text-gray-200 mb-1">
                {posts[0].category}
              </div>
              <h2 className="text-2xl font-bold text-white mb-2">
                {posts[0].title}
              </h2>
              <div className="text-gray-200 text-sm">
                By {posts[0].author} &nbsp;•&nbsp; {posts[0].date}
              </div>
            </div>
          </div>
        </motion.div>

        {/* List of Posts */}
        <div className="flex flex-col gap-4">
          {posts.slice(1).map((post) => (
            <motion.div
              key={post.title}
              className="flex bg-white rounded-xl shadow-sm overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-28 h-24 object-cover flex-shrink-0"
              />
              <div className="flex flex-col justify-center px-4 py-3">
                <div className="text-xs uppercase tracking-widest text-gray-500 mb-1">
                  {post.category}
                </div>
                <h3 className="text-md font-semibold mb-1">{post.title}</h3>
                <div className="text-gray-500 text-xs">
                  By {post.author} &nbsp;•&nbsp; {post.date}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default App;
