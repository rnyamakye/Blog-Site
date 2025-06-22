import React, { useState } from "react";

const ImageSlider = ({ posts }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? posts.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === posts.length - 1 ? 0 : prev + 1));
  };

  if (!posts.length) return null;

  return (
    <div className="relative max-w-md mx-auto rounded-2xl overflow-hidden shadow-md mt-6 mb-6 ">
      {/* Slider track */}
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {posts.map((post, index) => (
          <a
            key={post.title}
            href={post.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full h-40 relative flex-shrink-0"
            style={{ width: "100%" }}
          >
            <img
              src={post.urlToImage || post.image}
              alt={post.title}
              className="object-cover w-full h-full rounded-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 pointer-events-none rounded-2xl"></div>
            <div className="absolute bottom-2 left-2 right-2 text-white font-semibold drop-shadow-lg z-10">
              {post.title}
            </div>
          </a>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        aria-label="Previous Slide"
        className="absolute top-1/2 left-2 -translate-y-1/2 bg-black/50 text-white w-7 h-7 flex items-center justify-center rounded-full p-2 hover:bg-opacity-75 transition"
      >
        &#10094;
      </button>

      <button
        onClick={nextSlide}
        aria-label="Next Slide"
        className="absolute top-1/2 right-2 -translate-y-1/2 bg-black/50 text-white w-7 h-7 flex items-center justify-center rounded-full p-2 hover:bg-opacity-75 transition"
      >
        &#10095;
      </button>

      {/* Pagination Dots */}
      <div className="flex absolute bottom-2 left-2/5 justify-center space-x-2">
        {posts.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentIndex ? "bg-gray-700" : "bg-gray-300"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
