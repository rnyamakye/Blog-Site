import React, { useState, useEffect } from "react";
import { getData } from "../lib";
import { config } from "../config";
import { Link } from "react-router-dom";
import Loading from "../components/ui/Loading";

interface ArticlesProps {
  url: string;
  title: string;
  urlToImage?: string;
}

const Tech = () => {
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
    <div>
      {loading && (
        <div>
          <Loading />
        </div>
      )}

      {!loading && (
        <main className="max-w-2xl mx-auto px-4">
          <ul className="space-y-4">
            {articles.map((article) => (
              <li
                key={article.url}
                className="flex items-center gap-4 p-4 rounded-lg hover:shadow-lg transition-shadow border border-gray-200"
              >
                {/* Image */}
                {article?.urlToImage && (
                  <img
                    src={article?.urlToImage}
                    alt={article?.title}
                    className="w-24 h-20 object-cover rounded-md flex-shrink-0"
                  />
                )}
                {/* Article Title */}
                <Link
                  to={article?.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-blue-700 hover:underline"
                >
                  {article?.title}
                </Link>
              </li>
            ))}
          </ul>
        </main>
      )}
    </div>
  );
};

export default Tech;
