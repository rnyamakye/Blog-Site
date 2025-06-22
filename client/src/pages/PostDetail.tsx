import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const PostDetails = ({ posts }) => {
  const { title } = useParams();
  const navigate = useNavigate();

  // Decode URI component to match original title
  const decodedTitle = decodeURIComponent(title);

  // Find the post by title (or use an ID if available)
  const post = posts.find((p) => p.title === decodedTitle);

  if (!post) {
    return (
      <div className="p-4 text-center">
        <h2 className="text-xl font-semibold mb-4">Post not found</h2>
        <button
          className="text-blue-600 underline"
          onClick={() => navigate(-1)}
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-4">
      <button
        onClick={() => navigate(-1)}
        className="mb-4 text-blue-600 underline"
      >
        &larr; Back
      </button>
      <img
        src={post.image}
        alt={post.title}
        className="w-full h-64 object-cover rounded-lg mb-4"
      />
      <div className="text-xs uppercase tracking-widest text-gray-500 mb-2">
        {post.category}
      </div>
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <div className="text-gray-500 text-sm mb-6">
        By {post.author} &nbsp;•&nbsp; {post.date}
      </div>
      {/* Add post content here if available */}
      <p className="text-gray-700">
        {/* Example placeholder content */}
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.
        Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies
        sed, dolor.
      </p>
    </div>
  );
};

export default PostDetails;
