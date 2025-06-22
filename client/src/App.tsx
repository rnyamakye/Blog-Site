import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { getData } from "./lib";
import { config } from "./config";
import { Link } from "react-router-dom";
import ImageSlider from "./components/ui/ImageSlider";
import Loading from "./components/ui/Loading";

interface ArticlesProps {
  url: string;
  title: string;
  urlToImage?: string;
}

interface PostProps {
  category: string;
  title: string;
  author: string;
  date: string;
  image: string;
  featured?: boolean;
}

// Dummy data for posts
const post: PostProps[] = [
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

const App = () => {
  const [articles, setArticles] = useState<ArticlesProps[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const startTime = Date.now();

      try {
        const data = await getData(`${config.baseURL}/tech/`);
        setArticles(data.articles || []);
      } catch (err) {
        setError(err.message);
      } finally {
        const elapsed = Date.now() - startTime;
        const delay = Math.max(500 - elapsed, 0); // remaining time to reach 500ms

        setTimeout(() => {
          setLoading(false);
        }, delay);
      }
    };

    fetchData();
  }, []);

  if (error) return <div>Error: {error}</div>;

  return (
    <div className=" min-h-screen mb-16">
      {loading && (
        <div>
          <Loading />
        </div>
      )}

      {!loading && (
        <main className="max-w-2xl mx-auto px-4">
          {/* Featured Post */}
          <ImageSlider posts={post} />
          {/* List of Posts */}
          <div className="flex flex-col gap-4">
            {post.map((post) => (
              <motion.div
                key={post?.title}
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
      )}
    </div>
  );
};

export default App;
