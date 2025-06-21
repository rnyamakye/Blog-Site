import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { getData } from "./lib";
import { config } from "./config";

// Dummy data for posts
// const posts = [
//   {
//     category: "TECH",
//     title: "The Future of AI: What’s Next for Artificial Intelligence",
//     author: "John Doe",
//     date: "April 24, 2024",
//     image: "/ai.jpg",
//     featured: true
//   },
//   {
//     category: "SPORTS",
//     title: "How Technology Is Changing the Sports Industry",
//     author: "Jane Smith",
//     date: "April 24, 2024",
//     image: "/basketball.jpg"
//   },
//   {
//     category: "ECONOMICS",
//     title: "Understanding Inflation: Causes and Effects",
//     author: "David Johnson",
//     date: "April 24, 2024",
//     image: "/chart.jpg"
//   },
//   {
//     category: "TECH",
//     title: "Top Programming Languages to Learn in 2024",
//     author: "Emily White",
//     date: "April 24, 2024",
//     image: "/2024.jpg"
//   }
// ];

const App: React.FC = () => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getData(`${config.baseURL}/tech`)
      .then((data) => setArticles(data.articles || []))
      .catch((err) => setError(err.message));
  }, []);

  if (error) return <div>Error: {error}</div>;

  return (
    <div className=" min-h-screen mb-16">
      {/* Top Navbar */}

      {/* Main Content */}
      <main className="max-w-2xl mx-auto px-4">
        <ul className="space-y-4">
          {articles.map((article) => (
            <li
              key={article.url}
              className="flex items-center gap-4 p-4 rounded-lg hover:shadow-lg transition-shadow border border-gray-200"
            >
              {/* Image */}
              {article.urlToImage && (
                <img
                  src={article.urlToImage}
                  alt={article.title}
                  className="w-24 h-20 object-cover rounded-md flex-shrink-0"
                />
              )}
              {/* Article Title */}
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-blue-700 hover:underline"
              >
                {article.title}
              </a>
            </li>
          ))}
        </ul>

        {/* Featured Post */}
        {/* <motion.div
          className="bg-white rounded-2xl shadow-md mt-6 mb-6 overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <ul>
            {articles.map((article) => (
              <li key={article.id}>
                <a href={article.url} target="_blank" rel="noopener noreferrer">
                  {article.title}
                </a>
              </li>
            ))}
          </ul>
        </motion.div> */}

        {/* List of Posts */}
        {/* <div className="flex flex-col gap-4">
          {articles.map((article) => (
            <motion.div
              key={article?.id}
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
        </div> */}
      </main>
    </div>
  );
};

export default App;
