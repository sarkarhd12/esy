'use client';

import React, { useState, useEffect } from 'react';
import blogsContent from '@/data/blogsContent';

const BlogDetails = ({ params }) => {
  const [id, setId] = useState(null);

  // Unwrap the params Promise without using try/catch
  useEffect(() => {
    const fetchId = async () => {
      try {
        const resolvedParams = await params; // Unwrap the params
        setId(resolvedParams.id);
      } catch (error) {
        console.error('Error unwrapping params:', error);
      }
    };

    fetchId();
  }, [params]);

  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      const foundBlog = blogsContent.find((blog) => blog.id === parseInt(id)); // Find blog based on ID
      setBlog(foundBlog);
      setLoading(false); // Stop loading once blog is found
    }
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!blog) {
    return <div>Blog not found!</div>;
  }

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-black-600 mb-6">{blog.title}</h1>
      <img
        src={blog.image}
        alt={blog.title}
        className="w-full h-60 object-cover rounded-md mb-6"
      />
      <div className="space-y-4">
        {blog.content.map((paragraph, index) => (
          <p key={index} className="text-gray-700 text-lg">
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
};

export default BlogDetails;
